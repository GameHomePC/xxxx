function Constructor() {
    this.initialize = function(config) {
        this.menu = jQuery(config.menu);
        this.header = jQuery(config.header);
        this.menuMobileLink = jQuery(config.menuMobileLink);
        this.menuMobile__sub = jQuery(config.menuMobile__sub);
        this.menuMobile = jQuery(config.menuMobile);
        this.banner = jQuery(config.banner);
        this.body = jQuery('body');
        this.overMain = jQuery(config.overMain);

        if(this.menu.length) { this.getMenu(); }
        if(this.header.length) { this.getScroll(); }
        if(this.menuMobileLink.length) { this.getMobileMenu(); }
    };

    this.getMenu = function() {
        var _this = this;

        this.menu.on('click', '.menu__sub > a', function() {
            var self = jQuery(this);

            if(!self.parent().hasClass('active')) {
                _this.menu.children().removeClass('active');
                _this.overMain.addClass('active');
                self.parent().addClass('active');
            } else {
                _this.overMain.removeClass('active');
                self.parent().removeClass('active');
            }

            return false;
        });

        this.overMain.on('click', function() {
            var self = jQuery(this),
                html = jQuery('html');

            self.removeClass('active');

            if(jQuery('.menu__sub.active').length) {
                jQuery('.menu__sub').removeClass('active');
            }

            if(jQuery('.menuMobile__sub.active').length) {
                jQuery('.menuMobile__sub').removeClass('active');
            }

            if(html.hasClass('openMenu')) {
                _this.menuMobileLink.removeClass('active');
                html.removeClass('openMenu');
            }
        });
    };

    this.getScroll = function() {
        var _this = this,
            scrollTop;

        jQuery(document).on('scroll', function(event) {
            var selfScrollTop = jQuery(this).scrollTop(),
                body = jQuery('body');

            if(!jQuery('.menu__sub').hasClass('active')) {
                if(selfScrollTop >= 54) {
                    if(selfScrollTop > scrollTop) {
                        _this.body.addClass("activeScroll");
                    } else {
                        _this.body.removeClass("activeScroll");
                    }
                } else {
                    _this.body.removeClass("activeScroll");
                }
            }

            scrollTop = selfScrollTop;
        }).trigger('scroll');
    };

    this.getMobileMenu = function() {
        var _this = this;

        this.menuMobileLink.on('click touchstart', function() {
            var html = jQuery('html');

            if(!html.hasClass('openMenu')) {
                jQuery('.menu-mobileLink').addClass('active');
                html.addClass('openMenu');
                _this.overMain.addClass('active');
            } else {
                jQuery('.menu-mobileLink').removeClass('active');
                jQuery('.menuMobile__sub').removeClass('active');
                html.removeClass('openMenu');
                _this.overMain.removeClass('active');
            }

            return false;
        });

        this.menuMobile__sub.on('click touchstart', function() {
            var self = jQuery(this);

            if(!self.parent().hasClass('active')) {
                _this.menuMobile__sub.parent().removeClass('active');
                self.parent().addClass('active');
            } else {
                self.parent().removeClass('active');
            }

            return false;
        });
    };
}

(function($j) {


    $j(function() {

        var global = new Constructor();

        global.initialize({
            menu: '#menu',
            header: '#header',
            menuMobileLink: '.menu-mobileLink',
            menuMobile: '.menuMobile',
            menuMobile__sub: '.menuMobile__sub > a',
            overMain: '.over-main'
        });

    });


})(jQuery);