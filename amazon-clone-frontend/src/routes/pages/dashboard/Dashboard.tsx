import {useEffect, useState} from 'react'

// *** MUI
import {Box, Container, CssBaseline, Typography} from '@mui/material'

// *** Custom Components or functions
import {getUserData} from '../../../api/apiRoutes'

function Dashboard() {
    const [userData, setUserData] = useState("");

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            getUserData({}).then(res => {
                if (res.data.status) {
                    setUserData(res.data.data)
                }
            })
        }

    }, [])

    return (
        <>
            <CssBaseline/>
            <Container disableGutters maxWidth="sm" component="main" sx={{pt: 10, pb: 6}}>
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Welcome {token ? userData?.first_name + " " + userData?.last_name : "to Amazon"}
                </Typography>
            </Container>
            {token && <Container maxWidth="sm" component="main" sx={{pt: 10, pb: 6}}>
              <Box
                sx={{
                    display: 'flex',
                    py: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    boxShadow: 2
                }}
              >
                <Typography variant="h6" component="div">
                  First Name: {userData?.first_name}
                </Typography>
                <Typography variant="h6" component="div">
                  Last Name: {userData?.last_name}
                </Typography>
                <Typography variant="h6" component="div">
                  Email: {userData?.email}
                </Typography>
              </Box>
            </Container>}

        </>
    )
}

export default Dashboard
