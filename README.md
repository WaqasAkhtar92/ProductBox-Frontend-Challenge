Productbox Frontend Code Challenge
==================================

Hello! Your task is to create RandoStore; an online store where anyone can put up any random item up for sale and anyone else can buy it.

Overview
--------
I have provided you with a simple [NodeJS](https://nodejs.org) application server for item additions and listing. This app does two things:

- Hosts static content from the 'static' directory
- Serves a JSON REST API for [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations on items stored in memory

I would like you to build four pages:

- A page for listing all items that you can add to your cart
- A page to view all the items that you've checked out
- A page that allows you to add new items
- A homepage that allows you to navigate to the last three pages

I've provided a placeholder for these four pages in the 'static' directory. In addition you need to add a cart to the top of EACH page that shows how many items have been added to cart. Once the cart is clicked it should take you to the checkout page where you can see all the chosen items.

You have to use one of the Javascript Frameworks at the frontend for this task. If specified in the email which framework to use, please use that instead.

In terms of design & layout, that's entirely up to you :). I suggest you use Bootstrap or Skeleton since it's very simple and looks elegant. I would recommend you use whatever you're most comfortable with.

Getting Started
---------------
Install the package dependencies by running the following command: `npm install`

Once the dependancies are installed, you can start the application server by running: `npm start`

Once the server is running, you can access the start page (index.html) by opening your browser to `http://localhost:3000`

REST API
--------
The Items JSON REST API is exposed at `http://localhost:3000/items`

On server start, item data is read into memory from init_data.json. All subsequent actions are done against this memory store. Stopping and starting the server will re-initialize data from `init_data.json`.

API Endpoints:
```
/items/
- HTTP GET: returns array of all items
- HTTP POST: creates a new item, returns the created item data
/items/:id
- HTTP GET: returns the item with given id (numeric, auto-incrementing). HTTP 404 if item not found
- HTTP DELETE: removes the items with given id, returns nothing (HTTP 204)
```
Here is an example of results returned from HTTP GET on /items:
```
[{"id":1,"name":"King Size Bed","price":"300","img":"./img/bed.jpg"},
{"id":2,"name":"Comfy Slippers","price":"15","img":"./img/slippers.jpg"},
{"id":3,"name":"CD Rack","price":"100","img":"./img/rack.jpg"},
{"id":4,"name":"Glow Stick Bundle","price":"10","img":"./img/sticks.jpg"},
{"id":5,"name":"Cookie Jar","price":"25","img":"./img/cookies.jpg"}]
```

You must have noticed that from the top endpoints there is no mention of a cart. This is because I want you to implement the cart entirely in the front end. I suggest that you use [browser local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

Requirements
------------
At a minimum, there are 5 things I need to see:

- You should be able to add items through the front end application
- A list of all the items on the items page
- The checkout page should have all the items that you chose to checkout
- The number of items in cart is persistant amongst different browser tabs
- Decent design/layout of content
- I will be examine your code for readability, architectural decisions, and modularity. This application is a simple one and doesn't require expertise to build, that being said, - - I'll be grading how well you built it not just if you did it. Communication is key, thus if/when you meet with us, be prepared to talk about why and how you built your interfaces.

Design isn't a point I'm concerned about here, so I suggest you just make it usable or just organized and not spend too much time on it.

You should be able to finish this in 4-8 hours, I will give you 5 days to do this. I cannot fairly judge how much time you spent on this project but please don't spend more than 12 hours on this project.

Idea inspiration
----------------
If you have additional time after completing the requirements (I think you should), then I'd love to see what else you can do. Here are some ideas to get you started (but please don't limit yourself to these!).

- Add Items form validation
- Automated testing for example [Protractor](https://www.protractortest.org/)
- Sorting/Searching of items
- Optimize assets (minimize and/or bundle css/js)
- Dynamically load items when they're added to backend (no need to refresh)

To be perfectly clear, I don't expect that anyone could complete all of these. This is simply a list of ideas to inspire you.

Submission
----------
Fork this repo or create a new public repo and then send the link to waleed@productbox.dev with the subject title "Frontend Code Challenge"

Questions / Problems / Stuck?
-----------------------------
Email me waleed@productbox.dev

License
-------
I have licensed this project under the MIT license so that you may use this for a portfolio piece (or anything else!).

## Productbox Frontend Code Challenge

### Screenshot Home

![alt text](https://github.com/WaqasAkhtar92/ProductBox-Frontend-Challenge/blob/waqas/frontend/taskScreenshots/frontTaskscreenshot1.PNG)
https://github.com/WaqasAkhtar92/ProductBox-Frontend-Challenge/blob/waqas/frontend/taskScreenshots/frontTaskscreenshot1.PNG

### Screenshot localStorage

![alt text](https://github.com/WaqasAkhtar92/ProductBox-Frontend-Challenge/blob/waqas/frontend/taskScreenshots/frontTaskScreenshot2.PNG)
<https://github.com/WaqasAkhtar92/ProductBox-Frontend-Challenge/blob/waqas/frontend/taskScreenshots/frontTaskScreenshot2.PNG?raw=true>

## React part

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
