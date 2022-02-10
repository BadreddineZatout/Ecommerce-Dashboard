<?php

use App\Models\Product;
use App\Models\User;

use function Pest\Laravel\get;

beforeEach(function () {
    User::factory()->create();
    Product::factory(5)->for(User::factory())->create();
});

it("get a list of all products", function () {
    $productsList = get(route("products"));
    $productsList->assertStatus(200);
    expect($productsList)->toBeTruthy();
    expect($productsList[0])->toBeArray();
    expect($productsList[4])->toBeArray();
});
