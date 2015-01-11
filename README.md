BodyByYou
=================


Application Link 
----------------
http://bodybyyou.herokuapp.com/

What is BodyByYou? 
----------------
BodyByYou is a nutrition/educational website to inform people of the various benefits or eating healthy. The website covers multiple areas from food types: fats, carbs, proteins, shopping lists, to motivational quotes. This website emcompases a lot of my daily life and the effort that is required to eat well. Everyone wants to eat well and sometimes you just need a little direction on how to do that. This is what BodyByYou does. It gives the user a thorough look on food suggestions and how to shop smart. Key Note: I am not a nutritionist, but I am a Certified Personal Trainer, so all of the food recommendations/portion sizes are my own suggestions based on copious amounts of research.

BodyByYou is built with [AngularJS](https://angularjs.org/), [Express](http://expressjs.com/) and [Node.js](https://www.npmjs.com/) using Nitrious.io. 

BodyByYou utilizes a single-page architecture using [AngularJS](https://angularjs.org/) to provide the user with a fluid experience. There is also a [NutritionIX API](http://www.nutritionix.com/api) that allows the user to search for their desired, snack/food and provides a neat table with all of the nutritional values.  

Languages Used
---------------
- [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
- [Sass](http://sass-lang.com/)
- Had some jQuery, but switched over to [AngularJS](https://angularjs.org/)

Definitions of Commands
-----------------------

**[NPM](https://www.npmjs.com/)** - Node Package Manager (Server Manager)

**[Grunt](http://gruntjs.com/)** - looks for files using a defined pattern so that it knows what to compile and copy and where to put it. To edit the files that Grunt watches, look at the array of files in the watch task in [Gruntfile.js](https://github.com/carmenvkrol/bloc-pomodoro/blob/master/gruntfile.js)



Installation Steps:
-------------------

You should already have [Node.js](https://www.npmjs.com/) installed before cloning.


Start by cloning the repository.

`$git clone https://github.com/ilitvak/bodybyyou.git`


This application uses [Grunt](http://gruntjs.com/) to run tasks.  Install the Grunt Command Line Interface (`grunt-cli`) locally on your machine.


`$ npm install -g grunt-cli`

Once that's complete, install the remaining project dependencies by running

`$ npm install`

Running the Application
------------
Two tabs must be open in the terminal in order to run this application.

In one tab, run

`$ npm start`

In the second tab, run

`$ grunt`

The application runs on port 3000 - configured in the [`Gruntfile.js`]. To change the port, modify the number highlighted below

```js
connect: {
  server: {
    options: {
      // Change this value here to the desired port number
      port: 3000,
      hostname: 'localhost',
      base: './dist',
      useAvailablePort: true
    }
  }
}
```

Screenshots
-----------

![Imgur](http://i.imgur.com/A8PwEHg.jpg)

![Imgur](http://i.imgur.com/yBgOTO9.png)

![Imgur](http://i.imgur.com/jPrFDQB.png)
