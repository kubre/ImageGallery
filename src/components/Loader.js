import { Typography } from "@mui/material"
import { Box } from "@mui/system"
// Assets
import loader from '../images/loadergif.gif'

const Loader = () => {
    return (
        <Box
            display="flex"
            height="90vh"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <img src={loader} height={200} alt="Loading" />
            <Typography variant="h6">
                Loading...
            </Typography>
        </Box>
    )
}

export default Loader
