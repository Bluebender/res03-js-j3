let users = [
    {
        id: 0,
        isActive: false,
        age: 24,
        eyeColor: "green",
        name: "Marsh Obrien",
        company: "CENTURIA"
    },
    {
        id: 1,
        isActive: false,
        age: 21,
        eyeColor: "green",
        name: "Rios Gibson",
        company: "MULTRON"
    },
    {
        id: 2,
        isActive: false,
        age: 29,
        eyeColor: "brown",
        name: "Morgan Buchanan",
        company: "CENTURIA"
    },
    {
        id: 3,
        isActive: true,
        age: 25,
        eyeColor: "brown",
        name: "Franklin Dyer",
        company: null
    },
    {
        id: 4,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Keller Pitts",
        company: "CENTURIA"
    },
    {
        id: 5,
        isActive: false,
        age: 25,
        eyeColor: "brown",
        name: "Davenport Maddox",
        company: "MULTRON"
    },
    {
        id: 6,
        isActive: true,
        age: 31,
        eyeColor: "brown",
        name: "Judith Graves",
        company: null
    },
    {
        id: 7,
        isActive: true,
        age: 26,
        eyeColor: "blue",
        name: "Hoffman Hess",
        company: "CENTURIA"
    },
    {
        id: 8,
        isActive: true,
        age: 22,
        eyeColor: "blue",
        name: "Sheena Goff",
        company: "MULTRON"
    },
    {
        id: 9,
        isActive: false,
        age: 39,
        eyeColor: "brown",
        name: "Rose Lawrence",
        company: "EVENTIX"
    },
    {
        id: 10,
        isActive: false,
        age: 35,
        eyeColor: "blue",
        name: "Alston Goodman",
        company: "CENTURIA"
    },
    {
        id: 11,
        isActive: true,
        age: 28,
        eyeColor: "brown",
        name: "Nannie Berry",
        company: null
    },
    {
        id: 12,
        isActive: true,
        age: 27,
        eyeColor: "blue",
        name: "Lynette Jackson",
        company: "CENTURIA"
    },
    {
        id: 13,
        isActive: false,
        age: 23,
        eyeColor: "blue",
        name: "Samantha Garrett",
        company: "EVENTIX"
    },
    {
        id: 14,
        isActive: false,
        age: 30,
        eyeColor: "blue",
        name: "Grimes Savage",
        company: "CENTURIA"
    },
    {
        id: 15,
        isActive: false,
        age: 31,
        eyeColor: "green",
        name: "Atkinson Kirby",
        company: null
    },
    {
        id: 16,
        isActive: false,
        age: 38,
        eyeColor: "green",
        name: "Jami Burgess",
        company: "CENTURIA"
    },
    {
        id: 17,
        isActive: true,
        age: 31,
        eyeColor: "blue",
        name: "Sallie Albert",
        company: "CENTURIA"
    },
    {
        id: 18,
        isActive: false,
        age: 26,
        eyeColor: "blue",
        name: "Ora Hobbs",
        company: "EVENTIX"
    },
    {
        id: 19,
        isActive: true,
        age: 30,
        eyeColor: "blue",
        name: "Pruitt Sellers",
        company: "CENTURIA"
    }
];

// Étape 1 : Compter les utilisateurs et utilisatrices actif-ve-s

function countActiveUsers(users) {
    let activeUsers = 0;
    for (user of users){
        if (user.isActive === true){
            activeUsers = activeUsers + 1;
        }
    }
    return activeUsers;
}

console.log(`We currently have ${ countActiveUsers(users) } active users.`);

// Étape 2 : Parmis les utilisateurs et utilisatrices acti-f-ves combien ont les yeux bleus ?

function getActiveUsers(users) {
    let activeUsers = [];
    for (user of users){
        if (user.isActive === true){
            activeUsers.push(user)
        }
    }
    console.log(activeUsers)
    return activeUsers;
}

