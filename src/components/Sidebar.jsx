import { Box, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";


export default function Sidebar() {
  const data = useSelector((state) => state);
  
  return (
    <Container 
      sx={{  
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', 
          width: '20rem', 
          height: '20rem', 
          backgroundColor: "#f4f4f4", 
          position: "absolute", 
          top: '64px', 
          left: 0, 
          zIndex: 100,
          borderBottomRightRadius: '30px' 
      }}
    >
        <Box display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"} justifyContent={"center"} height={"100%"}>
          {data.split(",").map((data, index) => (
            <>
              <Typography key={index}>{data}</Typography>
            </>
          ))}
        </Box>
    </Container>
  )
}
