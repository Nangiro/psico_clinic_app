<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('session_history', function (Blueprint $table) {
            $table->id();
            $table->integer('schedule_history_id')->unsigned();
            $table->foreign('schedule_history_id')->references('id')->on('schedules_history'); // SCHEDULE
            $table->text('note')->nullable(); // NOTA
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('session_history');
    }
};
