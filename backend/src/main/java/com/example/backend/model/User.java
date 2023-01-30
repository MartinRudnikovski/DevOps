package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "APP_USER")
@Entity
@NoArgsConstructor
@Data
public class User {
    @Id
    String username;
    String name;
    String surname;

    public User(String username, String name, String surname) {
        this.username = username;
        this.name = name;
        this.surname = surname;
    }
}
