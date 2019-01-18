import Vue from 'vue'

Vue.prototype.$mapbox = (string) => {
  const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
  mapboxgl.accessToken = process.env.MAPBOX_TOKEN
  const map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/streets-v11'
  })

  return map
}
