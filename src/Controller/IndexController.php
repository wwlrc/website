<?php

namespace Wwlrc\Website\Controller;

class IndexController extends AbstractController {
    public function page() {
        
        $src = $this->app->getTemplatePath() . "index.php";

        include($this->app->getTemplatePath() . $parent . "abstract/main.php");
    }
}