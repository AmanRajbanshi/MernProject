// import React, { useState } from "react";
// import LoginForm from "./LoginForm";
// const Authentication = () => {
//   const adminUser = {
//     email: "aman@test.com",
//     password: "aman",
//   };

//   const [user, setUser] = useState({ name: "", email: "" });
//  // const [error, setError] = useState("");

//   const Login = (details) => {
//     console.log(details);

//     if (
//       details.email === adminUser.email &&
//       details.password === adminUser.password
//     ) {
//       console.log("Logged In");

//       setUser({
//         name: details.name,
//         email: details.email,
//       });
//     } else {
//       console.log("Details do not match");
//     }
//   };
//   const Logout = () => {
//     setUser({ name: "", email: "" });
//   };

//   return (
//     <>
//       {/* <LoginForm /> */}
//       {user.email !== "" ? (
//         <div className="welcome">
//           <h2>
//             Welcome, <span>{user.name}</span>
//           </h2>
//           <button onClick={Logout}>Logout</button>
//         </div>
//       ) : (
//         <LoginForm Login={Login} error={error} />
//       )}
//     </>
//   );
// };

// export default Authentication;
