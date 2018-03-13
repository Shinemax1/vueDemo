import {FORGET,CHANGEPWD} from '../mutations-type';
import {setStorage, getStorage, removeStorage} from '../../utils/mUtils';
import login from './login';
import fetch from '../../api/fetch/index';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG,
} from '../../api/config/api-config';

const forget = {
  state: {},
  mutations: {
    //login and save token
    [FORGET] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        data.success ();
      }
    },
    [CHANGEPWD] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        data.success ();
      }
    }
  },
  actions: {
    // code : oauth2 授权后返回的code
    async forget ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ocheckphone_get, {
        userPhone: json.data.userPhone,
      })
        .then (async response => {
          if (response.code == 10005) {
            await fetch ('POST', API_ROUTER_CONFIG.oforget_post, json.data)
              .then (response => {
                commit (FORGET, {
                  data: response,
                  success: json.success,
                });
              })
              .catch (error => {
                console.log (error);
              });
          } else {
            Toast ({
              message: '该手机用户不存在',
              duration: 1500,
            });
          }
        })
        .catch (error => {
          console.log (error);
        });
    },
    async changePwd ({commit}, json) {
      await fetch ('POST', API_ROUTER_CONFIG.ochangePwd_post,json.data)
        .then (async response => {
          commit (CHANGEPWD, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    }
  },
};

export default forget;
