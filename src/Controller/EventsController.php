<?php

namespace Wwlrc\Website\Controller;

class EventsController extends AbstractController {
    public function page() {
        print $this->app->view->render('pages/events.html.twig');
    }
}