import {GETFOLLOWERLIST, FOLLOW, CANCLEFOLLOW} from '../mutations-type';
import {setStorage, getStorage, removeStorage} from '../../utils/mUtils';
import login from './login';
import fetch from '../../api/fetch/index';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG
} from '../../api/config/api-config';

const follow = {
  state: {},
  mutations: {
    [GETFOLLOWERLIST] (state, data) {
      if (data.data.code === 200) {
        if (data.data.data) {
          var info = [];
          for (let i=0;i<data.data.data.length;i++) {
            info.push(data.data.data[i]);
          }
          data.success(info);
        }
      }
    },
    [FOLLOW] (state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code == 200) {
        data.success ();
      }
    },
    [CANCLEFOLLOW] (state, data) {
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
    // code : oauth2 授权后返回的code
    async getfollowerlist ({commit}, json) {
      await fetch (
        'GET',
        API_ROUTER_CONFIG.ogetFollowersByUserId_get,
        json.data
      )
        .then (response => {
          commit (GETFOLLOWERLIST, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    async follow ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ofollow_get, json.data)
        .then (response => {
          commit (FOLLOW, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    async canclefollow ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ocancelFollow_get, json.data)
        .then (response => {
          commit (CANCLEFOLLOW, {
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

export default follow;
