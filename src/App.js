import { useEffect, useState } from "react"
import { Paper, Container, Typography } from "@mui/material"
// Components
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import PhotoGrid from "./components/PhotoGrid"
import PhotoModal from "./components/PhotoModal"
import Loader from "./components/Loader"
import { useSearchQuery } from "./components/SearchQueryContext"
import { AppThemeProvider } from "./components/ThemeContext"
// other js
import { fetchPhotos, fetchPhotosByQuery, fetchPhotoById } from "./Api"
// assets
import "@fontsource/pattaya"
import "@fontsource/montserrat"

const App = () => {
  const [photos, setPhotos] = useState([])
  const [modalData, setModalData] = useState()
  const [showHeader, setShowHeader] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const searchQuery = useSearchQuery('')

  useEffect(() => {
    setPhotos([])
    const delayDebounce = setTimeout(
      () => searchQuery.length > 0
        ? onSeachQueryChanged(searchQuery)
        : onPageLoad()
      , 500)
    return () => clearTimeout(delayDebounce)
  }, [searchQuery])

  const handleModalClose = () => setModalOpen(false)

  const onPageLoad = async () => {
    const photos = await fetchPhotos()
    setPhotos(photos)
    setShowHeader(true)
  }

  const onSeachQueryChanged = async (searchQuery) => {
    const photos = await fetchPhotosByQuery(searchQuery)
    setPhotos(photos)
    setShowHeader(false)
  }

  const getPhotoById = async (photoId) => {
    const photo = await fetchPhotoById(photoId)
    setModalData(photo)
  }

  const openModal = (photoId) => {
    setModalData(null)
    setModalOpen(true)
    getPhotoById(photoId)
  }

  return (
    <AppThemeProvider>
      <Paper>
        <Navbar />
        {showHeader ? <Header /> :
          <Container>
            <Typography
              pt={12}
              fontWeight="bold"
              variant="h4"
              style={{ textTransform: "capitalize" }}>
              {searchQuery}
            </Typography>
          </Container>
        }
        {photos.length > 0 ?
          <PhotoGrid
            photos={photos}
            onItemClick={openModal} />
          : <Loader />
        }
        <PhotoModal
          photo={modalData}
          open={modalOpen}
          handleClose={handleModalClose} />
      </Paper>
    </AppThemeProvider >
  )
}

export default App
