package com.hello.hewwbf.entity;

import com.hello.hewwbf.Model.AdminData;

public class JwtResponseAd {
    private AdminData user;
    private String jwtToken;

    public JwtResponseAd(AdminData user, String jwtToken) {
        this.user = user;
        this.jwtToken = jwtToken;
    }


    public AdminData getUser() {
        return this.user;
    }

    public void setUser(AdminData user) {
        this.user = user;
    }

    public String getJwtToken() {
        return this.jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }

}
