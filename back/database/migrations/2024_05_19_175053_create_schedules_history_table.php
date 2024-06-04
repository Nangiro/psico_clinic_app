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
        Schema::create('schedules_history', function (Blueprint $table) {
            $table->id();
            $table->integer('patient_id')->unsigned();
            $table->foreign('patient_id')->references('id')->on('users'); // PACIENTE
            $table->integer('psychologist_id')->unsigned();
            $table->foreign('psychologist_id')->references('id')->on('users'); // PSICÓLOGO(A)
            $table->timestamp('schedule_time');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schedules_history');
    }
};