function hasBlueEyes(activeUsers) {
    let blueEyes = 0;
    for (activeUser of activeUsers){
        if (activeUser.eyeColor === "blue")
        blueEyes = blueEyes + 1;
    }
    return blueEyes
}

console.log(`Out of our currently ${countActiveUsers(users)} active users, ${hasBlueEyes(getActiveUsers(users))} have blue eyes.`);

// Étape 3 : Parmis les utilisateurs et utilisatrices actif-ve-s quel est l'âge moyen ?

// function getActiveUsers(users) {

// }

function getActiveUsersAges(users) {
    let ages=[];
    for (user of users){
        if (user.isActive === true)
            ages.push(user.age);
    }
    return ages;
}

console.log(getActiveUsersAges(users));

function computeActiveUsersAverageAge(ages) {
    let ageCount = 0
    for (age of ages){
        ageCount = ageCount + age;
    }
    let ageAverage = ageCount/ages.length;
    return ageAverage
}

console.log(computeActiveUsersAverageAge(getActiveUsersAges(users)));

console.log(`Out of our currently ${countActiveUsers(users)} active users, the average age is ${computeActiveUsersAverageAge(getActiveUsersAges(users))}.`);

// Étape 4 : Rachat de MULTRON par CENTURIA
// Tous nos users dont la company est MULTRON doivent à présent avoir la company CENTURIA.

function getMultronUsers(users) {
    let multronUsers = [];
    for (user of users){
        if (user.company === "MULTRON"){
            multronUsers.push(user)
        }
    }
    return multronUsers;
}
console.log(getMultronUsers(users))
console.log(getMultronUsers(users).length)

function setMultronToCenturia(users) {
    for (user of users){
        user.company = "CENTURIA";
    }
    return users
}

console.log(`${setMultronToCenturia(getMultronUsers(users)).length} user companies have been changed from MULTRON to CENTURIA.`);

// Étape 5 : qui a les yeux marrons et ne travaille pas chez CENTURIA ?

function getBrownEyedUsers(users) {
    let brownEyedUsers = [];
    for (user of users){
        if (user.eyeColor === "brown"){
            brownEyedUsers.push(user);
        }
    }
    return brownEyedUsers;
}
console.log (getBrownEyedUsers(users));

function excludeCenturiaWorkers(users) {
    let brownEyesNotCenturiaCount = 0
    for (user of users){
        if (user.company !== "CENTURIA"){
            brownEyesNotCenturiaCount = brownEyesNotCenturiaCount + 1;
        }
        
    }
    return brownEyesNotCenturiaCount
}

console.log(`${excludeCenturiaWorkers(getBrownEyedUsers(users))} users with brown eyes do not work at CENTURIA`);

// Étape 6 : pour chacune des couleurs d'yeux, compter le nombre de users actif-ve-s et inactif-ve-s

function getUsersForColor(users, color){
    let eyeColorUsers = [];
    for (user of users){
        if (user.eyeColor === color){
            eyeColorUsers.push(user);
        }
    }
    return eyeColorUsers;
}
console.log(getUsersForColor(users, "brown"))
console.log(getUsersForColor(users, "blue"))
console.log(getUsersForColor(users, "green"))

function getUsersForColor2(users, color, statut){
    let eyeColorUsersAndStatut = 0;
    for (user of users){
        if (user.eyeColor === color && user.isActive === statut){
            eyeColorUsersAndStatut = eyeColorUsersAndStatut + 1;
        }
    }
    return eyeColorUsersAndStatut;
}
console.log(`Out of our brown eyed users ${getUsersForColor2(users, "brown", true)} are active and ${getUsersForColor2(users, "brown", false)} are inactive`);

console.log(`Out of our green eyed users ${getUsersForColor2(users, "green", true)} are active and ${getUsersForColor2(users, "green", false)} are inactive`);

console.log(`Out of our blue eyed users ${getUsersForColor2(users, "blue", true)} are active and ${getUsersForColor2(users, "blue", false)} are inactive`);
