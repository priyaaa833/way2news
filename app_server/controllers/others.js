/* GET 'about' page */
module.exports.about = function(req, res){
  res.render('generic-text', { title: 'About' });
  content: 'WaytoNews is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'

};
/* GET 'signin' page */
module.exports.signin = function(req, res){
  res.render('signin', { title: 'signin' });
  content: 'WaytoNews is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
}
/* GET 'register' page */
module.exports.register = function(req, res){
  res.render('register', { title: 'register' });
  content: 'WaytoNews is the application you’ll build throughout this book. It displays differently on different devices, showing a list of places and details about each place, and allows visitors to log in and leave reviews.'
}

