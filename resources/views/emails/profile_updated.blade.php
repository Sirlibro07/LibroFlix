@extends('layouts.email')


@section('content')
    <p>Hi !, your profile at <a href="{{route("home")}}">{{route("home")}}</a> has been updated</p>
@endsection