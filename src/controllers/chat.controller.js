const {comprobation,divideSentence,dotdateReg,textIntoObject} = require("../services/chat.services")

const multipleTextIntoObject = (string) => {
    const comprobationString = string;
    if (string.match(dotdateReg)) {
      string = divideSentence(string);
    }
    if (!string.includes("\n")) {
      return textIntoObject(string);
    } else {
      return string = comprobation(string, comprobationString); 
    }
  };
  

  module.exports = multipleTextIntoObject;