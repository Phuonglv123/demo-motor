const express = require('express');
const router = express.Router();
const subCategoriesModel = require('../models/SubCategory');
const _ = require("underscore");

//get all sub categories
router.get('/get-all', (req, res, next) => {
    subCategoriesModel.find()
        .then(sub => {
            if (sub) {
                return res.status(200).json({
                    status: true,
                    message: "this is the list of the sub category",
                    data: sub
                })
            } else {
                return res.stat(500).json({
                    status: false,
                    message: "unable to get list of all sub Category"
                })
            }
        })
});

router.post('/create', (req, res, next) => {
    let subCategory = req.body;
    _.extend(subCategory, (req.params._id));
    let SubCat = new subCategoriesModel(req.body);
    SubCat.save((err, sub) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "err while createing sub category",
                data: err
            })
        } else {
            return res.status(200).json({
                status: true,
                message: "sub category saved  sucessfuly",
                data: sub
            })
        }
    })
});

router.post('/update/:id', (req, res, next) => {
    let updateSub = req.body;
    _.extend(updateSub);
    subCategoriesModel.findById({id: req.id}, (err, update) => {
        if (err) {
            return res.status(500).json({
                status: false,
                message: "error ",
                data: err
            })
        } else {
            return res.status(200).json({
                status: true,
                message: "sucess sub cat created",
                data: update
            })
        }
    });
    next();
});

router.post('/detete/:id', (req, res, next) => {
    subCategoriesModel.findByIdAndDelete(req.params.id)
        .then(remove => {
            if (!remove) {
                return res.status(500).json({
                    status: true,
                    message: "unable to delete sub category please try again "
                })
            } else {
                return res.status(200).json({
                    status: true,
                    message: "sub category deleted sucessfuly",
                    data: remove
                })
            }
        })
});


module.exports = router;
