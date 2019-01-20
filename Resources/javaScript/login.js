$(document).ready(() => {
    /**************************OVERLAY *******************************/

    CustomBounce.create("myBounce", {strength: 0.3})
    TweenMax.set($('.container-flex'), {display: 'block'})

    const $myTl = new TimelineMax({paused: true});

    $myTl.set($('.overlay'), {width: '100%'})
         .from($('.overlay'), 0.3, {y: 0})
         .to($('.overlay'), 0.3, {y: '-150%'})
         .from($('.container-flex'), 0.4, { y: -200, scale: 0.9, opacity: 0, ease: "myBounce"})

         function timeline(){
             $myTl.play().delay(0.1)
         }
         let play = timeline();
        
    

    /************************************************LOGIN SECTION HTML *********************/
    var $button = $('.flex--contents button, .flex--contents h3');

    function click() {
        for (let i = 0; i < $button.length; i++) {
            if ($button[i]) {
                
                $button.on('click', () => {
                    TweenMax.to($('.search'), 0.5, {
                        width: '100%'
                    });
                    TweenMax.to($('.search input'), 0.3, {
                        display: 'block'
                    })
                    TweenMax.set($button, {
                        display: 'none'
                    })
                })
            }
        }
    }

    let clicked = click();

    /************SEARCH*******/
    $('.search').on('mouseover', () => {
        $('.flex--contents').css('border-left', 'none')
    }).on('mouseout', () => {
        $('.flex--contents').css('border-left', '')
    })
    $('.search input').focus(() => {
        $('.flex--contents').css('border-left', 'none')
    })

    $('.search input').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
            TweenMax.to($('.search'), 0.5, {
                width: '0'
            });
            TweenMax.to($('.search input'), 0.3, {
                display: 'none'
            })
            TweenMax.set($button, {
                display: 'block'
            })
            $('.flex--contents').css('border-left', '')


        }
    })

    /**********************************MOVIE SCROLL TO RIGHT AND LEFT **** **/
    var $counter = 1,
        $prev = $('.prev'),
        $next = $('.next'),
        $images = $('.img--1');


    $prev.on('click', () => {
        plusSlides(-1)
    })
    $next.on('click', () => {
        plusSlides(1)
    })
    next($counter)

    function plusSlides(n) {
        next($counter += n)

    }

    function next(n) {
        if (n > $images.length) {
            $counter = 1
        }
        if (n < 1) {
            $counter = $images.length
        }
        for (let i = 0; i < $images.length; i++) {
            TweenMax.set($images[i], {
                display: 'none'
            })

        }
        TweenMax.set($images[$counter - 1], {
            display: 'block'
        })
        TweenMax.from($images[$counter - 1], 0.3, {
            x: -500,
            ease: Expo.easeOut
        })

    }






    /****************************MEDIA QUERIES ***************/



    let $main = $('.main'),
        $section = $('.section');
    let $wrapper = $('.wrapper');

    function clickwrapper() {
        $wrapper.on('click', () => {

            if ($wrapper.hasClass('wrapper-position')) {
                $wrapper.removeClass('wrapper-position').addClass('change');
                TweenMax.set($main, {
                    x: 250
                })
                TweenMax.from($main, 0.3, {
                    x: 0
                })
                TweenMax.set($section, {
                    width: '35%',
                    display: 'block'
                })
                TweenMax.from($section, 0.3, {
                    width: '0'
                }, '-=0.2')




            } else if ($wrapper.hasClass('change')) {
                $wrapper.removeClass('change').addClass('wrapper-position')
                TweenMax.set($section, {
                    width: '0',
                    display: 'none'
                })
                TweenMax.from($section, 0.3, {
                    width: '30%'
                })
                TweenMax.set($main, {
                    x: 0
                })
                TweenMax.from($main, 0.3, {
                    x: 250
                })




            }
        })
    }



    $(window).resize(() => {
        let windowWidth = $(this).width();
        if (windowWidth < 800) {
            console.log('okay')

            





        } else {


        }
    })
    


    $('.sign-out').on('click', () => {
        
        
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
               window.location.href = 'index.html';
            }
        };
        xhttp.open("GET", "index.html", true);
        xhttp.send();
        

    })
    
    
   

    /* function resized() {
         let mediaQuery = window.matchMedia('(max-width: 800px)');
         if (mediaQuery.matches) {
             clickwrapper()

         }else{
             
         }


     }
     resized()
     */









})
