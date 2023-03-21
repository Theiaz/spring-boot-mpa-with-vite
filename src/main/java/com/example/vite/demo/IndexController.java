package com.example.vite.demo;

import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;

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
    public String getIndex(Model model) {

        // TODO: schaefer 21.03.23 - load manifest.json from static folder
        // https://vitejs.dev/guide/backend-integration.html

        // enrich model with src paths for js and css files
        var jsPath = "main.js";
        model.addAttribute("jsSrc", jsPath);

        String cssPath = "index.css"; // read this from manifest
        model.addAttribute("cssSrc", cssPath);

        return "index";
    }
}
