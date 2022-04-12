let tuits = require('./tuits.json');

const tuitsDao = require('../../database/tuits/tuits-dao');

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits();
  res.json(tuits);
}

const createNewTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit["_id"] = (new Date()).getTime()+'';
  // tuits.push(newTuit);

  const insertedTuit = await tuitsDao.createTuit(newTuit);

  res.json(insertedTuit);
}

const deleteTuit = async (req, res) => {
  const tuitId = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitId);
  // tuits = tuits.filter(t => t._id !== tuitId);
  res.sendStatus(200);
}

const updateTuit = async (req, res) => {
  const tid = req.params['tid'];
  const updatedTuit = req.body;
  const status = tuitsDao.updateTuit(tid, updatedTuit);
  res.sendStatus(200);
}

module.exports = (app) => {
  app.get('/api/tuits', findAllTuits);
  app.post('/api/tuits', createNewTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
  app.put('/api/tuits/:tid', updateTuit);
}