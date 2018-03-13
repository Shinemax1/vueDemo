import {
  SAVEUSERADDRESS,
  GETUSERADDRESS,
  DELUSERADDRESS,
  GETUSERADDRESSID,
  UPDATEUSERADDRESS,
  SETDEFAULTADDRESS,
} from '../mutations-type';
import {setStorage, getStorage, removeStorage} from '../../utils/mUtils';
import fetch from '../../api/fetch/index';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG,
} from '../../api/config/api-config';

const address = {
  state: {},
  mutations: {
    //收货地址保存
    [SAVEUSERADDRESS] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        data.success ();
      }
    },
    //通过userId获取地址list
    [GETUSERADDRESS] (state, data) {
      if (data.data.code == 200) {
        let info = JSON.parse (data.data.data);
        data.success (info);
      }
    },
    //通过AddressId删除address
    [DELUSERADDRESS] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        data.success ();
      }
    },
    //通过地址id获取地址信息
    [GETUSERADDRESSID] (state, data) {
      if (data.data.code == 200) {
        let info = JSON.parse (data.data.data);
        data.success (info);
      }
    },
    //更新收货地址信息
    [UPDATEUSERADDRESS] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        data.success ();
      }
    },
    //设置默认地址
    [SETDEFAULTADDRESS] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        data.success ();
      }
    },
  },
  actions: {
    //收货地址保存
    async saveaddress ({commit}, json) {
      await fetch ('POST', API_ROUTER_CONFIG.osaveUserAddress_post, json.data)
        .then (response => {
          commit (SAVEUSERADDRESS, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    //通过userId获取地址list
    async getaddress ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ogetByUserId_get, json.data)
        .then (response => {
          commit (GETUSERADDRESS, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    //通过AddressId删除address
    async deladdress ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.odelUserAddress_get, json.data)
        .then (response => {
          commit (DELUSERADDRESS, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    //通过地址id获取地址信息
    async getaddressId ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ogetByAddressId_get, json.data)
        .then (response => {
          commit (GETUSERADDRESSID, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    //更新收货地址信息
    async updateaddress ({commit}, json) {
      await fetch ('POST', API_ROUTER_CONFIG.oupdateUserAddress_post, json.data)
        .then (response => {
          commit (UPDATEUSERADDRESS, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    //设置默认地址
    async setdefaultaddress ({commit}, json) {
        await fetch ('GET', API_ROUTER_CONFIG.osetDefaultAddress_get, json.data)
          .then (response => {
            commit (SETDEFAULTADDRESS, {
              data: response,
              success: json.success,
            });
          })
          .catch (error => {
            console.log (error);
          });
      },
  },
};

export default address;
