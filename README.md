# [h2Obtainable](https://h2obtainable.herokuapp.com)

## Judging Criteria

### Design
Our team built a web app that allows users to visualize water consumption over 
the last six months and provides tools to predict how much water can be 
saved if they switch to more efficient water appliances. This app also provides insiteful facts about 
water consumption and tips to help the user understand their bill, what the numbers actually mean, and 
actions they can take to reduce consumption.

### Completeness / Polish
We not only delivered on our minimum viable product that accomplishes our design 
goals, but also provides a platform to build additional features as well as several
key API points for other developers to scrape data from our converted database.

### Solve a Problem Statement
Water/Energy Home Use: One of the problems our team noticed in today's 
challenge was the lack of tools to visualize all of the data provided to us, both
internally and externally for institutional and consumer use. Most consumers do not 
understand the metrics implemented on their water bill. In order to solve the water 
usage problem, the data needs to presented to the consumer in a way that is easy to 
understand. By understanding their bill, users are better equipped to take ownership 
and make changes that can be quantified and visualized. We wanted to build an app that 
may not solve the entire problem, but rather get the ball rolling for other teams to 
build on top of our platform. Consumer facing teams may want to add to our dynamic 
client side data visualization utilizing Backbone.js and D3. Big datahunters may be 
more interested in accessing some of our API endpoints that allows easy access to our 
converted database.

### Is it a solution Utilities or Government can use?
Absolutely. As the government decides to collect more data to understand water usage trends,
our relational database is prime for back end developers to rewrite assocations and relations
that will help connect the dots between users, consumption, geolocation, etc. By coupling the 
infomation collected by the utilities and demographic information collected by the government, 
both will be better able to predict usage and costomize campaigns to induce further reduciton 
in the future. 

### Does it use the Cal Am Data?
While the data provided was a great start, our team felt it could be much more 
useful with consumption breakdown data which could be self reported in the individuals account, 
or gathered by sensors. Using the EPA estimates for household water consumption breakdown**, 
we were able to extrapolate seed data that helped us visualize how much water we could be 
saving if we switched to high efficiency water appliances. Houry data can be used to alert user 
of peak usage times and what they can do to cut back. Because of this, our platform is also 
ready when CAM and the EPA start collecting more data. 

** [Source](http://www.epa.gov/WaterSense/pubs/indoor.html)
