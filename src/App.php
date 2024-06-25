<?php

namespace Wwlrc\Website;

use Bramus\Router\Router;
use Twig\Loader\FilesystemLoader;
use Twig\Environment;
use UserFrosting\Support\Repository\Loader\ArrayFileLoader;
use UserFrosting\Support\Repository\Repository;
use UserFrosting\Session\Session;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Session\FileSessionHandler;
use Illuminate\Session\DatabaseSessionHandler;


class App
{
    public function __construct()
    {
        $this->config = $this->getConfig();
    }

    public function run()
    {
        $this->db = $this->getDB();

        $this->session = $this->getSession();

        $this->router = new Router();
        $this->registerRoutes();

        $this->view = $this->getTwig();

        $this->router->run();
    }

    public function getDB() {
        $config = $this->config;
        
        $capsule = new Capsule();

        // Add each defined connection in the config
        foreach ($config->getArray('db.connections', []) as $name => $dbConfig) {
            $capsule->addConnection($dbConfig, $name);
        }

        // Set default connection
        $defaultConnection = $config->getString('db.default', '');
        $capsule->getDatabaseManager()->setDefaultConnection($defaultConnection);

        // Register as global connection
        $capsule->setAsGlobal();

        // Start Eloquent
        $capsule->bootEloquent();

        return $capsule->getConnection();
    }

    public function getConnection() {
        $connection = $this->db->getDatabaseManager()->getDefaultConnection();

        return $db->getConnection($connection);
    }

    public function getSession() {
        $handler = new DatabaseSessionHandler($this->getConnection(), $config->get('session.database.table'), $config->get('session.minutes'));
        return new Session($handler, $this->config['session']);
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

    public function getConfigPath() {
        return __DIR__ . '/../config/';
    }

    public function getConfig() {
        $paths = [$this->getConfigPath() . 'default.php'];

        $loader = new ArrayFileLoader($paths);
        return new Repository($loader->load());
    }
}