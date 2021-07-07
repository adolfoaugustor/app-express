module.exports = app => {
    const save = (request, response) =>{
        response.send('user save')
    }

    return { save }
}