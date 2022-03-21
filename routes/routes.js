const express = require('express')
const router = express.Router();
const controllers = require('../controllers/courseControllers')
//get all routes
router.get("/", controllers.getCourses);

//was going to use this for a way to see soft deleted courses and show when they were deleted.

// router.get("/deletedcourses", (req, res) => {
//   res.send("we are on deleted courses!");
// });

//get course by the ID
router.get("/:id", controllers.getCourse);

//Create new course
router.post("/newcourse", controllers.newCourse);

//edit course by targeting ID
router.patch("/editcourse/:id", controllers.editCourse);

//delete course by targeting ID
router.delete("/deletecourse/:id", controllers.deleteCourse);

//export to go to app.js
module.exports = router;
