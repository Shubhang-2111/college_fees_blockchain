import React from "react";
import { useEffect, useState } from "react";
import {
  EthContract,
  connectWallet,
  DepositEth,
  loadCurrentMessage,
  getCurrentWalletConnected,
  ShowDetails,
} from "./util/interact.js";

// import alchemylogo from "./alchemylogo.svg";

const Eth = () => {
  //state variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("No connection to the network."); //default message
  const [newAmount, setNewAmount] = useState("");
  const [rollno, setRollno] = useState('');
  const [dept, setDept] = useState('');
  const [feesCategory , setFeesCategory] = useState('');
  const [name , setName] = useState('');
  //for showing details
  const [get_rollno, get_setRollno] = useState('');
  const [get_name , get_setName] = useState('');
  const [get_dept, get_setDept] = useState('');
  const [get_cate,get_cateogry] = useState('');
  const [get_amount, get_Amount] = useState('')
  //called only once
  // useEffect(async () => {
  
  // }, []);



  const OnPressedConnect = async () => { //TODO: implement
    const wallet = await connectWallet();
    setWallet(wallet.address);
    setStatus(wallet.status);
  };

  const onDepositPressed = async () => { //TODO: implement
     const {status} = await DepositEth(newAmount,walletAddress,name,rollno,dept,feesCategory);
     setStatus(status)
  };
  
  const onShowPressed = async () =>{
   const dtls = await ShowDetails(walletAddress);
    get_setName(dtls[1])
    get_setRollno(dtls[0].toString())
    get_Amount(dtls[2].toString())
    get_setDept(dtls[3])
    get_cateogry(dtls[4])
  };
  //the UI of our component
  //---------------------------------------------------------------------------------------
const handleChangeName = (event) =>{
  setName(event.target.value)
}
const handleChangeRollno = (event) => {
setRollno(event.target.value);
};
const handleDept = (event) => {
setDept(event.target.value);
};
const handleFeesCategory = (event)=>{
  setFeesCategory(event.target.value)
}
const show_Details = () =>{
  console.log("Roll"+{rollno});
  console.log("Department"+{dept});
  console.log("Fee category"+{feesCategory});
}
  return (
     <>
     <div className="cont">
    <div className="roll_no my-3">
      Name <input type="text" value={name} onChange={handleChangeName} />
    Roll Number <input type="text" value={rollno} onChange={handleChangeRollno}/>
    Department <input type="text" value={dept} onChange={handleDept} />
     </div>
     <form action="#">
      <label for="lang">Fee Category</label>
      <select name="languages" id="lang" onChange={handleFeesCategory}>
        <option value="select">Select</option>
        <option value="semester">Semester</option>
        <option value="hostel">Hostel Fees</option>
        <option value="transport">Transport</option>
        <option value="other">Other</option>
      </select>
      <button type="button" class="btn btn-primary" onClick={show_Details}>Submit</button>
</form>
    </div>
    <div className="my-3">
    <button type="button" className="btn btn-primary" onClick={OnPressedConnect}> {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}</button>
    <p>{status}</p>
    <p>Current connected wallet is {walletAddress}</p>
   <p>enter amount of eth to be send</p>
   <input type="text" id="amount" onChange={(e) => setNewAmount(e.target.value)}
          value={newAmount}/>
   <br />
   <button type="button" className="btn btn-primary my-3" onClick={onDepositPressed}>Deposit</button>
 </div>
 <div className="show_details">
  <button onClick={onShowPressed}>Show details</button>
  <p>Address : {walletAddress}</p>
  <p>Name : {get_name}</p>
  <p>Roll Number : {get_rollno} </p>
  <p>Department :{get_dept} </p>
  <p>Category : {get_cate}</p>
  <p>Fees Submitted : {get_amount}</p>
 </div>
 </>

  );
};

export default Eth;
