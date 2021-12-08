const firstExample =
  "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const secondExample =
  "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.";
const thirdExample = "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra. \n14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend. \n14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text."
///`hh:mm:ss`, `customer/agent name`, `:` and `sentence`
const dateReg = /(\d{2}:\d{2}:\d{2})/;
const mentionReg = /(.+\s:\s)/;
const sentenceReg = /(.+):(.+)/;
const typesReg = /\s.+\s:/;
const allReg =  /(?<date>\d{2}:\d{2}:\d{2}) (?<person>.+) : (?<text>.+)$/



const textIntoObject = (string) => {
  mention = string.match(mentionReg);
  allr = string.match(allReg)
  const spliter = string.split(": ");
  const type = spliter[0].substring(9, spliter[0].length - 1);
  console.log(string)
  const result = {
    date: allr.groups.date,
    mention: mention[0],
    sentence: allr.groups.text,
    type: allr.groups.person.toLowerCase(),
  };
    return [result]

};

const multipleTextIntoObject = (string) => {
  const spliterMesagges = string.split("\n");
  let mesaggesObjets = [];
  for (let index = 0; index < spliterMesagges.length; index++) {
    mesaggesObjets[index] = textIntoObject(spliterMesagges[index]);
  }
  let mesaggesObjetsArray = [];
  for (let index = 0; index < mesaggesObjets.length; index++){
    mesaggesObjetsArray.push(mesaggesObjets[index][0])
  }
  return mesaggesObjetsArray;
};


console.log(multipleTextIntoObject(firstExample))

module.exports = { textIntoObject, multipleTextIntoObject };

