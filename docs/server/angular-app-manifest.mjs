
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
    'index.csr.html': {size: 457, hash: '6e3ca29282f2fef20d98e67ec1ed86b65a6328071545941171dd730b66df1573', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 970, hash: 'a6ea8963a88bbe0f728bab1ff119b1f6c996abb383a5a2f4b5de4b047d28be72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2938, hash: '33e1e8ee4e41631903606e15395971fcecba4836b1e8ec0d911ac48ea796bbd8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
