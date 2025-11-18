
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ArtesaniasAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ArtesaniasAngular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 457, hash: '3a7e084458bfb8360fa12d1bd2d72205fa2d71b00c6e0a1bc18cca8d91d42bd3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 970, hash: '954ee8d27f0992ef47f73ccd50ed493f32407bab02df6d6132dc92ce75b0aafd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1625, hash: '2aa53474e101a5cbe017dbbd03b90e7507dc39a1adacd41054ad00f26e53f989', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
