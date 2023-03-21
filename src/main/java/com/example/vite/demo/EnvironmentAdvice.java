package com.example.vite.demo;

import org.springframework.beans.factory.annotation.Value;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;


/**
 * @author  Julian Schäfer - schaefer@synyx.de
 * @since  21.03.23
 */
@ControllerAdvice
public class EnvironmentAdvice {

    @Value("${isProduction}")
    private boolean isProd;

    @ModelAttribute("isProd")
    public boolean isProd() {

        System.out.println(isProd);

        return isProd;
    }
}
