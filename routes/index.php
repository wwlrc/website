<?php

$app->router->get('', function () {
    $controller = new Wwlrc\Website\Controller\IndexController($this);

    $controller->page();
});

$app->router->get('/join', function () {
    $controller = new Wwlrc\Website\Controller\JoinController($this);

    $controller->page();
});