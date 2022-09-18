<?php

sleep(3);

header('content-type: application/json');

echo json_encode([
    [
        'id' => 1,
        'username' => 'John Doe',
        'age' => 35
    ],

    [
        'id' => 2,
        'username' => 'Jenny Doe',
        'age' => 24
    ]
]);