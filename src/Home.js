// import React, {useState} from 'react'
// import './Home.css'

// export default function Home() {
//     const [rollno, setRollno] = useState('');
//     const [dept, setDept] = useState('');
//     const [feesCategory , setFeesCategory] = useState('');

// const handleChangeRollno = (event) => {
//   setRollno(event.target.value);
// };
// const handleDept = (event) => {
//   setDept(event.target.value);
// };
// const handleFeesCategory = (event)=>{
//     setFeesCategory(event.target.value)
// }
// const show_Details = () =>{
//     console.log("Roll"+{rollno});
//     console.log("Department"+{dept});
//     console.log("Fee category"+{feesCategory});
// }
//   return (
//     <>
//     <div className="cont">
//     <div className="roll_no my-3">
//     Roll Number <input type="text" value={rollno} onChange={handleChangeRollno}/>
//     Department <input type="text" value={dept} onChange={handleDept} />
//      </div>
//      <form action="#">
//       <label for="lang">Fee Category</label>
//       <select name="languages" id="lang" onChange={handleFeesCategory}>
//         <option value="select">Select</option>
//         <option value="semester">Semester</option>
//         <option value="hostel">Hostel Fees</option>
//         <option value="transport">Transport</option>
//         <option value="other">Other</option>
//       </select>
//       <button type="button" class="btn btn-primary" onClick={show_Details}>Submit</button>
// </form>
//     </div></>
//   )
// }




//  {/* <div className="fees_cateogry">
//     <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//     Fees Category
//   </button>
//   <ul class="dropdown-menu">
//     <li><a class="dropdown-item" href="#">Semester</a></li>
//     <li><a class="dropdown-item" href="#">Hostel</a></li>
//     <li><a class="dropdown-item" href="#">Transport</a></li>
//   </ul>
//      </div>
    
//     </div> */}