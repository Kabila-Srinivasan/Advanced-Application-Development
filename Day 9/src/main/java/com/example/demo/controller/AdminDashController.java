package com.example.demo.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.response.AdminDashResponse;
import com.example.demo.entity.AdminDash;
import com.example.demo.service.AdminDashService;

@RestController
@RequestMapping("/auth/admin")
public class AdminDashController {
      @Autowired
    private AdminDashService adminProductService;

    @PostMapping("/postadmindash")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AdminDash> postAdminProduct(@RequestBody AdminDashResponse adminProductDto) {
        AdminDash product = adminProductService.addAdminProduct(adminProductDto);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/alladmindash")
    public List<AdminDash> getAllProducts() {
        return adminProductService.getProducts();
    }

 
    @GetMapping("/getadmindash/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<AdminDash> getAdminProduct(@PathVariable int id) {
        try {
            AdminDash product = adminProductService.getAdminProduct(id);
            return new ResponseEntity<>(product, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/putadmindash/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")

    public ResponseEntity<AdminDash> updateAdminProduct(@PathVariable int id, @RequestBody AdminDashResponse adminProductDto) {
        AdminDash updatedProduct = adminProductService.putAdminProduct(id, adminProductDto);
        if (updatedProduct != null) {
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deladmindash/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")

    public ResponseEntity<String> deleteAdminProduct(@PathVariable int id) {
        try {
            String message = adminProductService.delAdminProduct(id);
            return new ResponseEntity<>(message, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/getadmincategory/{category}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<List<AdminDash>> getProductsByCategory(@PathVariable String category) {
        List<AdminDash> products = adminProductService.getProductsByCategory(category);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
