xbn().module("friendRaise2",function(e){
//朋友众筹基类
function i(){}i.prototype={
//发起
launch:function(){var i=[];
//请求模板
e.view.renderTmpl({url:"./template/friendRaise_2.html",where:$("#midBox"),renderData:{list:i}}).then(function(){
//注册事件
eventSystem.on("friendRaise","imgLength_change",function(){$("#pic-list-pictrue img").length>=3?$("#upload-pictrue").hide():$("#upload-pictrue").show()}),
//删除图片
$("#pic-list-pictrue").on("click",".js-del-icon",function(){$(this).closest("li").remove(),eventSystem.trigger("friendRaise","imgLength_change")});
//普通图片
R_fileUpload.init({where:$("#upload-pictrue"),url:"/common/image/upload-image",formData:{PHPSESSID:"fto6uk3ignmlf820ra9o9aqmv7",dealID:"1cb4d78eda49c1fb3bfeb8ea",type:"7"},FileTypes:{rule:"(gif|jpe?g|png)",error:"图片只能是 jpg,jpeg,gif,png 格式"},
//文件大小限制
FileSizeLimit:{rule:2097152,error:"文件大小不能超过2M"},success:function(e,i){var t=i.result.dat.img_url;
//添加图片
dataUtil.renderData({render:function(e,i){return'<li class="js-del-item"><img src="'+t+'" alt=""><span class="del js-del-icon"></span></li>'},where:$("#pic-list-pictrue")}),eventSystem.trigger("friendRaise","imgLength_change")}});
//验证插件初始化
Validator.init({where:$("#secondStepForm"),
//代表参与验证
valiFlag:"vali-yes"}).scan(),
//发起完成
$("#faqi-submit").off("click").click(function(){var e=$("#secondStepForm").valid();/*测试start*/
//res = true;
//idCardIsAuth = 1;
/*测试end*/
e&&(
//是否身份验证  1 认证过  0 未认证
idCardIsAuth?
//保存发起项目
saveProject():that.thirdStep())})})}};var t=new i;t[router.cache.currentRoute.action]()});