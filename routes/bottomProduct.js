const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const path = require('path');
const _ = require('lodash');

// Load Validation
const validateProductInput = require('../utils/validation/product');

// Load Model
const BottomProduct = require('../models/BottomProduct');

// SET STORAGE
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let validateFile = function (file, cb) {
    let allowedFileTypes = /jpeg|jpg|png|JPEG|JPG|PNG/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
        return cb(null, true);
    } else {
        cb("Invalid file type. Only JPEG, PNG, JPG file are allowed.")
    }
};

let upload = multer(
    {
        storage: storage,
        limits: {fileSize: 200000},
        fileFilter: function (req, file, callback) {
            validateFile(file, callback);
        }
    }
);

// create product
router.post('/create', upload.array('images', 5), (req, res) => {
    const {errors, isValid} = validateProductInput(req.body, req.files);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newProduct = new BottomProduct({
        ...req.body,
        images: _.map(req.files, (image, index) => image.path)
    });

    newProduct.save()
        .then(product => {
            return res.json(product);
        })
        .catch(err => console.log(err));
});

// get all products
router.get('/get-all', (req, res) => {
    BottomProduct.find({}, function (err, data) {
        if (err) {
            return res.send(400, 'no list')
        } else {
            return res.json(data);
        }
    })
});

// get product by id
router.get('/:product_id', (req, res) => {
    const errors = {};
    // Product
    BottomProduct.findOne({_id: req.params.id})
        .populate('category')
        .then(product => {
            if (!product) {
                errors.noproduct = 'There is no product with this Id';
                return res.status(404).json(errors);
            }

            res.json(product);
        })
        .catch(err => {
            return res.status(404).json(err)
        });
});

module.exports = router;
