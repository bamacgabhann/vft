const tourData = [
    {
        "title": "A - Diorite",
        "text": "<p>Part of a microdiorite sill which stretches from the top of Lough Fee over to Lettergesh East beach, and makes up the hill of Benchoona, beside Lough Muck. </p>",
        "lat": 53.60327977764728,
        "lng": -9.908230304715692,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/AZVR4VxridO8fV3JrmZMM.jpeg"
            }
        ]
    },
    {
        "title": "B - Gabbro",
        "text": "<p>Part of the Carlingford Complex, this gabbro was formed by the cooling and crystallising of the magma chamber of a basic volcano during the Palaeogene Period, around 60 million years ago. The volcano was formed by what is now the Iceland Plume, which contributed to the opening of the North Atlantic Ocean.</p>",
        "lat": 54.06256865850025,
        "lng": -6.26988113479384,
        "zoom": 14,
        "media": []
    },
    {
        "title": "C - Granite",
        "text": "<p>Part of the Carnsore Granite, formed by the cooling and crystallizing of the magma chamber of an acidic volcano during the Sheinwoodian Age of the Silurian Period, around 432 million years ago, during the collision between the continents of Avalonia and Laurentia in the Caledonian Orogeny.</p>",
        "lat": 52.17373713695734,
        "lng": -6.365203497952749,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/YfwRW7Cv9nJhGxzXVBJJe.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/yWtVdgBM4bEaA-oCNT4fx.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/RuLDTOledHgnckLGRdrr_.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/rFT2H8d2gqNSMuaGq7ZX7.jpeg"
            }
        ]
    },
    {
        "title": "D - Basalt",
        "text": "<p>Part of the Lower Basalt Formation of the Antrim Lava Group, erupted during the Palaeocene Epoch of the Palaeogene Period, around 60 million years ago. The eruptions were caused by what is now the Iceland Plume, which contributed to the opening of the North Atlantic Ocean.</p><p>(Photos not from same site as sample - was raining that day, so I didn't get a good pic)</p>",
        "lat": 54.96505573456673,
        "lng": -5.930136856986117,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/EcOK8eZLgW7ZC06KkdM52.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/TKZ14QmWHXB3MpMFuEzST.jpeg"
            }
        ]
    },
    {
        "title": "E - Ignimbrite",
        "text": "<p>This Rosroe Ignimbrite was produced by the explosive eruption of volcanoes during the Ordovician Period - volcanoes which were part of a volcanic arc, formed as a result of subduction of the Iapetus oceanic crust beneath Laurentia.</p>",
        "lat": 53.61355933544391,
        "lng": -9.848261475560722,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/i7Uo0kcQWu9lZYKqtb0Dx.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/tjWaykBFzmorY8_7RbZjt.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/1uTGtqf8mrEz5OxZft1J5.jpeg"
            }
        ]
    },
    {
        "title": "F - Andesite",
        "text": "<p>Andesite lava of the Bunmahon Formation, erupted by an intermediate volcano on the Iapetus margin of Avalonia around 455 million years ago, during the Ordovician Period. The volcanism was caused by the subduction of oceanic crust under Avalonia as the Iapetus Ocean closed.</p>",
        "lat": 52.137651193029406,
        "lng": -7.3521853310823095,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/Vy6woRZcpoEi55l8v3wmY.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/20q5PLkuYnBDaa2IEtZoc.jpeg"
            }
        ]
    },
    {
        "title": "G - Rhyolite",
        "text": "<p>Pipes of Baidhb Rhyolite, formed by an acidic volcano on the Iapetus margin of Avalonia around 455 million years ago, during the Ordovician Period. The volcanism was caused by the subduction of oceanic crust under Avalonia as the Iapetus Ocean closed.</p>",
        "lat": 52.138397267331676,
        "lng": -7.350085697896231,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/YkqR5RhNrStofKVYDnJHN.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/lytLQ8qXhZ2S6fPgFziQX.jpeg"
            }
        ]
    },
    {
        "title": "H - Schist",
        "text": "<p>This amphibole schist is from the Streamstown Schist Formation, part of the Argyll Group of the Dalradian Supergroup. Originally formed during the Ediacaran Period, it was metamorphosed during the Ordovician Period, during the Grampian phase of the Caledonian Orogeny, when an island arc collided with Laurentia.</p>",
        "lat": 53.46740074132431,
        "lng": -9.750790804544799,
        "zoom": 14,
        "media": []
    },
    {
        "title": "I - Quartzite",
        "text": "<p>From the Bennabeola Quartzite Formation, part of the Argyll Group of the Dalradian Supergroup, this quartzite formed as a quartz rich sandstone during the Ediacaran Period. It was metamorphosed into quartzite in the Ordovician Period, during the Grampian phase of the Caledonian Orogeny, when an island arc collided with Laurentia. </p>",
        "lat": 53.467876864286936,
        "lng": -9.751016109938613,
        "zoom": 14,
        "media": []
    },
    {
        "title": "J - Marble",
        "text": "<p>From the Lakes Marble Formation (part of the Argyll Group of the Dalradian Supergroup), this rock formed as a limestone during the Ediacaran Period. It was metamorphosed into marble in the Ordovician Period, during the Grampian phase of the Caledonian Orogeny, when an island arc collided with Laurentia. </p>",
        "lat": 53.48013798464128,
        "lng": -9.749860612526465,
        "zoom": 14,
        "media": []
    },
    {
        "title": "K - Blueschist",
        "text": "<p>Originally deposited as deep seafloor sediments, these rocks were metamorphosed in a subduction zone during the early part of the Ediacaran Period. The blue colour comes from the amphibole mineral glaucophane, which forms in conditions of high pressure and low temperature only found in subduction zones. </p>",
        "lat": 53.22079169899765,
        "lng": -4.196872398415603,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/CctN1nItLNKHWt0vinu6S.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/lujp2PU0izaoT7TalqfNo.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/T47Oa-dmt_FRo7-ePoiIc.jpeg"
            }
        ]
    },
    {
        "title": "L - Gneiss",
        "text": "<p>Metamorphic gneiss of the Kilmore Quay Group of the Rosslare Complex. Originally formed as sedimentary rocks during the Mesoproterozoic, around 1.5 billion years ago, these rocks have been metamorphosed multiple times, including in the early Ediacaran Period and in the Ordovician Period. They previously formed part of the craton of the microcontinent Avalonia.</p>",
        "lat": 52.17403733636612,
        "lng": -6.58690990216053,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/zeHS-IOctHfeTBTk6BK5M.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/Pa1RJ97NC5ojPcOG6ZD8D.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/TUHA7s9C16YrpjIjgTWol.jpeg"
            }
        ]
    },
    {
        "title": "M - Slate",
        "text": "<p>Originally deposited as mudstones on the deep sea floor of the Iapetus Ocean offshore of Avalonia during the yet-unnamed Epoch 2 of the Cambrian Period, around 520 million years ago. Metamorphosed into slate during the Caledonian Orogeny, when Avalonia collided with Laurentia.</p>",
        "lat": 53.122428033265685,
        "lng": -4.1170240964682066,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/NjbrqW2JXtMCyTdXv4VCe.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/UBxo05tWvbSWVLuroMoiN.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/PTcd3AZ1kJnBLxbC_TFtC.jpeg"
            }
        ]
    },
    {
        "title": "N - Schist",
        "text": "<p>This schist is from the Streamstown Schist Formation, part of the Argyll Group of the Dalradian Supergroup. Originally formed as a sandstone during the Ediacaran Period, it was metamorphosed during the Ordovician Period, during the Grampian phase of the Caledonian Orogeny, when an island arc collided with Laurentia.</p>",
        "lat": 53.5602629087948,
        "lng": -9.921379298219982,
        "zoom": 14,
        "media": []
    },
    {
        "title": "O - Amphibolite",
        "text": "<p>This amphibolite was formed as a gabbro during the Ordovician Period, and metamorphosed shortly afterwards, during the Grampian phase of the Caledonian Orogeny, when an island arc collided with Laurentia.</p>",
        "lat": 53.39512146741834,
        "lng": -10.020176877996487,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/e43JUq0bxdozwlEPB9eVS.jpeg"
            }
        ]
    },
    {
        "title": "P - Submarine Fan sandstone",
        "text": "<p>This coarse grained sandstone formed in the Ordovician Period, in deeper water in the seas surrounding a volcanic arc on the margin of Laurentia, while the Iapetus oceanic crust was subducting below.</p>",
        "lat": 53.615846569624665,
        "lng": -9.853188693521325,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/fbcKUInTzzwgayGA1--TU.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/Sa6pVQ9GEa77LKmGGqch9.jpeg"
            }
        ]
    },
    {
        "title": "Q - Shale",
        "text": "<p>Black shale beds in the Booley Bay Formation were deposited by the slow settling of clay-sized grains and organic remains onto the deep seafloor of the Iapetus Ocean off the coast of Avalonia during the Cambrian Period, around 505 million years ago.</p>",
        "lat": 52.19959444696435,
        "lng": -6.903863319573579,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/AUheG8QcWf19Sx8e-Dw3p.jpeg"
            }
        ]
    },
    {
        "title": "R - Fluvial Conglomerate",
        "text": "<p>Red conglomerates of the Harrylock Formation were deposited in the main channels of braided rivers during the Famennian Age of the Devonian Period, around 360 million years ago. The rivers were eroding the Caledonide mountains to the north, uplifted during the collision of Laurentia and Avalonia with Baltica to form Laurussia during the Silurian Period.</p>",
        "lat": 52.164035218655386,
        "lng": -6.899100340015621,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/BXraL82w8jvcTIrV4zf7M.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/4RJimmG7vYnvPsczDctxI.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/Os18B8XpkgZKusBgwKpOn.jpeg"
            }
        ]
    },
    {
        "title": "S - Storm-dominated shelf siltstone",
        "text": "<p>This siltstone was deposited by storms offshore during the Ediacaran Period, around 550 million years ago, on the Iapetus Ocean coast of Avalonia. It contains discoidal fossils of some of the earliest known animals.</p>",
        "lat": 47.01431548595394,
        "lng": -52.891979850624914,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/a4oBIEUXCcq6pLPJyQKOX.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/RxxzHhzFFQUJbIQGFvfII.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/da7qoM2s0iIOOlhhaUxhb.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/XD6oOwChT9UzKjcUiuJ9c.jpeg"
            }
        ]
    },
    {
        "title": "T - Desert dune sandstone",
        "text": "<p>Part of the Wilmslow Sandstone Formation of the Sherwood Sandstone Group, deposited as wind-blown sand dunes during the Olenekian Age of the Triassic Period, around 250 million years ago, when Britain and Ireland were part of the supercontinent of Pangea.</p>",
        "lat": 53.37330650620346,
        "lng": -3.173693768768618,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/htZN2UK1TlXg69zyrdlSA.jpeg"
            }
        ]
    },
    {
        "title": "U - Turbidite sandstone",
        "text": "<p>Part of the Lettergesh Formation, a sequence of Silurian sedimentary rocks formed by turbidity currents near the edge of Laurentia during the final stages of the collision between Laurentia and Avalonia in the Caledonian Orogeny.</p>",
        "lat": 53.59112336206832,
        "lng": -9.82862770557187,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/q42DH0CIqpELLUB7lAqnm.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/9gFsYsBxYKK0nMjcpVtvY.jpeg"
            }
        ]
    },
    {
        "title": "V - Deep Marine Siltstone",
        "text": "<p>Siltstones of the Booley Bay Formation were deposited by contour currents in deep waters of the Iapetus Ocean off the coast of Avalonia during the Cambrian Period, around 505 million years ago. These siltstones are commonly cross-bedded or parallel laminated, often with some deformation from dewatering structures (convolution). Some layers contain discoidal structures which are imprints left in the seafloor by living organisms.</p>",
        "lat": 52.19945898382604,
        "lng": -6.903780168720533,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/ggb6YE8mLKUAtOMyqGPNn.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/k9C-XHQBi1m7GhjNTbq2k.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/WqgdeY0zQBExklU3VxhOO.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/CP2vqQ89FTKdQx9sZqwed.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/PtrnTZul54eznUI3G7Kv7.jpeg"
            }
        ]
    },
    {
        "title": "W - Fluvial Sandstone",
        "text": "<p>These red sandstones of the Harrylock Formation were deposited by rivers during the Famennian Age of the Devonian Period, around 360 million years ago. The rivers were eroding the Caledonide mountains to the north, uplifted during the collision of Laurentia and Avalonia with Baltica to form Laurussia during the Silurian Period.</p>",
        "lat": 52.16139016697407,
        "lng": -6.899121706008413,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/1YXkWbdIYn4zIf7x1b5Za.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/l7eLNCl-_ndrA0mb4LQd3.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/m2HaDm2oyQSPpugVIGV_m.jpeg"
            }
        ]
    },
    {
        "title": "X1 - Glacial Diamictite",
        "text": "<p>Part of the Gaskiers Formation, this was deposited by glaciers in Avalonia, around 580 million years ago, in the middle of the Ediacaran Period.</p>",
        "lat": 46.92381454169542,
        "lng": -53.589333147243316,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/qS3lV-2sStuAsFf8WsPpU.jpeg"
            }
        ]
    },
    {
        "title": "X2 - Glacial Diamictite",
        "text": "<p>Part of the Port Askaig Formation, this was deposited by glaciers in Laurentia, early in the Cryogenian Period, around 700 million years ago.</p><p>Specimen is from Port Askaig on Islay, photos are from the Garvellach Islands.</p>",
        "lat": 55.848405156676705,
        "lng": -6.10671292963148,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/Iz5Iqquel6gNGeesXjeE-.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/M7-f_PY8Pc_Mf8fYaOOf3.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/vLxpNburYxnsVLt2ldkzx.jpeg"
            }
        ]
    },
    {
        "title": "Y - Striped Limestone",
        "text": "<p>Part of the Parsonage & Corgrig Lodge Formation, muddy limestones deposited in deeper basins by thin, low density, low energy flows.</p>",
        "lat": 52.60689907907966,
        "lng": -9.100718443076646,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/SzAsAv-X3J0HvOhj5-ngK.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/CAm4AkodjN-zqDvcrwyfF.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/JywJsU1w_NL4-lJoiXkPI.jpeg"
            }
        ]
    },
    {
        "title": "Z - Oolitic dolomite",
        "text": "<p>Part of the Bullockpark Bay Member, deposited in shallow tidal seas as an oolitic limestone during the Tournaisian Epoch of the Carboniferous Period, around 355 million years ago, and later altered to dolomite. </p>",
        "lat": 52.13383432065304,
        "lng": -6.93128262957449,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/3d0rLhre2HTxHcyOS29VO.jpeg"
            }
        ]
    },
    {
        "title": " \u03b1 - Shelf Limestone",
        "text": "<p>Urswick Limestone Formation, part of the Great Scar Limestone Group, deposited during the Visean Age of the Carboniferous Period, around 335 million years ago.</p>",
        "lat": 54.21121815455046,
        "lng": -2.7032883989891907,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/vdzb21I426kl_yEAl_tIX.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/gYhZ2hYEduDy6rDcW4R8K.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/7ayEXv28CrukGNkdIvvWJ.jpeg"
            }
        ]
    },
    {
        "title": "\u03b2 - Intraclastic Limestone",
        "text": "<p>Part of the Parsonage & Corgrig Lodge Formation, muddy wackestone limestones with matrix-supported intraclasts, deposited in deeper basins by high energy flows during the Visean Epoch of the Carboniferous Period, around 340 million years ago.</p>",
        "lat": 52.60689822456668,
        "lng": -9.100719381784703,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/Q5sKuRnBuQe-ygREkSRdS.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/64qP75MvXiRZNbtj2JsEP.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/2-pJjab1174PUF5wYHDHz.jpeg"
            }
        ]
    },
    {
        "title": "\u0393 - Fossiliferous shelf limestone",
        "text": "<p>Crinoidal packstone limestone, deposited in shallow life-filled stormy seas during the Tournaisian Epoch, the earliest part of the Carboniferous Period, around 355 million years ago.</p>",
        "lat": 52.13800114188383,
        "lng": -6.92782365289399,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/TjIhPq1j3I9sHsxN1DHnX.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/803SofSqYh38fPA9OzNAz.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/q_4l0QWGIlHv4nOiTaSD0.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/og5GQiCo6tX6GncxaROp-.jpeg"
            }
        ]
    },
    {
        "title": "\u0394 - Chalk",
        "text": "<p>Part of the Ulster White Limestone Formation, deposited in shallow seas around 80 million years ago, during the last part of the Cretaceous Period.</p><p>(Photos not from same site as samples - it was raining when I collected them, so didn't get a good pic. 3rd pic shows basalt (D) cliffs in the nearground, and chalk cliffs beyond)</p>",
        "lat": 54.96567657358098,
        "lng": -5.927951391313014,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/3rgfSzL_zqShzA_uyFx7Z.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/xlGW6prkuSSegcp60_uf2.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/rDdgOv2UFAEiLgzivWRgh.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/pOFDyaGfNe2FaOK-qFkN4.jpeg"
            }
        ]
    },
    {
        "title": "\u03b5 - Mud Mound Limestone",
        "text": "<p>Muddy bioclastic limestones commonly referred to as \"Waulsortian Limestones\" after rocks from Waulsort in Belgium, deposited during the Tournaisian Epoch of the Carboniferous Period, around 350 million years ago.  </p>",
        "lat": 52.626317329153196,
        "lng": -8.830628308422149,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/5jhOpDGEqaiuTBzM0VwM5.png"
            }
        ]
    },
    {
        "title": "Economic 1 - Veins in Shale",
        "text": "<p>Mudstone deposited on the seafloor during the Silurian Period, with numerous quartz veins which formed in association with the mineralisation at Parys Mine.</p>",
        "lat": 53.386059541619275,
        "lng": -4.3445392592733905,
        "zoom": 14,
        "media": []
    },
    {
        "title": "Economic 2 - Rhyolite",
        "text": "<p>Rhyolite from an acidic volcano. Volcanogenic Massive Sulphide mineral deposits, such as Parys, are often associated with acidic volcanic deposits. It is likely that the magma chamber of this volcano was the source of heat driving the mineralisation.</p>",
        "lat": 53.38549451538763,
        "lng": -4.345818136498759,
        "zoom": 14,
        "media": []
    },
    {
        "title": "Economic 3 - Mineralisation",
        "text": "<p>Mudstone deposited on the seafloor during the Silurian Period, with numerous veins which formed in association with the mineralisation at Parys Mine. The veins include both quartz and sulphide minerals - iron pyrite, perhaps chalcopyrite, and galena.</p>",
        "lat": 53.38484917347608,
        "lng": -4.347069655651071,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/-qfJePvrrwGtluV_Qbrem.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/L6LvfUSh8cGM6TO-Oyhsn.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/u7C1oFLcwkm9onOEU5jTv.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/Lzqqg7nOBAhnsNr6mAMkt.jpeg"
            }
        ]
    },
    {
        "title": "Economic 4 - Volcanic Ash",
        "text": "<p>Ash deposits from the explosive eruption of an acidic volcano. Volcanogenic Massive Sulphide mineral deposits, such as Parys, are often associated with acidic volcanic deposits. It is likely that the magma chamber of this volcano was the source of heat driving the mineralisation.</p>",
        "lat": 53.38551947142178,
        "lng": -4.34582618353519,
        "zoom": 14,
        "media": []
    },
    {
        "title": "Sediment 1 - Sandy Beach",
        "text": "<p>Fine sand, deposited on Kilmore Quay beach between the low and high tide lines, near the metamorphic gneisses of the Kilmore Quay Group.</p>",
        "lat": 52.173910513998976,
        "lng": -6.587322425628639,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/wP62KvvoXmFRUBayusjwx.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/OP8oNWHsmvycFu8n_5pb0.jpeg"
            }
        ]
    },
    {
        "title": "Sediment 2 - Storm Beach",
        "text": "<p>Rounded high-sphericity pebbly sediment at the back of Carnsore beach, out of the reach of all but the strongest waves, deposited by storms.</p>",
        "lat": 52.17371937447136,
        "lng": -6.365118581169176,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/WmhOdGC1UfKmTT3MyIY1Q.jpeg"
            }
        ]
    },
    {
        "title": "Sediment 3 - Glacial till",
        "text": "<p>This sediment was deposited in the Quaternary by melting glaciers, at the end of the Ice Age.</p>",
        "lat": 53.50027046568306,
        "lng": -9.563428312539376,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/BYRvUpmcR5Q027zMm9gTH.jpeg"
            }
        ]
    },
    {
        "title": "Sediment 4 - Dog's Bay Dunes",
        "text": "<p>This sediment was deposited by the wind, in dunes - from locally sourced biogenic sediment, including foraminifera, mollusc shells, and sponge spicules</p>",
        "lat": 53.37768439522988,
        "lng": -9.96301308274135,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/azkWkuH8aa88TfuRj-bO6.jpeg"
            }
        ]
    },
    {
        "title": "Sediment 5 - Coral coast sediment",
        "text": "<p>This sediment is locally sourced, containing corals, molluscs, and other shell material from the surrounding seas.</p>",
        "lat": 22.366286010369453,
        "lng": 114.28840443498055,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/BMrZ4kL1l0q0JO6Qn62_N.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/h2U6hcF4cOLZWz2jR4S7K.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/N9F28vI38Itbez3smziAs.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/pcCuVVbq5XU3iaq-Wlv_z.jpeg"
            }
        ]
    },
    {
        "title": "Sediment 6 - Volcanic Black Sand",
        "text": "<p>This sand was deposited on a beach on Stromboli, from the erosions of rocks formed by eruptions of the volcano.</p>",
        "lat": 38.8009597026556,
        "lng": 15.241345708120551,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/C7ELXEdrho5Czl44G3nNc.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/u4YR8lWBULRFxZKR1Ytch.jpeg"
            },
            {
                "type": "image",
                "src": "./assets/specimens/TFawN_Ue3X3mX-HE--fiH.jpeg"
            }
        ]
    },
    {
        "title": "Sediment 7 - Mudflow Landslide",
        "text": "<p>This was deposited by a mudflow landslide, sourced from poorly consolidated Jurassic mudstones. </p>",
        "lat": 54.95107938729617,
        "lng": -5.909226356162487,
        "zoom": 14,
        "media": [
            {
                "type": "image",
                "src": "./assets/specimens/lIZBR54xaduvcGW6Znv_2.jpeg"
            }
        ]
    },
    {
        "title": "Marl",
        "text": "<p>Specimens of the rocks which comprise the bedrock from Omaha Beach to Point du Hoc</p>",
        "lat": 49.381215738782565,
        "lng": -0.9069460632185459,
        "zoom": 14,
        "media": []
    },
    {
        "title": "Sand from Omaha Beach, Vierville Sur Mer, Normandy",
        "text": "",
        "lat": 49.37464529715538,
        "lng": -0.8830113710741906,
        "zoom": 14,
        "media": []
    }
];