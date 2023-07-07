import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import RightBar from './Components/RightBar'
import Navbar from './Components/Navbar'
import { Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material'
import Add from './Components/Add'

const App = () => {
    const [ mode, setMode ] = useState("light")

    const themeMode = createTheme({
        palette: {
            mode: mode
        }
    })
    return (
        <ThemeProvider theme={themeMode}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <RightBar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    )
}

export default App