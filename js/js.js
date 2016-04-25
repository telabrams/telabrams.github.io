/**
 * Created by Каурав on 28.03.2016.
 */

$(document).ready(function(){

                                                    /*Переключение слайдов*/

    var list = $('.slider_list').children('.slider_item');
    var i = 0;

    $('.slider_item').hide();
    $(list[0]).fadeIn();

    $(".next").click(function() {

        i++;
        $('.active').fadeOut().removeClass("active");
        $(list[i]).fadeIn().addClass('active');

        if (i == list.length) {
        i = 0;
        $('.active').fadeOut().removeClass("active");
        $(list[i]).fadeIn().addClass('active');
        }

    });

    $(".prev").click(function(){

        i--;
        $('.active').fadeOut().removeClass("active");
        $(list[i]).fadeIn().addClass('active');

        if (i < 0) {
            i = list.length-1;
            $('.active').fadeOut().removeClass("active");
            $(list[i]).fadeIn().addClass('active');
        }

    });

                                                        /*Появление стрелок*/

    var parentWidth = $(".arrow").parent().width();

    $(".header").mouseenter(function(){

        $(".next").css('display', 'block');
        $(".next").hide().fadeIn(200).animate({right:parentWidth-(parentWidth/1.075)}, 200);

        $(".prev").css('display', 'block');
        $(".prev").hide().fadeIn(200).animate({left:parentWidth-(parentWidth/1.075)}, 200);
    });

    $(".header").mouseleave(function(){
        $(".next").animate({right: "5px"}, 200);
        $(".next").fadeOut(100);

        $(".prev").animate({left: "5px"}, 200);
        $(".prev").fadeOut(100);
        });

    });


