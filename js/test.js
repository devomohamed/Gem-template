$(function(){
    // scroll navbarr links
    $("header nav .navbar-collapse ul li a").click(function(e){
        e.preventDefault();
        $("html , body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        } , 1000)
        console.log("#" + $(this).data("scroll"));
    });
    // add active classon navbar link and remove from siblings
    $("header nav .navbar-collapse ul li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

        // add active link in scrolling 
        $(window).scroll(function () { 
        
            $('.block').each(function (){
                if($(window).scrollTop() >= $(this).offset().top)
                {
                    let iditem=$(this).attr('id');
                    $('.nav-item a').parent().removeClass('active');
                    $('.nav-item a[data-scroll="'+ iditem +'"]').parent().addClass('active');
                }
            })
                let back = $("header .start");
                let linkscolor = $(".navbar-light .navbar-nav .nav-link , .navbar-light .navbar-brand");
            if ($(window).scrollTop() >= 600) {
                back.css("backgroundColor" , "#f7f7f7");
                linkscolor.css("color","black");
            } else {
                back.css("backgroundColor" , "rgba(250,250,250,0.1)");
                linkscolor.css("color","white");
            }
        });

    });
