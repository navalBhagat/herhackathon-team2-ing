package org.example.controller.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

@Controller
public class HomeController {

    @GetMapping(value = "/")
    public String index() { return "index"; }

    @GetMapping(value = "/intern")
    public String intern(HttpServletRequest request) {
        return "intern"; }

   @GetMapping(path = "/logout")
    public String logout(HttpServletRequest request) throws ServletException {
        request.logout();
        return "redirect:/";
    }
}
