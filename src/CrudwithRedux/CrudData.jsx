import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./CrudSlice";

const UserCrud = () => {
    const [name, setName] = useState("");
    const [editId, setEditId] = useState(null);

    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (editId) {
            dispatch(updateUser({ id: editId, name }));
            setEditId(null);
        } else {
            dispatch(addUser({ id: Date.now(), name }));
        }
        setName("");
    };

    const handleEdit = (user) => {
         
        setName(user.name);
        setEditId(user.id);
    };
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">

                <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
                    User CRUD App
                </h2>

                {/* Input Section */}
                <div className="flex gap-2 mb-4">
                    <input
                        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                    <button
                        onClick={handleAdd}
                        className={`px-4 py-2 rounded-lg text-white ${editId ? "bg-yellow-500" : "bg-blue-500"
                            }`}
                    >
                        {editId ? "Update" : "Add"}
                    </button>
                </div>

                {/* List Section */}
                <ul className="space-y-2">
                    {users.length === 0 ? (
                        <p className="text-gray-500 text-center">No users added</p>
                    ) : (
                        users.map((user) => (
                            <li
                                key={user.id}
                                className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-lg shadow-sm"
                            >
                                <span className="font-medium">{user.name}</span>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="bg-green-500 text-white px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(deleteUser(user.id))}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default UserCrud;