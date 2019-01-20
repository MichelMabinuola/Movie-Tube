$(document).ready(() => {

    const $circle = $('#circle'),
        duration = 3,
        $cover = $('.cover'),
        $form = $('.form'),
        $bounceTl = new TimelineMax({
            delay: 0.5,
            paused: true
        });

    TweenMax.set($cover, {
        display: 'block'
    })

    CustomBounce.create("myBounce", {
        strength: 0.8
    })
    $bounceTl.from($('#Layer_1'), 0.3, {
            opacity: 0
        })
        .from($form, duration, {
            y: -500,
            opacity: 0,
            ease: "myBounce"
        })
        .from($circle, duration, {
            x: -500,
            opacity: 0,
            ease: "myBounce",
            transformOrigin: 'bottom'
        }, '-=1')

    function playBounce() {
        $bounceTl.play()
    }
    let bouncing = playBounce();




    /*******************************************USERNAME AND PASSWORD FORM SECTION ****************8*/
    $('.form-group input').focus(function () {
        $(this).parent('.form-group').addClass('focused')
    });

    $('.form-group input').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).parent('.form-group').removeClass('focused')
        }
    })



    $('.button').on('click', () => {

        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                window.location.href = 'login.html'
            }
            return false;
        };
        xhttp.open("GET", "login.html", true);
        xhttp.send();

       
    })









})
