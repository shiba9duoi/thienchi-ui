
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://shiba9duoi/github.io/thienchi-ui/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/github.io/thienchi-ui"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5783, hash: '549fd41263847a6429d588d1b6caa11d22c789f21afc803b1f3ed9342dd84f89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1150, hash: '4d531130912009d4b63718a4ea374d664416e03d6bbd1b7858a82b405ad1484c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52098, hash: '981afb08681803a03c649a07c4a948d4a0a61969a376b18485a6e27ffa888c80', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QT7Q3AZ7.css': {size: 851049, hash: 'cx2eiXR3p6I', text: () => import('./assets-chunks/styles-QT7Q3AZ7_css.mjs').then(m => m.default)}
  },
};
