import React from 'react'
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,makeStyles} from "@material-ui/core"
const usestyle = makeStyles((them) => ({
    table: {
        width: "100%"
    }
}))
const CreateData = (foodName, UserName, timeTaken) => {
    return { foodName, UserName, timeTaken }
}

const Row = [
    CreateData("Dabali", "harsh", "10minuite left"),
    CreateData("Dabali", "harsh", "5 minuite left"),
    CreateData("Dabali", "harsh", "5 minuite left"),
    CreateData("Dabali", "harsh", "5 minuite left"),
    CreateData("Dabali", "harsh", "5 minuite left"),

]
function ActiveRecords() {
    const classes = usestyle()
    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table" >
                <TableHead>
                    <TableRow>
                        <TableCell>FoodName</TableCell>
                        <TableCell align="right">UserName</TableCell>
                        <TableCell align="right">Time Left</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Row.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {row.foodName}
                                </TableCell>
                                <TableCell align="right">{row.UserName}</TableCell>
                                <TableCell align="right">{row.timeTaken}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ActiveRecords
