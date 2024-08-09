import { FC } from "react";
import {
  Box,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

interface Ticket {
  orderId: string;
  customer: { name: string; email: string };
  tag: string;
  companyName: string;
  timestamp: string;
  status: string;
}

interface TicketProps {
  tickets: Record<string, Ticket>;
}

const TableView: FC<TicketProps> = ({ tickets }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(tickets).map(([key, ticket]) => (
            <TableRow key={key}>
              <TableCell>{ticket.orderId}</TableCell>
              <TableCell>{ticket.timestamp}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 1,
                  }}
                >
                  <Typography variant="h5">{ticket.customer.name}</Typography>
                  <Typography variant="caption">
                    {ticket.customer.email}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 1,
                  }}
                >
                  <Chip
                    label={ticket.tag}
                    sx={{
                      backgroundColor: "#FF5733",
                      color: "white",
                      borderRadius: 1,
                      mb: 2,
                    }}
                  />
                  {ticket.companyName}
                </Box>
              </TableCell>
              <TableCell>{ticket.status}</TableCell>
              <TableCell>
                <MoreVert />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableView;
