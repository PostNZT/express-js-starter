
const getSampleNames = (req, res) => {
  res.send({
    users:[
    {id: 1, name: 'MnkyDevTeam' },
    {id: 2, name: 'Jhune Carlo Trogelio'},
    ]
  })
}

module.exports = { getSampleNames }