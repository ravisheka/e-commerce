import React from "react";
import AdressCard from "../AdressCard/AdressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star"; // Import StarIcon

function OrderDetails() {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AdressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
      {[1,1,1,1,1].map((item)=>
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border "
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-5">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://st.depositphotos.com/1389715/2129/i/600/depositphotos_21297327-stock-photo-modern-and-fashion-clothes-store.jpg"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men Slim Mid Black Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color: pink</span>
                  <span>Size: M</span>
                </p>
                <p>Seller: linaria</p>
                <p>R1099</p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      )}
      </Grid>
    </div>
  );
}

export default OrderDetails;
