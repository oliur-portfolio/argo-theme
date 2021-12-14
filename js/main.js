// Theme Toggle Button Scroll Hide
window.onload = function () {
    $('#sticky-theme-toggle').hide();
};

$(window).scroll(function () {
    if ($(this).scrollTop() >= 150) {
        $('#sticky-theme-toggle').css({ display: 'flex' });
    } else {
        $('#sticky-theme-toggle').css({ display: 'none' });
    }
});

// Font Toggle Button Scroll Hide
window.onload = function () {
    $('#sticky-font-toggle').hide();
};

$(window).scroll(function () {
    if ($(this).scrollTop() >= 150) {
        $('#sticky-font-toggle').css({ display: 'flex' });
    } else {
        $('#sticky-font-toggle').css({ display: 'none' });
    }
});

// Default Theme Change
$(document).ready(function () {
    $('.theme-toggle-default').click(function () {
        $('body').addClass('theme-1');
        $('body').removeClass('default-theme');
    });
});

// Theme 1 Change
$(document).ready(function () {
    $('.theme-toggle-1').click(function () {
        $('body').addClass('theme-2');
        $('body').removeClass('theme-1');
    });
});

// Theme 2 Change
$(document).ready(function () {
    $('.theme-toggle-2').click(function () {
        $('body').addClass('theme-3');
        $('body').removeClass('theme-2');
    });
});

// Theme 3 Change
$(document).ready(function () {
    $('.theme-toggle-3').click(function () {
        $('body').addClass('default-theme');
        $('body').removeClass('theme-3');
    });
});

// Default Font Change
$(document).ready(function () {
    $('.default-font-toggle').click(function () {
        $('body').addClass('font-1');
        $('body').removeClass('default-font');
    });
});

// Font 1 Change
$(document).ready(function () {
    $('.font1-toggle').click(function () {
        $('body').addClass('font-2');
        $('body').removeClass('font-1');
    });
});

// Font 2 Change
$(document).ready(function () {
    $('.font2-toggle').click(function () {
        $('body').addClass('font-3');
        $('body').removeClass('font-2');
    });
});

// Font 3 Change
$(document).ready(function () {
    $('.font3-toggle').click(function () {
        $('body').addClass('default-font');
        $('body').removeClass('font-3');
    });
});

// Argo Sticky Header
$(document).ready(function () {
    $('argo-header').sticky({ topSpacing: 0, zIndex: 500 });
});

// PgwBrowser JS Browser Detect Code
var pgwBrowser = $.pgwBrowser();
var browserName1 = document.getElementById('browser1');
var operatingName1 = document.getElementById('operating1');

browserName1.innerHTML = pgwBrowser.browser.name;
operatingName1.innerHTML = pgwBrowser.os.group;
