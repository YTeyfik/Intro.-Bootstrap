$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
        $("#carouselButton").click(function(){
            if($('#carouselButton').children('span').hasClass('fa-pause')){
                $("#mycarousel").carousel('pause');
                $('#carouselButton').children('span').removeClass('fa-pause');
                $('#carouselButton').children('span').addClass('fa-play');
            }
            else if($('#carouselButton').children('span').hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $('#carouselButton').children('span').removeClass('fa-play');
                $('#carouselButton').children('span').addClass('fa-pause');
            }
        });
}); 
$(document).ready(function(){
    $("#modalReserve").click(function(){
        $('#reserveModal').modal('toggle');
        $('#reserveModal').modal('show');
        $('#reserveModal').modal('hide');
    });
});  

$(document).ready(function(){
    $("#modalLogin").click(function(){
        $('#loginModal').modal('toggle');
        $('#loginModal').modal('show');
        $('#loginModal').modal('hide');
    });
});