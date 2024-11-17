package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.TestEntity;
import com.example.demo.Service.TestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class TestController {
    
    @Autowired
    private TestService testService;

    @GetMapping("/test/{id}")
    public ResponseEntity<TestEntity> getTestValue(@PathVariable int id) {
        TestEntity result = testService.getTest(id);
        return result != null ? ResponseEntity.ok(result) : ResponseEntity.notFound().build();
    }

    @GetMapping("/test2/{testAtr}")
    public ResponseEntity<List<TestEntity>> getTestValue2(@PathVariable String testAtr) {
        List<TestEntity> result = testService.getTest2(testAtr);
        return result != null ? ResponseEntity.ok(result) : ResponseEntity.notFound().build();
    }
    
}
