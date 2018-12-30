import './resume.css';
import $ from 'jquery';

$(function () {
    var callback = function () {
        $('.item-skills').each(function () {
            const newWidth = $(this).parent().width() * $(this).data('percent');
            $(this).width(0);
            $(this).animate({
                width: newWidth,
            }, 1000);
        });
        $('.icons-red').each(function () {
            $(this).animate({
                height: 14,
            }, 2000);
        });
    };
    $(document).ready(callback);

    var resize;
    window.onresize = function () {
        clearTimeout(resize);
        resize = setTimeout(function () {
            callback();
        }, 100);
    };
});
