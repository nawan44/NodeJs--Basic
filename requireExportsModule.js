//require from external modules
const express = require('express')

//require from internal modules
const sum = require('./sum')

//module exports
exports.hello = "world"
exports.world = () => {
    return "hello"
}
exports.sum(a, b) => {
    return a + b;
}