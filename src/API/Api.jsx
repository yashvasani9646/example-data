// import React, { useEffect, useState } from 'react'

// const Api = () => {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         getUserData()
//     }, [])

//     async function getUserData() {
//         try {
//             const response = await fetch("https://dummyjson.com/users")
//             const result = await response.json()
//             setData(result.users)
//         } catch (error) {
//             console.log("Error fetching data:", error)
//         }
//     }

//     return (
//         <div className="min-h-screen bg-gray-100 p-5">
//             <h1 className="text-3xl font-bold text-center mb-6">
//                 Users List
//             </h1>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {data.map((user) => (
//                     <div
//                         key={user.id}
//                         className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition"
//                     >
//                         <img
//                             src={user.image}
//                             alt={user.firstName}
//                             className="w-24 h-24 rounded-full mx-auto mb-3"
//                         />

//                         <h2 className="text-xl font-semibold text-center">
//                             {user.firstName} {user.lastName}
//                         </h2>

//                         <p className="text-gray-600 text-center">
//                             {user.email}
//                         </p>

//                         <div className="mt-3 text-sm text-gray-700">
//                             <p><b>Age:</b> {user.age}</p>
//                             <p><b>Gender:</b> {user.gender}</p>
//                             <p><b>Phone:</b> {user.phone}</p>
//                             <p><b>City:</b> {user.address?.city}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Api