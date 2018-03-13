import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import register from './modules/register'
import forget from './modules/forget'
import vcode from './modules/vcode'
import userinfo from './modules/userinfo'
import userhead from './modules/userhead'
import follower from './modules/follower'
import address from './modules/address'
import comment from './modules/comment'
import sign from './modules/sign'
import represent from './modules/represent'
import back from './modules/back'
import eventBus from '../utils/eventBus'
import tabbar from './modules/tabbar'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        back,
        tabbar,
        register,
        forget,
        vcode,
        userinfo,
        userhead,
        follower,
        address,
        sign,
        represent,
        eventBus,
        comment
    }
})