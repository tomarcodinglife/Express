import { userList } from "../model/userModel.js"

export function handleUser (request, response){
    const userData = userList()
    console.log(userData)
    response.render('user', {users : userData})
}