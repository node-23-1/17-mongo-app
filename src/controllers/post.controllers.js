const catchError = require('../utils/catchError');
const Post = require('../models/Post');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await Post.find().populate('user');
    return res.json(users)
});

const create = catchError(async(req, res) => {
    const { title, content, user } = req.body;
    const post = await Post.create({ title, content, user });
    const userObject = await User.findById(user);
    userObject.posts.push(post);
    await userObject.save();
    return res.status(201).json(post);
})


module.exports = {
    getAll,
    create,
}