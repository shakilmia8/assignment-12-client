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
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
    const { user, token } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fierce-fjord-96835.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email]);

    // Cancel a product
    const handleCancelProduct = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://fierce-fjord-96835.herokuapp.com/orders?email=${user.email}&${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Canceled Successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }

    }

    return (
        <TableContainer component={Paper}>
            <h2 style={{ textAlign: 'center' }}>Your Order Table</h2>
            <Table style={{ width: "100%" }} aria-label="Your Order Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Customer Name</TableCell>
                        <TableCell align="right">E-mail</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Product Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Date</TableCell>
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
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.productName}</TableCell>
                            <TableCell align="right">{row.productPrice}</TableCell>
                            <TableCell align="right">{row.OrderDate}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleCancelProduct(row._id)} >Cancel</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Orders;