package com.example.demo.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.response.AdminDashResponse;
import com.example.demo.entity.AdminDash;
import com.example.demo.repository.AdminDashRepository;

@Service
public class AdminDashService {
      @Autowired
    private AdminDashRepository adminProductRepository;

    public AdminDash addAdminProduct(AdminDashResponse adminProductDto) {
        AdminDash adminProduct = new AdminDash();
        adminProduct.setCategory(adminProductDto.getCategory());
        adminProduct.setTitle(adminProductDto.getTitle());
        adminProduct.setSubtitle(adminProductDto.getSubtitle());
        adminProduct.setCost(adminProductDto.getCost());
        adminProduct.setDuration(adminProductDto.getDuration());
    
        // int nextId = getNextProductId(adminProductDto.getCategory());
        // adminProduct.setId(nextId);

           // Get the next category-specific ID if it doesn't exist
           if (adminProduct.getCategorySpecificId() == null) {
            Long nextCategorySpecificId = getNextCategorySpecificId(adminProductDto.getCategory());
            adminProduct.setCategorySpecificId(nextCategorySpecificId);
        }
    
        adminProductRepository.save(adminProduct);
        return adminProduct;
    }
    

    private Long getNextCategorySpecificId(String category) {
        Long lastCategorySpecificId = adminProductRepository.findLastCategorySpecificIdByCategory(category);
        return lastCategorySpecificId == null ? 1 : lastCategorySpecificId + 1;
    }
    // private int getNextProductId(String category) {
    //     Integer lastProductId = adminProductRepository.findLastProductIdByCategory(category);
    //     if (lastProductId == null) {
    //         return 1;
    //     }
    //     return lastProductId + 1;
    // }
    

    public List<AdminDash> getProducts() {
        return adminProductRepository.findAll();
    }

    public AdminDash getAdminProduct(int id) {
        return adminProductRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Product with ID: " + id + " not found"));
    }

    public AdminDash putAdminProduct(int id, AdminDashResponse apd){
        Optional<AdminDash> checkProduct = adminProductRepository.findById(id);
        if (checkProduct.isPresent()) {
            AdminDash product = checkProduct.get();
            product.setCategory(apd.getCategory());
            product.setTitle(apd.getTitle());
            product.setSubtitle(apd.getSubtitle());
            product.setCost(apd.getCost());
            product.setDuration(apd.getDuration());
            return adminProductRepository.save(product);
        } else {
            return null;
        }
    }

    public String delAdminProduct(int id) {
        Optional<AdminDash> optionalProduct = adminProductRepository.findById(id);
        if (optionalProduct.isPresent()) {
            adminProductRepository.deleteById(id);
            return "Admin deleted the product with ID: " + id;
        } else {
            throw new NoSuchElementException("Product with ID: " + id + " not found");
        }
    }
    public List<AdminDash> getProductsByCategory(String category) {
        return adminProductRepository.findByCategory(category);
    }
}
