
const getSomeString = (req, res) => {
  res.send('Some String');
}
const getSomeObject = (req, res) => {
  const alice = {username: 'alice', firstName: 'Alice',
    lastName: 'Wonderland'};
  res.json(alice);
}

const addAandB = (req, res) => {
  const aParam = parseInt(req.params['a']);
  const bParam = parseInt(req.params.b);
  const cResult = aParam + bParam;
  res.send(`${aParam} + ${bParam} = ${cResult}`);
}

const sumAandB = (req, res) => {
  const aParam = parseInt(req.query['a']);
  const bParam = parseInt(req.query.b);
  const cResult = aParam + bParam;
  res.send(`${aParam} + ${bParam} = ${cResult}`);
}


const examples = (app) => {

  app.get('/sum', sumAandB);
  app.get('/add/:a/:b', addAandB);
  app.get('/get/some/object', getSomeObject)
  app.get('/get/some/string', getSomeString)
  app.get('/hello', (request, response) => {
    response.send("Hello World, Life is good!");
  });
}

module.exports = examples;

