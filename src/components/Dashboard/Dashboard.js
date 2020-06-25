import React from 'react'
import { Card, Paper, Table, TableBody, TableCell } from '@material-ui/core'
import AddWebsite from '../AddWebsite'

const Dashboard = ({ imagesFromFirebase }) => {
    if (!imagesFromFirebase) {
        return null
    }
    return (
        <div>
            <AddWebsite />
            <Paper style={{ minHeight: '100 %' }}><Table>
                <TableBody>
                    {Object.values(imagesFromFirebase).map(image => {
                        return (

                            <TableCell>
                                <a
                                    href={image.url}>
                                    <Card
                                        style={{ width: '50px', margin: '0 auto' }}
                                    >
                                        <img
                                            src={image.favicon}
                                            key={image.url}
                                            alt="Icon"
                                        />

                                    </Card> <div><p style={{ margin: '0 auto' }}>{image.url}</p></div>
                                </a>
                            </TableCell>

                        )
                    })}
                </TableBody>
            </Table>
            </Paper>
        </div>
    )
}

export default Dashboard