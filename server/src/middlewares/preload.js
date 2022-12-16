module.exports = (api) => async (req, res, next) => {
    const id = req.params.id;

    const book = await api.getById(id);

    if (book) {
        res.locals.book = book;
        next();
    } else {
        res.status(404).json({ message: `Book ${id} not found` });
    }
}