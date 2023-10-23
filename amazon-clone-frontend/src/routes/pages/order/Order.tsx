import {useEffect, useState} from 'react'

// *** MUI
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
    Container,
    CssBaseline,
    DialogTitle,
    DialogContent,
    DialogActions,
    Dialog,
    DialogContentText,
} from "@mui/material";

import {getOrders} from '../../../api/apiRoutes'
import {useNavigate} from 'react-router-dom';

const extra = /[\[\]'\n\s]/g

export default function Order() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        console.log(orders)
        getOrders({}).then(res => {
            if (res.data.success) {
                const sortedOrders = res.data.data.OrderDetails.sort(
                    (a, b) => b.order_id - a.order_id
                );
                setOrders(sortedOrders);
                console.log(orders)
            }
        })
    }, [])

    return (
        <>
            <CssBaseline/>
            <Container disableGutters maxWidth="sm" component="main" sx={{pt: 10, pb: 6}}>
                <Typography component="h1" variant="h4" align="center" color="text.primary" gutterBottom>
                    Orders
                </Typography>
            </Container>

            <Container maxWidth="lg" component="main">
                {orders.length > 0 ? (
                    <>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Total</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Products</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders.map((order, index) => (
                                        <TableRow key={order.order_id + index}>
                                            <TableCell>{order.order_id}</TableCell>
                                            <TableCell>{order.order_date.split("T")[0]}</TableCell>
                                            <TableCell>${order.total_price.toFixed(2)}</TableCell>
                                            <TableCell>{order.status}</TableCell>
                                            <TableCell>
                                                <Table>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Image</TableCell>
                                                            <TableCell>Name</TableCell>
                                                            <TableCell>Price</TableCell>
                                                            <TableCell>Description</TableCell>
                                                            <TableCell>Quantity</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {order.products.map((val, index) => (
                                                            <TableRow key={index + val.product_name}>
                                                                <TableCell>
                                                                    <img
                                                                        src={val.image.replace(extra, '').split(',')[0]}
                                                                        alt=""
                                                                        onClick={() => navigate(`/product/${val.id}`)}
                                                                        style={{
                                                                            width: "100px",
                                                                            height: "130px",
                                                                            objectFit: "fill",
                                                                            cursor: "pointer"
                                                                        }}
                                                                    />
                                                                </TableCell>
                                                                <TableCell>{val.name}</TableCell>
                                                                <TableCell>${val.price.toFixed(2)}</TableCell>
                                                                <TableCell>{val.description}</TableCell>
                                                                <TableCell>{val.quantity}</TableCell>
                                                            </TableRow>
                                                        ))}

                                                    </TableBody>
                                                </Table>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                ) : (
                    <>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 2}}>
                            No order found
                            <Button
                                variant="contained"
                                onClick={() => navigate("/product")}
                            >
                                Shop Now
                            </Button>
                        </Typography>
                    </>
                )}
            </Container>

        </>
    )
}
