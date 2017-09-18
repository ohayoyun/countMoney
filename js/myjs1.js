$(function () {
    touch.on('#start_btn','tap',function () {
        $('#user_data').show();
    });
    touch.on('.ranking','tap',function () {
        $('#shiyong').show();
    });
    touch.on('.activity_rule','tap',function () {
        $('#activity_rule').show();
    });
    touch.on('.prize','tap',function () {
        $('#prize').show();
    });
    touch.on('.shiyong','tap',function () {
        $('#shiyong').show();
    })
    touch.on('.sub','tap',function () {
        $('#game').show();
        $('#index').hide();
        $('#user_data').hide();
    })
    touch.on('.close','tap',function (e) {
        $(this).parent().hide();
    })
   /* game*/
    let qian_wrap = document.querySelector('.qian_wrap');
    let p2_qian = document.querySelector('.p2_qian');
    let span = document.querySelectorAll('#timeDown>span');
    let ge = 1;
    let shi = 1;
    let bai = 1;
    let sum = 0;
    let clock = 59;
    let allowClock = false;
    let isOk = true;
    touch.on('.p2_qian','swipeup',function () {
        if(!isOk){
            return;
        }

        if(allowClock == false){
            clockMove();
            allowClock = true;
        }

        showScore();
        sum++;
        let newImg = document.createElement('img');
        newImg.src = 'img/p2_qian.jpg';
        newImg.className = 'moneyMove';
        newImg.addEventListener('animationend',function () {
            qian_wrap.removeChild(newImg);
        })
        qian_wrap.appendChild(newImg);
    })
    /*记分数*/
    function showScore() {
        if(ge == 10){
            ge = 0;
            if(shi == 10){
                shi = 0;
                span[0].innerHTML = bai;
            }
            span[1].innerHTML = shi;
            shi++;
        }
        span[2].innerHTML = ge;
        ge++;
    }
    /*倒计时*/
    function clockMove() {
        setInterval(function () {
            if(clock == 0){
                $('#game').hide();
                $('#p3').show();
                gameOver();
            }
            span[3].innerHTML = clock;
            clock--;
        },1000)
    }
    /*第三页面*/
    function gameOver() {
        $('#result_num').html('￥'+sum);
    }

    touch.on('.p3_share_btn','tap',function () {
        $('#share').show();
    });
    touch.on('#share','tap',function () {
        $('#share').hide();
    })
    touch.on('.p3_again','tap',function () {
        location.reload();
    })

})