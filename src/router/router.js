import Vue from 'vue';
import Router from 'vue-router';
import Promise from 'promise-polyfill';
// 登录，注册，忘记密码
import login from '../components/login/Login';
import register from '../components/login/Register';
import forget from '../components/login/Forget';
// 帮帮圈
import helpcircle from '../components/helpcircle/HelpCircle';
import softcopy from '../components/helpcircle/softcopy/SoftCopy';
import pushcharacter from '../components/helpcircle/softcopy/PushCharacter';
import evaluate from '../components/helpcircle/softcopy/Evaluate';
import recommend from '../components/helpcircle/softcopy/Recommend';
import commodity from '../components/helpcircle/softcopy/Commodity';
import commentdetail from '../components/helpcircle/softcopy/CommentDetail';
import recommenddetail from '../components/helpcircle/softcopy/RecommendDetail';
// 购物车
import shopcart from '../components/shopcart/ShopCart';
// import shopcar from '../components/shopcart/ShopCar';
//  首页
import index from '../components/index/index';
import helphotsell from '../components/index/HelpHotSell';
import seckill from '../components/index/seckill/Seckill';
import mustselllist from '../components/index/MustSellList';
import keephealth from '../components/index/keephealth/KeepHealth';
import fashion from '../components/index/fashion/Fashion';
import fitness from '../components/index/fitness/Fitness';
import dayspecial from '../components/index/DaySpecial';
import vagetable from '../components/index/vagetable/Vagetable';
import homeappliance from '../components/index/homeappliance/HomeAppliance';
import entertainment from '../components/index/entertainment/Entertainment';
import sign from '../components/index/daysign/Sign';
import discountcoupou from '../components/index/discountcoupou/Discountcoupou';
import findgood from '../components/index/FindGood';
import searchrepresent from '../components/index/SearchRepresent';
// 推文
import choose from '../components/represent/Choose';
import goods from '../components/represent/Goods';
// 我的
import mine from '../components/mine/Mine';
import Minebbang from '../components/mine/minebbang/Minebbang';
import Minedistribution from '../components/mine/minebbang/MineDistribution';
import distributiondetail from '../components/mine/minebbang/DistributionDetail';
import userinfo from '../components/mine/userinfo/UserInfo';
import mineattention from '../components/mine/MineAttention';
import minefans from '../components/mine/MineFans';
// 我的消息
import minemessage from '../components/mine/minemessage/MineMessage';
import minetradelogistics from '../components/mine/minemessage/MineTradeLogistics';
import mineinform from '../components/mine/minemessage/MineInform';
import mineinformation from '../components/mine/minemessage/MineInformation';
import mineset from '../components/mine/mineset/MineSet';
import modifypassword from '../components/mine/mineset/ModifyPassword';
import deliveryaddress from '../components/mine/deliveryaddress/DeliveryAddress';
import addaddress from '../components/mine/deliveryaddress/AddAddress';
import * as scrollUtils from '../utils/scroll-position';
import Login from '../store/modules/login';
// import { DEBUG } from '../api/config/api-config';

if (!window.Promise) {
  window.Promise = Promise;
}

Vue.use(Router);

