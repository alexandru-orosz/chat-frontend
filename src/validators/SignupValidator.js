
export function validateSignup(user, users) {
    if (user.username === '' || user.username === undefined || user.username.length < 3)
        return 'Invalid username.'

    const data = users.filter(u => u.username === user.username)
    if (data.length === 1)
        return 'Username already exists.'

    if (user.password === '' || user.password === undefined || user.password.length < 3)
        return 'Invalid password.'

    if (user.password !== user.confirmPassword)
        return 'Passwords don\'t match.'

    if (user.imageUrl === '' || user.imageUrl === undefined || user.imageUrl.length < 3)
        return 'Invalid image url.'

    return 'valid'
}