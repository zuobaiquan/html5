window.onload = function(){
  //设置数字键
  function number(){
      //获取number标签
      var num = document.getElementsByClassName("number")[0];
      var divs = num.getElementsByTagName("div");
      var spans = num.getElementsByTagName("span");
      //每个数字旋转30度
      for (var i = 0;i < divs.length; i ++){
          var deg = i*30 + 120;
          divs[i].style.transform = "rotate("+(deg)+"deg)";
          spans[i].style.transform = "rotate("+(-deg)+"deg)";
      }
  };
  number();
  //设置旋转
  function run(){
    setInterval(function(){
      var nowDate = new Date();//获取时间
      var nowHours = nowDate.getHours();//获取小时
      var nowMinutes = nowDate.getMinutes();//获取分钟
      var nowSeconds = nowDate.getSeconds();//获取秒数
      //获取指针
      var hours = document.getElementById("hour");
      var minutes = document.getElementById("minute");
      var secondes = document.getElementById("seconds");
      secondes.style.transform = "rotate("+nowSeconds*6+"deg)";
      minutes.style.transform = "rotate("+nowMinutes*6+"deg)";
      //时的度数，加上分钟度数占360的百分比乘以30度等于当前时针的度数
      hours.style.transform = "rotate("+(nowHours*30+nowMinutes*6/360*30)+"deg)";
    },1000)
  }
  run();
}
