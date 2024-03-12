@extends('layouts.email')


@section('content')
    <p>
        {{$body}} click here to <a class="text-brand-class" href="{{$reset_password_route}}">Reset your password</a>.<br>
        This link will expire in 5 minutes
    </p>
@endsection
