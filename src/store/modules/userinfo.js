import {SAVEUSERINFO, GETUSERINFO} from '../mutations-type';
import {setStorage, getStorage, removeStorage} from '../../utils/mUtils';
import login from './login';
import fetch from '../../api/fetch/index';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG,
} from '../../api/config/api-config';

const userInfo = {
  state: {
    userinfo: {},
  },
  mutations: {
    [SAVEUSERINFO] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        state.userinfo = {
          userName: data.userinfo.userName,
          userSex: data.userinfo.userSex,
          userBirthday: data.userinfo.userBirthday,          
          userLocation: data.userinfo.userLocation,
        };
        setStorage ('userInfo', state.userinfo);
        data.success ();
      }
    },
    [GETUSERINFO] (state, data) {
      let info = JSON.parse (data.data.data);
      if (data.data.code == 200) {
        if(info){
          state.userinfo = {
            userName: info.userName,
            userSex: info.userSex,
            userBirthday: info.userBirthday,
            userLocation: info.userLocation,
          };
          setStorage ('userInfo', state.userinfo);
        }
        data.success (info);
      }
    },
  },
  actions: {
    // code : oauth2 授权后返回的code
    async saveuserinfo ({commit}, json) {
      await fetch ('POST', API_ROUTER_CONFIG.osaveuserinfo_post, json.data)
        .then (response => {
          commit (SAVEUSERINFO, {
            data: response,
            success: json.success,
            userinfo: json.data,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    async getuserinfo ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ogetuserinfo_get, json.data)
        .then (response => {
          commit (GETUSERINFO, {
            data: response,
            success: json.success,
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
  },
  getters: {
    userinfo: state => state.userinfo
  }
};

//是否登陆
if(getStorage('login') === 'true'){
  if(getStorage('userInfo')){
    userInfo.state.userinfo = JSON.parse(getStorage('userInfo'));
  }else{
    userInfo.state.userinfo = '';
  }
  
}

export default userInfo;
