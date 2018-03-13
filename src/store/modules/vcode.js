import {SENDVCODE} from '../mutations-type';
import fetch from '../../api/fetch/index';
import {logger} from '../../utils/logger';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG,
} from '../../api/config/api-config';

const sendVcode = {
  state: {},
  mutations: {
    //login and save token
    [SENDVCODE] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.data == 'success') {
        data.success ();
      }
    },
  },
  actions: {
    // code : oauth2 授权后返回的code
    async sendVcode ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ovcode_get, json.data)
        .then (response => {
          commit (SENDVCODE, {
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

export default sendVcode;
