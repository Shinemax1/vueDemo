import {REGISTER} from '../mutations-type';
import fetch from '../../api/fetch/index';
import login from './login';
import {Toast} from 'mint-ui';
import {setStorage, getStorage, removeStorage} from '../../utils/mUtils';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG,
} from '../../api/config/api-config';

const register = {
  state: {},
  mutations: {
    //login and save token
    [REGISTER] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        let obj = JSON.parse(data.data.data);
        login.state.login = true;
        login.state.token = obj.token;
        login.state.userId = obj.userId;
        login.state.expires = obj.expires_in;
        setStorage ('login', login.state.login);
        setStorage ('userId', login.state.userId);
        setStorage ('expires', login.state.expires);
        setStorage ('token', login.state.token);
        data.success ();
      }
    },
  },
  actions: {
    //code : oauth2 授权后返回的code
    async register ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ocheckphone_get, {
        userPhone: json.data.userPhone,
      })
        .then (async response => {
          if (response.code == 10005) {
            Toast ({
              message: response.msg,
              duration: 1500,
            });
          } else {
            await fetch ('POST', API_ROUTER_CONFIG.oregister_post, json.data)
              .then (response => {
                commit (REGISTER, {
                  data: response,
                  success: json.success,
                });
              })
              .catch (error => {
                console.log (error);
              });
          }
        })
        .catch (error => {
          console.log (error);
        });
    },
  },
  getters: {},
};

export default register;
