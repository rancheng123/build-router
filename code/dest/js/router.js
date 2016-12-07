var router=function(t){
//路由基类
function o(){this.cache={},this.defaultHash="m=friendRaise&a=launch"}return o.prototype={
//请求本地JS
requestScript:function(t){return $.ajax({url:t.url,type:"GET",dataType:"script",async:!1,cache:!1}).fail(function(){console.error("请求js"+t.url+"失败")})},
//解析Url
parseUrl:function(){var t=this;console.log(location.hash),
//没有hash
location.hash||(location.hash=t.defaultHash);
//检测hash  格式
var o=/^\#\w\=\w+\&\w\=\w+$/.test(location.hash);o||console.error("请输入正确的hash格式,如 m=friendRaise&a=launch");var e=location.hash.substring(1).split("&"),r=e[0].split("=")[1],n=e[1].split("=")[1];return{module:r,action:n,baseUrl:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")}},
//寻址切换模块
requestModuleByHash:function(){var t=this;t.cache.currentRoute=t.parseUrl();var o=t.cache.currentRoute.module,e=(t.cache.currentRoute.action,xbn());
//如果有该模块
e.isInEventSystem(e.oContext,o)?e.publish(o,e):t.requestScript({url:"./js/modules/"+o+".js"}).done(function(){e.publish(o,e)})},/* switchRoute: function(hash){
             var that = this;
             location.hash = hash;
             that.requestModuleByHash();
             },*/
start:function(){var t=this;t.requestModuleByHash(),
//监听hash (依赖jquery.ba-hashchange.js)
$(window).hashchange(function(o){t.requestModuleByHash()})}},t.router=new o,t.router.start(),t.router}(this);