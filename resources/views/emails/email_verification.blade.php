@extends('layouts.email')


@section('content')
    <p>Ask and you shall receive !<br>Here is the link to <a class="text-brand-class" href="{{$email_verification_route}}">verify your email</a></p>
@endsection