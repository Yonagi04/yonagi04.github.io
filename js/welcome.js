function browserTC(){btf.snackbarShow("浏览器版本较低，网站样式可能错乱")}function browserVersion(){var e=navigator.userAgent,o=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1,t=(e.indexOf("Trident")>-1&&e.indexOf("rv:11.0"),e.indexOf("Edge")>-1&&!o),n=e.indexOf("Firefox")>-1,i=e.indexOf("Opera")>-1||e.indexOf("OPR")>-1,c=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1&&-1==e.indexOf("Edge")&&-1==e.indexOf("OPR");e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome")&&-1==e.indexOf("Edge")&&e.indexOf("OPR");t?e.split("Edge/")[1].split(".")[0]<90&&browserTC():n?e.split("Firefox/")[1].split(".")[0]<90&&browserTC():i?e.split("OPR/")[1].split(".")[0]<80&&browserTC():c&&e.split("Chrome/")[1].split(".")[0]<90&&browserTC()}function setCookies(e,o){let t=new Date((new Date).getTime()+24*o*60*60*1e3).toGMTString();for(let o in e)document.cookie=o+"="+e[o]+";expires="+t}function getCookie(e){var o,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(o=document.cookie.match(t))?unescape(o[2]):null}document.addEventListener("DOMContentLoaded",(function(){const e=localStorage.getItem("popWelcomeWindow"),o=localStorage.getItem("popCookieWindow");e||(btf.snackbarShow("欢迎访问Yonagi's Sekai！"),localStorage.setItem("popWelcomeWindow","true")),o||(setTimeout((function(){const{position:e,bgLight:o,bgDark:t}=GLOBAL_CONFIG.Snackbar,n="light"===document.documentElement.getAttribute("data-theme")?o:t;Snackbar.show({text:"本站使用Cookie和本地/会话存储保证浏览体验和网站统计",pos:e,backgroundColor:n,actionText:"查看博客声明",onActionClick:function(e){window.open("/license")},customClass:"snackbar-css"})}),3e3),setTimeout((function(){const{position:e,bgLight:o,bgDark:t}=GLOBAL_CONFIG.Snackbar,n="light"===document.documentElement.getAttribute("data-theme")?o:t;Snackbar.show({text:"了解本站为你的隐私保护所做的努力",pos:e,backgroundColor:n,actionText:"查看博客声明",onActionClick:function(e){window.open("/privacy")},customClass:"snackbar-css"})}),3e3),localStorage.setItem("popCookieWindow","true"))})),1!=getCookie("browsertc")&&(setCookies({browsertc:1},1),browserVersion()),document.addEventListener("keydown",(function(e){if(123===e.keyCode){const{position:e,bgLight:o,bgDark:t}=GLOBAL_CONFIG.Snackbar,n="light"===document.documentElement.getAttribute("data-theme")?o:t;Snackbar.show({pos:e,text:"您已打开开发者工具，请遵守MIT规范，合理扒站",backgroundColor:n,actionText:"查看博客声明",onActionClick:function(e){window.open("/license")},customClass:"snackbar-css"}),console.log("password: yonagi2333")}})),document.addEventListener("copy",(function(e){const{position:o,bgLight:t,bgDark:n}=GLOBAL_CONFIG.Snackbar,i="light"===document.documentElement.getAttribute("data-theme")?t:n;Snackbar.show({pos:o,text:"复制成功！转载请注明地址，遵守CC规范",backgroundColor:i,actionText:"查看博客声明",onActionClick:function(e){window.open("/license")},customClass:"snackbar-css"})}));