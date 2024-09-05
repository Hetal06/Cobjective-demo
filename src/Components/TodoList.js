import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Delete from "@mui/icons-material/Delete";

function createData(title, desc, deadline, priority, action) {
  return { title, desc, deadline, priority, action };
}

const rows = [
  createData("Shital", "Manage App Department", "23 / 07", "High"),
  createData("Kajal", "Backend app Manage", "2 / 07", "low"),
  createData("Pooja", "Detail Employee", "5 / 07", "midum"),
];

export default function TodoList() {
  const handleDelete = (title) => {
    console.log("title", title);
  };

  return (
    <>
      <Button>
        <Link to="/create">Create</Link>
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Deadline</TableCell>
              <TableCell align="left">Priority</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.desc}</TableCell>
                <TableCell align="left">{row.deadline}</TableCell>
                <TableCell align="left">{row.priority}</TableCell>
                <TableCell align="left">
                  <Button onClick={() => handleDelete(row.title)}>
                    <Delete />
                  </Button>
                  <Button>
                    <ModeEditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
