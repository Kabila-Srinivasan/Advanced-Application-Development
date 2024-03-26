package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
      @Id
        @GeneratedValue(strategy=GenerationType.IDENTITY)
        private int id;
        private String name;
        private int invoiceno;
        private String address;
        private int days;
        private float amount;
        private String mobileno;
    
}
