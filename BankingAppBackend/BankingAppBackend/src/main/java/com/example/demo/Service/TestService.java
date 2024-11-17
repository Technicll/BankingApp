package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.TestEntity;
import com.example.demo.Repository.TestRepository;

@Service
public class TestService {
    @Autowired
    private TestRepository testRepository;

    public TestEntity getTest(int id){
        return testRepository.findById(id).orElse(null);
    }

    public List<TestEntity> getTest2(String testAtr){
        return testRepository.findByTestAtr(testAtr);
    }
}
