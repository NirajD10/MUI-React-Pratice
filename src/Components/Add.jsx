import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, EmojiEmotions, EventNote, Image, PersonAdd, VideoCall } from '@mui/icons-material'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: 10
})

const Add = () => {
    const [ open, setOpen ] = useState(false);
    return (
        <>
            <Tooltip onClick={(e) => setOpen(true)} title="Delete" sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography variant='h6' component='p' textAlign='center'>Create Post</Typography>
                    <UserBox>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                        <Typography fontWeight='500' variant='span'>James Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%', margin: '0.6rem 0' }}
                        id="standard-multiline-static"
                        label="What's today your mind?"
                        multiline
                        rows={3}
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color='primary' sx={{ cursor: 'pointer' }}></EmojiEmotions>
                        <Image color='secondary' sx={{ cursor: 'pointer' }} />
                        <VideoCall color='success' sx={{ cursor: 'pointer' }} />
                        <PersonAdd color='error' sx={{ cursor: 'pointer' }} />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: '20%' }}><EventNote /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add