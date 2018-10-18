import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Vendors extends Component {
  state = {
    vendors: [],
    name: "",
    productID: ""
  };

  componentDidMount() {
    this.loadVendors();

    console.log(this.state.vendors);
  }
 
  loadVendors = () => {
    console.log("im in this function");
    API.getVendors()
      .then(res =>
        //console.log("this my response doe", res.data)
        this.setState({ vendors: res.data, name: "", product: ""})
      )
      .catch(err => console.log(err));
  };

  deleteVendor = id => {
    API.deleteVendor(id)
      .then(res => this.loadVendors())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
            <Jumbotron>
              <h1>My favorite hair vendors</h1>
            </Jumbotron>
            {this.state.vendors.length ? (
              <List>
                {this.state.vendors.map(vendor=> (
                  <ListItem key={vendor._id}>
                      <strong>
                        {vendor.name} by {vendor.productID}
                      </strong>
                    <DeleteBtn onClick={() => this.deleteVendor(vendor._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
      </div>
    );
  }
}

export default Vendors;
