package org.example.service;

import org.example.model.Calculation;
import org.example.model.CalculationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CalculationService {

    private final CalculationRepository calculationRepository;

    @Autowired
    public CalculationService(CalculationRepository calculationRepository) { this.calculationRepository = calculationRepository; }

    public void saveCalculation(Calculation calculation) {
        calculationRepository.save(calculation);
    }

    public List<Calculation> findAll() {
        List<Calculation> calculations = new ArrayList<>();
        for (Calculation calculation : calculationRepository.findAll()) {
            calculations.add(calculation);
        }
        return calculations;
    }

    public void delete(Long id) { calculationRepository.deleteById(id); }

    public Optional<Calculation> findCalculation(Long id) { return calculationRepository.findById(id); }
}
