package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.AccountEntity;
import com.example.demo.Entity.TestEntity;
import com.example.demo.Service.CreateAccountService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class CreateAccountController {
    @Autowired
    private CreateAccountService createAccountService;

    @PostMapping("/create-account")
    public ResponseEntity<AccountEntity> createAccount(@RequestBody AccountEntity entity) {
        //TODO: process POST request
        
        AccountEntity result = createAccountService.createAccount(entity);
        return result != null ? ResponseEntity.ok(result) : ResponseEntity.notFound().build();
    }

    @PostMapping("/sign-in")
    public ResponseEntity<String> signIn(@RequestBody AccountEntity entity) {
        //TODO: process POST request
        
        String result = createAccountService.signIn(entity);
        
        if (result.equals("Account does not exist")) {
            return ResponseEntity.badRequest().body("Account does not exist");
        } else if (result.equals("Password does not match")) {
            return ResponseEntity.badRequest().body("Password does not match");
        } else if (result.equals("Sign in successfully")) {
            return ResponseEntity.ok("Sign in successfully");
        }

        // Fallback in case result is unexpected
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred");
    }
    
    
}
