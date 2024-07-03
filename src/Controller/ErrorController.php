<?php

namespace Wwlrc\Website\Controller;

class ErrorController extends AbstractController {
    public function page($error_code, $error_message) {
        print $this->app->view->render('pages/error.html.twig', [
            'error_code' => $error_code,
            'error_message' => $error_message
        ]);
    }
}