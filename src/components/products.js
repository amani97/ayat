import { Card, Typography } from "@mui/material";

import { Grid } from "@mui/material";
import Product from "../assets/product.svg"

const Products = () => {
  const products = [1, 2, 3, 4];

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div style={{ padding: "20px" }}>
        {/* <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "150px",
              cursor: "pointer",
            }}
            onClick={() => console.log("Add product")}
          >
            <Typography variant="h4" color="primary">
              +
            </Typography>
          </Card>
        </Grid> */}

        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className="">
                <img src={Product} alt="Product" />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Products;
