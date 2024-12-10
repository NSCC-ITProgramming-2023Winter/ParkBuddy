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
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [-63.590, 44.644],
              [-63.599, 44.664],
            ],
          },
          properties: {
            title: 'Line A',
            description: 'This is a line',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [-63.580, 44.654],
              [-63.589, 44.674],
            ],
          },
          properties: {
            title: 'Line B',
            description: 'This is a line',
          },
        }
      ],
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