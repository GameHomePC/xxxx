<?php

switch($_GET["page"]) {
    /* freemasonry */
    case 'information': $page = "php/page/freemasonry/information.php"; break;
    case 'news': $page = "php/page/freemasonry/news.php"; break;
    case 'zodcheskie': $page = "php/page/freemasonry/zodcheskie.php"; break;
    case 'library': $page = "php/page/freemasonry/library.php"; break;
    case 'contact': $page = "php/page/freemasonry/contact.php"; break;

    /* VLR */
    case 'russian-freemasonry': $page = "php/page/VLR/russian-freemasonry.php"; break;
    case 'constitution': $page = "php/page/VLR/constitution.php"; break;
    case 'recognition': $page = "php/page/VLR/recognition.php"; break;
    case 'register': $page = "php/page/VLR/register.php"; break;
    case 'media-about': $page = "php/page/VLR/media-about.php"; break;

    /* On the bed */
    case 'what': $page = "php/page/on-the-bed/what.php"; break;
    case 'history': $page = "php/page/on-the-bed/history.php"; break;
    case 'glossary': $page = "php/page/on-the-bed/glossary.php"; break;
    case 'principles': $page = "php/page/on-the-bed/principles.php"; break;
    case 'main-characters': $page = "php/page/on-the-bed/main-characters.php"; break;

    /* level 1 */
    case 'questions': $page = "php/page/questions.php"; break;
    case 'introduction': $page = "php/page/introduction.php"; break;
}

echo $page;

if(file_exists($page)) {
    require_once($page);
}
