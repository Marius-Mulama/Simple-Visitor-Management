package com.mariuslabs.visitors.model;


import com.mongodb.internal.connection.Time;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "visitors")
@Builder
public class Visitor {
    @Id
    private String id;
    private String name;
    private String nationality;
    private String idNumber;
    private String purposeOfVisit;
    private String dateOfVisit;
    private String timeOfVisit;
}