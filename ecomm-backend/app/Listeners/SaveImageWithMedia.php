<?php

namespace App\Listeners;

use App\Events\ImageUpload;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SaveImageWithMedia
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\ImageUpload  $event
     * @return void
     */
    public function handle(ImageUpload $event)
    {
        $event->product->addMedia($event->image)->toMediaCollection('products');
    }
}
