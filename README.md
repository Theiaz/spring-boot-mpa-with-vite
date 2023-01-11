# Spring Boot MPA with vite

## How to start
- Build the application (including frontend) with `./mvnw clean verify`. 
- Start the backend-application with `./mvnw spring-boot:run`

## Building frontend assets for production

Run `npm run build`

## Development server

Run `npm run dev`

**Notice!** The dev-setup won't work. To reproduce the problem change `src/main/css/main.css` or `src/main/js/index.js`. Changes are not reflected immediatly.
