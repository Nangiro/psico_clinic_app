<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'name',
        'email',
        'password',
        'type',
        'last_access'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'last_access'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'last_access' => 'datetime',
        ];
    }

    public function getRedirectRoute()
    {
        return match ((int)$this->type) {
            1 => 'client.index',
            2 => 'psychologist.index',
            3 => 'secretary.index',
        };
    }

    public function patient(): HasOne
    {
        return $this->hasOne(Patient::class);
    }

    public function schedules(): HasMany
    {
        return $this->hasMany(ScheduleHistory::class);
    }

    public function session(): HasOne
    {
        return $this->hasOne(UserSession::class);
    }
}
