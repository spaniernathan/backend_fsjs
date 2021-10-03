const express = require('express')
const i18next = require('i18next')
const Backend = require('i18next-fs-backend')
const middleware = require("i18next-http-middleware")
const user = require("./UserRouteur")

i18next.use(Backend).use(middleware.LanguageDetector).init({
  locales: ['en', 'fr'],

  defaultLocale: 'en',
   backend: {
     loadPath: './locales/{{lng}}/translation.json'
   }
})

const app = express()
app.use(middleware.handle(i18next))
app.use(express.json())
// app.use(user)

app.get('/', function(req, res){
  console.log(req.t('user_connection_wrong_information'))
  res.send(req.t('user_connection_wrong_information'));
});

app.listen(8000, function(err){
  if (err) console.log(err);
  console.log("Server listening on PORT", 8000);
});
