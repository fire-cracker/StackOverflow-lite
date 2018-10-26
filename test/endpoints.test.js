import request from 'supertest';
import app from '../app';
import userData from '../test/faker/fakeUsers';
import dotenv from 'dotenv';

dotenv.config();

describe('GET all questions', () => {
  it('should be valid route /api/v1/questions returns 200 (orders retrieved successfully)', (end) => {
    request(app).get('/api/v1/questions')
            .expect("Content-type", /json/)
            .expect(function (res) {
                res.body.success = 'true';
                res.body.Status = "Orders Retrieved Successfully";
                res.body.orders = userData.goodQues;
            })
            .expect(200, end)
  })
})

describe('GET a single question', () => {
  it('should be valid route /api/v1/questions/1 returns 200 (orders retrieved successfully)', (end) => {
    request(app).get('/api/v1/questions/1')
            .expect("Content-type", /json/)
            .expect(function (res) {
                res.body.success = 'true';
                res.body.Status = "Orders Retrieved Successfully";
                res.body.orders = userData.firstQues;
            })
            .expect(200, end)
  })
 
})