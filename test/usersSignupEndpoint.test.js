import userData from '../test/model/userSignup';
import dotenv from 'dotenv';

dotenv.config();

// describe('User signup', () => {
//   it('Should signup a user successfully', (end) => {
//     request(app).get('/api/v1/questions')
//             .expect(function (res) {
//                 res.body.success = 'true';
//                 res.body.Status = "Orders Retrieved Successfully";
//                 res.body.orders = userData.goodQues;
//             })
//             .expect(200, end)
//   })

//   it('Should return 400(Bad Request) on a user signup without a name', async () => {
//     try {
//       const res = await request(app)
//       .post('/api/v1/auth/signup')
//       .send(userData.namelesSignup)
//       res.should.have.status(400);
//     } catch (e) {
//       throw e.message;
//     }
//   })

//   it('Should return 400(Bad Request) on a user signup with a wrong email', async () => {
//     try {
//       const res = await request(app)
//       .post('/api/v1/auth/signup')
//       .send(userData.wrongEmailSignup)
//       res.should.have.status(400);
//     } catch (e) {
//       throw e.message;
//     }
//   })
// })