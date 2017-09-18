/**
 * Created by Administrator on 2017/9/15.
 */
$(function () {
    touch.on('.start_btn','tap',function () {
        $('#user_data').show()
    });

    touch.on('.ranking','tap',function () {
        $('#ranking').toggle()
    });
    touch.on('.activity_rule','tap',function () {
        $('#activity_rule').toggle()
    });
    touch.on('.prize','tap',function () {
        $('#prize').toggle()
    });
    touch.on('.shiyong','tap',function () {
        $('#shiyong').toggle()
    });
    touch.on('.close','tap',function (e) {
        // console.log(e.target);
        $(e.target).parent().hide();
    });
    touch.on('.sub','tap',function () {
        $('#index').hide();
        $('#game').show();
        $('#user_data').hide();
    });

    /*第三页面*/
    touch.on('.p3_share_btn','tap',function () {
        $('#share').show();
    });
    touch.on('#share','tap',function () {
        $('.p1_mask').hide();
    });

    touch.on('.p3_again','tap',function () {
        location.reload();

    });



    let qian_wrap = document.querySelector('.qian_wrap');
    let p2_qian = document.querySelector('.p2_qian');
    let span = document.querySelectorAll('#timeDown>span');
    let game = document.querySelector('#game');
    let p3 = document.querySelector('#p3');
    let isOk = true;
    let ge =  1;
    let shi = 1;
    let bai = 1;
    let sum = 0;
    let clock = 59;
    let allowClock = false;
    /**
     * 用来累计并显示分数
     */
    function showScore() {

        if(ge==10){
            ge=0;
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

    /**
     * 倒计时
     */
    function clockMove() {
        setInterval(function () {
            if(clock == 0){
                gameEnd();
            }
            span[3].innerHTML = clock;
            clock--;
        },1000)

    }

    // 游戏结束后
    function gameEnd() {
            // game.style.display = 'none';
            // p3.style.display = 'block';
        $('#game').hide();
        $('#p3').show();
            $('#result_num').html('￥'+sum);

    }
    // let p2_qian = document.querySelector('.p2_qian');
    // let hammer1 = new Hammer(img1);
    // console.log(hammer1);
    // hammer1.get('pan').set({direction:Hammer.DIRECTION_ALL});

    touch.on('.p2_qian','swipeup',function () {
        console.log('a');
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
        // console.log(newImg);
        newImg.src = "img/p2_qian.jpg";
        newImg.className='moneyMove';
        newImg.addEventListener('animationend',function () {

            qian_wrap.removeChild(newImg);
        });
        qian_wrap.appendChild(newImg);
        isOK = false;
    });

    touch.on('.p2_qian','touchend',function (e) {
        isOk = true;
    });

    let img = document.querySelector('.p2_txt')
    let imgs = ['img/p2_txt1.png','img/p2_txt2.png','img/p2_txt3.png'];
    let i = 0;
    setInterval(function () {
        if(i == 3){
            i = 0;
        }
            img.src = imgs[i];
            i++;
    },2000);


});