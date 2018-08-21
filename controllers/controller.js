import db from '../db/db';
/* eslint-disable class-methods-use-this */
class controller {
  getAllquestions(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'questions retrieved successfully',
      questions: db,
    });
  }

  getquestion(req, res) {
    const id = parseInt(req.params.id, 10);
    db.map((question) => {
      if (question.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'question retrieved successfully',
          question,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'question does not exist',
    });
  }

  createquestion(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }else if (!req.body.tags) {
      return res.status(400).send({
        success: 'false',
        message: 'tags is required',
      });
    }
    const question = {
      id: db.length + 1,
      title: req.body.title,
      description: req.body.description,
      tags: req.body.tags,
    };
    db.push(question);
    return res.status(201).send({
      success: 'true',
      message: 'question added successfully',
      question,
    });
  }

  updatequestion(req, res) {
    const id = parseInt(req.params.id, 10);
    let questionFound;
    let itemIndex;
    db.map((question, index) => {
      if (question.id === id) {
        questionFound = question;
        itemIndex = index;
      }
    });

    if (!questionFound) {
      return res.status(404).send({
        success: 'false',
        message: 'question not found',
      });
    }

    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    } else if (!req.body.tags) {
      return res.status(400).send({
        success: 'false',
        message: 'tags is required',
      });
    }
    const newquestion = {
      id: questionFound.id,
      title: req.body.title || questionFound.title,
      description: req.body.description || questionFound.description,
      tags: req.body.tags || questionFound.tags,
    };

    db.splice(itemIndex, 1, newquestion);

    return res.status(201).send({
      success: 'true',
      message: 'question added successfully',
      newquestion,
    });
  }

  deletequestion(req, res) {
    const id = parseInt(req.params.id, 10);
    let questionFound;
    let itemIndex;
    db.map((question, index) => {
      if (question.id === id) {
        questionFound = question;
        itemIndex = index;
      }
    });

    if (!questionFound) {
      return res.status(404).send({
        success: 'false',
        message: 'question not found',
      });
    }
    db.splice(itemIndex, 1);

    return res.status(200).send({
      success: 'true',
      message: 'question deleted successfuly',
    });
  }

 
}


const Controller = new controller();
export default Controller;