var express = require("express");
var path = require("path");

var app = express

var PORT = 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());