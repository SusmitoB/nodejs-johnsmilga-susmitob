const mongoose = require('mongoose');

// * visit at https://mongoosejs.com/docs/guide.html to know more about how mongoose is helping to interact easily with the mongo db

// * Schema - What properties arwe mentioned in the schema only those will be considered
const TaskSchema = new mongoose.Schema({
  // _id: {
  //   type: String,
  //   default: mongoose.Types.ObjectId, // $ default value
  // },
  name: {
    type: String,
    required: [true, 'must provide a name'], // $ validator
    trim: true, // $ validator
    maxlength: [20, "name shouldn't be more than 20 characters"], // $ validator
  },
  completed: {
    type: Boolean,
    default: false, // $ default value
  },
});

// * model
module.exports = mongoose.model('Task', TaskSchema);
