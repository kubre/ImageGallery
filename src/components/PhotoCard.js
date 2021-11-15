import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Box, styled } from "@mui/system"
// Components
import TagList from "./TagList"
// Other JS
import { numberFormatter } from "../utils"
// Assets
import DownloadIcon from "@mui/icons-material/Download"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"

// Styles
const ThemedCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ?
        theme.palette.common.black
        : theme.palette.grey[50],
    boxShadow: theme.palette.mode === "dark" ?
        theme.shadows[0] : theme.shadows[4]
}))

const PhotoCard = ({ photo, onItemClick, onAfterTagClick, showMoreDetails = false }) => {
    return (
        <ThemedCard onClick={() => !showMoreDetails && onItemClick(photo.id)}>
            <CardMedia
                component="img"
                style={{
                    maxHeight: showMoreDetails ? "75vh" : "auto",
                    minWidth: showMoreDetails ? "60vw" : "40%",
                    backgroundColor: photo.color,
                    objectFit: "contain"
                }}
                image={showMoreDetails ? photo.urls.regular : photo.urls.small}
                alt="Image"
            />
            <CardContent sx={{
                padding: showMoreDetails ? {
                    xs: "10px",
                    sm: "10px 20px 10px 20px"
                } : 2
            }}>
                <Grid container columns={12}>
                    <Grid
                        container
                        columns={12}
                        item
                        alignItems="center"
                        xs={9}>
                        <Grid item>
                            <Avatar
                                sx={{ width: 32, height: 32 }}
                                src={photo.user.profile_image.small}
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            xs={9}
                            style={{ padding: "0 10px" }}
                            direction="column">
                            <Typography
                                noWrap
                                component="div"
                                variant="body2"
                                fontWeight="bold">
                                {photo.user.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                fontStyle="italic">
                                @{photo.user.username}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container
                        item
                        alignItems="center"
                        justifyContent="end"
                        xs={3}
                        columnGap={1}>
                        <ThumbUpOffAltIcon />
                        {numberFormatter.format(photo.likes)}
                    </Grid>
                </Grid>
            </CardContent>
            {showMoreDetails &&
                <CardActions sx={{
                    flexDirection: "column",
                    padding: {
                        xs: "10px 5px 30px 5px",
                        sm: "10px 20px 30px 20px"
                    }
                }}>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: { xs: "column-reverse", sm: "row" },
                        rowGap: { xs: 2, sm: 0 },
                        justifyContent: "space-between"
                    }}>
                        <Box>
                            {photo.user.social.instagram_username &&
                                <Button
                                    target="_blank"
                                    href={`https://instagram.com/${photo.user.social.instagram_username}`}
                                    variant="default"
                                    startIcon={<InstagramIcon />}
                                >
                                    {photo.user.social.instagram_username}
                                </Button>
                            }
                            {photo.user.social.twitter_username &&
                                <Button
                                    target="_blank"
                                    href={`https://twitter.com/${photo.user.social.twitter_username}`}
                                    variant="default"
                                    startIcon={<TwitterIcon />}>
                                    {photo.user.social.twitter_username}
                                </Button>}
                        </Box>
                        <Button
                            download
                            target="_blank"
                            href={photo.urls.raw}
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                        >
                            Download
                        </Button>
                    </Box>
                    <Box style={{ width: "100%" }}>
                        <Typography fontWeight="bold" variant="h6" pt={1}>
                            Related Tags
                        </Typography>
                        <TagList tags={photo.tags} onAfterTagClick={onAfterTagClick} />
                    </Box>
                </CardActions>
            }
        </ThemedCard >
    )
}

export default PhotoCard
