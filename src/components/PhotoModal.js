import { Backdrop, Fade, Grow, Modal, Paper } from "@mui/material"
import { Box } from "@mui/system"
// Components
import PhotoCard from "./PhotoCard"
import Loader from "./Loader"
// Assets
import CloseIcon from "@mui/icons-material/Close"

const modalStyle = {
    position: "absolute",
    top: "4%",
    left: { xs: "3%", sm: "20%" },
    width: { xs: "90%", sm: "60vw" },
    bgcolor: "background.paper",
    borderRadius: 4,
    boxShadow: 24,
}

const PhotoModal = ({ photo, open, handleClose }) => {
    return (
        <Modal
            style={{ overflowY: "auto" }}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Grow in={open}>
                {photo || false ?
                    <Fade in={open}>
                        <Box sx={modalStyle}>
                            <Paper sx={{
                                borderRadius: 100,
                                padding: "5px 5px 0 5px",
                                position: "absolute",
                                right: -15,
                                top: -10
                            }}
                                onClick={handleClose}
                            >
                                <CloseIcon />
                            </Paper>
                            <PhotoCard photo={photo} showMoreDetails={true} onAfterTagClick={handleClose} />
                        </Box>
                    </Fade>
                    :
                    <Box sx={modalStyle}>
                        <Paper>
                            <Loader />
                        </Paper>
                    </Box>
                }
            </Grow>
        </Modal>
    )
}

export default PhotoModal
