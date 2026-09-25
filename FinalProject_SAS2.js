const prompt = require('prompt-sync')();
const candidates = [];

function addCandidates(candidatesList) {
    let candidatesNum = Number(prompt("How many candidates ?"))
    for (let i = 1; i <= candidatesNum; i++) {
        addCandidate(candidatesList)
    }
}

function addCandidate(candidatesList) {

    let cin = prompt("Cin: ")
    let lastName = prompt("Last Name: ")
    let firstName = prompt("First Name: ")
    let politicalParty = prompt("Political Party: ")
    let age = Number(prompt("Age: "))

    let candidate = {
        cin: cin,
        lastName: lastName,
        firstName: firstName,
        politicalParty: politicalParty,
        age: age,
        voters: []
    }
    candidates.push(candidate)
}

console.log(candidates)