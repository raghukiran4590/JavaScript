const users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Mike', lastName: 'Sawyer', age: 35 },
    { firstName: 'Tom', lastName: 'Brady', age: 45 },
    { firstName: 'Brad', lastName: 'Haddin', age: 55 },
    { firstName: 'Tim', lastName: 'Hopkins', age: 65 },
];

const totalAgeSum = users.reduce((acc, curr) => acc + curr.age, 0);

console.log(totalAgeSum);

const usersWithfullNames = users.map(users => users.firstName + " " + users.lastName);

console.log(usersWithfullNames);

const usersWithAgeLessThan40 = users.filter(x => x.age <= 45).map(users => users.firstName + " " + users.lastName);

console.log(usersWithAgeLessThan40);