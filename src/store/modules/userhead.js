import {SAVEUSERHEAD,GETUSERHEAD} from '../mutations-type';
import {setStorage, getStorage, removeStorage} from '../../utils/mUtils';
import login from './login';
import fetch from '../../api/fetch/index';
import {Toast} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG,
} from '../../api/config/api-config';

const userhead = {
  state: {
    userhead:''
  },
  mutations: {
    [SAVEUSERHEAD] (state, data) {
      Toast ({
        message: data.data.msg,
        duration: 1500,
      });
      if (data.data.code == 200) {
        state.userhead = data.head;
        setStorage ('userhead', state.userhead);
        data.success ();
      }
    },
    [GETUSERHEAD] (state, data) {
      if (data.data.code == 200) {
        if(data.data.data){
          state.userhead = data.data.data;
        }
        setStorage ('userhead', state.userhead);
        data.success (data.data.data);
      }
    }
  },
  actions: {
    // code : oauth2 授权后返回的code
    async saveuserhead ({commit}, json) {
      await fetch ('POST', API_ROUTER_CONFIG.osaveUserHeadPortrait_post, json.data)
        .then (response => {
          commit (SAVEUSERHEAD, {
            data: response,
            success: json.success,
            head: json.data.userHeadPortrait
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
    async getuserhead ({commit}, json) {
      await fetch ('GET', API_ROUTER_CONFIG.ogetUserHeadPortrait_get, json.data)
        .then (response => {
          commit (GETUSERHEAD, {
            data: response,
            success: json.success
          });
        })
        .catch (error => {
          console.log (error);
        });
    },
  },
  getters: {
    userhead: state => state.userhead
  }
};

//是否登陆
if(getStorage('login') === 'true'){
  userhead.state.userhead = getStorage('userhead');
}

export default userhead;
