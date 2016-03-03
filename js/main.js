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
        this.menuMin = jQuery(config.menuMin);
        this.glossary = jQuery(config.glossary);
        this.boxFixed = jQuery(config.boxFixed);
        this.newsList = jQuery(config.newsList);

        if(this.menu.length) { this.getMenu(); }
        if(this.header.length) { this.getScroll(); }
        if(this.menuMobileLink.length) { this.getMobileMenu(); }
        if(this.menuMin.length) { this.getMenuMin(); }
        if(this.glossary.length) { this.getGlossary(); }
        if(this.boxFixed.length) { this.getBoxFixed(); }
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

    this.getGlossary = function() {
        var _this = this,
            glossary = this.glossary,
            glossaryContent = glossary.find('.glossary__item'),
            glossaryLetters = glossary.find('.glossary__letters'),
            glossaryLettersLink = glossaryLetters.children();

        /* if letters */
        glossaryContent.find('.glossary__title').each(function(i, e) {
            var self = jQuery(this),
                selfText = self.data('lesson');

            glossaryLettersLink.each(function(il, el) {
                var selfLink = jQuery(this),
                    selfLinkLetter = selfLink.text();

                if(selfText === selfLinkLetter) {
                    selfLink.addClass('active');
                }

            });
        });


        glossary.on('click', '.glossary__letters a', function() {
            var self = $(this),
                selfText = self.text(),
                selfTo = jQuery('[data-lesson="' + selfText + '"]').offset().top;

            jQuery('html, body').animate({
                scrollTop: selfTo - 20
            }, 1000);

            return false;
        });
    };

    this.getBoxFixed = function() {
        var _this = this;

        jQuery(window).load(function() {
            _this.initScrollBlock();
        });
    };

    this.getMenuMin = function() {
        var _this = this,
            menu = this.menuMin;

        menu.find('a').each(function() {
            var self = jQuery(this),
                selfUrl = self.attr('href'),
                localHref = document.location.pathname;

            if(selfUrl === localHref) {
                self.parents('.menuM__item').addClass('active');
                self.parents('.menuM__sub').show();
                self.addClass('active');
            }
        });

        menu.on('click', '.menuM__item > a', function() {
            var self = jQuery(this),
                selfParent = self.parent(),
                selfSub = self.next();

            if(!selfParent.hasClass('active')) {
                menu.find('.menuM__item').removeClass('active');
                menu.find('.menuM__sub').slideUp(300);
                selfParent.addClass('active');

                selfSub.slideDown({
                    duration: 300,
                    progress: function() {
                        _this.initScrollBlock();
                    }
                });

            } else {
                selfParent.removeClass('active');

                selfSub.slideUp({
                    duration: 300,
                    progress: function() {
                        _this.initScrollBlock();
                    }
                });

            }

            return false;
        });
    };

    this.initScrollBlock = function() {
        if(!Modernizr.touch) {
            var _this = this,
                block = this.boxFixed,
                header = this.header.outerHeight(true);

            jQuery(window).on('scroll', function() {
                var scrollTop = jQuery(this).scrollTop(),
                    blockHeight = block.outerHeight(true) + 20,
                    positionNewsListTop = _this.newsList.offset().top,
                    scrollBottom = (scrollTop + blockHeight) + 40;

                block.parent().css({ height: block.outerHeight(true) });

                if(scrollTop >= header) {

                    if(scrollBottom >= positionNewsListTop) {
                        block.addClass('absolute').css({ top: positionNewsListTop - blockHeight - (header + 40)});
                    } else {
                        block.addClass('absolute').css({ top: scrollTop - header });
                    }

                } else {
                    block.removeClass('absolute').css({ top: 0 });
                }
            }).trigger('scroll');
        }
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
            overMain: '.over-main',
            menuMin: '#menuMin',
            glossary: '#glossary',
            boxFixed: '#boxFixed',
            newsList: '.newsList'
        });

    });


})(jQuery);