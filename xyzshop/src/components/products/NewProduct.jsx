import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "./../../services/ProductsService";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [Link,setLink] = React.useState("");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
      <TextField
          label="link"
          fullWidth
          value={Link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
        />
        <TextField
          label="name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="price"
          fullWidth
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            productService
              .addProduct({ Link,name, price })
              .then((data) => {
                console.log(data);
                props.history.push("/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
