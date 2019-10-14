const express = require('express');
const router = express.Router();
const _ = require("underscore");

// Load validation
const validateCategoryInput = require('../utils/validation/category');
const Category = require('../models/Category');

// all categories
router.get('/get-all', (req, res, next) => {
    Category.find()
        .populate('subCategory')
        .then(cat => {
            if (cat) {
                return res.status(200).json({
                    status: true,
                    message: "list of all category",
                    data: cat
                })
            } else {
                res.status(500).json({
                    status: false,
                    message: "unable to find all category"
                })
            }
        })
        .catch(err => {
            return res.status(500).json({
                status: "false",
                message: "hoops an errror occur",
                data: err
            })
        })
});

// create category
router.post('/create', (req, res) => {
    const {errors, isValid} = validateCategoryInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Category.findOne({name: req.body.name})
        .then(category => {
            if (category) {
                errors.name = 'Name with this category already exists';
                return res.status(400).json(errors)
            }

            const newCategory = new Category({
                name: req.body.name
            });

            newCategory.save()
                .then(category => res.json(category))
                .catch(err => console.log(err));
        })
});


//update categories
router.post('/update/:id', (req, res) => {
    let UpdateCategory = req.body;
    Category.findOne({_id: req.params.id}, (err, update) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "unable to update category",
                data: err

            })
        }
        _.assign(update, UpdateCategory);
        update.save((err, UpdateCategory) => {
            if (err) {
                return res.json({
                    status: false,
                    message: 'Unable to update profile',
                    code: 500
                })
            } else {
                return res.status(200).json({
                    status: false,
                    message: 'category sucessfuly updated',
                    code: 200,
                    data: UpdateCategory
                });
            }
        })
    })
});

//delete categories
router.post('/delete/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(remove => {
            if (!remove) {
                return res.status(500).json({
                    status: false,
                    message: "invalid id ",
                })
            } else {
                return res.status(201).json({
                    status: true,
                    message: "category deleted sucessfully",
                    data: remove
                })
            }
        })
});

module.exports = router;
