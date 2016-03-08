<div class="post">
    <div class="wrapper">
        <div class="box">
            <div class="box__sBig post__box">
                <?php
                    if(file_exists($page['page'])) {
                        require_once($page['page']);
                    }
                ?>
            </div>

            <div class="box__sSmall">
                <div class="box__fixed" id="boxFixed">
                    <div class="box__item">
                        <?php include "php/block/menu-min.php"; ?>
                    </div>

                    <div class="box__item">
                        <?php include "php/news/news-top-post.php"; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>