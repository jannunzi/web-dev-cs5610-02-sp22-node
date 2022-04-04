const tuitsModel = require('./tuits-model');

const findAllTuits = async () => {
  const tuits = await tuitsModel.find();
  return tuits;
}
const createTuit = async (newTuit) => {
  const insertedTuit = await tuitsModel.create(newTuit);
  return insertedTuit;
}
const deleteTuit = async (tid) => {
  const status = await tuitsModel.deleteOne({_id: tid});
  return status;
}
const updateTuit = async (tid, tuit) => {
  const status = await tuitsModel.updateOne(
    {_id: tid},
    {$set: tuit});
  return status;
}
module.exports = {
  findAllTuits, createTuit, deleteTuit, updateTuit
}