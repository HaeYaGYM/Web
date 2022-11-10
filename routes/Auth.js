const express = require("express");
const router = express.Router();
const { getAuth,  
    signInWithEmailAndPassword
    } = require('firebase/auth');
  const firestore = require('firebase-admin').firestore();
const admin = require('firebase-admin')
  const auth = getAuth();

router.get("/sign_in", (req,res)=>{
    res.render('sign_in')})

router.post('/sign_in_process', async(req, res) =>{
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
    const user = {
        email:req.body.email,
        password:req.body.pw
    }
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then( () =>{
      res.status(200)
      req.session.isOwner = true
      req.session.email = user.email
      console.log(req.session)
      res.redirect('/')}
    )
      .catch ((error) => {const errorCode = error.code;
      const errorMessage = error.message;
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
      res.write(`<script>alert('${errorCode} ${errorMessage}')</script>`)
      res.write("<script>window.location=\"/auth/sign_in\"</script>")}
      )})
      
router.get("/sign_up", (req,res)=>
        res.render('sign_up'))


router.post('/sign_up_process', async(req, res) =>{
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
    if (req.body.password != req.body.pw2){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write("<script>alert('비밀번호가 다릅니다')</script>")
        res.write("<script>window.location=\"/auth/sign_up\"</script>")
        
    } else{
        const user = {
            email: req.body.email,
            name:req.body.name,
            nick:req.body.nick,
            weight:req.body.weight,
            height:req.body.height,
            year:req.body.year,
            month:req.body.month,
            day:req.body.day
          }
        const userres = await admin.auth().createUser({
        email:user.email,
        password:req.body.password,
        emailVerified:false,
        disabled:false
        })
        
        await firestore.collection("users").doc(user.email).set({
                    email:user.email,
                    name: user.name,
                    nick: user.nick,
                    weight:user.weight,
                    height:user.height,
                    birth: user.year + "-" + user.month + "-" + user.day 
                  })
                  res.redirect('/auth/sign_in')
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;});
    }})

router.get('/logout', (req, res)=>{
    req.session.destroy(function(error){
        req.session
        res.redirect('/')
    }
)})    
        
module.exports = router