import React,{useState, useEffect} from "react";
import "./Allpayments.scss";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {Allpaymentsdata} from "../../Data";
import Arrowdown from "../../Asset/Svg/ArrowDown.svg"
import {SearchInput,Pagination} from "../../Components"

function Allpayments() {
   const [paymentTerms, setPaymentTerms] = useState("")
   const [paymentData, setPaymentData] = useState([])
   const [paymentDataTwo, setPaymentDataTwo] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [ postPerPage ] = useState(3)
   
const paginatePayment = () => {
  const indexOFLastPage = currentPage * postPerPage;
  const indexoFFirstPage = indexOFLastPage - postPerPage;
  setPaymentData(Allpaymentsdata.slice(indexoFFirstPage, indexOFLastPage))
  setPaymentDataTwo(Allpaymentsdata.slice(indexoFFirstPage, indexOFLastPage))
}

 useEffect(()=>{
  paginatePayment()
 },[currentPage])
 
 
  const satsCheckOne = [{name:"All", value:2 },{name:"Reconcilled", value:1},{name:"Unreconcilled",value:0}];

  const fliterPayment = (satsCheck:number) => {
       const checkFilterPayment = paymentData.filter((p:any) => satsCheck === 2 ? true : p.status === satsCheck)
       setPaymentDataTwo(checkFilterPayment) 
  }
   
  // change page 
  const Paginate = (num:any) =>  setCurrentPage(num) 


  return (
    <>
    <div className="payments">Payments</div>
      <div style={{display:"flex"}}>
          <SearchInput text="Search payments"  getValue={(e:any) => setPaymentTerms(e.target.value)}/>
         <select
             id="check"
            onChange={(e)=>{fliterPayment(parseInt(e.target.value))}}
         >
         {satsCheckOne.map((stats,i)=>(
         <option key={i} value={stats.value}>{stats.name}</option>
        ))
        }
         </select>
      </div>
    <div>
      <TableContainer component={Paper}> 
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell style={{background:"#EAEEF0",fontSize:"14px", color:"#7F8FA4"}}>Item Type</TableCell>
              <TableCell align="right" style={{background:"#EAEEF0",fontSize:"14px", color:"#7F8FA4"}}>Price</TableCell>
              <TableCell align="right" style={{background:"#EAEEF0",fontSize:"14px", color:"#7F8FA4"}}>Transaction No</TableCell>
              <TableCell align="right" style={{background:"#EAEEF0",fontSize:"14px", color:"#7F8FA4"}}>Time</TableCell>
              <TableCell align="right" style={{background:"#EAEEF0",fontSize:"14px", color:"#7F8FA4"}}></TableCell>
              <TableCell align="right" style={{background:"#EAEEF0",fontSize:"14px", color:"#7F8FA4"}}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentDataTwo.filter((val:any) => {
               if(paymentTerms === ""){
                return true
               }else if (val.country.toLowerCase().includes(paymentTerms.toLocaleLowerCase())){
                return true
               }
            }).map(({country,price,transactionNo,time,status}, index:number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              > 
                <TableCell component="th" scope="row" style={{display:"flex", alignItems: "center"}}>
                  <div className="table-letters">
                     NG
                  </div>
                  <div style={{color:"#414042"}}>
                      {country}
                  </div>
                </TableCell>
                <TableCell align="right" style={{color:"#7F8FA4"}}>{price}</TableCell>
                <TableCell align="right" style={{color:"#7F8FA4"}}>{transactionNo}</TableCell>
                <TableCell align="right" style={{color:"#7F8FA4"}}>{time}</TableCell>
                <TableCell align="right">

                {status === 1 ?
                  <div className="Reconcilled">
                     <div className="t-circle"></div>
                     <div>Reconcilled</div>
                  </div>
                  :
                  <div className="Un-reconcilled">
                     <div className="t-circle-un"></div>
                     <div>Un-reconcilled</div>
                  </div>
                  }  
                </TableCell>
                <TableCell align="right">
                    <img src={Arrowdown} alt="Arrowdown"/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination-container">

         <div>Showing {currentPage} out of {Allpaymentsdata.length} entries</div>
        <Pagination postPerPage={postPerPage} totalPosts={Allpaymentsdata.length} paginate={Paginate}/>
      </div>
    </div>
    </>
  );
}

export default Allpayments;
