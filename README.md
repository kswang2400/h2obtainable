# [h2Obtainable](https://h2obtainable.herokuapp.com)

## Judging Criteria

### Design
Our team built a web app that allows users to visualize water consumption over 
the last six months as well as provides tools to predict how much water can be 
saved if they switch to more efficient water appliances.

### Completeness / Polish
We not only delivered on our minimum viable product that accomplishes our design 
goals, but also provides a platform to build additional features as well as several
key API points for other developers to scrape data from our converted database.

### Solve a Problem Statement
Water/Energy Home Use: One of the larger problems our team noticed in today's 
challenge was the lack of tools to visualize all of the data provided to us, both
internally and externally for institutional and consumer use. We wanted to build 
an app that may not solve the entire problem, but rather get the ball rolling for 
other teams to build on top of our platform. Consumer facing teams may want to add 
to our dynamic client side data visualization utilizing Backbone.js and D3. Big data
hunters may be more interested in accessing some of our API endpoints that allows 
easy access to our converted database.

### Is it a solution Utilities or Government can use?
Absolutely. As the government decides to collect more data, our relational database 
is prime for back end developers to rewrite assocations and relations that will
help connect the dots between users, consumption, geolocation, etc. 

### Does it use the Cal Am Data?
While the data provided was a great start, our team felt it could be much more 
useful with consumption breakdown data. Using the EPA estimates for household water
consumption breakdown**, we were able to extrapolate seed data that helped us visualize
how much water we could be saving if we switched to high efficiency water appliances. 
Because of this, our platform is also ready when CAM and the EPA start collecting more data.

** [Source](http://www.epa.gov/WaterSense/pubs/indoor.html)

## Judging Criteria

### Design
Overall design use.

For now, a single page app that helps families visualize water use over the last six months and tools to encourage them to switch
to more water efficient appliances.

###Completeness / Polish
How complete is the hack. Does it have a nice interface. Is it easy to use.

Our app represents a basic minimum viable project but allows for other features to be easily implemented on top of our existing platform.

###Solve a Problem Statement
Does it solve one of the listed problem statements. How well does it solve the problem statement.

Water/Energy Home Use. We built a tool that revolves around single family homes and really emphasizes that water conservation 
is a team effort even on a micro level. We estimated thresholds for each points in our data set to show expected water use as a 
family rather than per capita. We also implemented dynamic estimation tools to help families predict water savings if they convert
to the latest high efficiency water appliance./*?

* [Source](https://google.com)

###Is it a solution Utilities or Government can use?
Can California American Water use the idea with water customers? Can EPA further develop the idea?

One of the problems our team noticed was the immense amount of data collected yet not a lot of tools both internally and 
externally were available for institution and consumer use. We challenged ourselves to tackle a small portion of this problem
by providing a great UI experience to visualize some of this data. Our platform is definitely versatile enough to not only handle
even more data as well as expanding to cover other types of data as well.

###Does it use the Cal Am Data?
How well does it use the rate information and water use data from Cal Am? Does it make sense?

We first tried using hourly data but due to Heroku's database restrictions (10,000 rows maximum; 140k rows in csv), we decided to use monthly data instead.
Although the data provided only gave us consumption per month per user, we wanted to express the data more meaningfully by calculating water savings. We added
several columns to simulate consumption breakdown/**/ based on appliances to show users where they would save the most water.

** [Source](http://askville.amazon.com/water-average-household-consume/AnswerViewer.do?requestId=230193)

[Water Innovation Project](http://www.waterinnovationproject.com/hackathon-2/)