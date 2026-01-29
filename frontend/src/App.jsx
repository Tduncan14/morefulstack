import { useState } from 'react'
import { Box, Button, HStack } from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={'100vh'}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />

      </Routes>


    </Box>
  )
}

export default App
