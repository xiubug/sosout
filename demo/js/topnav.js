;
(function($) {
    "use strict";
    ['width', 'height'].forEach(function(dimension) {
        var Dimension = dimension.replace(/./, function(m) {
            return m[0].toUpperCase();
        });
        $.fn['outer' + Dimension] = function(margin) {
            var elem = this;
            if (elem) {
                var size = elem[dimension]();
                var sides = {
                    'width': ['left', 'right'],
                    'height': ['top', 'bottom']
                };
                sides[dimension].forEach(function(side) {
                    if (margin) {
                        size += parseInt(elem.css('margin-' + side), 10);
                    }
                });
                return size;
            } else {
                return null;
            }
        }
    });
    $.fn.topnav = function(options) {
        var topnav = this;
        var settings = $.extend({
            container: $(window),
            offset: 0
        }, options);
        settings.container.on('scroll touchmove load', function(e) {
            topnav.children('.topnav-item').each(function() {
                var itemHeader = $(this).find('.topnav-item-header');
                var itemBody = $(this).find('.topnav-item-body');
                var itemHeaderHeight = itemHeader.outerHeight();
                var viewportOffset = $(this).offset().top - settings.container.scrollTop() + settings.offset;
                var switchPoint = '-' + ($(this).height() - itemHeaderHeight - settings.offset);
                $(this).removeClass('fixed').removeClass('bottom');
                if (viewportOffset < 0) {
                    if (viewportOffset > switchPoint) {
                        $(this).addClass('fixed').removeClass('bottom');
                    } else {
                        $(this).removeClass('fixed').addClass('bottom');
                    }
                    itemBody.css('paddingTop', itemHeaderHeight);
                    itemHeader.css('width', topnav.width());
                    return;
                }

                itemBody.css('paddingTop', '0');
                itemHeader.css('width', 'auto');
            });

        });

    };
})(Zepto);
