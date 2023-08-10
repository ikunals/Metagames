import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Onecard from "./Onecard";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";

function Games() {
  return (
    <Grid
      mt={"5em"}
      w={"70%"}
      ml={"15%"}
      gap={5}
      templateColumns={{  lg: "repeat(3, 1fr)" }}
    >
      <Onecard image={img1} name={"Managed Wallets & External Wallets"} />
      <Onecard image={img2} name={"Gasless & Fully Managed Transactions"} />
      <Onecard image={img3} name={"Game Currencies (ERC20)"} />
      <Onecard image={img4} name={"No Friction For Players Or Developers"} />
      <Onecard image={img5} name={"Player Management, Registration & Auth"} />
      <Onecard image={img6} name={"Community Driven & Developed"} />
      <Onecard image={img7} name={"Free Without The Premium"} />
      <Onecard image={img8} name={"Contract Ownership (No Lock-In)"} />
      <Onecard image={img9} name={"Full Interoperability Between Games"} />
      <Onecard image={img10} name={"Lootboxes (On-Chain)"} />
      <Onecard image={img11} name={"Shops & Item Crafting (On-Chain)"} />{" "}
      <Onecard image={img12} name={"Digital Collectibles & Items (ERC1155)"} />
    </Grid>
  );
}

export default Games;
