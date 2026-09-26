const prompt = require('prompt-sync')();
const candidates = [
  { cin: "AB123456", lastName: "Boushaba", firstName: "Soufiane", politicalParty: "Independent", age: 40,
    voters: [] },
  { cin: "CD234567", lastName: "El Amrani", firstName: "Fatima Zahra", politicalParty: "PJD", age: 35,
    voters: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", lastName: "Chraibi", firstName: "Younes", politicalParty: "RNI", age: 45,
    voters: [] },
  { cin: "GH456789", lastName: "Bennani", firstName: "Salma", politicalParty: "PAM", age: 29,
    voters: ["IJ567890"] },
  { cin: "IJ567890", lastName: "Ouahbi", firstName: "Karim", politicalParty: "Istiqlal", age: 52,
    voters: [] },
  { cin: "KL678901", lastName: "Ziani", firstName: "Nadia", politicalParty: "Independent", age: 33,
    voters: [] },
  { cin: "MN789012", lastName: "Tazi", firstName: "Hamza", politicalParty: "USFP", age: 60,
    voters: ["QR901234"] },
  { cin: "OP890123", lastName: "Idrissi", firstName: "Meryem", politicalParty: "PJD", age: 27,
    voters: [] },
  { cin: "QR901234", lastName: "Berrada", firstName: "Omar", politicalParty: "RNI", age: 38,
    voters: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", lastName: "Fassi", firstName: "Khadija", politicalParty: "PAM", age: 31,
    voters: [] },
];
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
        AffichageTypes(candidates)
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
    let candidatesNum = validNumber("How many candidates ? ")
    for (let i = 1; i <= candidatesNum; i++) {
        addCandidate(candidatesList)
    }
}
function addCandidate(candidatesList) {

    let cin = validNumber("Cin: ")
    if (candidatesList.find(can => can.cin == cin) != undefined) {
        console.log("The candidate ID is already used!")
        return 0
    }
    let lastName = validString("Last Name: ")
    let firstName = validString("First Name: ")
    let politicalParty = validString("Political Party: ")
    let age = Number(validNumber("Age: "))

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
function AffichageTypes(candidatesList) {
    console.log(`--- Afficher Candidates ---`)
    console.log(`1. Display candidates sorted by votes`)
    console.log(`2. Display candidates filtered by political party`)

    let affichageChoice = Number(prompt("Choice: "))

    switch (affichageChoice) {
        case 1:
            candidatesAffichage(candidatesList)
            return 0
        case 2: 
            let filter = validString("Enter The Political Party: ")
            affichageByFilter(candidatesList, filter)
            return 0
    }
}
function candidatesAffichage (candidatesList) {
    let sorted = sortCandidates(candidatesList)
    console.log(`--- Candidates List ---`)
        let count = 0;
    for (let candidate of sorted) {
        count++
        console.log(`# Candidat ${count}:`)
        console.log(`CIN: ${candidate.cin}`)
        console.log(`last Name: ${candidate.lastName}`)
        console.log(`First Name: ${candidate.firstName}`)
        console.log(`Political Party: ${candidate.politicalParty}`)
        console.log(`Age: ${candidate.age}`)
        console.log(`Voters: ${candidate.voters.length}`)
        console.log(`------------`)
    }
}
function affichageByFilter(candidatesList, filter) {
   let filtered = candidatesList.filter(can => can.politicalParty == filter)
   if (filtered.length == 0) {
    console.log("Nothing is found!")
    return 0
   }
   let count = 0;
   for (let candidate of filtered) {
        dount++
        console.log(`# Candidat ${count}:`)
        console.log(`CIN: ${candidate.cin}`)
        console.log(`last Name: ${candidate.lastName}`)
        console.log(`First Name: ${candidate.firstName}`)
        console.log(`Political Party: ${candidate.politicalParty}`)
        console.log(`Age: ${candidate.age}`)
        console.log(`Voters: ${candidate.voters.length}`)
        console.log(`------------`)
}
}

// Bubble Sort
function sortCandidates(candidatesList) {
    let temp = {}
    let candidatesCopy = [...candidatesList]
   for (let i = 0; i < candidatesCopy.length; i++) {
    for (let j = 0; j < candidatesCopy.length - 1; j++) {
        if (candidatesCopy[j].voters.length < candidatesCopy[j + 1].voters.length) {
            temp = candidatesCopy[j]
            candidatesCopy[j] = candidatesCopy[j + 1]
            candidatesCopy[j + 1] = temp
        }
    }
   }
   return candidatesCopy
}


// Add votes
function VotersNumber (candidatesList) {
    console.log(`--- Vote For A Candidate ---`)

    let votersNum = validNumber("Enter the voters number: ")
    for (let i = 1; i <= votersNum; i++) {
        voteForCandidate(candidatesList)
    }
}   
function voteForCandidate(candidatesList) {
    let voterId = validNumber("Enter Your ID: ")
    if (!votersIds.includes(voterId)) {
        let candidateId = validNumber("Enter The Candidate ID: ")
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

    let id = validNumber("Enter the candidate ID: ")
    
    for (let candidate of candidatesList) {
        if (candidate.cin == id) {
             console.log("1. Edit Political Party")
             console.log("2. Edit Age")
             let choice = Number(prompt("Choice: "))
             switch (choice) {
             case 1:
             candidate.politicalParty = validString("New Political Party: ")
             break
             case 2:
             candidate.age = validNumber("New Age: ")
             break
             }
             console.log("Informations are updated!")
             console.log(candidate)
             return 0
        }   
    }
    console.log("Candidate not found!")
}


// Delete candidates
function DeletionNum(candidatesList) {
    let candidateNum = validNumber("How many candidates you want to delete ? ")
    for (let i = 1; i <= candidateNum; i++) {
    let candidateId = validNumber("Enter the candidate ID: ")
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
    let candidateName = validString("Enter the candidate last name: ")
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
    console.log(`--- Statistics ---`)

    // total number
    let tCount = candidatesList.length
    console.log(`Total Candidates: ${tCount}`)

    // total votes
    let vCount = 0;
    for (let candidate of candidatesList) {
        vCount += candidate.voters.length
    }
    console.log(`Voters Count: ${vCount}`)
      
    // top 3 candidates
    let sorted = sortCandidates(candidatesList);
    console.log(`--- TOP 3 ---`);
    if (sorted[0]) console.log(`Top 1: ${sorted[0].firstName} ${sorted[0].lastName} (${sorted[0].voters.length} votes)`);
    if (sorted[1]) console.log(`Top 2: ${sorted[1].firstName} ${sorted[1].lastName} (${sorted[1].voters.length} votes)`);
    if (sorted[2]) console.log(`Top 3: ${sorted[2].firstName} ${sorted[2].lastName} (${sorted[2].voters.length} votes)`);

    // Candidates count for each political party
    console.log(`--- Candidates per Party ---`);
    let partyCounts = {};

    for (let candidate of candidatesList) {
    let party = candidate.politicalParty;
    if (partyCounts[party]) {
        partyCounts[party]++;
    } else {
        partyCounts[party] = 1;
    }
    }

    for (let party in partyCounts) {
       console.log(`${party}: ${partyCounts[party]}`);
    }
    }


    // Prompts Valider
    function validNumber(promp) {
        let input 
        do {
        input = Number(prompt(promp))
        } while (isNaN(input) || input === 0 && input == "")
            return input
    }
    function validString(promp) {
        let input
        do {
            input = prompt(promp)
        } while (input === "" || /\d/.test(input))
            return input
    }

    
    


