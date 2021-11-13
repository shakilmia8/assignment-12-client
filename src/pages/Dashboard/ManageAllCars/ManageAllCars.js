import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'react-bootstrap'

const ManageAllOrders = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:7000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Delete a product
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:7000/products/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }

    }

    return (
        <TableContainer component={Paper}>
            <h2 style={{ textAlign: 'center' }}>Manage All Product's Table</h2>
            <Table aria-label="Your Order Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Launched Date</TableCell>
                        <TableCell align="right">describe</TableCell>
                        <TableCell align="right">Img Url</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.launched}</TableCell>
                            <TableCell align="right">{row.describe.slice(0, 35)}</TableCell>
                            <TableCell align="right">{row.img.slice(0, 25)}</TableCell>
                            <TableCell align="right"><Button>Update</Button></TableCell>
                            <TableCell align="right"><Button onClick={() => handleDeleteProduct(row._id)} >Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageAllOrders;