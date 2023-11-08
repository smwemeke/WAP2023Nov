
//Method 1: Using bind

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList: function() {
//         this.students.forEach(function(student) {
//             console.log(this.title + ": " + student);
//         }.bind(group));
//     }
// };

// group.showList();

// console.log('Method 2: Using Wrapper')
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList: function() {
//         this.students.forEach((student) =>{
//             console.log(this.title + ": " + student);
//         });
//     }
// };
// group.showList();


console.log('Method 3: Using call')
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.call(group));
    }
};
group.showList();



// console.log('Method 3: Using self pattern')
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList: function() {
//         let self = this;

//         self.students.forEach(function(student) {
//             console.log(self.title + ": " + student);
//         });
//     }
// };
// group.showList();