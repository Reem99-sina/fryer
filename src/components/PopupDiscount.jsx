import { Box, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function PopupDiscount({ handleClose, open, price, discount }) {
    return (
        <Dialog onClose={handleClose} open={open} sx={{ textAlign: "center" }} paperProps={{ height: "100vmax" }}>
            <DialogTitle>قلاية هوائية من فيليبس بحجم 4.1 لتر</DialogTitle>
            <DialogContent>
                <Typography component={"p"} sx={{ color: "gray" }}>استخدم الكود اثناء الشراء واحصل علي 10% خصم اضافي</Typography>
                <Box sx={{ textAlign: "right" }}>
                    <Typography component={"p"} sx={{ color: "#007eff", fontWeight: "700", display: "flex", justifyContent: "space-between", alignItems: "center" }}> <Typography component={"span"} sx={{ color: "green", backgroundColor: "#00800038", padding: "10px" }}>20%off</Typography><Typography component={"span"}>2800 ريال </Typography> </Typography>
                    <Typography component={"span"} sx={{ color: "gray", textDecoration: "line-through" }}>2800 ريال</Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    height: "49px",
                    backgroundColor: "#fffff",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)"
                }}>
                    <Typography component={"p"} sx={{ color: "#007eff", fontWeight: "700", display: "flex", justifyContent: "space-around", direction: "rtl", alignItems: "center" }}> <Typography component={"span"} sx={{ color: "green", backgroundColor: "#00800038", padding: "10px",direction:"ltr",display:"flex",alignItems:"center" }}><ShoppingCartIcon />تسوق الان</Typography><Typography component={"h2"} sx={{ fontWeight: "700", fontSize: "20px", color: "black" }}>KR49</Typography> </Typography>

                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default PopupDiscount