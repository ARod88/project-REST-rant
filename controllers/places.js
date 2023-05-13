const router = require ('express').Router()
const db =require('../models')

router.get ('/', (req,res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch( err => {
    console.log(err)
    res.render('error404')
  })
  });  

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
   if ( err && err.name == 'ValidationError') {
    let message = 'Validation Error:'

    //TODO : Generate error message(s)

    res.render('places/new', { message })
   }
   else{
    res.render('error404')
   }
  })
});

router.get('/new', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/new', { places })
  })
  .catch( err => {
    console.log(err)
    res.render('error404')
  })
  
  // res.render('places/new')
});

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch( err => {
    console.log('err.', err)
    res.render('error404')
  })

});

router.put('/:id', (req, res) => {
 db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
});

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })

});


// EDIT FORM
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/edit', { place })
    })
    .catch(err => {
      res.render('error404')
    })
 
});


router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  if (req.body.rant) {
    req.body.rant = true 
  }
  else{
    req.body.rant = false 
  }
  db.Place.findById(req.params.id)
    .then(place => {
      // Todo: Create comment
      db.Comment.create(req.body)
        .then(comment => {
          // todo: save comment id to place
          place.comments.push(comment.id);
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`);
            })
            .catch(err => {
              res.render('error404');
            });
        })
        .catch(err => {
          res.render('error404');
        });
    })
    .catch(err => {
      res.render('error404');
    });
});




router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
});

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
});

module.exports = router


