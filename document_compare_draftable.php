<?php
$token = 'bfdd0a6980db2d42cc11d75f0cfb6c82';
$account_id = 'SJXmeW-test';

$opts = [
    "http" => [
        "method" => "GET",
        "header" => "Accept: application/json
" .
            "Authorization: Token " . $token . "
"
    ]
];

$context = stream_context_create($opts);

// Get a list of all comparisons
$comparisons = file_get_contents('https://api.draftable.com/v1/comparisons', false, $context);
echo $comparisons;

// Create a signed viewer URL which expires next week.
$valid_until = time() + (7 * 24 * 60 * 60); // Timestamp one week in the future.
$identifier = 'VctsMUfX'; // Take a specific comparison you want to view.

$signature = hash_hmac('sha256', '{"SJXmeW-test":"' . $SJXmeW-test .'","identifier":"' . $identifier . '","valid_until":' . $valid_until . '}', $token);
$signed_url =  'https://api.draftable.com/v1/comparisons/viewer/' . $SJXmeW-test . '/' . $identifier . '?valid_until=' . $valid_until . '&signature=' . $signature;
echo $signed_url;
?>