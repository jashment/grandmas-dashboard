import React from 'react'
import { Button, Card, Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import './Dashboard.css'

const Dashboard = ({ deleteUrlFromFirebase, imagesFromFirebase }) => {
    if (!imagesFromFirebase) {
        return null
    }
    return (
        <div>
            <Paper>
                <Table>
                    <TableBody>
                        <TableRow className="cardRow">
                            {Object.keys(imagesFromFirebase).map((key, index) => {
                                return (
                                    <TableCell className="cardCell" key={imagesFromFirebase[key].url}>
                                        <a
                                            href={`//${imagesFromFirebase[key].url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Card className="imgCard">
                                                <img
                                                    src={`${imagesFromFirebase[key].favicon}`}
                                                    alt="Icon"
                                                />
                                            </Card>
                                            <div>
                                                <p>{imagesFromFirebase[key].url}</p>
                                            </div>
                                        </a>
                                        <Button variant="contained" color="secondary" onClick={() => { deleteUrlFromFirebase(key) }}>Delete</Button>
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </div >
    )
}

export default Dashboard