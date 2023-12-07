const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter a score: ', (answer: number) => {
    const score = answer

    let validityCheck: boolean = (score >= 0) && (score <= 100)

    if (validityCheck) {
        const result = getGrade(score)
        console.log(`For a score of ${score}, the grade is ${result}`);
    } else {
        console.log('Invalid input. Please enter a valid numeric score');
    }

    rl.close()
})

function getGrade(score: number): string {
    
    // let validityCheck: boolean = (score >= 0) && (score <= 100)
    // console.log(validityCheck);
    
    let grade: string

    if (score >= 70) {
        grade = 'A'
    } else if (score >= 50) {
        grade = 'B'
    } else if (score >= 45) {
        grade = 'C'
    } else if (score >= 40) {
        grade = 'D'
    } else {
        grade = 'E'
    }

    return grade;
}