xbn().module("friendRaise",function(X){
//朋友众筹基类
function FriendRaise(){}FriendRaise.prototype={
//发起
launch:function(){var testData=[{name:"product",price:18}];
//请求模板
X.view.renderTmpl({url:"./template/friendRaise_1.html",where:$("#midBox"),renderData:{list:testData}}).then(function(){
//加载图片上传
function load_fileUpload(opts){var cover_fileInput=R_fileUpload.init({dataType:"json",where:opts.where,url:"/common/image/upload-source",formData:{dealID:"1cb4d78eda49c1fb3bfeb8ea",type:"7"},FileTypes:{rule:"(gif|jpe?g|png)",error:"图片只能是 jpg,jpeg,gif,png 格式"},
//文件大小限制
FileSizeLimit:{rule:2097152,error:"文件大小不能超过2M"},success:function(e,data){if(3==data.result.ret)return void alert("你上传的图片尺寸太小，请上传大于280*210的图片");var src=data.result.dat.path,currentURL=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");R_cropImage.init({img:currentURL+src,phpUrl:"/common/image/upload-crop-cover",path_output:currentURL+"/static/images/temp-lish",where:$("#imgWrap"),cutSuccess:function(res){var res=eval("("+res+")");if(res.ret)alert(res.msg);else{var src=res.dat.img_url;
//添加图片
dataUtil.renderData({isClear:!0,data:[1],render:function(e,t){return'<li><img src="'+src+'" alt=""><span style="display: none">修改</span></li>'},where:$("#pic-list-cover"),callback:function(e){e.find("li").on("mouseenter",function(){$(this).find("span").show()}).on("mouseleave",function(){$(this).find("span").hide()}),
//加载图片上传
load_fileUpload({where:e.find("li")})}}),
//验证特殊元素  ，如select ,  图片
firstValidator.valiSpecail({isYes:function(){return $(".pic-list img").length},jqueryInputElement:$("[name=imgCover]")}),$("#upload-cover").hide()}}})}})}
//发起专用select
function selectLaunchType(e,t){var i=$(e),a=i.children(".select-click"),n=a.children("span"),r=i.children(".select-option");//点击选项
$(a).click(function(e){e.stopPropagation(),$(r).is(":visible")?$(r).slideUp():$(r).slideDown().parent().siblings().find(".select-option").slideUp()}),$(document).click(function(e){r.is(e.target)||0!==r.has(e.target).length||$(r).is(":visible")&&$(r).slideUp()}),$(r).find("li").click(function(){$(n).html($(this).find("span").html()),$(r).slideToggle(),t&&t.call(this)})}
//保存发起项目
function saveProject(){var e=$.map($("#pic-list-pictrue img"),function(e,t){return $(e).attr("src")}).join(",");dataUtil.ajax({url:"/friend/project/ajax-save-project",errMsg:"系统错误：项目保存失败！",data:{category_id:$(".select-case1 .select-text").attr("data-id"),deal_name:commonUtils.filterTag($("[name=title]").val()),target_amount:$("[name=money]").val(),deal_desc:commonUtils.newline(commonUtils.filterTag($("[name=desc]").val())),deal_cover:$("#pic-list-cover img").attr("src"),deal_images:e}}).done(function(e){e.ret?alert(e.msg):location.href="/friend/project/share?deal_id="+e.dat.deal_id})}DataUtil.ajax({url:"/js/data/categories.json",type:"get",errMsg:"系统错误：分类信息获取失败！"}).done(function(e){e.ret?alert(e.ret):R_select({jqueryEle:$(".select-case1"),obj:".select-ipt",clickFn:function(e){
//验证特殊元素  ，如select ,  图片
firstValidator.valiSpecail({isYes:function(){return e.isSelected},jqueryInputElement:$("[name=useFor]")})},data:e.data,render:function(e,t){return t.icon=t.icon?t.icon:"xxx",'<li data-id="'+t.id+'"><img src="'+t.icon+'"/><span>'+t.name+"</span></li>"},where:$(".select-option ul")})}),
//加载图片上传
load_fileUpload({where:$("#upload-cover")}),
//统计字数
commonUtils.count({jqueryEle:$("[name=title]")});
//验证插件初始化
var firstValidator=Validator.init({where:$("#validateForm")});firstValidator.scan(),
//第一步点击
$(".complete-launch").click(function(){var e=$("#validateForm").valid();/*测试start*/
e=!0,/*测试end*/
e&&(
//显示第二步
location.hash="m=friendRaise2&a=launch")}),
//发起协议弹层
$("#argeement").click(function(){$.layer({hideTitle:!0,hideBtn:!0,shade:[.5,"#000"],area:["430px","366px"],closeBtn:0,dialog:{msg:$("#tpl-agreement").html(),btns:0},success:function(e,t){e.find(".agree").click(function(){window.layer.close(t)})}})})})}};var friendRaiseCase=new FriendRaise;friendRaiseCase[router.cache.currentRoute.action]()});