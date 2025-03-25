package com.mariuslabs.visitors.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class AddVisitorDTO {
    @NotBlank(message = "Blank Name")
    @NotNull(message = "Null Name")
    private String name;

    @NotBlank(message = "Invalid Nationality: Empty Nationality")
    @NotNull(message = "Invalid Nationality: Null Nationality")
    private String nationality;

    @NotBlank(message = "Invalid ID Number: Empty ID Number")
    @NotNull(message = "Invalid ID Number: Null ID Number")
    private String idNumber;


    @NotBlank(message = "Purpose of visit is empty")
    @NotNull(message = "Purpose of visit  is Null")
    private String purpose;
}
