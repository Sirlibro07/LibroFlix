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
      .text-brand-class {
        color: #f37335;
      }

      #logo {
        font-family: Reggae One, Inter, sans-serif;
        font-size: 33px;
        margin-bottom: 20px;
      }

      p {
        line-height: 1.5rem;
        font-size: 16px;
        font-family: Inter, sans-serif;
      }
    </style>
</head>
<body>
    <main class="center">
        <h1 id="logo" class="text-brand-class">{{config('app.name')}}</h1>
        @yield('content')
    </main>
</body>
</html>
