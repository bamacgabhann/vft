import json
from pathlib import Path
from PIL import Image

def build_vft_data(geojson_path, assets_base_dir, output_js_path):
    # Load the GeoJSON exported from QGIS
    with open(geojson_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    tour_data = []
    assets_path = Path(assets_base_dir)

    for feature in data.get('features', []):
        props = feature.get('properties', {})
        geom = feature.get('geometry', {})

        # Ensure the feature is a Point
        if not geom or geom.get('type') != 'Point':
            continue

        lng, lat = geom['coordinates'][0], geom['coordinates'][1]
        media = []

        # 1. Process YouTube IDs (supports multiple separated by semicolons)
        yt_field = props.get('youtube', '')
        if yt_field:
            for vid in str(yt_field).split(';'):
                vid_clean = vid.strip()
                if vid_clean:
                    media.append({'type': 'youtube', 'id': vid_clean})

        # 2. Process Images in the target directory
        rel_dir = props.get('directory', '')
        if rel_dir:
            stop_dir = assets_path / rel_dir
            if stop_dir.exists() and stop_dir.is_dir():
                
                # Filter for valid image formats and sort alphabetically
                valid_exts = {'.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff'}
                files = sorted([f for f in stop_dir.iterdir() if f.suffix.lower() in valid_exts])

                for img_file in files:
                    try:
                        with Image.open(img_file) as img:
                            width, height = img.size
                            needs_resize = width > 2560
                            needs_conversion = img_file.suffix.lower() != '.webp'

                            output_file = img_file
                            
                            # Execute image optimization if necessary
                            if needs_resize or needs_conversion:
                                output_file = img_file.with_suffix('.webp')
                                
                                if needs_resize:
                                    new_width = 2560
                                    new_height = int((new_width / width) * height)
                                    # Lanczos provides the highest quality downsampling
                                    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                                
                                # Save as WEBP
                                img.save(output_file, 'WEBP', quality=85)
                                
                                # Delete original file to prevent Git repository bloat
                                if needs_conversion and img_file != output_file:
                                    img_file.unlink()

                        # Append to media array using the required relative path structure
                        src_path = f"./assets/{rel_dir}/{output_file.name}"
                        media.append({'type': 'image', 'src': src_path})

                    except Exception as e:
                        print(f"Error processing image {img_file.name}: {e}")
            else:
                print(f"Warning: Directory not found - {stop_dir}")

        # 3. Assemble the stop data dictionary
        stop = {
            'title': props.get('title', 'Untitled Stop'),
            'text': props.get('text', ''),
            'lat': float(lat),
            'lng': float(lng),
            'zoom': int(props.get('zoom', 14)),
            'media': media,
        }
        tour_data.append(stop)

    # 4. Write output to data.js
    js_content = f'const tourData = {json.dumps(tour_data, indent=4)};\n'
    with open(output_js_path, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f'Successfully processed {len(tour_data)} stops and generated {output_js_path}.')

# Example Usage
build_vft_data('./loch_garman.geojson', './assets', './loch_garman.js')
