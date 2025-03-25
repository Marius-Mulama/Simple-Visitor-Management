package com.mariuslabs.visitors.service.implimentation;

import com.mariuslabs.visitors.model.Visitor;
import com.mariuslabs.visitors.repository.VisitorRepository;
import com.mariuslabs.visitors.service.service.VisitorService;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitorServiceImpl implements VisitorService {
    private VisitorRepository visitorRepository;

    public VisitorServiceImpl(VisitorRepository visitorRepository) {
        this.visitorRepository = visitorRepository;
    }

    @Override
    public Visitor addVisitor(Visitor visitor) throws Exception {
        return visitorRepository.save(visitor);
    }

    @Override
    public List<Visitor> getVisitors() {
        return visitorRepository.findAll();
    }
}
