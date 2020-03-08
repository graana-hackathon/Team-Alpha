# Team-Alpha

GraanaHackathonServer:
This is the api for the search app developed in ASP.Net It Contains three sub projects.
1.Data
2.Core
3.Web

Web Project is the entry point of the api which will communicate with Core which contains the business logic and it will then call Data project to Commmunicate with the Database.
It is a layered Pattern Called Repository Pattern. We have used MSSQL as a database and used an Excel File as a basis for our data.  
