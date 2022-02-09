<?php

namespace App\Http\Controllers;

use App\Events\ImageUpload;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Reeturn a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::with("user")->get();
        $products->map(function ($item) {
            $item->getMedia();
        });
        return $products;;
    }

    /**
     * Reeturn a listing of the resource by user.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserProducts($id)
    {
        $products = Product::where('user_id', $id)->get();
        $products->map(function ($item) {
            $item->getMedia();
        });
        return $products;;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'user_id' => $request->user_id
        ]);
        ImageUpload::dispatch($product, $request->image);
        return redirect("http://localhost:3000/products");
        // return response("Product created", 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        if ($request->has('image')) {
            ImageUpload::dispatch($product, $request->image);
        }
        return redirect("http://localhost:3000/products");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        return $product->delete();
    }
}
