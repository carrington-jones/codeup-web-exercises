const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let userLanguages = users.map(function(user) {
    user = user.languages
    return user
});
var newUserLanguages = userLanguages.filter(function(n){
    if(n.length < 3) {
        n.push("3rd language")
    }
});
console.log(userLanguages)

//Use .map to create an array of strings where each element is a user's email address

//=======es5======
let usersEmails = users.map(function(user){
    user = user.email
    return user
})
//======es6======
let es6usersEmails = users.map(user => user.email);

