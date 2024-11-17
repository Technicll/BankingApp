package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.TestEntity;

public interface TestRepository extends JpaRepository<TestEntity, Integer> {
    List<TestEntity> findByTestAtr(String testAtr);
}
