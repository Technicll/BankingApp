package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.AccountEntity;
import com.example.demo.Repository.CreateAccountRepository;

@Service
public class CreateAccountService {

    @Autowired
    private CreateAccountRepository createAccountRepository;

    public AccountEntity createAccount(AccountEntity account){
        AccountEntity acc = new AccountEntity();
        acc.setFname(account.getFname());
        acc.setLname(account.getLname());
        acc.setEmail(account.getEmail());
        acc.setPassword(account.getPassword());
        acc.setPnumber(account.getPnumber());
        acc.setBalance(account.getBalance());
        return createAccountRepository.save(acc);
    }

    public String signIn(AccountEntity account){
        List<AccountEntity> result = createAccountRepository.findByEmail(account.getEmail());
        
        if (result.isEmpty()) {
            return "Account does not exist";
        }
        AccountEntity existingAccount = result.get(0);
    

        if (!existingAccount.getPassword().equals(account.getPassword())) {
            return "Password does not match";
        }

        return "Sign in successfully";

    }
    
    
}
