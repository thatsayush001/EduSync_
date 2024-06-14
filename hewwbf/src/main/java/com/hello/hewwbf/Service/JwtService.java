package com.hello.hewwbf.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hello.hewwbf.Database.AdminDatabase;
import com.hello.hewwbf.Database.Database;
import com.hello.hewwbf.Model.AdminData;
import com.hello.hewwbf.Model.UserData;
import com.hello.hewwbf.entity.JwtRequest;
import com.hello.hewwbf.entity.JwtResponse;
import com.hello.hewwbf.entity.JwtResponseAd;
import com.hello.hewwbf.util.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

import java.util.HashSet;
import java.util.Set;

@Service
public class JwtService implements UserDetailsService {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private HttpServletRequest request;

    @Autowired
    private Database userDao;

    @Autowired
    private AdminDatabase adminDao;

    @Autowired
    private AuthenticationManager authenticationManager;

    public JwtResponse createJwtToken(JwtRequest jwtRequest) throws Exception {
        try {
            String userName = jwtRequest.getUserName();
            String userPassword = jwtRequest.getUserPassword();
            System.out.println(userName + "Password : "+ userPassword);
            // UserData userCheck = userDao.findByUsername(userName);
            authenticate(userName, userPassword);
            UserDetails userDetails = loadUserByUsername(userName);
            String newGeneratedToken = jwtUtil.generateToken(userDetails);
            UserData user = userDao.findByUsername(userName);
            return new JwtResponse(user, newGeneratedToken);
            
        } catch (Exception e) {
            return new JwtResponse(null, "invaliduser");
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       
        if (userDao.findByUsername(username) != null) {
            UserData user = userDao.findByUsername(username);

            System.out.println("========================UserCheck=====================");
            return new org.springframework.security.core.userdetails.User(
                user.getUserName(),
                user.getUserPassword(),
                getAuthority(user)
            );
        }  
            
        else if(adminDao.findByAdminname(username)!=null ){
            
            AdminData admin = adminDao.findByAdminname(username);

            System.out.println(request.getRequestURI());
            System.out.println("************************AdminCheck*********************");
            System.out.println(request.getRequestURI());
            System.out.println("Hello Monark Jain is here");
            return new org.springframework.security.core.userdetails.User(
                    admin.getAdminName(),
                    admin.getAdminPassword(),
                    getAdminAuthority(admin));
        }
        else {
            System.out.println("error");
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }

    private Set<SimpleGrantedAuthority> getAuthority(UserData user) {

        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("user"));
 
        return authorities;
    }
    
    
    private void authenticate(String userName, String userPassword) throws Exception {
        try {
            System.out.println("Authenticate");
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, userPassword));
        } catch (Exception e) {
            System.out.println(e);
            throw new Exception("USER_DISABLED", e);

        // } 
        // catch (BadCredentialsException e) {
        //     System.out.println("eror1");

            // throw new Exception("INVALID_CREDENTIALS", e);
        }
    }




    public JwtResponseAd createJwtTokenForAdmin(JwtRequest jwtRequest) throws Exception {
        try {
            String userName = jwtRequest.getUserName();
            String userPassword = jwtRequest.getUserPassword();
            authenticate(userName, userPassword);
            System.out.println("HelloMonark ");
            UserDetails userDetails = loadUserByUsername(userName);
            System.out.println(userDetails);
            String newGeneratedToken = jwtUtil.generateToken(userDetails);
            
            
            AdminData admin = adminDao.findByAdminname(userName);
            System.out.println(admin);

            return new JwtResponseAd(admin, newGeneratedToken);
            
        } catch (Exception e) {
            return new JwtResponseAd(null, "invalidadmin");
        }
        
    }
    
    
    
    private Set<SimpleGrantedAuthority> getAdminAuthority(AdminData user) {
        
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("admin"));
    
        return authorities;
    }
}
