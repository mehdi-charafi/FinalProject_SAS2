const prompt = require('prompt-sync')();
const candidates = [{
    cin: 11111,
    lastName: "Benjelloun",
    firstName: "Amine",
    politicalParty: "Parti de l'Avenir (PDA)",
    age: 45,
    voters: []
  },
  {
    cin: 22222,
    lastName: "Alami",
    firstName: "Sarah",
    politicalParty: "Union Écologique (UE)",
    age: 38,
    voters: []
  },
  {
    cin: 33333,
    lastName: "Idrissi",
    firstName: "Omar",
    politicalParty: "Rassemblement Démocratique (RD)",
    age: 52,
    voters: []
  },
  {
    cin: 44444,
    lastName: "Tazi",
    firstName: "Yasmine",
    politicalParty: "Parti Réformateur (PR)",
    age: 29,
    voters: []
  }];
const votersIds = [];


// switch
while(true) {
    console.log("0. Exit")
    console.log("1. Add Candidates")
    console.log("2. Afficher Candidates")
    console.log("3. Vote")
    console.log("4. Edit Candidate")
    console.log("5. Delete Candidates")
    console.log("6. Search For Candidate")
    console.log("7. Statistics")
    let choice = Number(prompt("Choice: "))
    
switch (choice) {
    case 1:
        addCandidates(candidates)
        continue
    case 2: 
        candidatesAffichage(candidates)
        continue
    case 3:
        VotersNumber(candidates)
        continue
    case 4:
        editCandidate(candidates)
        continue
    case 5: 
        DeletionNum(candidates)
        continue
    case 6:
        searchForCandidate(candidates)
        continue
    case 7:
        statistics(candidates)
        continue
    case 0:
        return 0


}
}



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
    let voterId = Number(prompt("Enter Your ID: "))
    if (!votersIds.includes(voterId)) {
        let candidateId = Number(prompt("Enter The Candidate ID: "))
        for (let candidate of candidatesList) {
            if (candidate.cin == candidateId) {
                candidate.voters.push(voterId)
                votersIds.push(voterId)
                console.log(`Vote is done!`)
                return 0
            }
        }
        console.log("Candidate is not found!")
        
        
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
    for (let i = 1; i <= candidateNum; i++) {
    let candidateId = Number(prompt("Enter the candidate ID: "))
        DeleteCandidate(candidatesList, candidateId)
    }

}
function DeleteCandidate(candidatesList, candidateId) {
    

    for (let candidate of candidatesList) {
        if (candidate.cin == candidateId) {
             let index = candidatesList.indexOf(candidate)
             candidatesList.splice(index, 1)
             console.log("Candidate is deleted!")
             return 0
        }   
    }
}


// Search for candidates
function searchForCandidate(candidatesList) {
    let candidateName = prompt("Enter the candidate last name: ")
    for (let candidate of candidatesList) {
        if (candidate.lastName == candidateName) {
            console.log("Candidate is found!")
            console.log(candidate)
            return 0
        }
    }
    console.log("Candidate is not found!")
}


// Election statistics
function statistics(candidatesList) {
    // total number
    let tCount = 0;
    for (let candidate of candidatesList) {
        tCount++
    }

    // total votes
    let vCount = 0;
    for (let candidate of candidatesList) {
        vCount = vCount + (1 * candidate.voters.lenght - 1)
    }
      

    // top 3 candidates
    let top3 = []
    let max = {}
    for (let candidate of candidatesList) {
        if (max.voters.lenght < candidate.voters.lenght && !top3.includes(candidate)) {
            max = candidate
        } 
        top3.push(max)
        max = {}
    }
}


