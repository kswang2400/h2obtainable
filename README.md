# water-hack 2015

[Water Hack 2015](https://water-hack-2015.herokuapp.com)

Transform the way we value water, and let's save some water.

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

/*/ [Source](https://google.com)

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

/**/ [Source](http://askville.amazon.com/water-average-household-consume/AnswerViewer.do?requestId=230193)

[Water Innovation Project](http://www.waterinnovationproject.com/hackathon-2/)