const students = [
    { name: 'Quincy', grade: [96,99], courses: ['cs301', 'cs303'] },
    { name: 'Jason', grade: [84,89], courses: ['cs201', 'cs203'] },
    { name: 'Alexis', grade: [100,100], courses: ['cs105', 'cs211'] },
    { name: 'Sam', grade: [65,70], courses: ['cs445', 'cs303'] },
    { name: 'Katie', grade: [90,94], courses: ['cs303', 'cs477'] }
];
//reduce it to an array of the average of each student who had the course 'cs303'
let result = students.filter(element => element.courses.includes('cs303'))
                     . reduce((arr, element,index,array) => {
                          const average = element.grade.reduce((ave, g,index,array) => ave + g / array.length, 0)
                          
                          
                       let key = [element.name];
                       arr.push({key : average});
                    //    let value = [[element.name],average]
                    //    //obj = {...obj,... {[element.name] : average}};
                    //    arr = [...arr,...value];
                           return arr;
}, []);
console.log(result);


console.log('Using Map Method to return an object which key is student names, values is average');
let res = students.filter(stu => stu.courses.indexOf('cs303') !== -1)
                  .map(stu =>{
                    let average = stu.grade.reduce((avg,g,index,array)=>avg+g/array.length,0);
                    return {[stu.name]:average};
                  })
                  .reduce((obj,stu,index,array) =>{
                 return {...obj, ...stu}
                  }
                 ,{});
                  console.log(res);
