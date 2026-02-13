import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
const func = () => {
  console.log('hello world');
};
func();
createApp(App).mount('#app');
