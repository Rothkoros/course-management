const CourseModel = require("../models/courses.js");
// put all the controller functions in an exported module. Switches them to be called in the format of controllers.FUNCTION for the routes.
module.exports = {
  //get all courses
  getCourses: async (req, res) => {
    try {
      const foundCourses = await CourseModel.find({}).sort({createdAt: 'desc'}).exec();
      res.send(foundCourses);
    } 
    catch {
      (err) => {
        console.error(err);
      };
    }
  },

  //get course by id parameter
  getCourse: async (req, res) => {
    //grabs _id from mongoDB in the requested parameters
    try {
     const foundCourse = await CourseModel.findById({ _id: req.params.id })
      res.json(foundCourse)
    } 
    catch {
      (err) => {
        console.error(err);
      };
    }
  },

  //create new course use at least name and status of "scheduled", "in_production", or "available"
  newCourse: async (req, res) => {
    const course = req.body;
    const newCourse = new CourseModel(course);
    try {
      await newCourse.save();
    } 
    catch {
      (err) => res.send(err);
    }

    //response of saved course
    res.json(newCourse);
  },

  //edit course by selected ID
  editCourse: async (req, res) => {
    try {
      await CourseModel.updateOne({ _id: req.params.id }, { $set: req.body })
  
    } 
    catch {
      (err) => console.error(err);
    }
    res.json(req.body);
  },

  //delete course by selected ID
  deleteCourse: async (req, res) => {
    try {
      await CourseModel.findByIdAndDelete({ _id: req.params.id });
      res.json(`Course ${req.params.id} has been deleted`)
    } 
    catch {
      (err) => console.error(err);
    }
  },
};
