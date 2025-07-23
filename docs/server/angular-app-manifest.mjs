
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/thienchi-ui/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/thienchi-ui"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5755, hash: 'a7d6311eec0fc6c37cb0c2bda59c222bc33433c540d9ef80b6ab5f0e32080733', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1122, hash: '1f5150b1e71bd845a70cd3532e4d8e33904f2a817861e9ebacb827cc686feadc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52070, hash: 'ceb8635ab32c56915ef2a9b43edf5ed459b0f0117cf69e220883cc937264498f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QT7Q3AZ7.css': {size: 851049, hash: 'cx2eiXR3p6I', text: () => import('./assets-chunks/styles-QT7Q3AZ7_css.mjs').then(m => m.default)}
  },
};
