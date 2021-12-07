import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import "./style.css";
import Navbar from "../Navbar";

const Forms = () => {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (values) => {
    setBooks([...books, values]);
    window.localStorage.setItem("books", JSON.stringify(books));
  };

  const deleteBooks = () => {
    window.localStorage.clear(books);
    setBooks([]);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      category: "",
      priority: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .min(1, "Please enter at least 1 character")
        .required("Required"),
      author: Yup.string()
        .min(3, "Please enter at least 3 characters")
        .required("Required"),
      category: Yup.string().required("Required"),
      priority: Yup.number().required("Required"),
    }),

    onSubmit: (values) => {
      addBook(values);
      formik.resetForm();
    },
  });

  return (
    <div>
      <Navbar />
      <h2>Add your own book</h2>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="input-container">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
            ></input>
            {formik.touched.title && formik.errors.title ? (
              <p>{formik.errors.title}</p>
            ) : null}
          </div>

          <div className="input-container">
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Author"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.author}
            ></input>
            {formik.touched.author && formik.errors.author ? (
              <p>{formik.errors.author}</p>
            ) : null}
          </div>
          <div className="category">
            <select
              name="category"
              onChange={formik.handleChange}
              value={formik.values.category}
              onBlur={formik.handleBlur}
            >
              <option className="select-hide">Category</option>
              <option name="Biographical">Biographical</option>
              <option name="Fantasty">Fantasty</option>
              <option name="Other">Other</option>
            </select>
            {formik.touched.category && formik.errors.category ? (
              <p>{formik.errors.category}</p>
            ) : null}
          </div>

          <div className="priority">
            <h3>Read priority</h3>
            <label>
              <input
                type="radio"
                name="1"
                value={formik.values.priority}
                checked={formik.values.priority === "1"}
                onChange={() => formik.setFieldValue("priority", "1")}
              />
              1
            </label>
            <label>
              <input
                type="radio"
                name="2"
                value={formik.values.priority}
                checked={formik.values.priority === "2"}
                onChange={() => formik.setFieldValue("priority", "2")}
              />
              2
            </label>
            <label>
              <input
                type="radio"
                name="3"
                value={formik.values.priority}
                checked={formik.values.priority === "3"}
                onChange={() => formik.setFieldValue("priority", "3")}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                name="4"
                value={formik.values.priority}
                checked={formik.values.priority === "4"}
                onChange={() => formik.setFieldValue("priority", "4")}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                name="5"
                value={formik.values.priority}
                checked={formik.values.priority === "5"}
                onChange={() => formik.setFieldValue("priority", "5")}
              />
              5
            </label>
          </div>
          <div className="priority-error">
            {formik.touched.priority && formik.errors.priority ? (
              <p>{formik.errors.priority}</p>
            ) : null}
          </div>
          <button type="submit">Add a book</button>
        </form>
        <button onClick={deleteBooks}>Delete books</button>
        <div className="books-wrapper">
          <h2>Your Books: {books.length}</h2>
        </div>
        <div className="books-container">
          {books &&
            books.map((book) => (
              <div className="books" key={uuidv4()}>
                <h4>Title: {book.title}</h4>
                <h4>Author: {book.author}</h4>
                <h4>Category: {book.category}</h4>
                <h4>Priority: {book.priority}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Forms;
