package com.dent.dent.repositories;

import com.dent.dent.entities.StudentPW;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentPWRepository extends JpaRepository<StudentPW,Long> {
}
