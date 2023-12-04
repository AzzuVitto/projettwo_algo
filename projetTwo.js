
const prompt = require('prompt-sync')()
let score = 0
let choice = ""
let myQuestions = [
    {
        question: "Parmi ces villes, laquelle est située en Espagne?",
        answer: ["1) Rome", "2) Londres", "3) Madrid", "4) Oslo"],
        correctAnswer: 3,
    },
    {
        question: "Quel est l'ingredient pas nécessaire pour une pâte à pizza?",
        answer: ["1) beurre", "2) levure", "3) eau", "4) farine"],
        correctAnswer: 1
    },
    {
        question: "Quelle équipe de foot a gagné la coupe du monde 2023?",
        answer: ["1) Espagne", "2) Argentine", "3) Maroc", "4) Bresil"],
        correctAnswer: 2
    },
    {
        question: "Certains mois de l'année comptent 31 jours. Combien en ont 28 ?",
        answer: ["1) 5", "2) 3", "3) 8", "4) 1"],
        correctAnswer: 4
    },
    {
        question: "Quel est l'animal national de l'Australie ?",
        answer: ["1) Le chat", "2) Le cheval", "3) Le Kangourou rouge", "4) La giraffe"],
        correctAnswer: 3
    }
]

for (let i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i].question);
    for (let j = 0; j < myQuestions[i].answer.length; j++) {
        console.log(myQuestions[i].answer[j]);
    }
    choice = parseInt(prompt("choisis"))
    
    if (choice == myQuestions[i].correctAnswer) {
        score++
        console.log("Bonne reponse")
    }
     else {
        console.log("mauvaise reponse");
    }
}
console.log(score)