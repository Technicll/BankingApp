package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.AccountEntity;
import com.example.demo.Entity.TestEntity;

public interface CreateAccountRepository extends JpaRepository<AccountEntity, Integer>{
     List<AccountEntity> findByEmail(String email);
}
