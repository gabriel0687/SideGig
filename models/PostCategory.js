const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostCategorySchema = new Schema({
  //Atributes for PostCategory
  name: { type: String, required: true },
  description: String,
  subCategory:[]
});

const PostCategory = mongoose.model("PostCategory", PostCategorySchema);

module.exports = PostCategory;
