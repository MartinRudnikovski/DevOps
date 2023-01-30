package com.example.backend.service;

import com.example.backend.model.User;

public interface UserService {

    User saveUser(String username, String name, String surname);

    User getUserByUsername(String username);
}
