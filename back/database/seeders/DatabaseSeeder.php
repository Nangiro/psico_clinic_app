<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Patient;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $client = User::create([
            'username' => 'gusta',
            'name' => 'Gustavo Dias',
            'email' => 'gusta@clinic.com',
            'password' => 'gusta',
            'type' => 1,
        ]);
        Patient::create([
            'user_id' => $client->id,
            'address' => 'Rua Teste',
            'cep' => '13332569',
            'number' => '10',
            'city' => 'Cidade Teste',
            'state' => 'SP',
            'cellphone' => '19999245035'
        ]);
        User::create([
            'username' => 'clara',
            'name' => 'Clara Joana',
            'email' => 'psico@clinic.com',
            'password' => 'clara',
            'type' => 2,
        ]);
        User::create([
            'username' => 'dolores',
            'name' => 'Dores Dolores',
            'email' => 'secretary@clinic.com',
            'password' => 'dolores',
            'type' => 3,
        ]);
    }
}
