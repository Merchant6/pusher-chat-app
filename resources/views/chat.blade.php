{{-- @extends('layouts.app') --}}

<x-app-layout>
    <x-slot name="header">
        <div class="app">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h1 class="text-white">Let's Talk</h1>
                    <input type="text" id="username" value="{{auth()->user()->name}}" name="username">
                </div>
                <div class="col-lg-12 mt-3 p-4">
                    <div class="p-4" id="messages" style="background-color: #111827; height: 70vh;">

                    </div>
                </div>

                <div class="col-lg-12 text-center mt-3">
                    <form id="message_form">
                        <input type="text" name="message" id="message_input" placeholder="Write a message...">
                        <br>
                        <button type="submit" id="message_send">Send Message</button>
                    </form>

                    @vite('resources/js/app.js')
                </div>
            </div>
        </div>
    </x-slot>
</x-app-layout>