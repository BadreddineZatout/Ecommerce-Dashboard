<?php

it('has user page', function () {
    $response = $this->get('/user');

    $response->assertStatus(200);
});
