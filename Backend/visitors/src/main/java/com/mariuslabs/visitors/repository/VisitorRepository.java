package com.mariuslabs.visitors.repository;

import com.mariuslabs.visitors.model.Visitor;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VisitorRepository extends MongoRepository<Visitor, String> {
    @Query("{}")
    List<Visitor> findAllVisitors();

}
