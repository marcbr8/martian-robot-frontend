# What is this

This is a react app written to be used along with the martian-robot application. It is deployed [in heroku](https://martian-robot-frontend-app.herokuapp.com/)

To run it locally, clone this repo and navigate to it. Then simply

```
npm install
```
and the open the browser
```
http://localhost:3000
```
There is a ```.env``` file where you can change the endpoint. For example to ```http://localhost:8080/robot``` in case you want to use your local backend

# How it works

First select the X and Y coordinates of the Grid with the dropdowns and hit the submit button
Then use the dropdowns in the robot section for configuring the robots. Only L, R and F are allowed instructions. Hit the submit button to submit that robot. You can then enter new coordinates, orientation and instructions for another robot that will be added to the list of robots using the provided grid in the first step.
When you are done adding robots, just press the Calculate position button and you will be taken to the result page.

If for any reason you want to clear the previous status of the posted grids or robots, just hit the Clear all button of every section

Notes:
- Intentionally and for an easier understanding of what is happening, every time you go back to the main configuration view, all the robots and grids previously posted are cleared.

- For a better experience the dropdowns only show from 0 up to 10, but if wanted higher variables, use the API backend endpoints.

