General info: This is a rest API that uses Express, Mongoose, NodeJS, and is connected to MongoDB Atlas

How to start app
1. npm i to download dependencies.

2. To start app type npm start

3. App doesn't have front end UI, use an API platform such as Postman https://www.postman.com/

4. 
Show all courses: http://localhost:5002/courses
----
Show a specific course: http://localhost:5002/courses/<id>
----
Create a new course: http://localhost:5002/newcourse     
!! must have name: string and status: string. Must be one of "scheduled", "in_production", or "available"
----
Edit a specific course: http://localhost:5002/courses/editcourse/<id>
----
Delete a specific course: http://localhost:5002/deletecourse/<id>