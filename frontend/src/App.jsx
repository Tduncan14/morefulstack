import { useState } from 'react'
import { Box, Button, HStack } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import CreatePage from './pages/CreatePage';
import { useProductStore } from './store/product';

function App() {

  const { products } = useProductStore()

  return (
    <Box minH={'100vh'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />

      </Routes>


    </Box>
  )
}

export default App
