<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('meta_title');
            $table->string('meta_description')->nullable();
            $table->string('meta_image')->nullable();
            $table->string('meta_keyword')->nullable();
            $table->enum('status', ['active', 'draft', 'trash']);
            $table->string('title');
            $table->string('content');
            $table->string('slug');
            $table->unsignedBigInteger('authored_by');
            $table->datetime('authored_on');
            $table->timestamps();
            $table->foreign('authored_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}
