$(document).ready(function() {
    $.fn.fullpage({
        resize: false,
        paddingTop: '40px',
        css3: true,
        fixedElements: '.hidden',
        
        onLeave: function(index, direction){
            if (index == 1 && direction == 'down'){
                $('.navbar').eq(index -1).removeClass("hidden");
                $('#logo').eq(index -1).removeClass('fade-in');
                $('#heading-0').eq(index -1).removeClass('fade-in');
                $('#text-0').eq(index -1).removeClass('fade-in');
                $('#learn-how').eq(index -1).removeClass('fade-in');
                $('#screen-1').eq(index -1).addClass('slide-right');
                $('#screen-1m').eq(index -1).addClass('slide-right');
                $('#text-1').eq(index -1).addClass('slide-left');
            }
            else if (index == 2 && direction == 'up'){
                $('.navbar').eq(index -2).addClass("hidden");
                $('#logo').eq(index -2).addClass('fade-in');
                $('#heading-0').eq(index -2).addClass('fade-in');
                $('#text-0').eq(index -2).addClass('fade-in');
                $('#learn-how').eq(index -2).addClass('fade-in');
                $('#screen-1').eq(index -2).removeClass('slide-right');
                $('#screen-1m').eq(index -2).removeClass('slide-right');
                $('#text-1').eq(index -2).removeClass('slide-left');
            }

            if (index == 2 && direction == 'down'){
                $('#screen-1').eq(index -2).removeClass('slide-right');
                $('#screen-1m').eq(index -2).removeClass('slide-right');
                $('#text-1').eq(index -2).removeClass('slide-left');
                $('#screen-2').eq(index -2).addClass('slide-right');
                $('#screen-2m').eq(index -2).addClass('slide-right');
                $('#text-2').eq(index -2).addClass('slide-left');
            }
            else if (index == 3 && direction == 'up'){
                $('#screen-2').eq(index -3).removeClass('slide-right');
                $('#screen-2m').eq(index -3).removeClass('slide-right');
                $('#text-2').eq(index -3).removeClass('slide-left');
                $('#screen-1').eq(index -3).addClass('slide-right');
                $('#screen-1m').eq(index -3).addClass('slide-right');
                $('#text-1').eq(index -3).addClass('slide-left');
            }

            if (index == 3 && direction == 'down'){
                $('#screen-2').eq(index -3).removeClass('slide-right');
                $('#screen-2m').eq(index -3).removeClass('slide-right');
                $('#text-2').eq(index -3).removeClass('slide-left');
                $('#screen-3').eq(index -3).addClass('slide-right');
                $('#screen-3m').eq(index -3).addClass('slide-right');
                $('#text-3').eq(index -3).addClass('slide-left');
            }
            else if (index == 4 && direction == 'up'){
                $('#screen-3').eq(index -4).removeClass('slide-right');
                $('#screen-3m').eq(index -4).removeClass('slide-right');
                $('#text-3').eq(index -4).removeClass('slide-left');
                $('#screen-2').eq(index -4).addClass('slide-right');
                $('#screen-2m').eq(index -4).addClass('slide-right');
                $('#text-2').eq(index -4).addClass('slide-left');
            }

            if (index == 4 && direction == 'down'){
                $('#screen-3').eq(index -4).removeClass('slide-right');
                $('#screen-3m').eq(index -4).removeClass('slide-right');
                $('#text-3').eq(index -4).removeClass('slide-left');
                $('#screen-4').eq(index -4).addClass('slide-right');
                $('#screen-4m').eq(index -4).addClass('slide-right');
                $('#text-4').eq(index -4).addClass('slide-left');
            }
            else if (index == 5 && direction == 'up'){
                $('#screen-4').eq(index -5).removeClass('slide-right');
                $('#screen-4m').eq(index -5).removeClass('slide-right');
                $('#text-4').eq(index -5).removeClass('slide-left');
                $('#screen-3').eq(index -5).addClass('slide-right');
                $('#screen-3m').eq(index -5).addClass('slide-right');
                $('#text-3').eq(index -5).addClass('slide-left');
            }

            if (index == 5 && direction == 'down'){
                $('#screen-4').eq(index -5).removeClass('slide-right');
                $('#screen-4m').eq(index -5).removeClass('slide-right');
                $('#text-4').eq(index -5).removeClass('slide-left');
                $('#screen-5').eq(index -5).addClass('slide-right');
                $('#screen-5m').eq(index -5).addClass('slide-right');
                $('#text-5').eq(index -5).addClass('slide-left');
            }
            else if (index == 6 && direction == 'up'){
                $('#screen-5').eq(index -6).removeClass('slide-right');
                $('#screen-5m').eq(index -6).removeClass('slide-right');
                $('#text-5').eq(index -6).removeClass('slide-left');
                $('#screen-4').eq(index -6).addClass('slide-right');
                $('#screen-4m').eq(index -6).addClass('slide-right');
                $('#text-4').eq(index -6).addClass('slide-left');
            }

            if (index == 6 && direction == 'down'){
                $('#screen-5').eq(index -6).removeClass('slide-right');
                $('#screen-5m').eq(index -6).removeClass('slide-right');
                $('#text-5').eq(index -6).removeClass('slide-left');
                $('#screen-6').eq(index -6).addClass('slide-right');
                $('#screen-6m').eq(index -6).addClass('slide-right');
                $('#text-6').eq(index -6).addClass('slide-left');
            }
            else if (index == 7 && direction == 'up'){
                $('#screen-6').eq(index -7).removeClass('slide-right');
                $('#screen-6m').eq(index -7).removeClass('slide-right');
                $('#text-6').eq(index -7).removeClass('slide-left');
                $('#screen-5').eq(index -7).addClass('slide-right');
                $('#screen-5m').eq(index -7).addClass('slide-right');
                $('#text-5').eq(index -7).addClass('slide-left');
            }
        }
    });
});