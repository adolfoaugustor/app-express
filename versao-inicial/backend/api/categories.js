module.exports = app => {
    const save = (request, response) =>{
        response.send('categories save')
    }

    return { save }
}