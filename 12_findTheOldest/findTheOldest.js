const findTheOldest = function(persons) {
    const ages = persons.map((person) =>  {
        if (isNaN(person.yearOfBirth)) {
            person.yearOfBirth = 2025;
        }

        if (isNaN(person.yearOfDeath)) {
            person.yearOfDeath = 2025;
        }

        return person.yearOfDeath - person.yearOfBirth;
    })
    ages.sort((a, b) => a - b);
    const oldestAge = ages.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
