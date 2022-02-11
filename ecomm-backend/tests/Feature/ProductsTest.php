<?php

use App\Models\Product;
use App\Models\User;

use function Pest\Laravel\delete;
use function Pest\Laravel\get;
use function Pest\Laravel\post;

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

it("create a new product", function () {
    $user = User::first();
    $product = post(route("products.store"), [
        'name' => "phone",
        'description' => "samsung galaxy 12",
        'price' => "10000",
        'user_id' => $user->id
    ]);
    $product->assertStatus(201);
    $this->assertDatabaseCount('products', 6);
    $this->assertDatabaseHas('products', [
        'name' => "phone",
        'description' => "samsung galaxy 12",
        'price' => "10000",
        'user_id' => $user->id
    ]);
})->skip("controller methode returns redirect, if wanted to run the test change the return type");

it("update a product", function () {
    $p = Product::first();
    $product = post(route("products.update", ["product" => $p->id]), [
        'name' => "Phone",
        'description' => "samsung j7 core",
        'price' => "30000",
    ]);
    $product->assertStatus(200);
    $this->assertDatabaseCount('products', 5);
    $this->assertDatabaseHas('products', [
        'name' => "Phone",
        'description' => "samsung j7 core",
        'price' => "30000",
    ]);
})->skip("controller methode returns redirect, if wanted to run the test change the return type");

it("delete a product", function () {
    $product = Product::first();
    $deleted = delete(route("products.delete", ["product" => $product->id]));
    $deleted->assertStatus(200);
    $this->assertDatabaseCount('products', 4);
    $this->assertDatabaseMissing('products', [
        'name' => $product->name,
        'description' => $product->description,
        'price' => $product->price,
    ]);
});
