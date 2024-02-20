@extends('layouts.email')


@section('content')
    <p>Hi !, just wanted to inform you that someone changed the password of your account at <a href="{{route('home')}}">{{route('home')}}</a>, if it was you, then no further action is required, however, if this wasn't you, then click this link to <a class="text-brand-class" href="{{$password_reset_url}}">reset your password</a></p>
@endsection