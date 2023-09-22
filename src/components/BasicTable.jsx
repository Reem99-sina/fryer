import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  value,
 
) {
  return { name, value };
}

const rows = [
  createData('التثيب', "يثبت علي سطح منضدة"),
  createData('اللون', "اسود"),
  createData('السعة', " 4.9.3 لتر"),
  createData('القوة الكهرباىية',"حتي 1211 وات"),
  createData('طول المنتج', " MN 360"),
  createData('عرض المنتج', " MN 360"),
createData('السعة', "L4.l"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Table  aria-label="simple table" sx={{border:"1px solid gray",borderRadius:"20px" ,margin:"10px",direction:"rtl",width:"50%"}}>
        <TableHead>
          <TableRow >
            <TableCell sx={{border: "1px solid rgba(224, 224, 224, 1)"}}>المادة</TableCell>
            <TableCell align="right"sx={{border: "1px solid rgba(224, 224, 224, 1)"}}>بلاستك</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"sx={{border: "1px solid rgba(224, 224, 224, 1)"}}>
                {row.name}
              </TableCell>
              <TableCell align="right"sx={{border: "1px solid rgba(224, 224, 224, 1)"}}>{row.value}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}