import { Typography } from "@mui/material"
import { Box } from "@mui/system"
// Components
import Search from "./Search"
// Assets
import headerImg from "../images/header.jpg"

// Styles
const header = {
    height: 500,
    backgroundImage: `url(${headerImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    rowGap: 2,
    p: 2
}

const Header = () => {

    return (
        <Box sx={header}>
            <Typography variant="h4" textAlign="center" fontWeight="bold" color="white">
                Download High Quality Images by creators
            </Typography>
            <Typography variant="subtitle1" textAlign="center" color="white">
                Over 2.4+ million stock images by talented community
            </Typography>
            <Box
                display="flex"
                justifyContent="center">
                <div style={{ maxWidth: 900, width: 900 }}>
                    <Search key="headerSearch" dense={true} />
                </div>
            </Box>
        </Box>
    )
}

export default Header
