import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Crudyou = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [data, setData] = useState([])
    const [hide, sethide] = useState(false)
    const [update, setUpdate] = useState(null)
    const [errors, setErrors] = useState({});

    const handelsave = () => {

        const newuser = {

            firstName,
            lastName,
            age
        }

        validation()
        if (!firstName || !lastName || !age) {
            toast.error("Please fill all fields")
            return
        }

        setData([...data, newuser])

        setFirstName('')
        setLastName('')
        setAge('')
    }

    const handelDelete = (index) => {
        const newuser = data.filter((item, i) => i !== index)
        setData(newuser)
    }

    const handelclear = () => {
        setFirstName("")
        setLastName("")
        setAge("")
    }

    const handeledit = (index) => {
        const user = data[index]
        console.log(user, "****", index);

        setFirstName(user.firstName)
        setLastName(user.lastName)
        setAge(user.age)
        sethide(true)
        setUpdate(index)
    }

    const handeupdate = () => {
        const updatedata = [...data]
        console.log(updatedata, "------", update);

        toast.success("Form update Succefull")

        updatedata[update] = {
            firstName,
            lastName,
            age
        }
        setData(updatedata)
        setFirstName('')
        setLastName('')
        setAge('')
        sethide(false)
    }

    const validation = () => {
        let newErrors = {};

        if (!firstName) {
            newErrors.firstName = "First Name Is Reuired"
        }

        if (!lastName) {
            newErrors.lastName = "Last Name Is Reuired"
        }

        if (!age) {
            newErrors.age = "Age Is Reuired"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    return (

        <div className='h-96 bg-slate-200 '>
            <Toaster position="top-center" />

            <div className='flex justify-center text-gray-600 text-xl '>

                <div>
                    <label>First Name:</label>
                    <input type='text' placeholder='Enter Your Firstname' value={firstName} onChange={((e) => setFirstName(e.target.value))} />
                    {errors.firstName && (
                        <div className="text-danger small">
                            {errors.firstName}
                        </div>
                    )}
                </div>

                <div>
                    <label>Last Name:</label>
                    <input type='text' placeholder='Enter Your Lastname' value={lastName} onChange={((e) => setLastName(e.target.value))} />
                    {errors.lastName && (
                        <div className="text-danger small">
                            {errors.lastName}
                        </div>
                    )}
                </div>

                <div>
                    <label>Age:</label>
                    <input type='number' placeholder='Enter Your Age' value={age} onChange={((e) => setAge(e.target.value))} />
                    {errors.age && (
                        <div className="text-danger small">
                            {errors.age}
                        </div>
                    )}

                </div>

                {!hide && (
                    <div className='p-2 bg-red-500 text-white rounded-lg ml-3'>
                        <button onClick={handelsave}>Save</button>
                    </div>
                )}


                {hide && (
                    <div >
                        <button className='p-2 w-20 bg-red-950  text-white rounded-lg ml-3' onClick={handeupdate}>
                            Update
                        </button>
                    </div>
                )}

                <div className='p-2 w-16 bg-slate-600 text-white rounded-lg ml-3'><button onClick={handelclear}>clear</button> </div>

            </div>


            {data.length > 0 && (
                <div className='flex justify-center mt-10'>
                    <table className="border border-black border-collapse">
                        <thead>
                            <tr>
                                <th className="border border-black p-2">id No</th>
                                <th className="border border-black p-2">firstName</th>
                                <th className="border border-black p-2">lastName</th>
                                <th className="border border-black p-2">age</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((items, index) => {
                                return (
                                    <tr key={index}>

                                        <td className="border border-black p-2">{index + 1}</td>
                                        <td className="border border-black p-2">{items.firstName}</td>
                                        <td className="border border-black p-2">{items.lastName}</td>
                                        <td className="border border-black p-2">{items.age}</td>
                                        <td>
                                            {[1, 3, 5, 7].includes(index) ? (
                                                <button
                                                    onClick={() => handelDelete(index)}
                                                    className="p-2 w-16 bg-red-500 text-white rounded-lg"
                                                >
                                                    Delete
                                                </button>
                                            ) : null}
                                        </td>
                                        <td className="border border-black p-2"> <button className='p-2 m-2 w-16 bg-slate-700 text-white rounded-lg' onClick={() => handeledit(index)}>Edit</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            )}


        </div>
    )
}

export default Crudyou



