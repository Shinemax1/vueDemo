import {INDEXTABBERSHOW, INDEXTABBERHIDE} from '../mutations-type';


const tabbar = {
  state: {
    indexIfTabbar: true,
  },
  mutations: {
    [INDEXTABBERSHOW] (state) {
      state.indexIfTabbar = true;
      
      //document.getElementById ('content').style.marginBottom = '1.2rem';
    },
    [INDEXTABBERHIDE] (state) {
      state.indexIfTabbar = false;
      //document.getElementById ('content').style.marginBottom = '0';
    },
  },
  actions: {
    indexTabbarShow: ({commit}) => {
      commit (INDEXTABBERSHOW);
    },
    indexTabbarHide: ({commit}) => {
      commit (INDEXTABBERHIDE);
    }
  },
  getters: {
    indexIfTabbar : state => state.indexIfTabbar
  }
};

export default tabbar;
