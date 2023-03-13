import '../public-path.js'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';


let router = null;
let instance = null;

function render(props = {}) {
  const { container, ShareComp } = props;
  router = createRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/sub/' : '/',
    history: createWebHistory(),
    routes: [],
  });

  
  instance = createApp(App)
  instance.use(router)

  console.log({ ShareComp, WindowShare: window.ShareComp });
  // window共享
  if (window.ShareComp) {
    instance.component('WindowShare', window.ShareComp)
  }
  // 主应用传值
  if (ShareComp) {
    instance.component('PropShare', ShareComp)
  }

  instance.mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {

}
