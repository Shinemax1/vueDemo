// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/router';
import store from './store';
import './assets/js/flexible';
import PixelSpinner from './views/Spinner/index';
import Tabbar from './views/TabBar/index';
import TabbarSeckill from './views/TabBar/indexSeckill';
import Appbar from './views/AppBar/index';
import Calendar from './views/Calendar/index';
import Listview from './views/ListView/index';
import VueMaterial from 'vue-material';
import MuseUI from 'muse-ui';
// import 'muse-components/style/base.less' // 全局样式包含 normalize.css
// import appBar from 'muse-components/appBar'
// import {bottomNav, bottomNavItem} from 'muse-components/bottomNav'
// import {retina} from 'muse-components/utils'
import 'muse-ui/dist/muse-ui.css';
import 'vue-material/dist/vue-material.css';
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
import {Toast} from 'mint-ui';
import loadsh from 'lodash';
require('./assets/css/common.css');
require('./assets/js/jquery-3.1.1.min.js');

window.event = new Vue();

// 关闭生产模式下的给出的提示
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(PixelSpinner)
Vue.use(Tabbar)
Vue.use(TabbarSeckill)
Vue.use(Appbar)
Vue.use(Calendar)
Vue.use(Listview)
Vue.use(MuseUI)
Vue.use(MintUI)
Vue.prototype._ = loadsh;

// Vue.component(bottomNav.name, bottomNav)
// Vue.component(bottomNavItem.name, bottomNavItem)


//夜间模式
// Vue.material.registerTheme('default', {
//   primary: 'blue',
//   accent: 'red',
//   warn: 'red',
//   background: 'grey'
// })
// Vue.material.registerTheme('night',{
//     primary: {
//         color: 'blue-grey',
//         hue: 900
//     },
//     accent:{
//         color: 'grey',
//         hue: 700
//     },
//     background:{
//         color: 'blue-grey',
//         hue: 800
//     }
// })
Vue.material.registerTheme('day',{
    primary: {
        color: 'red',
        hue: 900
    },
    accent:{
        color: 'black',
        hue: 700
    },
    background:{
        color: '#ff0000',
        hue: 400
    }
})
Vue.material.setCurrentTheme('day')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
