const models = require('../models');

const Account = models.Account;

const loginPage = (req, res) => {
    res.render('login');
};

const signupPage = (req, res) => {
    res.render('signup');
};

const logout = (req, res) => {
    res.render('/');
};

const login = (req, res) => {
    
};

const signup = (req, res) => {
    
};

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signupPage = signupPage;
module.exports.signup = signup;