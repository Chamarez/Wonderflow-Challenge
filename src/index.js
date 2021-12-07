const firstExample = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
const secondExample = '14:24:32 Customer : Lorem ipsum dolor sit amet, consectetur adipiscing elit. /n 14:26:15 Agent : Aliquam non cursus erat, ut blandit lectus.'

const textIntoObject = (string)=>{
    const spliter = string.split(": ", 1);
    console.log(spliter)
    const date = (spliter[0].substring(0, 8));
    const type = spliter[0].substring(9, spliter[0].length-1);
    console.log(date)
    console.log(type)
    return [{
        date: date, 
        mention: spliter[0] + ": ", 
        sentense:spliter[1],
        type: type
    }]
}

console.log(textIntoObject(firstExample));



const result = [{
    date: '14:24:32',
    mention: '14:24:32 Customer : ',
    sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'customer'
  }]

