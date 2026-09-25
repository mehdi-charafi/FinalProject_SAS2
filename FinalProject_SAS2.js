const prompt = require('prompt-sync')();
const candidates = [];
const votersIds = [];


// Call Functions
addCandidates(candidates)
candidatesAffichage(candidates)
VotersNumber(candidates)
editCandidate(candidates)


// Add candidates
function addCandidates(candidatesList) {
    let candidatesNum = Number(prompt("How many candidates ? "))
    for (let i = 1; i <= candidatesNum; i++) {
        addCandidate(candidatesList)
    }
}
function addCandidate(candidatesList) {

    let cin = Number(prompt("Cin: "))
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
    candidatesList.push(candidate)
}


// Afficher candidates
function candidatesAffichage (candidatesList) {
    console.log(`--- Candidates List ---`)

    for (let candidate of candidatesList) {
        let n = candidatesList.indexOf(candidate) + 1
        console.log(`# Candidat ${n}:`)
        console.log(`CIN: ${candidate.cin}`)
        console.log(`last Name: ${candidate.lastName}`)
        console.log(`First Name: ${candidate.firstName}`)
        console.log(`Political Party: ${candidate.politicalParty}`)
        console.log(`Age: ${candidate.age}`)
        console.log(`Voters: ${candidate.voters}`)
        console.log(`------------`)
    }
}


// Add votes
function VotersNumber (candidatesList) {
    console.log(`--- Vote For A Candidate ---`)

    let votersNum = Number(prompt("Enter the voters number: "))
    for (let i = 1; i <= votersNum; i++) {
        voteForCandidate(candidatesList)
    }
}   
function voteForCandidate(candidatesList) {
    let voterId = prompt("Enter Your ID: ")
    if (!votersIds.includes(voterId)) {
        let candidateId = prompt("Enter The Candidate ID: ")
        candidatesList.push(voterId)
        console.log(`Vote is done!`)
    } else {
        console.log("You have already voted and you are not allowed to change your vote or vote again.")
    }
}


// Edit candidates info
function editCandidate(candidatesList) {
    console.log(`--- Edit Candidates ---`)

    let id = Number(prompt("Enter the candidate ID: "))
    
    for (let candidate of candidatesList) {
        if (candidate.cin == id) {
             
             candidate.politicalParty = prompt("New Political Party: ")
             candidate.age = Number(prompt("New Age: "))
             console.log("Informations are updated!")
             console.log(candidate)
             return 0
        }   
    }
    console.log("Candidate not found!")
}


// Delete candidates
function DeletionNum(candidatesList) {
    let candidateNum = Number(prompt("How many candidates you want to delete ?"))
}
function DeleteCandidate(candidatesList) {
    let candidateId = Number(prompt("Enter the candidate ID: "))

    for (let candidate of candidatesList) {
        if (candidate.cin == id) {
             
             
             
             console.log(candidate)
             return 0
        }   
    }

}
