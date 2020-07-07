import React from 'react'
import { Button, Card, Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import AddWebsite from '../AddWebsite'
import './Dashboard.css'

const Dashboard = ({ imagesFromFirebase }) => {
    if (!imagesFromFirebase) {
        return null
    }
    return (
        <div>
            <AddWebsite />
            <Paper style={{ minHeight: '100 %' }}><Table>
                <TableBody>
                    <TableRow className="cardRow">
                        {Object.values(imagesFromFirebase).map(image => {
                            return (

                                <TableCell className="cardCell">
                                    <a
                                        href={image.url}>
                                        <Card className="imgCard">
                                            <img
                                                src={`http://www.google.com/s2/favicons?domain=${image.url}`}
                                                key={image.url}
                                                alt="Icon"
                                            />

                                        </Card>
                                        <div>
                                            <p>{image.url}</p>
                                            <Button>Delete</Button>
                                        </div>
                                    </a>
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