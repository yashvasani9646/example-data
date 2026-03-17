import React, { useState } from 'react'

const Cataogery = () => {

    const [category, setCategory] = useState("")
    const [subcategory, setSubcategory] = useState("")
    const [brand, setBrand] = useState("")

    const [category2, setCategory2] = useState("")
    const [subcategory2, setSubcategory2] = useState("")
    const [brand2, setBrand2] = useState("")

    const [category3, setCategory3] = useState("")
    const [subcategory3, setSubcategory3] = useState("")
    const [brand3, setBrand3] = useState("")

    const subCategoryOptions = {
        Electric: ["Mobile", "Laptop"]
    }

    const brandOptions = {
        Mobile: ["iPhone", "Samsung", "Mi"],
        Laptop: ["Dell", "HP", "Lenovo"]
    }

    const subCategoryOptions2 = {
        Cloth: ["Mens", "Female"]
    }

    const brandOptions2 = {
        Mens: ["Shirt", "Pant", "T-shirt"],
        Female: ["Kurti", "Sari", "Dress"]
    }

    const subCategoryOptions3 = {
        Vehicle: ["Car", "Bike"]
    }

    const brandOptions3 = {
        Car: ["BMW", "XUV", "AUDI"],
        Bike: ["HONDA", "Splendor", "KTM"]
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-8">

                {/* Electric */}
                <div className="flex gap-4">

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                            setSubcategory("")
                            setBrand("")
                        }}
                    >
                        <option value="">Select Category</option>
                        <option value="Electric">Electric</option>
                    </select>

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={subcategory}
                        onChange={(e) => {
                            setSubcategory(e.target.value)
                            setBrand("")
                        }}
                    >
                        <option value="">Select SubCategory</option>

                        {category &&
                            subCategoryOptions[category].map((item, index) => (
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    >
                        <option value="">Select Brand</option>

                        {subcategory &&
                            brandOptions[subcategory].map((item, index) => (
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>

                </div>


                {/* Cloth */}
                <div className="flex gap-4">

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={category2}
                        onChange={(e) => {
                            setCategory2(e.target.value)
                            setSubcategory2("")
                            setBrand2("")
                        }}
                    >
                        <option value="">Select Category</option>
                        <option value="Cloth">Cloth</option>
                    </select>

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={subcategory2}
                        onChange={(e) => {
                            setSubcategory2(e.target.value)
                            setBrand2("")
                        }}
                    >
                        <option>Select SubCategory</option>

                        {category2 &&
                            subCategoryOptions2[category2].map((item, index) => (
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={brand2}
                        onChange={(e) => setBrand2(e.target.value)}
                    >
                        <option>Select Brand</option>

                        {subcategory2 &&
                            brandOptions2[subcategory2].map((item, index) => (
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>

                </div>


                {/* Vehicle */}
                <div className="flex gap-4">

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={category3}
                        onChange={(e) => {
                            setCategory3(e.target.value)
                            setSubcategory3("")
                            setBrand3("")
                        }}
                    >
                        <option value="">Select Category</option>
                        <option value="Vehicle">Vehicle</option>
                    </select>

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={subcategory3}
                        onChange={(e) => {
                            setSubcategory3(e.target.value)
                            setBrand3("")
                        }}
                    >
                        <option>Select SubCategory</option>

                        {category3 &&
                            subCategoryOptions3[category3].map((item, index) => (
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>

                    <select
                        className="border rounded-lg px-4 py-2"
                        value={brand3}
                        onChange={(e) => setBrand3(e.target.value)}
                    >
                        <option>Select Brand</option>

                        {subcategory3 &&
                            brandOptions3[subcategory3].map((item, index) => (
                                <option key={index}>{item}</option>
                            ))
                        }
                    </select>

                </div>

            </div>

        </div>
    )
}

export default Cataogery