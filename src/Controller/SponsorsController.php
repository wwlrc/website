<?php

namespace Wwlrc\Website\Controller;

class SponsorsController extends AbstractController {
    public function page() {
        print $this->app->view->render('pages/sponsors.html.twig');
    }
}