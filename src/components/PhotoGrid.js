import { Container } from '@mui/material'
import Masonry from '@mui/lab/Masonry'
// Components
import PhotoCard from "./PhotoCard"

const PhotoGrid = ({ photos, onItemClick }) => {

    return (
        <Container
            fixed
            style={{ marginTop: 30, minHeight: '100vh' }}>
            <Masonry
                columns={{ xs: 1, sm: 3 }}
                spacing={{ xs: 1, sm: 3 }}
            >
                {photos.map((photo) => <PhotoCard
                    key={photo.id}
                    photo={photo}
                    onItemClick={onItemClick}
                />)}
            </Masonry>
        </Container>
    )
}

export default PhotoGrid
