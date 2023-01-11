package com.example.vite.demo;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * @author  Julian Schäfer - schaefer@synyx.de
 * @since  15.03.23
 */

@Controller
@RequestMapping("/")
public class IndexController {

    @GetMapping
    public String getIndex() {

        return "index";
    }
}
