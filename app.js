import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';

module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: ["mocha"],
    files: ["test.js", "controllers/controller.js"],
    browsers: ["Chrome"],
    singleRun: true,
    preprocessors: { "*.js": ["coverage"] },
    reporters: ["progress", "coverage"]
  });
};

// Set up the express app
const app = express()
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = process.env.PORT||5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});