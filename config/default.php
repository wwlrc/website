<?php

return [
    'db' => [
        'default'    => env('DB_CONNECTION', 'mysql'),

        'connections' => [
            'mysql' => [
                'driver'      => 'mysql',
                'url'         => env('DB_URL'),
                'host'        => env('DB_HOST', 'localhost'),
                'port'        => env('DB_PORT', '3306'),
                'database'    => env('DB_NAME'),
                'username'    => env('DB_USER'),
                'password'    => env('DB_PASSWORD'),
                'unix_socket' => env('DB_SOCKET', ''),
                'charset'     => 'utf8',
                'collation'   => 'utf8_unicode_ci',
                'prefix'      => '',
            ],

            'sqlite' => [
                'driver'                  => 'sqlite',
                'url'                     => env('DB_URL'),
                'database'                => env('DB_NAME', 'database.sqlite'),
                'prefix'                  => '',
                'foreign_key_constraints' => env('DB_FOREIGN_KEYS', true),
            ],

            'memory' => [
                'driver'   => 'sqlite',
                'database' => ':memory:',
            ],
        ],
    ],
    "session" => [
        "database" => [
            "table" => "sessions"
        ],
        "minutes" => 60,
        "cookie_parameters" => [
            "domain" => "wwlrc.co.uk",
        ]
    ]
];