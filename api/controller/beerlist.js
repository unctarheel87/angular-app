const express = require('express');
const path = require('path');
const router = express.Router();
const Beer = require('../models/Beer');
//json data
const beer_list = require('../json/beer_list.json');

router.get('/seed', (req, res) => {
  Beer.insertMany(beer_list)
    .then(beer_document => {
      res.send('Database successfully seeded');
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

router.get('/api/beerlist', (req, res) => {
  Beer.find({})
    .then(dbBeers => {
      res.json(dbBeers);
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.post('/api/beerlist', (req, res) => {
  Beer.create(req.body)
    .then(beer_document => {
      res.json(beer_document);
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

router.put('/api/beerlist/:id', (req, res) => {
  Beer.findByIdAndUpdate(req.params.id, { currentDraft: req.body.currentDraft })
    .then(beer_document => {
      res.json(beer_document);
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

router.delete('/api/beerlist/:id', (req, res) => {
  Beer.findByIdAndDelete(req.params.id)
    .then(beer_document => {
      res.json(beer_document);
    })
    .catch(err => {
      console.log(err);
      res.end();
    });
});

module.exports = router;
