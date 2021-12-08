///`hh:mm:ss`, `customer/agent name`, `:` and `sentence`
/* const dateReg = /\d{2}:\d{2}:\d{2}/;
const sentenceReg = /(.+):(.+)/;
const typesReg = /\s.+\s:/; */
const mentionReg = /(.+\s:\s)/;
const allReg = /(?<date>\d{2}:\d{2}:\d{2}) (?<person>.+) : (?<text>.+)$/;
const dotdateReg = /(.+\.)(\d.+)/;

const textIntoObject = (string) => {
  mention = string.match(mentionReg);
  allr = string.match(allReg);
  if (!allr) {
    string = fixingPerson(string);
  }
  mention = string.match(mentionReg);
  allr = string.match(allReg);

  const result = {
    date: allr.groups.date,
    mention: mention[0],
    sentence: allr.groups.text,
    type: allr.groups.person.toLowerCase(),
  };

  return [result];
};
/* 
////////////////////////////////////////////////////////////
if the person missing colon this function will add
 */
const fixingPerson = (string) => {
  const subCustomer = "Customer";
  const subAgent = "Agent";

  string = string.includes(subCustomer)
    ? string.replace("Customer", "Customer :")
    : string.includes(subAgent)
    ? string.replace("Agent", "Agent :")
    : string;

  return string;
};

/* 
This function check differents forms of string and adapt them to be process
 */

const comprobation = (string, comprobationString) => {
  const spliterMesagges = string.split("\n");
  let mesaggesObjets = [];
  for (let index = 0; index < spliterMesagges.length; index++) {
    mesaggesObjets[index] = textIntoObject(spliterMesagges[index]);
  }
  let mesaggesObjetsArray = [];
  for (let index = 0; index < mesaggesObjets.length; index++) {
    mesaggesObjetsArray.push(mesaggesObjets[index][0]);
  }
  if (mesaggesObjetsArray[0].type == mesaggesObjetsArray[1].type) {
    mesaggesObjetsArray[0].type = "customer";
    mesaggesObjetsArray[1].type = "customer";
  } else if (mesaggesObjetsArray[0].type != "customer") {
    mesaggesObjetsArray[0].type = "customer";
  }
  if (
    mesaggesObjetsArray[1].type != "customer" &&
    mesaggesObjetsArray[1].type != "agent"
  ) {
    mesaggesObjetsArray[1].type = "agent";
  }
  if (mesaggesObjetsArray.length > 1 && !comprobationString.match(dotdateReg)) {
    mesaggesObjetsArray = newLineInSentence(mesaggesObjetsArray);
  }
  if (
    !comprobationString.includes(`Customer :`) &&
    !comprobationString.includes(`Agent :`) &&
    !comprobationString.match(mentionReg)
  ) {
    mesaggesObjetsArray = removeColonToMention(mesaggesObjetsArray);
  }

  return mesaggesObjetsArray;
};

const divideSentence = (string) => {
  let stringDateSplitting = "";
  const stringArray = string.match(dotdateReg);
  for (let index = 1; index < stringArray.length; index++) {
    if (index == 1) {
      stringDateSplitting = `${stringArray[index]}`;
    } else {
      stringDateSplitting = `${stringDateSplitting}\n${stringArray[index]}`;
    }
  }
  string = stringDateSplitting;
  return string;
};

/* 
this function add /n in all sentences exepct in the last one
 */
const newLineInSentence = (mesaggesObjetsArray) => {
  for (let index = 0; index < mesaggesObjetsArray.length - 1; index++) {
    mesaggesObjetsArray[index].sentence =
      mesaggesObjetsArray[index].sentence.trimEnd();
    mesaggesObjetsArray[index].sentence =
      mesaggesObjetsArray[index].sentence + "\n";
  }
  return mesaggesObjetsArray;
};

/* 
when is necesary this function removed the colon in mention.
 */
const removeColonToMention = (mesaggesObjetsArray) => {
  for (let index = 0; index < mesaggesObjetsArray.length; index++) {
    mesaggesObjetsArray[index].mention = mesaggesObjetsArray[
      index
    ].mention.substring(0, mesaggesObjetsArray[index].mention.length - 2);
  }
  return mesaggesObjetsArray;
};

module.exports = {
  allReg,
  comprobation,
  divideSentence,
  dotdateReg,
  fixingPerson,
  mentionReg,
  newLineInSentence,
  removeColonToMention,
  textIntoObject,
};
