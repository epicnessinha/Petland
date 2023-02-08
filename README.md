# Petland

Geekshub Bootcamp Final project where we're challanged to create a web-application capable of interacting with a backend through a JSON API.
Petland is a web app where the users can adopt abandoned animals that are currently living in the ["Adopta-me" shelter](https://www.adopta-me.org/index.php?&row=0).
The user is able to visualize some of the animals available for adoption, as well search for a specific one (dog, cat, breed, gender)
In order to adopt an animal, the user must be register, once the login is done successfully, the user needs to fill a form with several questions that after submited will be review for approval by the administrator.
The user can edit his/her profile as well (name and email).
The administrator is able to see all the users registered, to add and delete the adoption announcements (Pets) and approve the adoption requests made by the users.
In the footer of the page you can find the direct link to the real shelters where you can adopt an animal or support the institution.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8cf5e631-0a68-4286-b4d5-c3e021ab4cff/deploy-status)](https://app.netlify.com/sites/petlandshelter/deploys)

<img src="https://github.com/epicnessinha/Petland/blob/2b4910df5c55fd4476fa73413d5fa399133167d4/src/assets/img/2.png" alt="Homepage" width="30%"/> <img src="https://github.com/epicnessinha/Petland/blob/f6ee17f676e7607ae3c0d7f104270be6e763d799/src/assets/img/3.png" alt="Admin" width="35%"/> <img src="https://github.com/epicnessinha/Petland/blob/f6ee17f676e7607ae3c0d7f104270be6e763d799/src/assets/img/4.png" alt="User Profile" width="30%"/>

## API

[JSON SERVER](https://github.com/typicode/json-server)

## Instructions to use:

Follow this steps:

### Clone this repo:

`https://github.com/epicnessinha/Petland.git`

### Install npm package:

### `npm install`

### Run the app:

### `npm run dev`

Runs the app in the development mode.\
Opens [http://localhost:3000](http://localhost:3000) to view it in your browser Firefox.
Also opens a json server [http://localhost:5000](http://localhost:5000) to serve data to this application.

### `npx cypress open`

Runs intregations tests with cypress.

## Browser Compatibility:

### Firefox

Currently is still not available in the other browsers due to CORS issues.


### Developing
In order to develop this project, for the frontend part we used React with React-Router-Dom, Axios, functional components, debounced search, validated forms, useContext, and also, correct folder distribution with the use of services for external API calls.
<br>
Users are able to consult and filter data, submit adoption requests through a form, validated (error check) and edit the name and email in their profiles.
<br>
Pagination was implemented in the Homepage for displayed elements coming from the API. A few Cypress tests were implemented as well.
The project was also deployed in [Netfly](https://petlandshelter.netlify.app/)


### Endpoints:

- "/"
- "/login"
- "/register
- "/adoptionlogin

## Author contact: 

[Vanessa Ferreira](https://www.linkedin.com/in/vanessabio/)


## License
[MIT](https://choosealicense.com/licenses/mit/)
