/*global $ */
(function($) {
    "use strict";

    $(window).on('load', function(){
        $('body').addClass('stopScroll');
        $('.loader').fadeOut(500, function () {
            $(this).remove();
            $('body').removeClass('stopScroll');
        }); 

        if ($(window).width() < 768) {
            let $this = $('.textareaInput');
            let $contentHeight = $this.prop('scrollHeight');
            $this.css('height' , $contentHeight);
            let Text = document.getElementsByClassName('textareaInput');
            let textHeight = $this.prop('scrollHeight');
            $(Text).css('height' , textHeight);
        }
    });

    // OPEN SIDE  MENU 
    $('.menuBtn').on('click', function(){
        $('.navMenu').toggleClass('show');
        $('.navOverlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.navOverlay').on('click', function(){
        $(this).removeClass('show');
        $('.navMenu').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });
    
    // Header OWL 
    $('.owlHeader').owlCarousel({
        rtl: true ,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots: true,
        autoplaySpeed : 4000,
        autoplayTimeout : 4000,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    // Sponsors OWL 
    $('.owlSponsors').owlCarousel({
        rtl: true ,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        center : false ,
        autoplaySpeed : 4000,
        autoplayTimeout : 4000,
        responsive: {
            0: {
                items: 2,
                dotsEach: 2
            },
            600: {
                items: 3,
                dotsEach: 1
            },
            1000: {
                items: 4,
                dotsEach: 1
            }
        }
    });

    // Fancy Box
    $('.mediaBoxOverlay h3').on('click' , function(){
        $(this).prev('a').click();
    });

    // Tabs 
    $('.tabItem').click(function (e) {
        e.preventDefault();
        $('.tabItem').removeClass('active');
        $(this).addClass('active');
        let itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('active'); 
        $(itemId).addClass('active');  
    });

    // Upload Avatar 
    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                let Preview = $('.avatarUploadPreview');
                let previewImage =  Preview.find('img');
                let src = e.target.result;
                Preview.hide();
                previewImage.attr('src' , src );
                Preview.fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $('#avatarUploadInput').change(function() {
        readURL(this);
    });

    // Show Password 
    $('.showPassword').on('click' , function(){
        let input = $(this).prev('input');
        if (input.attr('type') == "password") {
            input.attr('type' , 'text');
        } else {
            input.attr('type' , 'password');
        }
    });

    // Delete File
    $(document).on('click','.deleteFile' , function(){
        $(this).parent('.uploadedFile').remove();
    });

    $('.uploadFile').on( 'change', function(e) {
        let fileName = e.target.value.split( '\\' ).pop();
        console.log(fileName);
        let files = $(this).parents('.uploadWrapper').prev('.uploadedFiles');
        files.append(
            '<div class="uploadedFile uploadWrapper">' +
                '<label>' + fileName  + '</label>' +
                '<span class="deleteFile"> ' +
                    '<img src="images/icon-delete.png" alt="icon">' +
                '</span>' +
            '</div>'
        );               
    });

    // Mixer
    $('.filterContent').mixItUp({
        selectors: {
            filter: '.filterBtn',
            target: '.col-12'
        }
    });

    // iniat WOW Js
    new WOW().init();
   
})(jQuery);

