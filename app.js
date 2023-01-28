const { ALL } = require('dns');
const fs = require('fs');
const file = "./bd.json"
var users = [];
var users = JSON.parse(fs.readFileSync(file));

function save(users){
    fs.writeFileSync(file, JSON.stringify(users))
}

function addUsers(...name){
    var len = name[0].length
    for(let i = 0; i < len; i++){
        users.push(
            {
                name: name[0][i]
            }
        )
    }
    save(users)
}

function deleteUser(user){
    for (let i = 0; i < users.length; i++) {
        if(user === users[i].name){
            users.splice(i, 1)
        save(users)
        }
    }
    console.log(users)
}

function resetUsers(users){
    users.splice(0, ALL)
    save(users)
}

var sample = ["user1", "user2", "user3"]
// addUsers(sample)