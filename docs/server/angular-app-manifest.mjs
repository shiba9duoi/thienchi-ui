
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: './',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5744, hash: '986562c2bda33d7e448eb949d46f0e656d6b9b3ac54d5208bf8e0e5fb1492842', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1111, hash: '09431567e6062b4fd11795a68fc30660ddecada50e68830f67cf7bf5ae560e6f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52059, hash: 'f397cb40ca4c88a0fabd0842c48e95119fb86ae6788e30b76ee2cfcf33e8e35d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QT7Q3AZ7.css': {size: 851049, hash: 'cx2eiXR3p6I', text: () => import('./assets-chunks/styles-QT7Q3AZ7_css.mjs').then(m => m.default)}
  },
};
