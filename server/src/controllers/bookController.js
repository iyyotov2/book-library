const router = require('express').Router();

const { isAuth, isOwner } = require('../middlewares/guards');
const preload = require('../middlewares/preload');
const api = require('../services/bookService');
const errorMapper = require('../util/errorMapper');

router.get('/', async (req, res) => {
    try {
        res.json( await api.getAll(req.query.where));
    } catch (err) {
        res.status(400).json({ message: 'Bad request'});
    }
});

router.post('/', isAuth(), async (req, res) => {
    const book = {
        bookTitle: req.body.bookTitle,
        author: req.body.author,
        yearOfIssue: req.body.yearOfIssue,
        image: req.body.image,
        genre: req.body.genre,
        nationality: req.body.nationality,
        _ownerId: req.user._id
    }

    try {
        const result = await api.create(book);

        res.json(result);
    } catch (err) {
        const message = errorMapper(err);

        res.status(400).json({ message });
    }
});

router.get('/:id', preload(api), (req, res) => {
    res.json(res.locals.book);
});

router.put('/:id', preload(api), isOwner(), async (req, res) => {
    try {
        const result = await api.updateById(res.locals.book, req.body);

        res.json(result);
    } catch (err) {
        console.error(err);

        res.status(400).json({ message: 'Request error' });
    }
});

router.delete('/:id', preload(api), isOwner(), async (req, res) => {
    const id = req.params.id;

    try {
        const result = await api.deleteById(id);

        res.json(result);
    } catch (err) {
        console.error(err);

        res.status(400).json({ message: 'Request error' });
    }
});

module.exports = router;