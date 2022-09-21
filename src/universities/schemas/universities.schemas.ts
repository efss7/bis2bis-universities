import mongoose from 'mongoose';

export const UniversitiesSchema = new mongoose.Schema({
  domains: [String],
  alpha_two_code: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  web_pages: [String],
  name: {
    type: String,
    require: true,
  },
  'state-province': {
    type: String,
    require: false,
  },
});
