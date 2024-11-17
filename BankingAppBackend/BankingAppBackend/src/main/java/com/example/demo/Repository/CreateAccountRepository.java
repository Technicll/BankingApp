package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.AccountEntity;

public interface CreateAccountRepository extends JpaRepository<AccountEntity, Integer>{
     List<AccountEntity> findByEmail(String email);
     List<AccountEntity> findByFname(String name);

}
