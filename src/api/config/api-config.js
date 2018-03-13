const key_config = {
  app_key: '3436445128',
  app_secret: '6a1d41d969da490d9a37d4457184ea0b',
  redirect_uri: 'http://192.168.1.104:8089/splash'
}

const host_config = {
  local: 'http://192.168.10.153:8080/webound/',
  host: 'http://47.100.119.217:8080/webound'
  // host: 'http://192.168.10.149:8080/webound'
  // host: 'http://116.62.223.160'
}

const api_router_config = {
  ologin_post: '/userLoginController.do?login',
  oregister_post: '/userLoginController.do?register',
  oforget_post: '/userLoginController.do?forgetPwd',
  ochange_post: '/userLoginController.do?changePwd',
  ovcode_get: '/vcode.do?api/sendVcode',
  ocheckphone_get: '/userLoginController.do?checkPhone',    
  osaveuserinfo_post: '/userInfoController.do?saveUserInfo',    
  ogetuserinfo_get: '/userInfoController.do?getUserInfo',
  osaveUserHeadPortrait_post: '/userInfoController.do?saveUserHeadPortrait',
  ogetUserHeadPortrait_get: '/userInfoController.do?getUserHeadPortrait',
  ogetFollowersByUserId_get: '/userCenterController.do?getFollowersByUserId',
  ofollow_get: '/userCenterController.do?follow',
  ocancelFollow_get: '/userCenterController.do?cancelFollow',
  ochangePwd_post: '/userLoginController.do?changePwd',
  osaveUserAddress_post: '/userAddressController.do?saveUserAddress',
  odelUserAddress_get: '/userAddressController.do?delUserAddress',
  ogetByAddressId_get: '/userAddressController.do?getByAddressId',
  oupdateUserAddress_post: '/userAddressController.do?updateUserAddress',
  ogetByUserId_get: '/userAddressController.do?getByUserId',
  osetDefaultAddress_get: '/userAddressController.do?setDefaultAddress',
  ogetCheckInByDate_get: '/userCenterController.do?getCheckInByDate',
  ouserDailyCheckI_get: '/userCenterController.do?userDailyCheckIn',
  ogetProductInfoByName_get: '/productsInfoController.do?getProductInfoByName',
  osaveMediaContent_post: '/mediaContentController.do?saveMediaContent',
  ogetMediaContent_get: '/mediaContentController.do?listMediaContent',
  ogetMediaContentDetail_get: '/mediaContentController.do?getMediaContentById',
  ogetMediaContentLike_get: '/mediaContentController.do?mediaContentLike',
  ogetCommentList_get: '/mediaCommentController.do?listComment',
  oDeleteComment_get: '/mediaCommentController.do?deleteComment',
  oSaveComment_post: '/mediaCommentController.do?saveComment',
  oLikeComment_post: '/mediaCommentController.do?likeComment',
  ogetMediaContentDetail_get: '/mediaContentController.do?getMediaContentById',
  ocollectMediaContent_get: '/mediaContentController.do?collect',
  oAddShopCart_post: '/productShoppingCartController.do?addShoppingCart',
  oDelShopCart_get: '/productShoppingCartController.do?delShoppingCart',
  oUpdateShopCart_post: '/productShoppingCartController.do?updateShoppingCart',
  oListShopCart_get: '/productShoppingCartController.do?listShoppingCart',
  oBachDel: '/productShoppingCartController.do?batchDel'

}

export const HOST_CONCIG = host_config
export const KEY_CONFIG = key_config
export const API_ROUTER_CONFIG = api_router_config
