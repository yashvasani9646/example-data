import React, { useState } from 'react'

const SecondCrude = () => {

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [age, setAge] = useState("")
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(null)
    const [hide, setHide] = useState(false)
    const [error, seterror] = useState([])


    const handelSave = () => {
        const newuser = {
            firstname,
            lastname,
            age,
        }

        validation()
        if (!firstname || !lastname || !age) {
            return
        }

        setData([...data, newuser])

        setFirstName("")
        setLastName("")
        setAge("")
    }

    const handelClear = () => {
        setFirstName("")
        setLastName("")
        setAge("")
    }

    const handelEdit = (index) => {
        const user = data[index]
        setFirstName(user.firstname)
        setLastName(user.lastname)
        setAge(user.age)
        setUpdate(index)
        setHide(true)


    }

    const handelDelete = (index) => {
        const change = data.filter((item, i) => i !== index)
        setData(change)
    }

    const handelUpdate = () => {
        const updatedata = [...data]
        updatedata[update] = {
            firstname,
            lastname,
            age
        }
        setData(updatedata)
        setFirstName("")
        setLastName("")
        setAge("")
    }

    const validation = () => {
        let newError = {};


        if (!firstname) {
            newError.firstname = "First Name Is Reuired"
        }


        if (!lastname) {
            newError.lastname = "Last Name Is Reuired"
        }

        if (!age) {
            newError.age = "age Is Reuired"
        }

        seterror(newError)

    }




    return (
        <div className='h-96 bg-slate-500'>
            <div className='flex gap-10 justify-center text-black text-lg'>

                <div>
                    <label>First Name:</label>
                    <input type='text' placeholder='Enter Your First Name' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                    {error.firstName && (
                        <div className="text-danger small">
                            {error.firstName}
                        </div>
                    )}
                    
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type='text' placeholder='Enter Your Last Name' value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div>
                    <label>Age</label>
                    <input type='Number' placeholder='Enter Your Age' value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                {!hide &&
                    <div className='bg-yellow-400 rounded w-32 text-center' onClick={handelSave}><button>Save</button></div>
                }
                <div className='bg-purple-400 rounded w-32 text-center' onClick={handelClear} ><button>clear</button></div>
                {hide &&
                    <div className='bg-purple-400 rounded w-32 text-center' onClick={handelUpdate} ><button>Update</button></div>
                }
            </div>

            {data.length > 0 &&
                <div className='flex justify-center mt-40'>
                    <table className='border border-black border-collapse'>
                        <thead>
                            <tr>
                                <th className='border border-black'>ID</th>
                                <th className='border border-black'>First Name</th>
                                <th className='border border-black'>Last Name</th>
                                <th className='border border-black'>Age</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            {data.map((items, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='border border-black p-2'>{index + 1}</td>
                                        <td className='border border-black  p-2'>{items.firstname}</td>
                                        <td className='border border-black  p-2'>{items.lastname}</td>
                                        <td className='border border-black  p-2'>{items.age}</td>
                                        <td className='border border-black  p-2'><button className='bg-red-400 p-1 w-20 rounded' onClick={() => handelEdit(index)}>Edit</button></td>
                                        <td className='border border-black  p-2'><button className='bg-red-700  p-1 w-20 rounded ' onClick={() => handelDelete(index)}>Delete</button></td>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>
                </div>
            }




        </div>
    )
}

export default SecondCrude