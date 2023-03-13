import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';
import { createRouter, createWebHistory } from 'vue-router';
import ShareComp from './components/Share.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/sub',
    }
  ]
})

const instance = createApp(App)
instance.use(router)
instance.mount('#app')

// window挂载组件
window.ShareComp = ShareComp

registerMicroApps([
  {
    name: 'sub', // app name registered
    entry: '//localhost:8080',
    container: '#sub',
    activeRule: '/sub',
    props: {
      ShareComp // props共享组件
    }

  }
]);

start();
