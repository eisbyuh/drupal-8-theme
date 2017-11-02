
//NAVIGATION

$("ul#menu li:has(ul)").prepend('<span class="down"></span>');
$(".toggle-icon").click(function () {
    $(this).toggleClass("close");
    $(".menu-Bx").slideToggle();
});

function apperMenu() {

    var windowWidth = $(window).width();
    console.log(windowWidth);
    if (windowWidth > 1023) {
        $('ul#menu li span.down').unbind();
        $('ul#menu li').children('span').removeClass('up');
        $('ul#menu li').children('span').addClass('down');
        $(".menu-Bx").show();
        $('ul#menu li ul').hide();
        $('ul#menu li').hover(function () {
            $(this).children('ul').delay(10).slideDown(200);
            $(this).children('ul#menu li a').addClass('hovered')

        }, function () {
            $(this).children('ul').delay(10).slideUp(200);
            $(this).children('ul#menu li a').removeClass('hovered')
        });
    } else {
        $('ul#menu li span.down').unbind();
        $(".toggle-icon").removeClass("close");
        $(".menu-Bx").hide();
        $('ul#menu li').unbind();
        $('ul#menu li span.down').click(function () {
            $(this).toggleClass('up');
            //alert("hi");
            $(this).siblings('ul').delay(20).slideToggle(200);
            $(this).parents('li').siblings('li').children('ul').slideUp();
            $(this).siblings('ul').children('li').children('ul').slideUp();
            $(this).parents('li').siblings('li').children('span').removeClass('up');
            $(this).siblings('ul').children('li').children('span').removeClass('up');
        });
    }
}

$(window).load(function () {
    apperMenu();
});

$(window).resize(function () {
    apperMenu();
});



equalheight = function (container) {

    var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function () {
    equalheight('.item-content');
});


$(window).resize(function () {
    equalheight('.item-content');
});


equalheight = function (container) {

    var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).load(function () {
    equalheight('.cmn-ft-info');

    $('#foo4').carouFredSel({
        responsive: true,
        width: '100%',
        scroll: 1,
        auto: false,
        prev: '#prev4',
        next: '#next4',
        items: {
            width: 264,
            //	optionally resize item-height
            visible: {
                min: 2,
                max: 4
            }
        }
    });
});


$(window).resize(function () {
    equalheight('.cmn-ft-info');
});


