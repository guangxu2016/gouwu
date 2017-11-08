/*
* @Author: dhl
* @Date:   2017-10-21 10:36:32
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-23 15:48:51
*/

$(function(){
    $('#fullpage').fullpage({
        // 设置内容是否居中显示 true （居中显示）
        verticalCentered:false,
        //设置背景颜色
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
        // 显示导航
        navigation: true,
        // 页面之间的时间
        scrollingSpeed:1500,
        // 页面结构加载完成后触发该事件
        afterRender:function(){
            //为继续往下设置点击事件
            $(".down").on("click",function(){
                // 插件机制
                $.fn.fullpage.moveSectionDown();
                // $(this).moveSectionDown();
            })
        },
        //进入到当前屏
        afterLoad:function(anchorLink,index){
            $(this).addClass('select');
            //显示往下的按钮
            $(".down").fadeIn();

            $(".select .section_five .mouse .handImg").on("transitionend",function(){

                 $(".section_five .mouse .mouse_two").show();

                 $(".section_five .card .sofa").addClass('animate');
            })
            $(".select .section_six").on("transitionend",function(){
                $(".section_six .six_bigcar .workerImg").addClass('animate');
            });

            if(index==8){

                $(this).on("mousemove",function(e){

                   // 手随着鼠标移动
                   $(".section_eight .hand").css({
                      "left":e.clientX+10,
                      "top": e.clientY+10
                   });
                })


                $(".section_eight .btns").on("mouseenter",function(){

                    $(".section_eight .btns img:last-child").show();

                }).on("mouseleave",function(){

                     $(".section_eight .btns img:last-child").hide();
                })


                $(".section_eight .more").on("click",function(){

                    // 回到第一屏
                    $.fn.fullpage.moveTo(1)
                })
            }


        },
        // 离开当前页面进入到下一屏的时候
        onLeave:function(index,nextIndex,direction){
            //继续往下按钮隐藏
            $(".down").fadeOut();
             // 离开第二屏进入第三屏
             if(index==2 && nextIndex==3){
                $(".section_two .sofa_hide").addClass('animate').on("animationend",function(){
                    //当该动画执行完以后会触发该事件
                    $(".section_three .size img:last-child").show();
                    $(".section_three .btns img:last-child").show();
                });
             }else if(index==3 && nextIndex==4) {
                $(".section_four .cloud").addClass('animate');
                //从第三屏进入到第四屏
                $(".section_three .three_sofa_hide").addClass('animate').on("animationend",function(){
                     $(".section_four .car img:first-child").show();
                     $(".section_four .car").addClass('animate').on("transitionend",function(){
                           $(".section_four .text img:last-child").fadeIn(500,function(){
                                $(".section_four .address").fadeIn(500,function(){
                                     $(".section_four .address img:last-child").fadeIn();
                                });
                           });
                     });
                });
             }else if(index==5 && nextIndex==6){

                $(".section_five .yincang_sofa").addClass('animate');
                $(".section_six .six_baiyun").addClass('animate');
                $(".section_six .six_package").addClass('animate');
             }
        }
    });
});