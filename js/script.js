$(document).ready(function(){

   //------------------------------ xs navbar open close 
    $('.xs-navbar-btn').click(function(){
        var right = $('.xs-navbar').css('right');
        $('.xs-navbar').animate({right: '0px'});
    });
    $('.xs-navbar-content > i').click(function(){
        $('.xs-navbar').animate({right: '-100%'});
    });
    $('.xs-navbar').click(function(e){
        if( e.target.id == 'xs-navbar-id'){
            $('.xs-navbar').animate({right: '-100%'});
        }
    }); 
    /*--- xs navbar sub menu ---*/
    $('.xs-sub-menu > a').click(function(){
        if( $(this).next('ul').css('display') == 'none' ){
            $(this).next('ul').slideDown();
        }else{
            $(this).next('ul').slideUp();
        }
        
    });
    //-------------------------------------
    $('body').click(function(e){
        if( $(e.target).attr('id') == 'black-background'){
            $('#places-id').css('z-index','0');
            $('#categories-id').css('z-index','0');
            $('#black-background').css('display','none');
        }
    })
    $('#places-id , #categories-id').click(function(e){
        if( $('#black-background').css('display') == 'block'){
            $(this).css('z-index','0');
            $('#black-background').css('display','none');
        }else{
            $(this).css('z-index','2');
            $('#black-background').css('display','block');
        } 
    });
    
    
    //--------------------------------------- new radio btn
    $('.radio-lable').click(function(){
        if( $(this).hasClass("checked") ){
//            $(this).children().css('display','none');
        }else{
            $('.radio-lable').children().css('display','none');
            $('.radio-lable').removeClass("checked");
            $(this).children().css('display','block');
            $(this).addClass("checked");
        }
    })
    
    //----------------------------------------- upload image preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#preview-img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#image-input").change(function(){
        readURL(this);
    });
    
    //------------------------------------------ post slider 
    $(document).ready(function() {
        $('.pgwSlider').pgwSlider({listPosition : 'left'});
        
    });
    
    //------------------------------------------- change post style
    $("#list-btn").click(function(){
        $("#posts-main-div").removeClass("results-box-style");
        $("#posts-main-div").addClass("results-list-style");
        $("#box-btn").removeClass("active");
        $("#list-btn").addClass("active");
    });
    $("#box-btn").click(function(){
        $("#posts-main-div").removeClass("results-list-style");
        $("#posts-main-div").addClass("results-box-style");
        $("#list-btn").removeClass("active");
        $("#box-btn").addClass("active");
    });
    
});