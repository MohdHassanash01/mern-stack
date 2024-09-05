const express = require('express')

const jwt = require('jsonwebtoken')

require('dotenv').config()


const verifyToken = (req,res,next) => {
    const token = req.header['x-auth-token'];

    jwt.verify(token,
         process.env.JWT_SECRET,
        (err,payload) => {
            if (err) {
                console.error(err)
            res.status(401).json(err)
            }else{
                req.user = payload;
                next()
            }
        })
}

module.exports = verifyToken;
