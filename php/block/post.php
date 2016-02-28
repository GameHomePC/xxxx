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
                <?php include "php/news/news-top-post.php"; ?>
            </div>
        </div>
    </div>
</div>