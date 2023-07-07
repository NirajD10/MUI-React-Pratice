import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import Converstation from './Converstation'

const RightBar = () => {
    return (
        <Box p={2} flex={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={350}>
                <Typography variant='h6' fontWeight={100} sx={{ margin: '0.6em 0' }}>Online Friends</Typography>
                <AvatarGroup max={6} total={24} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={100} sx={{ margin: '0.6em 0' }}>Recent Gallery</Typography>
                <ImageList sx={{ width: 430 }} cols={3} rowHeight={164} gap={3}>
                    <ImageListItem>
                        <img
                            src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format`}
                            alt={"Egg"}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format`}
                            alt={"Speaker"}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format`}
                            alt={"Baseball"}
                            loading="lazy"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={100} sx={{ margin: '0.6em 0' }}>Converstation</Typography>
                <Converstation />
            </Box>
        </Box>
    )
}

export default RightBar