<?php

namespace Wwlrc\Website\Controller;

class JoinController extends AbstractController {
    public function page() {
        print $this->app->view->render('pages/join.html.twig');
    }
}