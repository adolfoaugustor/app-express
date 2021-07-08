module.exports = app => {
    const save = (request, response) =>{
        response.send('articles save')
    }

    return { save }
}