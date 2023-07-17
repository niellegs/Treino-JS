const notas = [90, 80, 70]

function studentRank(grades) {
    total = 0
    for(let grade of grades){
        total += grade
    }
    average = total/ grades.length;
    if(average < 60) {
        console.log("F")
    } else if(average < 70) {
        console.log("D")
    } else if(average < 80) {
        console.log("C")
    } else if(average < 90) {
        console.log("B")
    } else {
        console.log("A")
    }
}

studentRank(notas)