const router = new Router({
  mode: 'history',
//    base: '/helplife/',
  routes: [{
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/forget',
    name: 'forget',
    component: forget
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/helpcircle',
    name: 'helpcircle',
    component: helpcircle
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  },
  {
    path: '/minebbang',
    name: 'minebbang',
    component: Minebbang,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/helphotsell',
    name: 'helphotsell',
    component: helphotsell,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/minedistribution',
    name: 'minedistribution',
    component: Minedistribution
  },
  {
    path: '/distributiondetail',
    name: 'distributiondetail',
    component: distributiondetail
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: userinfo,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mineattention',
    name: 'mineattention',
    component: mineattention,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/minefans',
    name: 'minefans',
    component: minefans,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/mineset',
    name: 'mineset',
    component: mineset,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/modifypassword',
    name: 'modifypassword',
    component: modifypassword,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/deliveryaddress',
    name: 'deliveryaddress',
    component: deliveryaddress,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addaddress',
    name: 'addaddress',
    component: addaddress,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/minemessage',
    name: 'minemessage',
    component: minemessage,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/minetradelogistics',
        name: 'minetradelogistics',
        component: minetradelogistics
      },
      {
        path: '/mineinform',
        name: 'mineinform',
        component: mineinform
      },
      {
        path: '/mineinformation',
        name: 'mineinformation',
        component: mineinformation
      }
    ]
  },
  {
    path: '/fashion',
    name: 'fashion',
    component: fashion
  },
  {
    path: '/mustselllist',
    name: 'mustselllist',
    component: mustselllist
  },
  {
    path: '/homeappliance',
    name: 'homeappliance',
    component: homeappliance
  },
  {
    path: '/fitness',
    name: 'fitness',
    component: fitness
  },
  {
    path: '/seckill',
    name: 'seckill',
    component: seckill
  },
  {
    path: '/vagetable',
    name: 'vagetable',
    component: vagetable
  },
  {
    path: '/keephealth',
    name: 'keephealth',
    component: keephealth
  },
  {
    path: '/dayspecial',
    name: 'dayspecial',
    component: dayspecial
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: entertainment
  },
  {
    path: '/discountcoupou',
    name: 'discountcoupou',
    component: discountcoupou,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/choose',
    name: 'choose',
    component: choose
  },
  {
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/sign',
    name: 'sign',
    component: sign,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/findgood',
    name: 'findgood',
    component: findgood
  },
  {
    path: '/softcopy',
    name: 'softcopy',
    component: softcopy,
    children: [
      {
        path: 'pushcharacter',
        name: 'pushcharacter',
        component: pushcharacter
      },
      {
        path: 'evaluate',
        name: 'evaluate',
        component: evaluate
      },
      {
        path: 'recommend',
        name: 'recommend',
        component: recommend
      },
      {
        path: 'commodity',
        name: 'commodity',
        component: commodity
      }
    ]
  },
  {
    path: '/searchrepresent',
    name: 'searchrepresent',
    component: searchrepresent
  },
  {
    path: '/commentdetail',
    name: 'commentdetail',
    component: commentdetail
  },
  {
    path: '/recommenddetail',
    name: 'recommenddetail',
    component: recommenddetail
  },
  {
    path: '*',
    redirect: '/index'
  }
  ]
});

let routerList = [];

router.beforeEach((to, from, next) => {
  let position = scrollUtils.getScrollTop();
  let currentRouterIndex = routerList.findIndex(e => {
    return e.path === from.fullPath;
  });

  if (currentRouterIndex !== -1) {
    routerList[currentRouterIndex].position = position;
  } else {
    routerList.push({
      path: from.fullPath,
      position: position
    });
  }

  // store.dispatch('getToken')
  if (to.meta.requiresAuth) {
    if (!Login.state.login) {
      next('login');
    } else {
      next();
    }
    next();
    //  plus.key.addEventListener (
    //      'backbutton',
    //      function () {
    //          var embed = plus.webview.currentWebview();
    //    embed.back();
    //      },
    //      false
    //    )
    //  if (DEBUG) {
    //      next()
    //  } else {
    //      const login = store.getters.login
    //      if (login) {
    //          next()
    //      }
    //      else {
    //          next({
    //              path: '/splash'
    //          })
    //      }
    //  }
  } else {
    next();
  }
  next();
});

router.afterEach((to, from, next) => {
  let savedPosition = routerList.find(e => {
    return e.path === to.fullPath;
  });

  if (typeof savedPosition !== 'undefined') {
    Vue.nextTick(() => {
      scrollUtils.setScrollTop(savedPosition.position);
    });
  } else {
    Vue.nextTick(() => {
      scrollUtils.setScrollTop(0);
    });
  }
});

export default router;
