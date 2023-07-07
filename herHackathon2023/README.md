# ING Challenge - HerHackathon 2023
This basic application demonstrates a Spring Boot application where both authentication and
authorization aspects are managed by <span>Keycloak</span>.

## System Requirements
- Java 20
- Docker, Docker-compose

## Start Containers
Build and start docker containers with databases and Keycloak

   ````
   docker-compose up
   ````

- Welcome screen of Keycloak is located under http://localhost:8080

- To access admin console, navigate to http://localhost:8080/admin/master/console/ and login with admin user:
    
    | Username | Password |
    |----------|----------|
    | admin    | password |

- You can import example realm `realm-export.json` and start with setting up the first user account and user groups or roles

## Build and Run the Basic Application
Once your Keycloak server is up and running, use the following command to start the application

   ````
   mvn spring-boot:run
   ````

or start the main class in IDE of your choice.

### Troubleshooting
When starting the Spring Boot application in IDE from the main class, `java.lang.reflect.InaccessibleObjectException` might prevent
application from startup.
In this case, add the following arguments to the VM options:

   ````
   --add-opens java.base/java.lang=ALL-UNNAMED
   ````

## Example Use Case

Open http://localhost:8092 and try to access internal section with the user you have configured in Keycloak
