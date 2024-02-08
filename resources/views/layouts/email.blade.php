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
            box-sizing: border-box;
            color:white;
            
            
        }

        html,body
        {
            height: 100%;
        }

        body
        {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        main
        {
            height: fit-content;
            width: clamp(250px, 100%, 500px);
            background-color: black;
            border-radius: 30px;
            padding: 20px;
            
        }

        #logo
        {
            font-family: Reggae One, Inter, sans-serif;
            font-size: 33px;
            color: #F37335;
            margin-bottom: 20px;
        }

        p
        {
            line-height: 1.5rem;
            font-size: 16px;
            font-family: Inter, sans-serif;
            font-weight: normal;
        }

        @media(min-width: 1024px)
        {
            main
            {
                padding: 50px
            }
        }
    </style>
</head>
<body>
    <main class="center">
        <h1 id="logo">Librone</h1>
        @yield('content')
    </main>
</body>
</html>