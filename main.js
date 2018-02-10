let code  = `
/* 各位看官老爷好，今天向大家展示一下如何画一个皮卡丘 */
/* 首先需要准备两张白纸 */
#wrapper {
  display: flex;
  height: 100%;
  margin: 20px 0;
}
#code-wrapper {
  width: 50%;
  height: 100%;
  border:1px solid #eee;
  margin-right: 20px;
  padding: 8px;
}
#preview-wrapper {
  width: 50%;
  height: 100%;
  border: 1px solid #eee;
}
/* 给所有元素加上过渡效果*/
* {transition: all .3s;}
/* 背景一片空白有点太难看了，加个背景色吧 */
body {
  background: rgb(0,43,54);color:#ddd;}
/* 加点代码高亮吧 */
.token.selector {color: #690;}
.token.property {color: #905;}
.token.punctuation {color: #387eb5;}
/* 接下来正式开始啦 */
.content-wrapper {
  width: 320px;
  height:460px;
  position: relative;
  margin: 10vh auto;
}
/* 先画左边的耳朵 */
.left-ear {
  width: 36px;height: 160px;border-top: 1px solid #0A0A0A;border-left: 3px solid #0A0A0A;
  border-right: 3px solid #0A0A0A;border-bottom-left-radius: 80px 70%;border-top-left-radius: 100%;
  border-top-right-radius: 100%;background: #fed823;position: absolute;top: 0;left: 48px;
  transform: rotateZ(25deg);overflow: hidden;z-index:100;}
/* 好像画的速度太慢了，接下来要加速啦 */
.punta {
  width:36px;height:50px;border-top-right-radius: 10%;border-bottom-left-radius: 5px;
  border-bottom:3px solid #0A0A0A;background: #231815;position: absolute;
  top: 0;left: 2px;transform: rotateZ(12deg);}
/* 接着画右边的耳朵 */
.right-ear {
  width:30px;height:140px;border-bottom-left-radius: 80px 150%;border-top-left-radius: 190%;
  border-top-right-radius: 150%;border: 3px solid #0A0A0A;border-bottom: none;background: #231815;
  position: absolute;top:69px;right:80px;transform: rotateZ(80deg);overflow: hidden;}
.fillear {
  width:40px;height:110px;border-top-right-radius:80%;border-top: 3px solid #0A0A0A;
  background: #fed823;position: absolute;bottom: 0;left:0;}
/* 接下来准备画皮卡丘的身体 */
.pika-body {
  width: 185px;height:340px;position: absolute;bottom: 0;
  transform: rotateZ(-1deg);z-index: 100;}
/* 只有两只耳朵有点太奇怪了呢，给皮卡丘一颗脑袋 */
.pika-head {
  width:160px;height: 160px;border-top-left-radius: 130px 120px;
  border-top-right-radius: 150px 100px;border-bottom-left-radius: 80px 80px;
  border-bottom-right-radius: 25px 120px;border:3px solid #0A0A0A;
  border-bottom: none;background: #fed823;position: absolute;right: 7px;}
/* 皮卡丘的左脸颊 */
.pika-head::before {
  content: "";display: block;width: 30px;height: 70px;border-top-left-radius: 200% 90px;
  border-bottom-left-radius: 200% 90px;border-left: 4px solid #0A0A0A;background: #fed823;
  position: absolute;top: 81px;left: -10px;transform: rotateZ(-28deg);}
.pika-head::after {
  content: "";display: block;width: 23px;height: 40px;border: 3px solid #0A0A0A;
  border-left: none;background: #e94e24;position: absolute;
  border-radius: 50%;top: 80px;left: -12px;}
/* 皮卡丘的右脸颊 */
.cheek-right {
  width: 35px;height: 35px;border: 3px solid #0A0A0A;border-radius: 50%;
  background: #e94e24;position: absolute;top: 90px;right: 18px;}
/*左眼和右眼*/
.eye-left {
  width: 20px;height: 32px;border-radius: 50%;background: #0A0A0A;
  position: absolute;top: 40px;left: 10px;transform: rotateZ(10deg);}
.eye-left::before {
  content: "";display: block;width: 8px;height: 13px;background: #fff;
  border-radius: 50%;position: absolute;top: 5px;right:1px;transform: rotateZ(8deg);}
.eye-left::after {
  content: "";display: block;width:24px;height:3px;background: #0A0A0A;
  transform:rotateZ(28deg);}
.eye-right {
  width: 30px;height:33px;border-radius: 50%;background: #000;position: absolute;
  top: 45px;right: 25px;}
.eye-right::before {
  content: "";display: block;width: 10px;height:12px;background: #fff;
  border-radius: 50%;position: absolute;top: 5px;left: 10px;}
.eye-right::after {
  content: "";display: block;width:28px;height:3px;background: #0A0A0A;
  position: absolute;top: -1px;left: -1px;transform: rotateZ(-28deg);}
/* 接下来是皮卡丘的鼻子 */
.nose {
  width:11px;height: 11px;border-radius: 0 50% 30% 50%;background: #0A0A0A;
  position: absolute;top:75px;left: 40px;transform: rotateZ(-36deg);}
/*然后是萌萌的小嘴巴*/
.mouth {
  width: 25px;height: 20px;border-radius: 0 0 100% 0;border-bottom: 4px solid #0A0A0A;
  border-right: 3px solid #0A0A0A;position: absolute;
  top: 90px;left: 48px;transform: rotateZ(55deg);}
.mouth::after {
  content: "";display: block;width:20px;height: 15px;border-radius: 0 0 90% 0;
  border-bottom: 4px solid #0A0A0A;border-right: 3px solid #0A0A0A;position: absolute;
  top: 20px;right: 16px;transform: rotateZ(-22deg);}
/* 皮卡丘组的大肚腩 */
.mid {
  width: 160px;height: 150px;border-top-right-radius: 70px 140px;
  border-bottom-right-radius: 50px;border-bottom-left-radius: 30px;
  border-bottom: 3px solid #0A0A0A;border-right: 3px solid #0A0A0A;
  position: absolute;top: 158px;left: 13px;background: #fed823;z-index:1;}
.mid::before {
  content: "";display: block;width: 130px;height: 40px;border-right: 3px solid #0A0A0A;
  background: #fed823;position: absolute;right: 15px;transform: rotateZ(-8deg);}
.mid::after {
  content: "";display: block;width: 60px;height: 100px;
  border-radius: 90% 30% 0 80%;border-bottom: 3px solid #0A0A0A;border-left: 3px solid #0A0A0A;
  background: #fed823;position: absolute;bottom: -2px;left: -20px;}
/* 左手和右手 */
.left-hand {
  width: 65px;height: 65px;border-radius: 70% 50% 80% 50%;
  border-left: 3px solid #0A0A0A;border-bottom: 3px solid #0A0A0A;
  background: #fed823;position: absolute;top: -10px;left: -20px;z-index: 1;}
.left-hand::before {
  content: "";display: block;width: 40px;height: 10px;border-radius: 40%;
  border-top: 2px solid #0A0A0A;position: absolute;top: 15px;left: 18px;transform: rotateZ(17deg);}
.right-hand {
  width: 85px;height: 65px;border-top-left-radius: 150px 150%;
  border-bottom-left-radius: 50px 70%;border-bottom-right-radius: 50px 70%;
  border-left: 3px solid #0A0A0A;border-bottom: 2px solid #0A0A0A;
  background: #fed823;position: absolute;top:-5px;right: 45px;z-index: 1;}
/* 皮卡丘也有纹身！ */
.mark1 {
  width: 18px;height: 12px;background: #c76e29;border: 2px solid #0A0A0A;
  border-top-left-radius: 50px 100%;border-bottom-left-radius: 50px 100%;position: absolute;
  right: 13px;top: 27px;transform: rotateZ(-15deg);}
.mark2 {
  width: 28px;height: 16px;border: 2px solid #0A0A0A;background: #c76e29;
  border-top-left-radius: 100px 190%;border-bottom-left-radius: 50px 130%;
  position: absolute;top: 67px;right: 1px;transform: rotateZ(-15deg);}
/* 皮卡丘的脚 */
.left-footer {
  width: 70px;height: 35px;border: 3px solid #0A0A0A;border-radius: 75%;
  background: #fed823;position: absolute;bottom: 10px;left: 10px;transform: rotateZ(-15deg);}
.left-footer::before {
  content: "";display: block;width: 25px;height: 6px;border-top: 3px solid #0A0A0A;
  border-radius: 40%;position: absolute;bottom: 8px;transform: rotateZ(-8deg);}
.left-footer::after {
  content: "";display: block;width: 25px;height: 8px;border-top: 3px solid #0A0A0A;
  border-radius: 50%;transform: rotateZ(-15deg);position: absolute;bottom: 12px;left: -1px;}
.right-footer {
  width: 70px;height: 30px;border: 3px solid #0A0A0A;border-radius:85%;
  background: #fed823;position: absolute;bottom: 9px;right: -5px;transform: rotateZ(17deg);}
.right-footer::before {
  content: "";display: block;width: 25px;height: 6px;border-top: 3px solid #0A0A0A;
  border-radius: 40%;position: absolute;bottom: 3px;right: 0;transform: rotateZ(15deg);}
.right-footer::after {
  content: "";display: block;width: 25px;height: 6px;border-top: 3px solid #0A0A0A;
  border-radius: 40%;position: absolute;bottom: 9px;right: -1px;transform: rotateZ(15deg);}

/*最后是皮卡丘会动的尾巴*/
.tail {
  width: 150px;height: 250px;position: absolute;top: 140px;right: 0;transform-origin: 0 bottom;
  animation: tailmove 3s ease infinite;}
.part1 {
  width: 60px;height: 15px;border-bottom: 2px solid #0A0A0A;background: #983c0d;
  position: absolute;left: 0;bottom: 18px;transform: rotateZ(-50deg);}
.part2 {
  width: 50px;height: 18px;border-top: 2px solid #0A0A0A;background: #983c0d;
  transform: rotateZ(40deg);position: absolute;left: 9px;bottom: 51px;overflow: hidden;}
.part2::before {
  content: "";display: block;border-left:9px solid #fed823;
  border-right: 9px solid transparent;border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;position: absolute;left: 14px;top: -1px;}
.part2::after {
  content: "";
  display: block;border-left:9px solid #fed823;
  border-right: 9px solid transparent;border-bottom: 5px solid transparent;
  border-top: 5px solid transparent;  position: absolute;left: 14px;top: 8px;}
.part3 {
  width: 70px;height: 25px;border-top: 2px solid #0A0A0A;background: #fed823;
  position: absolute;left:2px;bottom: 79px;transform:rotateZ(-45deg);}
.part4 {
  width: 80px;height: 35px;border-top: 2px solid #0A0A0A;background: #fed823;
  position: absolute;left: -8px;bottom: 108px;transform: rotateZ(45deg);}
.part5 {
  width: 150px;height:85px;border-top: 3px solid #0A0A0A;border-left: 2px solid #0A0A0A;
  border-right: 2px solid #0A0A0A;border-top-left-radius: 100% 30px;
  border-bottom-right-radius: 20% 10px;background: #fed823;
  position: absolute;left: -10px;bottom: 140px;}

/* 来加点特效 */
img.shock-left {
  position: absolute;display: block;top: 80px;left: -130px;
  transform: rotateZ(140deg);z-index: 10;}
img.shock-right {
  position: absolute;display: block;top: 80px;right: -110px;
  transform: rotateZ(-14deg);z-index: 10;}

@keyframes tailmove {
 0% {transform: rotateZ(0);}
 50% {transform: rotateZ(15deg);}
 100% {transform: rotateZ(0);}}
 /* 调整下样式 */
 html {
  perspective: 1000;
  -webkit-perspective: 1000;
 }
 #code-wrapper {
   position:relative;top:0;left:0;
   transform: rotateY(10deg) translateZ(-100px);
 }
`
!function() {
  let duration = 50
  function writeCode(code) {
    let domCode = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let action = document.querySelector('.actions')
  
    let n = 0
    let id2
    let id = setTimeout(function run(){
      n += 1
      domCode.innerHTML = Prism.highlight(code.substring(0,n),Prism.languages.css)
      styleTag.innerHTML = code.substring(0,n)
      let s = code.substring(0,n)
      while(s.endsWith('.punta')) {
        duration = 0
        break
      }
      domCode.scrollTop = domCode.scrollHeight
      if(n < code.length) {
        id2 = setTimeout(run, duration)
      }
    },10)
    $('.actions > button').on('click',() => {
      window.clearTimeout(id2)
      domCode.innerHTML = Prism.highlight(code,Prism.languages.css)
      styleTag.innerHTML = code
    })
  }
  writeCode(code)
}()
