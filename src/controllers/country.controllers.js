const catchError = require('../utils/catchError');
const Country = require('../models/Country');

const getAll = catchError(async(req, res) => {
    const countries = await Country.find();
    return res.json(countries);
});

const create = catchError(async(req, res) => {
    const { name, flagUrl, population } = req.body;
    const country = await Country.create({ name, flagUrl, population });
    return res.status(201).json(country);
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const country = await Country.findById(id);
    return res.json(country);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Country.findByIdAndDelete(id);
    return res.sendStatus(204);
})

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { name, flagUrl, population } = req.body;
    const country = await Country.findByIdAndUpdate(id,
        { name, flagUrl, population },
        { returnDocument: 'after' }
    );
    return res.json(country);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}