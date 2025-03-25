package com.mariuslabs.visitors.service.service;

import com.mariuslabs.visitors.dto.AddVisitorDTO;
import com.mariuslabs.visitors.model.Visitor;

import java.util.List;

public interface VisitorService{
    Visitor addVisitor(Visitor visitor) throws Exception;

    List<Visitor> getVisitors();
}
