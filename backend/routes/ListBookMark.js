const router = require('express').Router();
let ListBookMark = require('../models/ListBookMark.model');

router.route('/').get((req, res) => {
    ListBookMark.find()
    .then(bookmark => res.json(bookmark))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const folder = req.body.folder;
  const description = req.body.description;
  const title =  req.body.title;
  const img = req.body.img;
 

  const newBookMark = new ListBookMark({
    folder,
    description,
    title,
    date,
  });

  newBookMark.save()
    .then(() => res.json('Habit added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    ListBookMark.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    ListBookMark.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    ListBookMark.findById(req.params.id)
    .then((exercise) => {
      exercise.folder = req.body.folder;
      exercise.description = req.body.description;
      exercise.url = Number(req.body.url);
      exercise.title = Date.parse(req.body.title);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
