<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $fillable = ['name', 'description', 'price', 'user_id'];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('products');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
