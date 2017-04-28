const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema ({
	id: Number,
  eventDate: {type: Date, default: Date.now },
  eventName: String,
  eventType: String,
  distance: [String],
  raceSeries: String,
  ageGroup: [String],
  county: String,
  eventurl: String,
  membersCompeting: [String],
  membersCompetingCount: Number
});

export default mongoose.model('events', EventSchema);