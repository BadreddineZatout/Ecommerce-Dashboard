<?php

use function Pest\Laravel\post;

it('User can register', function () {
    $user = post(route('user.register'), [
        'name' => "badreddine",
        'email' => "badi@test.dz",
        "phone" => "0657207206",
        "password" => "123456"
    ]);
    $user->assertStatus(201);
    $this->assertEquals($user["name"], "badreddine");
    $this->assertEquals($user["email"], "badi@test.dz");
    $this->assertEquals($user["phone"], "0657207206");
});

it('User can login', function () {
    post(route('user.register'), [
        'name' => "zakaria",
        'email' => "zaki@test.dz",
        "phone" => "0657207206",
        "password" => "123456"
    ]);
    $user = post(route('user.login'), [
        'email' => "zaki@test.dz",
        "password" => "123456"
    ]);
    $user->assertStatus(200);
    $this->assertEquals($user["name"], "zakaria");
    $this->assertEquals($user["email"], "zaki@test.dz");
    $this->assertEquals($user["phone"], "0657207206");
});
