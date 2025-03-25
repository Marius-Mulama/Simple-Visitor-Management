package com.mariuslabs.visitors.controller;

import com.mariuslabs.visitors.dto.AddVisitorDTO;
import com.mariuslabs.visitors.model.Visitor;
import com.mariuslabs.visitors.repository.VisitorRepository;
import jakarta.validation.Valid;
import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/visitors")
public class VisitorController {
    @Autowired
    private VisitorRepository visitorRepository;

    @PostMapping("/add")
    public Visitor addVisitor(@RequestBody @Valid AddVisitorDTO visitor) {
        String visitDate   = java.time.LocalDate.now().toString();
        String visitTime = java.time.LocalTime.now().format(java.time.format.DateTimeFormatter.ofPattern("HH:mm"));


        Visitor newVisitor = Visitor.builder()
                .name(visitor.getName())
                .idNumber(visitor.getIdNumber())
                .nationality(visitor.getNationality())
                .purposeOfVisit(visitor.getPurpose())
                .dateOfVisit(visitDate)
                .timeOfVisit(visitTime)
                .build();

        return visitorRepository.save(newVisitor);
    }

    @GetMapping
    public List<Visitor> getVisitors() {
        return visitorRepository.findAllVisitors();
    }
}
