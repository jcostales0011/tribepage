$(document).ready(function(){

    var showMore = "Read Now >",
    showLess = "Read Less",
    $window = $(window);

    $('.read-more').on('click', function(){
        var content = $(this).siblings('p');

        if(content.hasClass("hide-mobile")) {
                content.removeClass("hide-mobile");
                $(this).text(showLess);
            } else {
                content.addClass("hide-mobile");
                $(this).text(showMore);
            }

    });



    function stickyCampaign() {
      var $campaign = $('.campaign'),
      $document = $(document);

      if ($window.width() <= 767) {

        $window.scroll(function() {

              var footertotop = $('.footer').position().top;
              var scrolltop = $(document).scrollTop() + window.innerHeight;

              if (scrolltop >= footertotop - 200) {
                  $('.campaign').removeClass('sticky')
              }else{
                  $('.campaign').addClass('sticky')
              }
                  
          });
        }

        $("li.case-study").slice(0, 4).show();
        $(".load-more").on('click', function (e) {
            e.preventDefault();
            $("li.case-study:hidden").slice(0, 4).slideDown();
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 500);
        });
    }

    stickyCampaign();
    
    $window.resize(function() {
      stickyCampaign();
    });

    

});