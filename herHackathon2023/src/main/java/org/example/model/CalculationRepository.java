package org.example.model;

import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;

@Transactional
public interface CalculationRepository extends CrudRepository<Calculation, Long> {
}
