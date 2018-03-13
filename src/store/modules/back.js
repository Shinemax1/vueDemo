import {BACK} from '../mutations-type';
import { logger } from '../../utils/logger'


const backKey = {
  state: {
    // token: {},
    // login: false,
  },
  mutations: {
    //login and save token
    [BACK] (state) {
        plus.key.addEventListener (
            'backbutton',
            function () {
              func();
            },
            false
          );
    }
  },
  actions: {
     backKey : ({commit}) => {
         commit(BACK)
     }
  }
};

export default backKey;
