@extends('layouts.email')


@section('content')
    <p>Someone requested a password reset of your account at <a href="{{route('home')}}">{{route('home')}}</a>, this link will expire in 5 minutes, click here to <a class="text-brand-class" href="{{$reset_password_route}}">Reset your password</a>.<br>
    if it wasn't you no further action is required.
    </p>
@endsection