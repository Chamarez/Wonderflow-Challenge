const multipleTextIntoObject = require("../controllers/chat.controller");

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
const sixthExample =
  "14:24:32 Luca Galasso : Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Emanuele Querzola : I received the package, ut blandit lectus.";
const sevenExample =
  "14:24:32 Customer Lorem ipsum dolor sit amet, consectetur adipiscing elit.14:26:15 Agent I received it at 12:24:48, ut blandit lectus.";
const firstOuput = [{
    date: '14:24:32',
    mention: '14:24:32 Customer : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
  }];
const secondOuput = [{
    date: '14:24:32',
    mention: '14:24:32 Customer : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
    type: 'customer'
  }, {
    date: '14:26:15',
    mention: '14:26:15 Agent : ',
    sentence: 'Aliquam non cursus erat, ut blandit lectus.',
    type: 'agent'
  }];
  const thirdOuput= [{
    date: '14:24:32',
    mention: '14:24:32 Customer : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n',
    type: 'customer'
  }, {
    date: '14:27:00',
    mention: '14:27:00 Customer : ',
    sentence: 'Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra.\n',
    type: 'customer'
  }, {
    date: '14:27:47',
    mention: '14:27:47 Agent : ',
    sentence: 'Vestibulum tempor diam eu leo molestie eleifend.\n',
    type: 'agent'
  }, {
    date: '14:28:28',
    mention: '14:28:28 Customer : ',
    sentence: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    type: 'customer'
  }];
  const fourOuput = [{
    date: '14:24:32',
    mention: '14:24:32 Customer : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
  }, {
    date: '14:26:15',
    mention: '14:26:15 Agent : ',
    sentence: 'Aliquam non cursus erat, ut blandit lectus.',
    type: 'agent'
  }];
  const fiveOuput = [{
    date: '14:24:32',
    mention: '14:24:32 Customer : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
  }, {
    date: '14:26:15',
    mention: '14:26:15 Agent : ',
    sentence: 'I received it at 12:24:48, ut blandit lectus.',
    type: 'agent'
  }];
  const sixthOuput = [{
    date: '14:24:32',
    mention: '14:24:32 Luca Galasso : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
  }, {
    date: '14:26:15',
    mention: '14:26:15 Emanuele Querzola : ',
    sentence: 'I received the package, ut blandit lectus.',
    type: 'agent'
  }];
  const seventhOuput = [{
    date: '14:24:32',
    mention: '14:24:32 Customer ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
  }, {
    date: '14:26:15',
    mention: '14:26:15 Agent ',
    sentence: 'I received it at 12:24:48, ut blandit lectus.',
    type: 'agent'
  }];
  


 test('first step test', () => {
  expect(multipleTextIntoObject(firstExample)).toEqual(firstOuput);
});
test('second step test', () => {
  expect(multipleTextIntoObject(secondExample)).toEqual(secondOuput);
});
test('third step test', () => {
  expect(multipleTextIntoObject(thirdExample)).toEqual(thirdOuput);
}); 
 test('four step test', () => {
  expect(multipleTextIntoObject(fourExample)).toEqual(fourOuput);
});

 test('five step test', () => {
  expect(multipleTextIntoObject(fiveExample)).toEqual(fiveOuput);
});

test('six step test', () => {
  expect(multipleTextIntoObject(sixthExample)).toEqual(sixthOuput);
});

test('seven step test', () => {
  expect(multipleTextIntoObject(sevenExample)).toEqual(seventhOuput);
}); 

