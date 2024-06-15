<?php

namespace Wwlrc\Website\Controller;

class IndexController extends AbstractController {
    public function page() {
        print $this->app->view->render('pages/index.html.twig');
    }
}