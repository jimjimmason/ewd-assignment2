const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema ({
  id: Number,
  FirstName: String,
  Surname: String,
  Address1: String,
  Address2: String,
  Town: String,
  County: String,
  Nationality: { type: String, default: "Irish" },
  phone_number: String,
  email: String,
  DOB : Date,
  gender : String,
  imageUrl: String,
  Type: String,
  TriathlonIrelandID: String,
  Role: { type: String, default: "member"}
});

export default mongoose.model('members', MemberSchema);