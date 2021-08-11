// import React,{useState} from 'react'
// import axios from 'axios';
// //import moment from 'moment';
// const Comment = () => {
    
//   // let username 

//   // do {
//   //     username = prompt('Enter your name: ')
//   // } while(!username)
  

//     const [comment, setComment] = useState("");
//     const [error, setError] = useState("");
  

    

//     const handleSubmit = async (e) => {
//       e.preventDefault();
      
//     // let comment = textarea.value
    
    
//     // if(!comment){
//     //  return   
//     // }

//       // console.log(email,password);
//       try {
//         const { data } = await axios.post("http://localhost:5000/comment", {
//           comment
//         });
//         console.log(data);
//       } catch (error) {
//         console.log(error.response.data.message);
//         setError(error.response.data.message);
//       }
//       setComment("");

// //       postComment(comment)

// //       function postComment(comment) {
// //         const message = {
// //           username:username,
// //           comment:comment
// //         }
// //         commentPosted(message)
// //       }

// //       function commentPosted(message){
// // <form>
// //        <div className="card" border-light mb-4>
// //         <div className="card-body">
// //           <h6>${message.username}</h6>
// //           <p>
// //           ${message.comment}
// //           </p>
// //           <div>
// //             <small>${moment(message.time).format('LT')}</small>
// //           </div>
// //         </div>
// //       </div>
// //       </form>
// //       }
// //       commentBox.prepend(commentPosted)
//     };
    
//     return (
//         <>
//      <form>
//         <h2> {error !== "" ? error : ""} </h2>

//         <div className="form-group">
//           <label htmlFor="exampleInputEmail1">Comment </label>
//           <input
//             type="comment"
//             className="form-control"
//             name="comment"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter comment "
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />
//         </div>
       
//         <button
//           onClick={handleSubmit}
//           type="submit"
//           className="btn btn-primary"
//         >
//           Submit
//         </button>
//       </form>
  
//         </>
//     )
// }

// export default Comment
