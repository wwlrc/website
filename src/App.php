<?php

namespace Wwlrc\Website;

use Bramus\Router\Router;
use Twig\Loader\FilesystemLoader;
use Twig\Environment;

class App
{
    public function __construct()
    {
        $this->router = new Router();
    }

    public function run()
    {
        $this->registerRoutes();
        $this->view = $this->getTwig();

        $this->router->run();
    }

    public function registerRoutes() {
        // Get directory listing of routes directory
        $routes = scandir(__DIR__ . '/../routes');

        $app = $this;

        // Loop through each file in the routes directory
        foreach ($routes as $route) {
            // Skip . and .. directories
            if ($route === '.' || $route === '..') {
                continue;
            }

            // Include the route file
            require __DIR__ . '/../routes/' . $route;
        }
    }

    public function getTemplatePath() {
        return __DIR__ . '/../templates/';
    }

    public function getTwig() {
        $loader = new FilesystemLoader($this->getTemplatePath());
        $twig = new Environment($loader);

        return $twig;
    }
}