const  multipleTextIntoObject = require("./controllers/chat.controller");
/* 
  insert in multipleTextIntoObject function the text to convert to chat object
 */
const string = "14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.";

multipleTextIntoObject(string)
console.log(multipleTextIntoObject(string))