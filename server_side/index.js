const express = require('express');
const { tasks,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
} = require('./config')
const cors = require('cors');
const firebaseAuthController = require('./authControllers');
const middleWare = require('./middleware');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
console.log("hello");

const PORT = process.env.PORT || 3001;

const dayStringCalculation = (dayNo)=>{
    if(dayNo===1||dayNo===21||dayNo===31)
        return `${dayNo}st`;
    if(dayNo===2||dayNo===22)
        return `${dayNo}nd`;
    if(dayNo===3||dayNo===23)
        return `${dayNo}rd`;
    return `${dayNo}th`;

}


app.get('/test',middleWare,(req,res)=>{
  res.send("merge")
})

//LOGIN
app.post('/register', (req, res) => {
    const { email, password,displayName} = req.body;

    // Validate email and password presence
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    // Create user with email and password
    createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({displayName:displayName});
        // Optionally send an email verification
        sendEmailVerification()
          .then(() => {
            console.log('Verification email sent.');
          })
          .catch(err => {
            console.error('Error sending verification email:', err);
          });
        
        // Send success response
        res.status(201).json({ message: 'User registered successfully', user });
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
  
        console.error(`Error [${errorCode}]: ${errorMessage}`);
        res.status(400).json({ message: errorMessage });
      });
  });
///////
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Validate email and password presence
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    // Sign in user with email and password
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Successfully logged in
        const user = userCredential.user;
       
        
        user.getIdToken().then((idToken) => {
          // Optionally check if the user's email is verified
          if (!user.emailVerified) {
            return res.status(403).json({ message: 'Email not verified' });
          }
          
          // Send the ID token and user details in the response
          res.status(200).json({
            message: 'Login successful',
            token: idToken, // Access token (ID token)
            user: {
              uid: user.uid,
              displayName: user.displayName,
              email: user.email
            }
          });
        });
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
  
        console.error(`Error [${errorCode}]: ${errorMessage}`);
        res.status(400).json({ message: errorMessage });
      });
  });

  app.post('/logout', (req, res) => {
    // Sign out the user
    signOut()
      .then(() => {
        // Send success response
        res.status(200).json({ message: 'User signed out successfully' });
      })
      .catch((error) => {
        // Handle errors
        console.error('Error signing out:', error);
        res.status(500).json({ message: 'Error signing out user' });
      });
  });


//get on fire base(data+id)

app.get('/data',middleWare,async(req,res)=>{
   const q = req.query;
   
    const headerId = req.headers.authorization
    const id = headerId.split(' ')[1];
    const snapShot = await tasks.get();
    // const ids = snapShot.docs.map((doc)=>doc.id);
    const list = snapShot.docs.map((doc)=>doc.data());
    const taskss = list.filter((val)=>val.id===id&&val.date===q.day);
    

    res.send({"response":"Succes",data:taskss});
})

//post on fierbase
app.post('/data',async(req,res)=>{
    const data = req.body;
    const currDay = new Date();
    if(data.date==="")
      data.date=`${currDay.getFullYear()}-${currDay.getMonth()}-${currDay.getDate()}`;
    if(data.time==="")
      data.time="Today";
    console.log(data);
    await tasks.add(data);
    res.send({msg:"Data added"});
})



app.get('/anyDay',async(req,res)=>{
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const querys = req.query; //?day=yyyy-mm-dd
    const time = new Date(querys.day);
    const day=dayStringCalculation(time.getDate())
    const resp={
        day:`${days[time.getDay()]}`,
        month:`${month[time.getMonth()]}`,
        dayNumber:day,
        fullDay:`${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`
    }
    res.send(resp);
})



// app.get('/time',async(req,res)=>{
//     const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
//     const month= ["January","February","March","April","May","June","July","August","September","October","November","December"];
//     const time = new Date();
//     const day=dayStringCalculation(time.getDate())
//     const resp =  {
//         day:`${days[time.getDay()]}`,
//         month:`${month[time.getMonth()]}`,
//         dayNumber:day,
//         fullDay:`${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`
//     }
//     res.send(resp);
// })
//////////nuj daca imi mai trebuie ^
app.listen(PORT,()=>console.log("merge"))