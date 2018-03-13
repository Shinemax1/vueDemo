import {
  ADDSHOPINGCART,
  BATCHDEL,
  DELSHOPINGCART,
  LISTSHOPINGCART,
  UPDATESHOPINGCART
} from '../mutations-type';
import fetch from '../../api/fetch/index';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG
} from '../../api/config/api-config';

const shopcart = {
  state: {
  },
  mutations: {
    // 添加商品到购物车
    [ADDSHOPINGCART] (state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    },
    // 删除商品到购物车
    [DELSHOPINGCART] (state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    },
    // 更新商品到购物车
    [UPDATESHOPINGCART] (state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    },
    // 批量查询购物车内容
    [LISTSHOPINGCART] (state, data) {
      if (data.data.code === 200) {
        data.success(data.data.data);
      }
    },
    // 批量删除购物车内容
    [CHANGEPRODUCT] (state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    }
  },
  actions: {
    // 添加商品到购物车
    async addShoppingCart ({commit}, json) {
      await fetch(
        'POST',
        API_ROUTER_CONFIG.oAddShopCart_post,
        json.data
      )
        .then(response => {
          commit(ADDSHOPINGCART, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 删除商品到购物车
    async delhoppingCart ({commit}, json) {
      await fetch('GET', API_ROUTER_CONFIG.oDelShopCart_get, json.data)
        .then(response => {
          commit(DELSHOPINGCART, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 更新商品到购物车
    async updatehoppingCart ({commit}, json) {
      await fetch('POST', API_ROUTER_CONFIG.oUpdateShopCart_post, json.data)
        .then(response => {
          commit(UPDATESHOPINGCART, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 批量查询购物车内容
    async getListShoppingCart ({commit}, json) {
      await fetch('GET', API_ROUTER_CONFIG.oListShopCart_get, json.data)
        .then(response => {
          commit(LISTSHOPINGCART, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 批量删除购物车内容
    async batchDel ({commit}, json) {
      await fetch('GET', API_ROUTER_CONFIG.oBachDel, json.data)
        .then(response => {
          commit(BATCHDEL, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    }
  },
  getters: {
  }
};

export default shopcart;
  