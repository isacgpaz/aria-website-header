import { Grid, GridItem } from "@chakra-ui/react";
import { Appbar } from "./components/Appbar";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <Grid
      h="100vh"
      gridTemplateColumns={"116px 1fr 668px"}
      gridTemplateRows={"100px 1fr 160px"}
      gridTemplateAreas={`
      'sidebar appbar appbar' 
      'sidebar main main' 
      'sidebar footer footer'
      `}
    >
      <Sidebar />
      <Appbar />

      {/* <GridItem bg="blue" area="main"></GridItem>
      <GridItem bg="yellow" area="footer"></GridItem> */}
    </Grid>
  );
}
