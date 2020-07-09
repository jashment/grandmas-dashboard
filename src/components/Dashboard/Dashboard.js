import React from 'react'
import { Button, Card, Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import AddWebsite from '../AddWebsite'
import './Dashboard.css'

const Dashboard = ({ deleteUrlFromFirebase, imagesFromFirebase }) => {
    if (!imagesFromFirebase) {
        return null
    }
    return (
        <div>
            <AddWebsite />
            <Paper style={{ minHeight: '100 %' }}><Table>
                <TableBody>
                    <TableRow className="cardRow">
                        {Object.keys(imagesFromFirebase).map((key, index) => {
                            console.log(key)
                            console.log(index)
                            return (
                                <TableCell className="cardCell">
                                    <a
                                        href={imagesFromFirebase[key].url}>
                                        <Card className="imgCard">
                                            <img
                                                src={`http://www.google.com/s2/favicons?domain=${imagesFromFirebase[key].url}`}
                                                key={imagesFromFirebase[key].url}
                                                alt="Icon"
                                            />
                                        </Card>
                                        <div>
                                            <p>{imagesFromFirebase[key].url}</p>
                                        </div>
                                    </a>
                                    <Button onClick={() => { deleteUrlFromFirebase(key) }}>Delete</Button>
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableBody>
            </Table>
            </Paper>
        </div>
    )
}

export default Dashboard