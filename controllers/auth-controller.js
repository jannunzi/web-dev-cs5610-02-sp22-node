const users = [];

const signup = (req, res) => {
  const credentials = req.body;
  users.push(credentials);
  req.session['profile'] = credentials;
  res.sendStatus(200);
}

const login = (req, res) => {
  const credentials = req.body;
  const profile = users.find(user =>
    user.username === credentials.username &&
    user.password === credentials.password
  );
  if (profile) {
    req.session['profile'] = profile;
    res.sendStatus(200);
    return;
  }
  res.sendStatus(403);
}

const profile = (req, res) => {
  res.json(req.session['profile']);
}

const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
}

const findUsers = (req, res) => {
  res.json(users);
}

module.exports = (app) => {
  app.post('/api/signup', signup);
  app.post('/api/profile', profile);
  app.post('/api/login', login);
  app.post('/api/logout', logout);
  app.get('/api/users', findUsers);
}
