window.onload=function () {
    var aArr=$(".tabBox").find("a");
    var len=aArr.length;
    for(var i=0;i<len;i++)
    {
        aArr[i].onclick=change1;//为每个a标签的单击事件赋函数，注意是arr[i].而不是aArr
        aArr[i].onmouseover=change2;
        aArr[i].onmouseout=nochange;
    }
    $("#hotsong").css("color",'#3effad');
    $("#hotsong").css("font-weight",'800');
    $(".hot").css("background-color",'#63ffda');

    $('.homemenu li').hover(function(){
        $(this).find('ul').show();
    },function(){
        $(this).find('ul').hide();
        /*$(".more").find('a[class^="selected"]').attr("class","");*/
    });
    $(".nav__item a").click(function() {
        $(".nav__item a").css('color','#000');
        $(this).css("color","#3effad");
        $(".nav__item a").css('font-weight','');
        $(this).css("font-weight","900");
    });
    $(".index a").click(function(){
        $(".index a").css('background-color','')
        $(this).css("background-color","#63ffda");
    });
    $(".area_item a").click(function(){
        $(".area_item a").css('background-color','')
        $(this).css("background-color","#63ffda");
    });
    $(".sex a").click(function(){
        $(".sex a").css('background-color','')
        $(this).css("background-color","#63ffda");
    });
    $('#list').click(function(){
          $.getJSON('/ajax_list/',function(ret){
            //返回值 ret 在这里是一个列表
            for (var i = ret.length - 1; i >= 0; i--) {
              // 把 ret 的每一项显示在网页上
              $('#list_result').append(' ' + ret[i])
            };
          })
      })
    function change1(event) {
        var index=event.target.dataset.index;
        for(var j=0;j<len;j++){
            if(j==index){
                aArr[j].className="selected";
                aArr[j].id="unchange";
            }
            else{
                aArr[j].className="";
            }
        }
        return index;
    }
    function change2(event) {
        var index=event.target.dataset.index;
        for(var j=0;j<len;j++){
            if(j==index){
                aArr[j].className="selected";
                aArr[j].id="change";
            }
            else{
                aArr[j].id="unchange";
            }
        }
    }

    function nochange(event) {
        var index=event.target.dataset.index;
        if(index==4){
            /*event.stopPropagation();*/
        }
        else{
            for(var j=0;j<len;j++){
                if(aArr[j].id=="change"){
                    aArr[j].className="";
                    aArr[j].id="unchange";
                }
            }
        }
    }


};
