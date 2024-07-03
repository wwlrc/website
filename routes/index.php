<?php

$app->router->get('', function () {
    $controller = new Wwlrc\Website\Controller\IndexController($this);

    $controller->page();
});

$app->router->get('/about', function () {
    $controller = new Wwlrc\Website\Controller\AboutController($this);

    $controller->page();
});

$app->router->get('/join', function () {
    $controller = new Wwlrc\Website\Controller\JoinController($this);

    $controller->page();
});

$app->router->get('/sponsors', function () {
    $controller = new Wwlrc\Website\Controller\SponsorsController($this);

    $controller->page();
});