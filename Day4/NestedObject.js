//  Nested Object In JavaScript


var user = {
    id: 21,
    email: 'abc@gmail.com',
    personalInfo: {
        name: "abc",
        address: {
            street:"abc Lane",
            city:"Haridwar",
            country:"India"
        }
    }
}

console.log(user);
console.log(user.personalInfo);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.street);