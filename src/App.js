import { Box, Stack } from "@mui/material";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import TabComponent from "./components/TabComponent";
import ButtonsComponent from "./components/ButtonsComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="content">
      <HeaderComponent />
      <Box sx={{ bgcolor: "#cfe8fc" }}>
        <Stack
          direction="row"
          spacing={2}
        >
          <TabComponent />
          <ButtonsComponent />
        </Stack>
      </Box>
      <FooterComponent />
    </div>
  );
}

export default App;
