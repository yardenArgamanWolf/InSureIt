const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true)
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const _ = require('lodash');
const mongoDbUrl = `mongodb+srv://shaimorad:morad1994@cluster0.27tie.mongodb.net/insureit?retryWrites=true&w=majority`;
const multer = require('multer');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const Capacity = require("../server/model/Capacity.js");
const Structure = require("../server/model/Structure.js");
const StructureAndCapacity = require("../server/model/StructureAndCapacity.js");

app.use(fileUpload({
  createParentPath: true
}));



// app.use(cors());
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json());
const userRoutes = require("./api/user/route/user"); //bring in our user routes
app.use("/user", userRoutes);


 


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/capacity", async (req, res, next) => {
  //let capacity = new Capacity({ offer_ID: '1', capacity_value: '150,000', insurance_claim: 'ללא תביעות', structure_type: 'בית פרטי', floor: null, price: '384', service_index: '76', company: 'מגדל חברה לביטוח בע"מ', earthquake_cover: 'כולל', robbery_cover: 'כולל' });
  let capacity = await Capacity.find().limit(1000);
  if (capacity) {
    res.json({ data: capacity, message: "success" });
  } else {
    res.json({ data: null, message: "faild" });
  }
});
app.get("/structure", async (req, res, next) => {
  let strucure = await Structure.find().limit(5000);
  if (strucure) {
    res.json({ data: strucure, message: "success" });
  } else {
    res.json({ data: null, message: "faild" });
  }
});
app.get("/structure_and_capacity", async (req, res, next) => {
  let structure_and_capacity = await StructureAndCapacity.find().limit(5000);
  if (structure_and_capacity) {
    res.json({ data: structure_and_capacity, message: "success" });
  } else {
    res.json({ data: null, message: "faild" });
  }
});


// app.post('/upload-doc',upload.any(), async (req, res) => {
//   console.clear()
//   const x33 = await req.fields;
//   console.log('xssssee3333',x33)
//   const xxx = await req.body;
//   const x22 = await req.headers
//   console.log('x22',x22)
//   console.log('xxx:',xxx)
//   return;

//   try {
//     const formDataReq = req.body.data;
//     console.log('test:',formDataReq)
//     if (!req.body) {
//       res.send({
//         status: false,
//         message: 'No file uploaded'
//       });
//     } else {
//       //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
//       let avatar = formDataReq;
//       //Use the mv() method to place the file in upload directory (i.e. "uploads")
//       avatar.mv('./uploads/' + avatar.name);

//       //send response
//       res.send({
//         status: true,
//         message: 'File is uploaded',
//         data: {
//           name: avatar.name,
//           mimetype: avatar.mimetype,
//           size: avatar.size
//         }
//       });
//     }
//   } catch (err) {
//     console.log('error:', err)
//     res.status(500).send(err);
//   }
// });



//mongoose.set("useCreateIndex", true);
mongoose
  .connect(mongoDbUrl, { useNewUrlParser: true })
  .then(() => {
    //the hosting provider will inject the port test
    console.log("mongo running...");
    //const server = https.createServer({key: privatKey,cert: certificate},app).listen(process.env.PORT || 3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log(`App is running on 3000`);
});
