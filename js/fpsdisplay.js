var rAF=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},frame=0,allFrameCount=0,lastTime=Date.now(),lastFameTime=Date.now(),loop=function(){var e=Date.now(),a=e-lastFameTime,o=Math.round(1e3/a);if(lastFameTime=e,allFrameCount++,frame++,e>1e3+lastTime){if((o=Math.round(1e3*frame/(e-lastTime)))<=6)var s='<span style="color:#bd0000">卡成ppt</span>';else if(o<=10)s='<span style="color:red">电竞级帧率</span>';else if(o<=14)s='<span style="color:yellow">难受</span>';else if(o<24)s='<span style="color:orange">卡</span>';else if(o<=40)s='<span style="color:green">...</span>';else s='<span style="color:#425aef">正常</span>';document.getElementById("fps").innerHTML=`FPS:${o} ${s}`,frame=0,lastTime=e}rAF(loop)};function stopFps(e){e?($("#fps").show(),btf.snackbarShow("帧率检测已开启")):($("#fps").hide(),btf.snackbarShow("帧率检测已关闭"))}loop();