package com.hello.hewwbf.entity;

import com.hello.hewwbf.Model.UserData;

public class JwtResponse {

    private UserData user;
    private String jwtToken;

    public JwtResponse(UserData user, String jwtToken) {
        this.user = user;
        this.jwtToken = jwtToken;
    }

    public UserData getUser() {
        return user;
    }

    public void setUser(UserData user) {
        this.user = user;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
