<?php

namespace Wwlrc\Website\Controller;

use Wwlrc\Website\App;

abstract class AbstractController
{
    public function __construct(App $app)
    {
        $this->app = $app;
    }   
}