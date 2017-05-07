import supertest from "supertest";
import {server} from  "./../server.js";
import should from "should";


// UNIT test begin

describe("Events API unit tests",function(){
  this.timeout(120000);

// #1 return a collection of json documents
  it("should return collection of JSON documents",function(done){

    // calling home page api
    supertest(server)
    .get("/api/events")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
      done();
    });
  });

  // #2 add an event
  it("should add an event",function(done){

    // post to /api/events
    // calling home page api
    supertest(server)
    .post('/api/events')
    .send({eventName:"NewEvent 999",eventType:"Sprint"})
    .expect("Content-type",/json/)
    .expect(201)
    .end(function(err,res){
      res.status.should.equal(201);
      res.body.event.should.have.property('_id');
      res.body.event.eventName.should.equal('NewEvent 999');
      done();
    });
  });

  // #3 delete and event (getting id of first event and delteing this)
  it("should delete event",function(done){
    // post to /api/events
    // calling home page api
    const superserver = supertest(server);
    superserver
    .get("/api/events")
    .expect("Content-type",/json/)
    .expect(200) // This is HTTP response
    .end(function(err,res){
      const id = res.body[0]._id;
      superserver
        .delete("/api/events/"+id)
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            res.body._id.should.equal(id);
            res.body.should.have.property("eventName");
            done();
          }
        );
      }
    );
  });

  it("should add and delete Event 999",function(done){
    // post to /api/events
    // calling home page api
    const superserver = supertest(server);
    superserver
    .get("/api/events")
    .expect("Content-type",/json/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
        const id = res.body[0]._id;
        superserver
        .put("/api/events/"+id)
        .send({eventName:"Event 999",eventType:"Sprint"})
        .expect("Content-type",/json/)
        .expect(200) // THis is HTTP response
        .end(function(err,res){
            superserver
            .delete("/api/events/"+id)
            .expect("Content-type",/json/)
            .expect(200) // THis is HTTP response
            .end(function(err,res){
                res.body._id.should.equal(id);
                res.body.eventName.should.equal("Event 999");
                done();
             }
           );
           }
         );
      });
    });



  });

