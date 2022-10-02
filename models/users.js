const express = require("express");
const { Schema, default: mongoose } = require("mongoose");
const Author = require("./author");
const yup = require("yup");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  author: Author.schema,
  genre: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 95,
  },
});

const validateUser = (user) => {
  const schema = yup.object().shape({
    userName: yup.string().required().min(1).max(10),
    authorName: yup.string().required().min(1).max(10),
    authorAge: yup.number().required().min(1).max(10),
    genre: yup.string().required().min(1).max(10),
  });
  return schema
    .validate(user)
    .then((user) => user)
    .catch((err) => {
      return {
        message: err.message
      };
    });
};

exports.User = new mongoose.model("User", UserSchema);
exports.validateUser = validateUser;
