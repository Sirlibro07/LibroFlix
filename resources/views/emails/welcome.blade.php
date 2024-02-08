@extends('layouts.email')


@section('content')
    <h1>Thanks for joining us {{$user->name}} with your email: {{$user->email}}></h1>
    
@endsection
