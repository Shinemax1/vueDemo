import {
  GETPRODUCTINFOBYNAME,
  SAVEMEDIACONTENT,
  CHANGEPRODUCT,
  GETMEDIACONTENT,
  GETMEDIACONTENTDETAIL,
  GETUSERADDRESS,
  COLLECT
} from '../mutations-type';
import fetch from '../../api/fetch/index';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG
} from '../../api/config/api-config';

const represent = {
  state: {
    productinfo: {},
    mediaContentId: '',
    mediaContentEntity: {}
  },
  mutations: {
    // 获取商品详情列表
    [GETPRODUCTINFOBYNAME] (state, data) {
      // Toast ({
      //   message: data.data.msg,
      //   duration: 1500,
      // });
      if (data.data.code === 200) {
        data.success(data.data.data);
      }
    },
    // 发布软文
    [SAVEMEDIACONTENT] (state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    },
    // 查询软文
    [GETMEDIACONTENT] (state, data) {
      if (data.data.code === 200) {
        data.success(data.data.data);
      }
    },
    // 收藏软文
    [COLLECT] (state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    },
    // 改变产品值
    [CHANGEPRODUCT] (state, data) {
      state.productinfo = data.data;
    },
    // 点击查询软文详情
    [GETMEDIACONTENTDETAIL] (state, data) {
      if (data.data.code === 200) {
        data.success(data.data.data);
      }
    }
  },
  actions: {
    // 获取商品详情列表
    async getProductInfoByName ({commit}, json) {
      await fetch(
        'GET',
        API_ROUTER_CONFIG.ogetProductInfoByName_get,
        json.data
      )
        .then(response => {
          commit(GETPRODUCTINFOBYNAME, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 发布软文
    async saveMediaContent ({commit}, json) {
      await fetch('POST', API_ROUTER_CONFIG.osaveMediaContent_post, json.data)
        .then(response => {
          commit(SAVEMEDIACONTENT, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 收藏软文
    async collectMediaContent ({commit}, json) {
      await fetch('GET', API_ROUTER_CONFIG.ocollectMediaContent_get, json.data)
        .then(response => {
          commit(COLLECT, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 查询软文
    async getMediaContent ({commit}, json) {
      await fetch('POST', API_ROUTER_CONFIG.ogetMediaContent_get, json.data)
        .then(response => {
          commit(GETMEDIACONTENT, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 改变产品值
    changeProduct ({commit}, json) {
      commit(CHANGEPRODUCT, {
        data: json
      });
    },
    // 点击查询软文详情
    async getMediaContentDetail ({commit}, json) {
      await fetch('GET', API_ROUTER_CONFIG.ogetMediaContentDetail_get, json.data)
        .then(response => {
          commit(GETMEDIACONTENTDETAIL, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    }
  },
  getters: {
    productinfo: state => state.productinfo,
    mediaContentId: state => state.mediaContentId,
    mediaContentEntity: state => state.mediaContentEntity
  }
};

export default represent;
