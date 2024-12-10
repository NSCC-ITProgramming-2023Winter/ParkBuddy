import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// 设置 Mapbox 访问令牌（公开令牌）
mapboxgl.accessToken = 'pk.eyJ1Ijoid2FsdG9uY2EiLCJhIjoiY2x1NzFnMzhwMDFidTJqbXFxazA5cTlzMCJ9.XMuaXWgwC01ZjedON3-p8w';  // 替换为你的公开令牌

const App = () => {
  useEffect(() => {
    // 创建地图实例
    const map = new mapboxgl.Map({
      container: 'map',  // 地图容器的 ID
      style: 'mapbox://styles/mapbox/streets-v11',  // 地图样式
      center: [-63.594, 44.654],  // 默认中心坐标, 
      zoom: 12,  // 默认缩放级别
    });

    // 创建定位控件
    const geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,  // 启用高精度定位
      },
      trackUserLocation: true,  // 追踪用户位置
      showUserLocation: true,    // 显示用户位置
    });

    // GeoJSON 数据
    const geojsonData = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -63.6108135,
              44.6503035,
              0
            ]
          },
          "properties": {
            "name": "Walton's Home",
            "styleUrl": "#icon-1899-0288D1-labelson-nodesc",
            "icon-opacity": 1,
            "icon-color": "#0288d1",
            "icon-scale": 1,
            "icon-offset": [
              32,
              64
            ],
            "icon-offset-units": [
              "pixels",
              "insetPixels"
            ],
            "icon": "https://www.gstatic.com/mapspro/images/stock/503-wht-blank_maps.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6114997,
                44.6499657,
                0
              ],
              [
                -63.6076212,
                44.6527783,
                0
              ]
            ]
          },
          "properties": {
            "name": "London St_1",
            "description": "no street cleaning sign",
            "styleUrl": "#line-87CEAC-7975",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 7.975
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6076212,
                44.6527783,
                0
              ],
              [
                -63.6045202,
                44.6550173,
                0
              ]
            ]
          },
          "properties": {
            "name": "London St_2",
            "description": {
              "@type": "html",
              "value": "<img src=\"https://mymaps.usercontent.google.com/hostedimage/m/*/3AEDAZkquOsWqK6_Rd45QJXfItBZdOmaxlDLPEd0PEkAvdbqx2MNXjaGAHJLOGdxRKE-bhFd6il4A9cHeNpXm2-7_u2jIqNppwgOKo08rVPDhne93xb-6kK_pAF6_oo7-5EgdDZT7G3EWaBi-wSB4zqbejFdAA5QwtzWLc6Rtbc5u9VbsRyf_wV5YZ6aXNy_k_9i7Gu8SGfKRxdu7lYC0vSzZW5s8XPGCIOWnuspDTBYWVURV-qG6lJ9f8lg0Gb0?authuser=0&fife=s16383\" height=\"200\" width=\"auto\" /><br><br>12AM-8AM Wednesday"
            },
            "styleUrl": "#line-FF5252-7781",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 7.781,
            "gx_media_links": "https://mymaps.usercontent.google.com/hostedimage/m/*/3AEDAZkquOsWqK6_Rd45QJXfItBZdOmaxlDLPEd0PEkAvdbqx2MNXjaGAHJLOGdxRKE-bhFd6il4A9cHeNpXm2-7_u2jIqNppwgOKo08rVPDhne93xb-6kK_pAF6_oo7-5EgdDZT7G3EWaBi-wSB4zqbejFdAA5QwtzWLc6Rtbc5u9VbsRyf_wV5YZ6aXNy_k_9i7Gu8SGfKRxdu7lYC0vSzZW5s8XPGCIOWnuspDTBYWVURV-qG6lJ9f8lg0Gb0?authuser=0&fife=s16383"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6121806,
                44.6505066,
                0
              ],
              [
                -63.6083075,
                44.6533153,
                0
              ]
            ]
          },
          "properties": {
            "name": "Livepool St",
            "description": "no",
            "styleUrl": "#line-87CEAC-7394",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 7.394
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.610303,
                44.6547883,
                0
              ],
              [
                -63.6061831,
                44.6517125,
                0
              ]
            ]
          },
          "properties": {
            "name": "Oxford St",
            "description": {
              "@type": "html",
              "value": "<img src=\"https://mymaps.usercontent.google.com/hostedimage/m/*/3AEDAZkpNE11PzwydgEsxuwPqDNicBtZMrm8pUUKrDZkUo4PK1R8ZqiAEkbr-HYNd3SOWhcslxAxkfM3cIRCyXDX9mFo76lvEh54lic990mNAsvQ4toE0pIQ5kZ3n_iFFg50S7uTbIcU2vhNI1YgiH1jB_3iJOfjm7Dso3wrAUBYTMsgZfsHxmsBzLDLT1-Ayl1bJo2QWjO6HfL1Pqwp4mqeG8FyNUoFj68qW6wagjPYN8474HaFGuT7hfERpydA?authuser=0&fife=s16383\" height=\"200\" width=\"auto\" /><br><br>12AM-8AM Wednesday"
            },
            "styleUrl": "#line-FF5252-7781",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 7.781,
            "gx_media_links": "https://mymaps.usercontent.google.com/hostedimage/m/*/3AEDAZkpNE11PzwydgEsxuwPqDNicBtZMrm8pUUKrDZkUo4PK1R8ZqiAEkbr-HYNd3SOWhcslxAxkfM3cIRCyXDX9mFo76lvEh54lic990mNAsvQ4toE0pIQ5kZ3n_iFFg50S7uTbIcU2vhNI1YgiH1jB_3iJOfjm7Dso3wrAUBYTMsgZfsHxmsBzLDLT1-Ayl1bJo2QWjO6HfL1Pqwp4mqeG8FyNUoFj68qW6wagjPYN8474HaFGuT7hfERpydA?authuser=0&fife=s16383"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6129088,
                44.6688528,
                0
              ],
              [
                -63.6096687,
                44.6666095,
                0
              ],
              [
                -63.6096687,
                44.6664264,
                0
              ],
              [
                -63.6086602,
                44.6657625,
                0
              ]
            ]
          },
          "properties": {
            "name": "Highland Ave",
            "description": "No",
            "styleUrl": "#line-87CEAC-6619",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 6.619
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6163717,
                44.6649676,
                0
              ],
              [
                -63.6172729,
                44.6657535,
                0
              ],
              [
                -63.6125844,
                44.6691185,
                0
              ]
            ]
          },
          "properties": {
            "name": "Memorial Dr",
            "description": "No",
            "styleUrl": "#line-87CEAC-6038",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 6.038
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.5955417,
                44.6521448,
                0
              ],
              [
                -63.5944045,
                44.6504619,
                0
              ]
            ]
          },
          "properties": {
            "name": "Hunter St",
            "description": {
              "@type": "html",
              "value": "Evens: Friday 12:05AM-8:00AM<br>Odds: Thursday 12:05AM-8:00AM"
            },
            "styleUrl": "#line-E65100-5396",
            "stroke-opacity": 1,
            "stroke": "#e65100",
            "stroke-width": 5.396
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6125172,
                44.6691308,
                0
              ],
              [
                -63.6117447,
                44.6695428,
                0
              ],
              [
                -63.6115731,
                44.6696878,
                0
              ],
              [
                -63.6105753,
                44.670466,
                0
              ]
            ]
          },
          "properties": {
            "name": "Leeds St",
            "styleUrl": "#line-87CEAC-7588-nodesc",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 7.588
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6105753,
                44.670466,
                0
              ],
              [
                -63.6088112,
                44.6693333,
                0
              ],
              [
                -63.6061504,
                44.6674486,
                0
              ]
            ]
          },
          "properties": {
            "name": "Line 10",
            "description": {
              "@type": "html",
              "value": "<img src=\"https://mymaps.usercontent.google.com/hostedimage/m/*/3AEDAZkq_08-CX7lEtEBYxkDCgJDSHBlovgKhHnRUQiz3eDUgc_MI-ZL-PyNacve8MTDi0hN8w-PA2atcsWSF9ABgKdwfvy9BlqPvqMGhfXnR5GrW63eBfM3DXIBiKzTtVJqkWEZiTLxE2junZ2GbDOlYYBjutM53QrfcI03mKmZ-tC6_MlDRGWt5W8ZdKt_vHAMKZngzoP9CjJBDDnUvLZS0sdQUUsjksrTGhpacxVbsaTCQIjRhb4oMYmxlltM?authuser=0&fife=s16383\" height=\"200\" width=\"auto\" /><br><br>"
            },
            "styleUrl": "#line-FF5252-6813",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 6.813,
            "gx_media_links": "https://mymaps.usercontent.google.com/hostedimage/m/*/3AEDAZkq_08-CX7lEtEBYxkDCgJDSHBlovgKhHnRUQiz3eDUgc_MI-ZL-PyNacve8MTDi0hN8w-PA2atcsWSF9ABgKdwfvy9BlqPvqMGhfXnR5GrW63eBfM3DXIBiKzTtVJqkWEZiTLxE2junZ2GbDOlYYBjutM53QrfcI03mKmZ-tC6_MlDRGWt5W8ZdKt_vHAMKZngzoP9CjJBDDnUvLZS0sdQUUsjksrTGhpacxVbsaTCQIjRhb4oMYmxlltM?authuser=0&fife=s16383"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6164695,
                44.6662297,
                0
              ],
              [
                -63.6157185,
                44.6657185,
                0
              ],
              [
                -63.6155683,
                44.6655353,
                0
              ],
              [
                -63.6154717,
                44.6651996,
                0
              ]
            ]
          },
          "properties": {
            "name": "Basinview Dr",
            "styleUrl": "#line-87CEAC-7781-nodesc",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 7.781
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6149927,
                44.6672685,
                0
              ],
              [
                -63.612568,
                44.6655898,
                0
              ],
              [
                -63.6123212,
                44.6654219,
                0
              ],
              [
                -63.6122569,
                44.665277,
                0
              ]
            ]
          },
          "properties": {
            "name": "High St",
            "styleUrl": "#line-87CEAC-7588-nodesc",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 7.588
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6061925,
                44.6674217,
                0
              ],
              [
                -63.6073673,
                44.6665938,
                0
              ]
            ]
          },
          "properties": {
            "name": "Duffus St",
            "description": {
              "@type": "html",
              "value": "<img src=\"https://mymaps.usercontent.google.com/hostedimage/m/*/3AEDAZkp9UvbjQUD19bpl0GYInO4pYbgJiooLklk7Gdx89_bDX1_zaUzniy7-GaYjg2XdBd8HDd8Z9pMdY1FAVS__WWoqUOLtYaPXCZnnV1CRnOFKyCf-EHV2-3NnTo0HGoG5sU4ox_-CaigV4OgQyeGSahvRNTW0OSZt2NsixVZsc2MjfRIPeiDF3LruAarDV1dcGooZwspzrpMvTnMA1DCGxjYPTUg0EkX2DDdddGHd-BJ3jtBRPMOefVfHoDM?authuser=0&fife=s16383\" height=\"200\" width=\"auto\" /><br><br>even side: Thursday 12:05AM-8:00AM<br>odd side: Wednesday 12:05AM-8:00AM"
            },
            "styleUrl": "#line-FF5252-9331",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 9.331,
            "gx_media_links": "https://mymaps.usercontent.google.com/hostedimage/m/*/3AEDAZkp9UvbjQUD19bpl0GYInO4pYbgJiooLklk7Gdx89_bDX1_zaUzniy7-GaYjg2XdBd8HDd8Z9pMdY1FAVS__WWoqUOLtYaPXCZnnV1CRnOFKyCf-EHV2-3NnTo0HGoG5sU4ox_-CaigV4OgQyeGSahvRNTW0OSZt2NsixVZsc2MjfRIPeiDF3LruAarDV1dcGooZwspzrpMvTnMA1DCGxjYPTUg0EkX2DDdddGHd-BJ3jtBRPMOefVfHoDM?authuser=0&fife=s16383"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6105753,
                44.670466,
                0
              ],
              [
                -63.6148882,
                44.6734013,
                0
              ]
            ]
          },
          "properties": {
            "name": "Novalea Dr",
            "description": {
              "@type": "html",
              "value": "even side: Wednesday 12:05AM-8AM<br>odd side: Thursday 12:05AM-8AM"
            },
            "styleUrl": "#line-FF5252-6231",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 6.231
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6147537,
                44.6733131,
                0
              ],
              [
                -63.6143246,
                44.6735954,
                0
              ],
              [
                -63.613654,
                44.6734542,
                0
              ],
              [
                -63.6103656,
                44.6727371,
                0
              ],
              [
                -63.6094054,
                44.6725349,
                0
              ]
            ]
          },
          "properties": {
            "name": "Kencrest Avenue",
            "description": {
              "@type": "html",
              "value": "even side: 12:05 am - 8: 00 am  - Thursday<br>odd side: 12:05 am - 8: 00 am - Wednesday "
            },
            "styleUrl": "#line-FF5252-6813",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 6.813
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.608174,
                44.6709742,
                0
              ],
              [
                -63.6076912,
                44.6713252,
                0
              ],
              [
                -63.6075088,
                44.6713252,
                0
              ],
              [
                -63.6068221,
                44.6712336,
                0
              ],
              [
                -63.6063501,
                44.6711268,
                0
              ],
              [
                -63.6054703,
                44.6707605,
                0
              ],
              [
                -63.6036357,
                44.6695016,
                0
              ],
              [
                -63.6034855,
                44.6694406,
                0
              ]
            ]
          },
          "properties": {
            "name": "Albert St",
            "description": {
              "@type": "html",
              "value": "even side: Wednesday 12:05AM-8:00AM<br>odd side: Thursday 12:05AM-8:00AM"
            },
            "styleUrl": "#line-FF5252-6813",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 6.813
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6192174,
                44.6603218,
                0
              ],
              [
                -63.6185522,
                44.6603524,
                0
              ],
              [
                -63.6162348,
                44.6608637,
                0
              ],
              [
                -63.6146791,
                44.6605966,
                0
              ],
              [
                -63.6134239,
                44.6603123,
                0
              ],
              [
                -63.612697,
                44.6600996,
                0
              ],
              [
                -63.6106237,
                44.6590169,
                0
              ]
            ]
          },
          "properties": {
            "name": "Windsor St. ",
            "description": {
              "@type": "html",
              "value": "even: Thursday 12:05am - 8:00 am <br>odd:  Friday 12:05 am - 8: 00 am "
            },
            "styleUrl": "#line-FF5252-6813",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 6.813
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.606123,
                44.6673749,
                0
              ],
              [
                -63.5986342,
                44.6624989,
                0
              ]
            ]
          },
          "properties": {
            "name": "Line 18",
            "description": {
              "@type": "html",
              "value": "even side: Thursday 12:05AM-8:00AM<br>odd side: Wednesday 12:05AM-8:00AM"
            },
            "styleUrl": "#line-FF5252-8944",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 8.944
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.5944038,
                44.6539822,
                0
              ],
              [
                -63.6011415,
                44.6493723,
                0
              ]
            ]
          },
          "properties": {
            "name": "Willow St.",
            "description": {
              "@type": "html",
              "value": "Evens: Friday 12:05AM-8:00AM<br>Odds: Thursday 12:05AM-8:00AM"
            },
            "styleUrl": "#line-E65100-4658",
            "stroke-opacity": 1,
            "stroke": "#e65100",
            "stroke-width": 4.658
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.5974734,
                44.6508367,
                0
              ],
              [
                -63.5939007,
                44.6532485,
                0
              ]
            ]
          },
          "properties": {
            "name": "Charles St.",
            "description": {
              "@type": "html",
              "value": "Evens: Friday 12:05AM-8:00AM<br>Odds: Thursday 12:05AM-8:00AM"
            },
            "styleUrl": "#line-E65100-5589",
            "stroke-opacity": 1,
            "stroke": "#e65100",
            "stroke-width": 5.589
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6105704,
                44.6589661,
                0
              ],
              [
                -63.6085641,
                44.6576534,
                0
              ],
              [
                -63.6070299,
                44.6566537,
                0
              ],
              [
                -63.6065364,
                44.6563103,
                0
              ],
              [
                -63.6054098,
                44.6554898,
                0
              ],
              [
                -63.6011557,
                44.6536067,
                0
              ],
              [
                -63.5982992,
                44.6522376,
                0
              ],
              [
                -63.5967636,
                44.651263,
                0
              ],
              [
                -63.5916232,
                44.6471284,
                0
              ]
            ]
          },
          "properties": {
            "name": "Windsor St.",
            "description": "No Parking ",
            "styleUrl": "#line-BDBDBD-6619",
            "stroke-opacity": 1,
            "stroke": "#bdbdbd",
            "stroke-width": 6.619
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.600985,
                44.6587848,
                0
              ],
              [
                -63.5971762,
                44.6615473,
                0
              ],
              [
                -63.5936464,
                44.6638748,
                0
              ]
            ]
          },
          "properties": {
            "name": "Russell St",
            "description": "no",
            "styleUrl": "#line-87CEAC-9719",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 9.719
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.5971762,
                44.6615473,
                0
              ],
              [
                -63.5909327,
                44.6572091,
                0
              ],
              [
                -63.5838732,
                44.6523704,
                0
              ],
              [
                -63.5809764,
                44.6505081,
                0
              ]
            ]
          },
          "properties": {
            "name": "Gottingen St",
            "description": "NO",
            "styleUrl": "#line-87CEAC-7588",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 7.588
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.5835033,
                44.6500479,
                0
              ],
              [
                -63.5926013,
                44.65623,
                0
              ]
            ]
          },
          "properties": {
            "name": "Maynard St",
            "description": {
              "@type": "html",
              "value": "even side: No parking<br>odd side: Friday 12:05AM-8:00AM"
            },
            "styleUrl": "#line-FF5252-7200",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 7.2
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.5882645,
                44.6517181,
                0
              ],
              [
                -63.5937362,
                44.6554731,
                0
              ]
            ]
          },
          "properties": {
            "name": "Agricola St",
            "styleUrl": "#line-87CEAC-6813-nodesc",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 6.813
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.5791015,
                44.6511296,
                0
              ],
              [
                -63.5894655,
                44.6582808,
                0
              ]
            ]
          },
          "properties": {
            "name": "Brunswick St",
            "description": {
              "@type": "html",
              "value": "even side: Thursday 12:05AM - 8:00AM<br>odd side: Friday 12:05AM - 8:00AM"
            },
            "styleUrl": "#line-FF5252-8363",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 8.363
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6092708,
                44.6485839,
                0
              ],
              [
                -63.6038205,
                44.6524383,
                0
              ]
            ]
          },
          "properties": {
            "name": "Berlin St.",
            "description": {
              "@type": "html",
              "value": "Even: Thursday 12:05AM-8:00<br>Odds: Wednesday 12:05AM-8:00"
            },
            "styleUrl": "#line-FF5252-7547",
            "stroke-opacity": 1,
            "stroke": "#ff5252",
            "stroke-width": 7.547
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [
              [
                -63.6186302,
                44.6602927,
                0
              ],
              [
                -63.6169565,
                44.6584841,
                0
              ],
              [
                -63.615948,
                44.6573546,
                0
              ],
              [
                -63.6154437,
                44.656828,
                0
              ],
              [
                -63.6142099,
                44.6555153,
                0
              ],
              [
                -63.6133087,
                44.65405,
                0
              ],
              [
                -63.6118174,
                44.6527907,
                0
              ],
              [
                -63.6093819,
                44.6509284,
                0
              ],
              [
                -63.6082446,
                44.6503865,
                0
              ],
              [
                -63.607322,
                44.6497148,
                0
              ],
              [
                -63.6056375,
                44.648547,
                0
              ],
              [
                -63.6051226,
                44.6481653,
                0
              ]
            ]
          },
          "properties": {
            "name": "Connolly St.",
            "description": "none",
            "styleUrl": "#line-87CEAC-5814",
            "stroke-opacity": 1,
            "stroke": "#87ceac",
            "stroke-width": 5.814
          }
        }
      ]
    };

    // 等待地图加载完成后再添加控件和触发定位
    map.on('load', () => {
      // 添加定位控件到地图
      map.addControl(geolocate);

      // 启动定位功能
      geolocate.trigger();  // 触发定位

      // 添加数据源
      map.addSource('lines', {
        type: 'geojson',
        data: geojsonData,
      });

      // 添加线
      map.addLayer({
        id: 'line-layer',
        type: 'line',
        source: 'lines',
        paint: {
          'line-color': '#0000FF',
          'line-width': 3,
        },
      });

      // 添加弹窗
      map.on('click', 'line-layer', (e) => {
        // 获取线的第一个坐标
        const coordinates = e.features[0].geometry.coordinates[0];  // 使用第一个坐标点（或你可以选其他）
        const { title, description } = e.features[0].properties;

        // 弹出窗口
        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`<h3>${title}</h3><p>${description}</p>`)
          .addTo(map);
      });

    });

  }, []);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
};

export default App;