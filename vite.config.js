const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  base: '/socket-client/',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}