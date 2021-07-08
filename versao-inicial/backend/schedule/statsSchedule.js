const schedule = require('node-schedule')

// module.exports = app => {
//     schedule.scheduleJob('*/1 * * * *', async function (){
//         const usersCount = await app.db()

//         const { Stat } = app.api.stat

//         const lastStat = await Stat.findOne({}, {},
//             { sort: { 'createdAt': -1 } })

//         const stat = new Stat({
//             users: user.acount
//         })
//     })
// }