var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Machine = require('../models/machine');
var Booking = require('../models/booking');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Hello Azure' });
});
router.post('/user/register', function(req,res,next){
	//name = req.body.name;
	//location = req.body.location;
	phone = req.body.phoneNumber;
	console.log(req.body);
	User.findOne({'phone': phone},function(err,data){
		if(err){
			console.log("error: ",err);
			res.json(JSON.parse(err));
		}
		if(data){
			res.json(data);
		}
		else{
			var user  = new User();
			user.name = "Rohan";
			user.phone = phone;
			user.location = "Bangalore"; 
			user.save((err, data)=>{
				if(err){
					res.json(err);
				}
				console.log(data);
				res.json(data);
			});
			
			
		}
	});
});

router.get('/machine/user/:id',(req, res, next)=>{
	console.log(req.params.id);
	mowner = req.params.id;
	Machine.find({"mowner":mowner}, (err, data)=>{
		if(err)
			res.json(err);
		
		res.json(data);
	})

});
router.get('/machine/all',(req,res,next)=>{

	Machine.find({}, (err, data)=>{
		if(err)
			res.json(err);
		
		res.json(data);
	})
});
router.get('/error',(req,res,next)=>{
	res.json("not found");
})
router.post('/machine/register', (req,res,next) =>{

	mname = req.body.mname;
	mtype = req.body.mtype;
	mowner = req.body.mowner;
	mprice = req.body.mprice;
	mdate = req.body.mdate;

	let machine = new Machine();
	machine.mname = mname;
	machine.mtype  = mtype;
	machine.mowner = mowner;
	machine.mprice = mprice;
	machine.mdate = mdate;
	
	machine.save((err,data)=>{
		if (err)
			res.json(err)

		res.json(data);
	});
	

});

router.post('/booking/register', (req,res,next) =>{
	
	userid = req.body.userid;
	mid = req.body.mid;
	bdate = req.body.bdate;
	mname = req.body.mname;
	let booking = new Booking();
	booking.userid = userid;
	booking.machine  = mid;
	booking.booking = bdate;
	booking.mname = mname;
	booking.save((err,data)=>{
		if (err)
			res.json(err)
		
		res.json(data);
	});
});
router.get('/booking/user/:id', (req,res,next) =>{

	userid = req.params.id;
	Booking.find({"userid":userid}, (err, data)=>{
		if(err)
			res.json(err);
		
		res.json(data);
	})

});



module.exports = router;
