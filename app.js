const express = require('express')
const app = express()
const ejs = require('ejs')
const infos = require('./infos.js')
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'))

app.listen(port, (req, res) => {
  console.log('Server has started on port ' + port)
})

app.set('ejs', 'view engine')

app.get('/details/:cityname', (req, res) => {
  const cityname = req.params.cityname

  switch (cityname) {
    case 'adiyaman':
      res.render('details.ejs', { data: infos.adiyaman })
    case 'ankara':
      res.render('details.ejs', { data: infos.ankara })
    case 'antalya':
      res.render('details.ejs', { data: infos.antalya })
    case 'batman':
      res.render('details.ejs', { data: infos.batman })
    case 'canakkale':
      res.render('details.ejs', { data: infos.canakkale })
    case 'corum':
      res.render('details.ejs', { data: infos.corum })
    case 'denizli':
      res.render('details.ejs', { data: infos.denizli })
    case 'istanbul':
      res.render('details.ejs', { data: infos.istanbul })
    case 'izmir':
      res.render('details.ejs', { data: infos.izmir })
    case 'karabuk':
      res.render('details.ejs', { data: infos.karabuk })
    case 'mersin':
      res.render('details.ejs', { data: infos.mersin })
    case 'mugla':
      res.render('details.ejs', { data: infos.mugla })
    case 'nevsehir':
      res.render('details.ejs', { data: infos.nevsehir })
    case 'sanliurfa':
      res.render('details.ejs', { data: infos.sanliurfa })
    case 'trabzon':
      res.render('details.ejs', { data: infos.trabzon })
  }
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/', (req, res) => {
  const cityname = req.body.cityname
  res.redirect('/details/' + cityname)
})
