const firstExample =
  "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const secondExample =
  "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.";
const thirdExample =
  "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n14:27:00 Customer : Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra. \n14:27:47 Agent : Vestibulum tempor diam eu leo molestie eleifend. \n14:28:28 Customer : Contrary to popular belief, Lorem Ipsum is not simply random text.";
const fourExample =
  "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.";
const fiveExample =
  "14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent : I received it at 12:24:48, ut blandit lectus.";
const sixExample =
  "14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.";
///`hh:mm:ss`, `customer/agent name`, `:` and `sentence`
const dateReg = /(\d{2}:\d{2}:\d{2})/;
const mentionReg = /(.+\s:\s)/;
const sentenceReg = /(.+):(.+)/;
const typesReg = /\s.+\s:/;
const allReg = /(?<date>\d{2}:\d{2}:\d{2}) (?<person>.+) : (?<text>.+)$/;
const dotdateReg = /(.+\.)(\d.+)/;

const textIntoObject = (string) => {
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

const multipleTextIntoObject = (string) => {
  if (string.match(dotdateReg)) {
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
  }
  console.log(string);
  const spliterMesagges = string.split("\n");
  console.log(spliterMesagges);
  let mesaggesObjets = [];
  for (let index = 0; index < spliterMesagges.length; index++) {
    mesaggesObjets[index] = textIntoObject(spliterMesagges[index]);
  }
  let mesaggesObjetsArray = [];
  for (let index = 0; index < mesaggesObjets.length; index++) {
    mesaggesObjetsArray.push(mesaggesObjets[index][0]);
  }
  console.log(mesaggesObjetsArray[0].type);
  if (mesaggesObjetsArray[0].type == mesaggesObjetsArray[1].type) {
    mesaggesObjetsArray[0].type = "customer";
    mesaggesObjetsArray[1].type = "customer";
    console.log("entro");
  } else if (mesaggesObjetsArray[0].type != "customer") {
    mesaggesObjetsArray[0].type = "customer";
    console.log("customer");
  }

  if (
    mesaggesObjetsArray[1].type != "customer" &&
    mesaggesObjetsArray[1].type != "agent"
  ) {
    mesaggesObjetsArray[1].type = "agent";
  }

  return mesaggesObjetsArray;
};
console.log(multipleTextIntoObject(sixExample));

module.exports = { textIntoObject, multipleTextIntoObject };
