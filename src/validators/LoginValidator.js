
export function validateLogin(user, users) {
    if (user.username === '' || user.username === undefined || user.username.length < 3)
        return 'Invalid username.'

    const data = users.filter(u => u.username === user.username)
    
    if(data[0] === undefined) {
        return 'Username doesn\'t exist.'
    }

    if (user.password === '' || user.password === undefined || user.password.length < 3)
        return 'Invalid password.'


    if(data[0].password !== user.password) {
        return 'Incorrect password.'
    }

    return 'valid'
}