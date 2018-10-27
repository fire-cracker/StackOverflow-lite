import request from 'supertest';
import app from '../app';
import userData from '../test/model/fakeUsers';
import dotenv from 'dotenv';

dotenv.config();

// Tests for the GET Route
describe('GET all questions', () => {
  it('should be valid route /api/v1/questions returns 200 (questions retrieved successfully)', (end) => {
    request(app).get('/api/v1/questions')
            .expect("Content-type", /json/)
            .expect(function (res) {
                res.body.success = 'true';
                res.body.Status = "questions Retrieved Successfully";
                res.body.questions = userData.goodQues;
            })
            .expect(200, end)
  })
})

describe('GET a single question', () => {
  it('should be valid route /api/v1/questions/1 returns 200 (questions retrieved successfully)', (end) => {
    request(app).get('/api/v1/questions/1')
            .expect("Content-type", /json/)
            .expect(function (res) {
                res.body.success = 'true';
                res.body.Status = "Question Retrieved Successfully";
                res.body.questions = userData.firstQues;
            })
            .expect(200, end)
  })

  it('should return error 404(question not found in the database) if database does not have data at that location', (end) => {
    request(app).get('/api/v1/questions/2000000')
        .expect('Content-Type', /json/)
        .expect(function (res) {
            res.body.success = "false";
            res.body.status = "question Not Found in the Database";
        })
        .expect(404, end)
});

describe("When non integer questionId is sent", () => {
  it('should return statusCode of 400(Bad Reuest)', (end) => {
      request(app).get('/api/v1/questions/A')
          .expect('Content-Type', /json/)
          .expect(function (res) {
              res.body.status = "unsuccessful";
          })
          .expect(400, end)
  });
});
})

// Tests for the POST Route
describe('Validate POST Route', () => {
  describe("When Correct input data is supplied", () => {
      it('should be valid /api/v1/questions', (end) => {
          request(app).post('/api/v1/questions')
              .type("JSON")
              .send(userData.fullQues)
              .expect('Content-Type', /json/)
              .expect(function (res) {
                  res.body.Status = 'question Sent Successfully';
              })
              .expect(201, end)
      });
  });
  // describe("When an questionId sent to a post route", () => {
  //     it('should return statusCode of 400(Bad Request)', (end) => {
  //         request(app).post('/api/v1/questions/10')
  //             .type('JSON').send(test.fullquestion)
  //             .expect('Content-Type', /json/)
  //             .expect(function (res) {
  //                 res.body.status = "unsuccessful";
  //             })
  //             .expect(400, end)
  //     });
  // });
  describe('Check POST input for Error', () => {
      it('should return Error status code 400 if no data was passed', (end) => {
          request(app).post('/api/v1/questions')
              .type('JSON')
              .expect('Content-Type', /json/)
              .expect(function (res) {
                  res.body.status = "Bad Request";
                  res.body.success = "false";
                  res.body.success.toLowerCase();
              })
              .expect(400, end);
      });
      it('should return Error status code 400 req.body.description is null', (end) => {
          request(app).post('/api/v1/questions')
              .type('JSON')
              .send(userData.noDescription)
              .expect('Content-Type', /json/)
              .expect(function (res) {
                  res.body.Status = 'Bad Request';
                  res.body.success = 'false';
                  res.body.success.toLowerCase();
              })
              .expect(400, end);
      });
      it('should return Error status code 400 req.body.title is null', (end) => {
        request(app).post('/api/v1/questions')
            .type('JSON')
            .send(userData.noTitle)
            .expect('Content-Type', /json/)
            .expect(function (res) {
                res.body.Status = 'Bad Request';
                res.body.success = 'false';
                res.body.success.toLowerCase();
            })
            .expect(400, end);
    });
  });
});

// Tests for the PUT Route
describe('Validate PUT Route', () => {
  describe("when Correct PUT Query is supplied", () => {
      it('should be valid route /api/v1/questions/1 editted successfully returning status code 201(Update Successful)', (end) => {
          request(app).put('/api/v1/questions/1')
              .type('JSON').send(userData.fullQues)
              .expect(function (res) {
                  res.body.Status = "Update successful";
              })
              .expect(201, end)
      });
  });
 
  describe("Resolve Conflicts", () => {
      it("should return 404(Previous question not found, when memory has no data to modify)", (end) => {
          request(app).put('/api/v1/questions/300')
              .type('JSON')
              .send(userData.fullQues)
              .expect('Content-Type', /json/)
              .expect(function (res) {
                  res.body.success = "false";
                  res.body.status = "question Not Found in the Database"
              })
              .expect(404, end);
      });
  });
});

//Tests for the DELETE Route
describe("Validate Delete Route", () => {
    describe("When questionId is correctly supplied", () => {
        it('should return StatusCode 200(question successfully deleted)', (end) => {
            request(app).delete('/api/v1/questions/1')
                .expect('Content-Type', /json/)
                .expect(function (res) {
                    res.body.success = "true";
                    res.body.Status = "question Deleted Successfuly";
                })
                .expect(200, end)
        });
    });
    describe("When item can not be found in the database", () => {
        it('should return statusCode of 404(question not found)', (end) => {
            request(app).delete('/api/v1/questions/300')
                .expect('Content-Type', /json/)
                .expect(function (res) {
                    res.body.success = "false";
                    res.body.Status = "question Not Found in the Database";
                })
                .expect(404, end)
        });
    });
    describe("When non integer questionId is sent", () => {
        it('should return statusCode of 400(Bad Request)', (end) => {
            request(app).delete('/api/v1/questions/A')
                .expect('Content-Type', /json/)
                .expect(function (res) {
                    res.body.status = "unsuccessful";
                })
                .expect(400, end)
        });
    });
    // describe("When question Id is not sent", () => {
    //     it('should return statusCode of 400(Bad Request)', (end) => {
    //         request(app).delete('/api/v1/questions')
    //             .expect('Content-Type', /json/)
    //             .expect(function (res) {
    //                 res.body.status = "unsuccessful";
    //             })
    //             .expect(400, end)
    //     });
    // });
});