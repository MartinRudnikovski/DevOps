package com.example.backend.service.impl;

import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(String username, String name, String surname) {
        User user = new User(username, name, surname);
        System.out.println(user);
        return this.userRepository.save(user);
    }

    @Override
    public User getUserByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }
}
