var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/Category');
var BrandRouter = require('./routes/Brand');
var ProductsRouter=require('./routes/Products');
var ProductdetailsRouter=require('./routes/productdetails');
var bannerRouter=require('./routes/banner');
var categorybannerRouter=require('./routes/categorybanner');
var admincheckRouter=require('./routes/admin');
var topCategoriesRouter=require('./routes/topCategories');
var usersRouter=require('./routes/userinterface');
var useraccount=require('./routes/useraccount');
var user=require('./routes/users');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Category',categoryRouter);
app.use('/Brand',BrandRouter);
app.use('/Products',ProductsRouter);
app.use('/banner' ,bannerRouter);
app.use('/productdetails',ProductdetailsRouter);
app.use('/categorybanner',categorybannerRouter);
app.use('/admins',admincheckRouter);
app.use('/topcategories',topCategoriesRouter)
app.use('/useinter',usersRouter);
app.use('/useraccount', useraccount); 
app.use('/user',user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
