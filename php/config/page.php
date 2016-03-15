<?php

switch($_GET["page"]) {
    /* freemasonry */
    case 'information':
        $page = array(
            "title"=>"Подробная информация",
            "page"=>"php/page/freemasonry/information.php"
        );
        break;

    case 'news':
        $page = array(
            "title"=>"Новости",
            "page"=>"php/page/freemasonry/news.php"
        );
        break;

    case 'zodcheskie':
        $page = array(
            "title"=>"Зодческие",
            "page"=>"php/page/freemasonry/zodcheskie.php"
        );
        break;

    case 'library':
        $page = array(
            "title"=>"Библиотека",
            "page"=>"php/page/freemasonry/library.php"
        );
        break;

    case 'contact':
        $page = array(
            "title"=>"Контакты",
            "page"=>"php/page/freemasonry/contact.php"
        );
        break;

    /* VLR */
    case 'russian-freemasonry':
        $page = array(
            "title"=>"Российское Масонство",
            "page"=>"php/page/VLR/russian-freemasonry.php"
        );
        break;
    case 'constitution':
        $page = array(
            "title"=>"Конституция",
            "page"=>"php/page/VLR/constitution.php"
        );
        break;
    case 'recognition':
        $page = array(
            "title"=>"Мировое признание",
            "page"=>"php/page/VLR/recognition.php"
        );
        break;
    case 'register':
        $page = array(
            "title"=>"Реестр Лож",
            "page"=>"php/page/VLR/register.php"
        );
        break;
    case 'media-about':
        $page = array(
            "title"=>"СМИ о ВЛР",
            "page"=>"php/page/VLR/media-about.php"
        );
        break;

    /* On the bed */
    case 'what':
        $page = array(
            "title"=>"Что такое Масонство",
            "page"=>"php/page/on-the-bed/what.php"
        );
        break;
    case 'history':
        $page = array(
            "title"=>"История Масонства",
            "page"=>"php/page/on-the-bed/history.php"
        );
        break;
    case 'glossary':
        $page = array(
            "title"=>"Словарь терминов",
            "page"=>"php/page/on-the-bed/glossary.php"
        );
        break;
    case 'principles':
        $page = array(
            "title"=>"Цели и принципы",
            "page"=>"php/page/on-the-bed/principles.php"
        );
        break;
    case 'main-characters':
        $page = array(
            "title"=>"Главные символы",
            "page"=>"php/page/on-the-bed/main-characters.php"
        );
        break;
    case 'what-is-a-freemason':
        $page = array(
            "title"=>"Кто такой масон?",
            "page"=>"php/page/on-the-bed/what-is-a-freemason.php"
        );
        break;

    /* level 1 */
    case 'questions':
        $page = array(
            "title"=>"Вопросы",
            "page"=>"php/page/questions.php"
        );
        break;
    case 'introduction':
        $page = array(
            "title"=>"Вступление",
            "page"=>"php/page/introduction.php"
        );
        break;
    case 'true-false-freemasonry':
        $page = array(
            "title"=>"Правда и неправда о Масонстве",
            "page"=>"php/page/true-false-freemasonry.php"
        );
        break;
    case 'freemasonry-in-belarus':
        $page = array(
            "title"=>"Масонство в Беларуси",
            "page"=>"php/page/freemasonry-in-belarus.php"
        );
        break;
    case 'questions-for-joining':
        $page = array(
            "title"=>"Вопросы по вступлению в масонское братство",
            "page"=>"php/page/questions-for-joining.php"
        );
        break;

    default:
        $page = array(
            "title"=>"404",
            "page"=>header( 'Location: /' )
        );
}
