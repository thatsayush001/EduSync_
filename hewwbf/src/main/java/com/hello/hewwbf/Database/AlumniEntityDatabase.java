package com.hello.hewwbf.Database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hello.hewwbf.entity.Alumni;

public interface AlumniEntityDatabase extends JpaRepository<Alumni,Integer>{
    @Query(value = "select * from alumniformdata", nativeQuery = true)
    public List<Alumni> getAll();
}
