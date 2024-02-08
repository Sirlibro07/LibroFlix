@extends('layouts.email')


@section('content')
    <p>Thank you {{$user->name}} for interacting with my portfolio at <a href="{{route("home")}}">{{route("home")}}</a></p>
@endsection
