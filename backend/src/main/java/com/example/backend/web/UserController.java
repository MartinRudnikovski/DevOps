package com.example.backend.web;

import com.example.backend.helper.UserHelper;
import com.example.backend.helper.UserUsernameHelper;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/byUsername")
    public User findUserByUsername(@RequestBody UserUsernameHelper username){
        User user = userService.getUserByUsername(username.getUsername());
        System.out.println(user.getUsername() + ' ' + user.getName() + ' ' + user.getSurname());
        return user;
    }

    @PostMapping("/save")
    public ResponseEntity<String> saveUserByUsername(@RequestBody UserHelper userHelper){

        System.out.println("\n\n\nUser saved.\n\n\n");

        return userService.saveUser(userHelper.getUsername(), userHelper.getName(), userHelper.getSurname()) != null ?
                ResponseEntity.ok().body("User created!") :
                ResponseEntity.badRequest().build();

    }
}
