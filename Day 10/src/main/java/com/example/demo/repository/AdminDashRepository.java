package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entity.AdminDash;

public interface AdminDashRepository extends JpaRepository<AdminDash,Integer> {
     @Query("SELECT MAX(p.id) FROM AdminDash p WHERE p.category = :category")
    Integer findLastProductIdByCategory(String category);

    List<AdminDash> findByCategory(String category);
    @Query("SELECT MAX(p.categorySpecificId) FROM AdminDash p WHERE p.category = :category")
    Long findLastCategorySpecificIdByCategory(String category);
}
