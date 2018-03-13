import {
  LIKECOMMENT,
  GETLISTCOMMENT,
  DELETECOMMENT,
  SAVECOMMENT
} from '../mutations-type';
import fetch from '../../api/fetch/index';
import {
  Toast
} from 'mint-ui';
import {
  HOST_CONCIG,
  KEY_CONFIG,
  API_ROUTER_CONFIG
} from '../../api/config/api-config';

const comment = {
  state: {},
  mutations: {
    // 评论点赞
    [LIKECOMMENT](state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    },
    // 获取评论列表
    [GETLISTCOMMENT](state, data) {
      if (data.data.code === 200) {
        data.success(data.data.data);
      }
    },
    // 删除评论
    [DELETECOMMENT](state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    },
    // 发布评论
    [SAVECOMMENT](state, data) {
      Toast({
        message: data.data.msg,
        duration: 1500
      });
      if (data.data.code === 200) {
        data.success();
      }
    }
  },
  actions: {
    // 评论点赞
    async likeComment({
      commit
    }, json) {
      await fetch(
          'POST',
          API_ROUTER_CONFIG.oLikeComment_post,
          json.data
        )
        .then(response => {
          commit(LIKECOMMENT, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 获取评论列表
    async getCommentList({
      commit
    }, json) {
      await fetch('GET', API_ROUTER_CONFIG.ogetCommentList_get, json.data)
        .then(response => {
          commit(GETLISTCOMMENT, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 删除评论
    async deleteComment({
      commit
    }, json) {
      await fetch('GET', API_ROUTER_CONFIG.oDeleteComment_get, json.data)
        .then(response => {
          commit(DELETECOMMENT, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    },
    // 发布评论
    async saveComment({
      commit
    }, json) {
      await fetch('POST', API_ROUTER_CONFIG.oSaveComment_post, json.data)
        .then(response => {
          commit(SAVECOMMENT, {
            data: response,
            success: json.success
          });
        })["catch"](error => {
          console.log(error);
        });
    }
  },
  getters: {}
};

export default comment;
