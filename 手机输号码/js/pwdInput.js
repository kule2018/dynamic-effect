/* Created by dgex on 20190/8/28
 * Email:910547462@qq.com
 * 如需更多功能，请联系邮箱~
 */
var isPwdInput={pwdArr:[1,2,3,4,5,6,7,8,9,"",0,"删除"],init:function(callback){this.template();var self=this;var pwd="";var el=document.getElementsByClassName("pwd_btn");for(var index=0;index<el.length;index++){el[index].addEventListener("click",function(_this){var _text=_this.target.dataset.item;if(_text==""){return}if(_text=="删除"){if(pwd==""){return}pwd=pwd.substring(0,pwd.length-1);self.callbackPwd(pwd,callback,_text);return}if(pwd.length>=6){self.callbackPwd(pwd,callback);return}pwd+=_text;self.callbackPwd(pwd,callback)})}var elclose=document.getElementsByClassName("pwd_close")[0];elclose.addEventListener("click",function(_this){self.close(callback)})},callbackPwd:function(pwd,callback,type){if(type=="删除"){this.removeClass(pwd)}else{this.addClass(pwd)}callback&&callback({pwd:pwd})},template:function(){var temp="";var temp2="";for(var index=0;index<6;index++){temp+='<span class="pwd_line"></span>'}for(var index=0;index<this.pwdArr.length;index++){var _index=this.pwdArr[index];if(typeof _index=="number"){temp2+='<span class="pwd_btn pwd_line" data-item='+_index+">"+_index+"</span>"}else{temp2+='<span class="pwd_btn pwd_line pwd_gray '+(_index=='删除'?'pwd_delete':'')+'" data-item='+_index+"></span>"}}var html='<div class="pwd_fixed" id="pwd_fixed"><div class="pwd_box">'+'<div class="pwd_title"><span class="pwd_close"></span><span>请输入支付密码</span></div>'+'<div class="pwd_input pwd_line">'+temp+"</div>"+'<div class="pwd_num">'+temp2+"</div>"+"</div></div>";document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend",html);setTimeout(function(){document.querySelectorAll(".pwd_box")[0].classList.add("on")},100)},addClass:function(pwd){for(var index=0;index<pwd.length;index++){document.querySelectorAll(".pwd_input span")[index].classList.add("on")}},removeClass:function(pwd){document.querySelectorAll(".pwd_input span")[pwd.length].classList.remove("on")},open:function(callback){this.init(callback);callback&&callback({type:0})},close:function(callback){document.querySelectorAll(".pwd_box")[0].classList.remove("on");callback&&callback({type:1});setTimeout(function(){document.getElementById("pwd_fixed").remove()},300)}};