package com.hello.hewwbf.Database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hello.hewwbf.Model.AdminData;

public interface AdminDatabase extends JpaRepository<AdminData,Integer>{
    @Query(value = "select * from admin", nativeQuery = true)
    public List<AdminData> getAll();

    @Query(value = "select * from admin where admin_name=?1", nativeQuery = true)
    public AdminData findByAdminname(String username);
}
