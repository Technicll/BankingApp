package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.AccountEntity;
import com.example.demo.Entity.TransactionEntity;
import com.example.demo.Repository.CreateTransactionRepository;

@Service
public class CreateTransactionService {
    @Autowired
    private CreateTransactionRepository transactionRepository;
    
    public String processTransaction(TransactionEntity entity)
    {
        List<AccountEntity> senders = transactionRepository.findBySfname(entity.getSfname());
        List<AccountEntity> receivers = transactionRepository.findByRfname(entity.getRfname());

        AccountEntity sender = senders.get(0);
        AccountEntity receiver = receivers.get(0);

        if(entity.getAmount() > sender.getBalance())
        {
            return "Insufficient Funds";
        }
        else if (entity.getAmount() < 0)
        {
            return "Insufficient Balance";
        }
        else
        {
            sender.setBalance(sender.getBalance() - entity.getAmount());
            receiver.setBalance(receiver.getBalance() + entity.getAmount());
            transactionRepository.save(sender);
            transactionRepository.save(receiver);
            return "Transaction Successful";
        }

    }
}
