import axios from "axios";

export default {

  //This for handling all hair vendors 

  // Gets all hair vendors
  getVendors: function() {
    return axios.get("/api/vendors");
  },
  // Gets the hair vendor with the given id
  getVendor: function(id) {
    return axios.get("/api/vendors/" + id);
  },
  // Deletes the hair vendor  with the given id
  deleteVendor: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a hair vendor to the database
  saveVendor: function(vendorData) {
    return axios.post("/api/vendors", vendorData);
  },

  //This is for handling a particular customer 
  getCustomer: function(id) {
    return axios.get("/api/vendors/" + id);
  },
  // Deletes the hair vendor  with the given id
  deleteCustomer: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a hair vendor to the database
  saveCustomer: function(bookData) {
    return axios.post("/api/vendors", bookData);
  },

  // This is for handle products 
  // Gets all hair vendors
  getProducts: function() {
    return axios.get("/api/vendors");
  },
  // Gets the hair vendor with the given id
  getProduct: function(id) {
    return axios.get("/api/vendors/" + id);
  },
  // Deletes the hair vendor  with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a hair vendor to the database
  saveProduct: function(bookData) {
    return axios.post("/api/vendors", bookData);
  },

  //This is for handling reviews

  // Gets all hair vendors
  getReview: function() {
    return axios.get("/api/vendors");
  },
  // Gets the hair vendor with the given id
  getReviews: function(id) {
    return axios.get("/api/vendors/" + id);
  },
  // Deletes the hair vendor  with the given id
  deleteReview: function(id) {
    return axios.delete("/api/vendors/" + id);
  },
  // Saves a hair vendor to the database
  postReview: function(bookData) {
    return axios.post("/api/vendors", bookData);
  },
};
