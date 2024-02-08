<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
<link href="https://fonts.bunny.net/css?family=inter:400,500,600,700|reggae-one:400" rel="stylesheet" />
    <style>
        *
        {
            padding: 0;
            margin: 0;
            box-sizing: border-box
        }

        html,body
        {
            height: 100%;
        }

        .center
        {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        main
        {
            height: 50%;
            width: clamp(250px, 100%, 500px);
            background-color: red;
            border-radius: 30px;

        }
    </style>
</head>
<body class="center">
    <main class="center">
        @yield('content')
    </main>
</body>
</html>