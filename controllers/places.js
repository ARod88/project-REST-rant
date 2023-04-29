const router = require ('express').Router()

router.get('/new', (req,res) => {
  res.render('places/new')

});

router.get('/', (req, res) => {
    let places = [
      {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
      }, 
      {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/thai-cafe.jpg'
      },
    ];
      
    res.render('places/index', {places})
  });

  //POST

  router.post('/',(req,res) => {
    res.send('POST/places')
  });
  



module.exports = router;

