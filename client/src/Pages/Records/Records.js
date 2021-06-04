import React from 'react'
import './Records.css'
import RightNav from '../../components/Rightnav/Rightnav'
import { Typography, Box, Divider} from "@material-ui/core"
import RecentRecords from './RecentRecords'
import ActiveRecords from './ActiveRecords'

function Records() {
 
    return (
        <Box className="Records_page_main_container">
            <RightNav page="Records" />

            <Box className="Recoress_page_main_div">
                <Box className="left_side_records">
                    <Box className="heading_records">
                        <Typography variant="h6">Recent Records</Typography>
                    </Box>
                    <Divider />
                    <Box className="table">
                        <RecentRecords />
                    </Box>
                </Box>
                <Box className="right_side_records">
                    <Box className="heading_records">
                        <Typography variant="h6">   Active Records</Typography>
                    </Box>
                    <Divider />
                    <Box className="table">
                        <ActiveRecords />
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Records
