package org.example.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name="calculation_table")
@Getter @Setter @NoArgsConstructor
public class Calculation implements Serializable {

    private @Id Long id;

    private String firstPersonId;

    private String secondPersonId;

    private String firstPersonIncome;

    private String secondPersonIncome;


}
