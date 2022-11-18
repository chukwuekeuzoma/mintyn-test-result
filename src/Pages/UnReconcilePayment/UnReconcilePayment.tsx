import React from "react";
import { Allpaymentsdata } from "../../Data";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Arrowdown from "../../Asset/Svg/ArrowDown.svg";
import "../Allpayments/Allpayments.scss";

function UnReconcilePayment() {
  return (
    <>
      <div className="payments">Un-Reconcile payment</div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  style={{
                    background: "#EAEEF0",
                    fontSize: "14px",
                    color: "#7F8FA4",
                  }}
                >
                  Item Type
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    background: "#EAEEF0",
                    fontSize: "14px",
                    color: "#7F8FA4",
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    background: "#EAEEF0",
                    fontSize: "14px",
                    color: "#7F8FA4",
                  }}
                >
                  Transaction No
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    background: "#EAEEF0",
                    fontSize: "14px",
                    color: "#7F8FA4",
                  }}
                >
                  Time
                </TableCell>
                <TableCell
                  align="right"
                  style={{
                    background: "#EAEEF0",
                    fontSize: "14px",
                    color: "#7F8FA4",
                  }}
                ></TableCell>
                <TableCell
                  align="right"
                  style={{
                    background: "#EAEEF0",
                    fontSize: "14px",
                    color: "#7F8FA4",
                  }}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Allpaymentsdata.filter((val: any) => {
                if (val.status === 0) {
                  return true;
                }
              }).map(
                (
                  { country, price, transactionNo, time, status },
                  index: number
                ) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <div className="table-letters">NG</div>
                      <div style={{ color: "#414042" }}>{country}</div>
                    </TableCell>
                    <TableCell align="right" style={{ color: "#7F8FA4" }}>
                      {price}
                    </TableCell>
                    <TableCell align="right" style={{ color: "#7F8FA4" }}>
                      {transactionNo}
                    </TableCell>
                    <TableCell align="right" style={{ color: "#7F8FA4" }}>
                      {time}
                    </TableCell>
                    <TableCell align="right">
                      {status === 1 ? (
                        <div className="Reconcilled">
                          <div className="t-circle"></div>
                          <div>Reconcilled</div>
                        </div>
                      ) : (
                        <div className="Un-reconcilled">
                          <div className="t-circle-un"></div>
                          <div>Un-reconcilled</div>
                        </div>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <img src={Arrowdown} alt="Arrowdown" />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default UnReconcilePayment;
