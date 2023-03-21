# Spring Boot MPA with vite

## How to start
- Build the application (including frontend) with `./mvnw clean verify`. 
- Start the backend-application with `./mvnw spring-boot:run`

## Building frontend assets for production

Run `npm run build`

## Development server

Run `npm run dev`

## Change environment

In order to apply the right `<script/>` and `<style/>` sources, you need to apply either  `application.properties` or `application-dev.properties` file. 

Create a local `application.properties` within `/src/main/resources/config` with the following value:

```
spring.profiles.include=dev # dont apply if you want prod mode
```