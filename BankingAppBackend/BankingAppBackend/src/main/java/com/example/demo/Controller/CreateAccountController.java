package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
    public ResponseEntity<AccountEntity> postMethodName(@RequestBody AccountEntity entity) {
        //TODO: process POST request
        
        AccountEntity result = createAccountService.createAccount(entity);
        return result != null ? ResponseEntity.ok(result) : ResponseEntity.notFound().build();
    }
    
}
