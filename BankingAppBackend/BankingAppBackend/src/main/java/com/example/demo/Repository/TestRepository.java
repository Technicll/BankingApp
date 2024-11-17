package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Entity.TestEntity;

public interface TestRepository extends JpaRepository<TestEntity, Integer> {
    List<TestEntity> findByTestAtr(String testAtr);
}
