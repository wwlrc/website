<?php

namespace Wwlrc\Website\Controller;

class AboutController extends AbstractController {
    public function page() {
        print $this->app->view->render('pages/about.html.twig');
    }
}