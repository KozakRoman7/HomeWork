const students = ["Олександр","Ігор","Олена","Іра","Олексій","Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5]


const pairs = getPairs(students)
function getPairs(students){
    const all = [students.slice(0,-5).concat(students.slice(2,-3)),students.slice(1,-4).concat(students.slice(3,-2)),students.slice(4)  ];
    return all

}
console.log(pairs)

const newWork = getWork(themes)
function getWork(themes){
    const giveTheme = [students.slice(0,-5).concat(students.slice(2,-3)).concat(themes.slice(0,-2)),students.slice(1,-4).concat(students.slice(3,-2)).concat(themes.slice(1,-1)),students.slice(4).concat(themes.slice(2))]
    return giveTheme

};
console.log(newWork);

const point = getAppraisal(marks)
function getAppraisal(marks){
    let getPoint = [students.slice(0,-5).concat(marks.slice(0,-5)),students.slice(1,-4).concat(marks.slice(1,-4)),students.slice(2,-3).concat(marks.slice(2,-3)),students.slice(3,-2).concat(marks.slice(3,-2)),students.slice(4,-1).concat(marks.slice(4,-1)),students.slice(5).concat(marks.slice(5))]
    return getPoint
};
console.log('point: ', point);


const newMark = [1,2,3,4,5]
const randomMark = randomExcluded(newMark)
function randomExcluded(newMark) {
let a = newMark[Math.floor(Math.random() * newMark.length)];
let b = newMark[Math.floor(Math.random() * newMark.length)];
let c = newMark[Math.floor(Math.random() * newMark.length)];
const pairsAndMarks = [students.slice(0,-5).concat(students.slice(2,-3)).concat(a),students.slice(1,-4).concat(students.slice(3,-2)).concat(b),students.slice(4).concat(c)]
return pairsAndMarks 
}
console.log(randomMark)






document.writeln(`
Всі дані в консолі)<br>
`);


