# Financial Fairshare Calculator 

## Pre-requistes
- VS Code
- Node.js

## Clone 
Clone this repository using the following command to a directory you like and open it using VS Code 

```
git clone <url of this repository>
```
## Installation - Frontend 

Use the following to install all dependencies and run the frontend 
```
cd team2-ing 
npm install 
npm start
```

## Installation - Backend 
The backend so far is a python calculator, which can be run on server localhost:2000 when running the script server_run.js. Then a simple get command can execute the script. This hasn't been implemented into the frontend so far, but is easily done in the future. 
The backend relies on a file, created by the frontend, which contains the information about the partners in different columns, at different input times, as in the example .csv files that can be found in the backend folder. The file is identified through the user ID, which is the only information that needs to be passed from frontend to backend. Right now, this is hardcoded, with our example couple - Anne and Jeff. Once again, this is a quick switch once the front end is completely adapted to create files. 

The functionality of the computer code in python is the following:
Each partner is created as user class, this enables us to adapt to the specific needs of the couple and to have a flexible amount of users. This is especially beneficial if we want to create "past versions" of our couple and compare them to each other.

The code stores the input values for each partner and it offers many functions: Calculating the difference in pensions, calculating what wage a user would receive if they were compensated for their care work, which tax class we recommend, which partner carries the biggest mental load, whether we recommend additional care, how much a user has earned on average, taking into account child care and it calculates our equality score, which weights equality in salary, care burden and mental load.
Lastly this code plots the most important statistics that show how our couple shares their work, care and money and how this might change with our suggestions. 

Then the code also produces a file with a strings, representing which recommendations we have for the couple and what their equality score is. This can be read in in the front end, so that the correct suggestions and the correct traffic light colour can be displayed!

