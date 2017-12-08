const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({

  association: String,
  title: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] },
  financing: String,
  benificiaries: String,
  link: String,
  imgURL: String,
  category: {
    type: String,
    enum: [
      'cooperation',
      'social action',
      'education'
    ],

 },

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
