<?php

$app->router->set404(function () {
    http_response_code(404);
    echo "404 - Page not found";
});