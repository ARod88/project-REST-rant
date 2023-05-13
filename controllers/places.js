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
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      res.redirect(`/places/${id}`)
  }
});

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
});


//EDIT FORM
// router.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//       res.render('error404')
//   }
//   else if (!places[id]) {
//       res.render('error404')
//   }
//   else {
//     res.render('places/edit', { place: places[id] })
//   }
// });


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


// const places = require ( '../models/places.js')

// router.get('/new', (req,res) => {
//   res.render('places/new')

// });





    

    // EDIT FORM

    // router.get('/:id/edit', (req, res) => {
    //   let id = Number(req.params.id)
    //   if (isNaN(id)) {
    //       res.render('error404')
    //   }
    //   else if (!places[id]) {
    //       res.render('error404')
    //   }
    //   else {
    //     res.render('places/edit', { place: places[id] })
    //   }
    // });

    // router.put('/:id', (req, res) => {
    //   let id = Number(req.params.id)
    //   if (isNaN(id)) {
    //       res.render('error404')
    //   }
    //   else if (!places[id]) {
    //       res.render('error404')
    //   }
    //   else {
    //       res.redirect(`/places/${id}`)
    //   }
    // });

//     router.put('/:id', (req, res) => {
//       let id = Number(req.params.id)
//       if (isNaN(id)) {
//           res.render('error404')
//       }
//       else if (!places[id]) {
//         res.render('places/show', { place: places[id]})
//       }
//       else {
//           // Dig into req.body and make sure data is valid
//           if (!req.body.pic) {
//               // Default image if one is not provided
//               req.body.pic = 'http://placekitten.com/400/400'
//           }
//           if (!req.body.city) {
//               req.body.city = 'Anytown'
//           }
//           if (!req.body.state) {
//               req.body.state = 'USA'
//           }
    
//           // Save the new data into places[id]
//           places[id] = req.body
//           res.redirect(`/places/${id}`)
//       }
//     });
    
    

//     router.get('/:id', (req, res) => {
//       let id = Number(req.params.id)
//       if (isNaN(id)) {
//         res.render('error404')
//       }
//       else if (!places[id]) {
//         res.render('error404')
//       }
//       else {
//         res.render('places/show', { place: places[id], id})
//       }
//     });
    
    
//   //POST

//   router.post('/', (req, res) => {
//     console.log(req.body)
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//       req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//       req.body.state = 'USA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
//   });
  
//   router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       places.splice(id, 1)
//       res.redirect('/places')
//     }
//   });
  


// module.exports = router