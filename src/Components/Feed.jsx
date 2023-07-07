import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

const Feed = () => {
    return (
        <Box p={2} flex={5} marginLeft={0}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    )
}

export default Feed