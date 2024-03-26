package com.example.demo.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminDashResponse {
    private int id;
    private String category;
    private String title;
    private String subtitle;
    private float cost;
    private int duration;
    private Long categorySpecificId;
}
