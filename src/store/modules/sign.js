import {SIGN, GETSIGN} from '../mutations-type';
import fetch from '../../api/fetch/index';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG,
} from '../../api/config/api-config';

const sign = {
  state: {},
  mutations: {
    //获取签到天数
    [GETSIGN] (state, data) {
      // Toast ({
      //   message: data.data.msg,
      //   duration: 1500,
      // });
      if (data.data.code == 200) {
        data.success (data.data.data);
      }
    },
    //签到
    [SIGN] (state, data) {
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
    //获取签到天数
    async getSign ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ogetCheckInByDate_get, json.data)
        .then (response => {
          commit (GETSIGN, {
            data: response,
            success: json.success
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    //签到
    async sign ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ouserDailyCheckI_get, json.data)
        .then (response => {
          commit (SIGN, {
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

export default sign;
