<?php

$app->router->get('/', function () {
    $controller = new Wwlrc\Website\Controller\IndexController($this);

    $controller->page();
});