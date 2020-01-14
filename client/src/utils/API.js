import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // deletes book
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // saves book to db
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData)
      .then(result => result.data);
  },
  //get saved books from DB
  savedBooks: function () {
    return axios.get("/api/books").then(result => result.data);
  }

};