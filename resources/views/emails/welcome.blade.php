@extends('layouts.email')


@section('content')
    <p>Thank you {{$user->name}} for interacting with my website at <a href="{{route("home")}}">{{route("home")}}.</a><br>
    click here to <a class="text-brand-class" href="{{$email_verification_route}}">verify your email</a>
    </p>
@endsection
