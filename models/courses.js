const mongoose = require("mongoose");
//schema for creating courses
const CourseSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      unique: true, 
      required: true }, 
    status: {
      type: String,
      default: "available",
      enum: ["available", "in_production", "scheduled"],
      required: true,
    },
    //not using this route for soft deletions and records of deletion
    // deletedAt: String,
    // deleted: {Boolean, default: false}
  },
  { timestamps: true },
  {collection: "courses"}   
);
//creation of the model used for courses collection in database and schema
const CourseModel = mongoose.model("courses", CourseSchema);
//exporting the model
module.exports = CourseModel;
