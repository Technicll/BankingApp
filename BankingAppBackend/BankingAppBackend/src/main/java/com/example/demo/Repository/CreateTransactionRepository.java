package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.AccountEntity;

public interface CreateTransactionRepository extends JpaRepository<AccountEntity, Integer> {
        List<AccountEntity> findByRfname(String rfname);
        List<AccountEntity> findBySfname(String sfname);

}
