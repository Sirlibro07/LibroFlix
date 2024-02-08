@extends('layouts.email')


@section('content')
    <p>Thank you {{$user->name}} for interacting with my portfolio at <a href="{{asset("")}}">{{asset("")}}</a>.<br><br>  if this wasn't you someone used your email, here's the link to delete the account: <a href="{{asset("")}}">{{asset("")}}</a></p>
@endsection
