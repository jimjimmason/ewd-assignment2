import config from './config';
import express from 'express';
//import contactsRouter from './api/contacts';
//import newsRouter from './api/posts';
import eventsRouter from './api/events';
import membersRouter from './api/members';
import reviewsRouter from './api/reviews';
import body_parser from 'body-parser';
import mongoose from 'mongoose';
import {loadEvents} from './eventsData';
import {loadReviews} from './reviewsData';
import {loadMembers} from './membersData';

const server = express();

//connect to database
// mongoose.connect(config.mongoDb);   // this is causing open connecions problem
mongoose.createConnection(config.mongoDb);

//pupulate DB with sample data
if (config.seedDb) {
	loadEvents();
	loadReviews();
	loadMembers();
}

//configure body-parser
server.use(body_parser.json());
server.use(body_parser.urlencoded({}));
//server.use('/api/contacts', contactsRouter);
//server.use('/api/posts', newsRouter);
server.use('/api/events', eventsRouter);
server.use('/api/members', membersRouter);
server.use('/api/reviews', reviewsRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});