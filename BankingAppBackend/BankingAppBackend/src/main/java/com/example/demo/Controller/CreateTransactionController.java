package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.TransactionEntity;
import com.example.demo.Service.CreateTransactionService;

@RestController
public class CreateTransactionController {
    @Autowired
    private CreateTransactionService createTransferService;

    @PostMapping("/create-transfer")
    public ResponseEntity<String> processTransfer(@RequestBody TransactionEntity entity)
    {
        String res = createTransferService.processTransaction(entity);
        if(res.equals("Insufficient Funds"))
        {
            return ResponseEntity.badRequest().body("Insufficient Funds");
        }
        else if (res.equals("Insufficient Balance"))
        {
            return ResponseEntity.badRequest().body("Insufficient Balance");
        }
        else
        {
            return ResponseEntity.ok("Transaction is Successful");
        }
        
    }
    
}
