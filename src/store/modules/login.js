import {LOGIN, LOGOUT, TOKEN} from '../mutations-type';
import {setStorage, getStorage, removeStorage} from '../../utils/mUtils';
import fetch from '../../api/fetch/index';
import userinfo from './userinfo';
import userhead from './userhead';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG,
} from '../../api/config/api-config';

const login = {
  state: {
    token: '',
    login: false,
    expires: '',
    userId: '',
  },
  mutations: {
    //login and save token
    [LOGIN] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        let obj = JSON.parse (data.data.data);
        state.login = true;
        state.token = obj.token;
        state.userId = obj.userId;
        state.expires = obj.expires_in;
        setStorage ('login', state.login);
        setStorage ('userId', state.userId);
        setStorage ('expires', state.expires);
        setStorage ('token', state.token);
        data.success ();
      }
    },
    [LOGOUT] (state, data) {
      Toast ({
        message: '成功退出!',
        duration: 1500,
      });
      state.login = false;
      state.token = '';
      state.userId = '';
      state.expires = '';
      userinfo.state.userInfo = '';
      userhead.state.userhead = '';
      setStorage ('login', state.login);
      removeStorage ('userId', state.userId);
      removeStorage ('expires', state.expires);
      removeStorage ('token', state.token);
      removeStorage ('userInfo', state.token);
      removeStorage ('userhead', state.token);
      data.success ();
    }
  },
  actions: {
    // code : oauth2 授权后返回的code
    async login ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ocheckphone_get, {
        userPhone: json.data.userPhone,
      })
        .then (async response => {
          if (response.code == 10005) {
            await fetch ('POST', API_ROUTER_CONFIG.ologin_post, json.data)
              .then (response => {
                commit (LOGIN, {
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
    logout({commit},json){
      commit (LOGOUT, {
        success: json.success
      });
    }
  },
  getters: {
    login: state => state.login,
    userId: state => state.userId,
    token: state => state.token,
  },
};

//是否登陆
if (getStorage ('login') === 'true') {
  login.state.login = true;
  login.state.userId = getStorage ('userId');
  login.state.token = getStorage ('token');
  login.state.expires = getStorage ('expires');
}

export default login;
