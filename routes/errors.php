<?php

$app->router->set404(function () {
    http_response_code(404);
    
    $controller = new Wwlrc\Website\Controller\ErrorController($this);

    $controller->page(404, "Page not found");
});