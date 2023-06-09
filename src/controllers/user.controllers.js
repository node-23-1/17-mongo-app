const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.find().populate('posts');
    return res.json(users)
});

const create = catchError(async(req, res) => {
    const { firstName, lastName, birthday} = req.body;
    const user = await User.create({ firstName, lastName, birthday});
    return res.status(201).json(user);
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    return res.json(user);
})

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    return res.sendStatus(204);
})

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { firstName, lastName, birthday} = req.body;
    const user = await User.findByIdAndUpdate(id, 
        { firstName, lastName, birthday},
        { returnDocument: 'after' }
    )
    return res.json(user);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}