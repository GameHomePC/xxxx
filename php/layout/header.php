<?php include "php/menu/mobile-menu.php"; ?>

<header class="headerMain" id="headerMain">
    <div class="wrapper">
        <div class="logo">
            <a href="/">
                <img src="images/logo.png" alt="">
            </a>
        </div>

        <?php include "php/menu/desktop-menu.php"; ?>

        <div class="headerMenu">
            <ul>
                <li><a target="_blank" href="/forum/">Форум</a></li>
<!--                <li class="headerMenu__underline"><a href="/">RU</a></li>-->
            </ul>

            <span class="menu-mobileLink">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
    </div>
</header>