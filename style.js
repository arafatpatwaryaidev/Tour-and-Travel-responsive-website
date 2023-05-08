$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
    });
    
    $(window).on('load scroll', function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

          if($(window).scrollTop() > 30){
            $('header').addClass('header-active');
          }else{
            $('header').removeClass('header-active');
          }

          // id find by scroll 
          $('section').each(function(){
            let id = $(this).attr('id');
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            if(top >= offset && top < offset + height){
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
          });
    });
});