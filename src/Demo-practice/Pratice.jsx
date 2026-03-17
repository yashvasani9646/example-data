import React, { useState } from "react";

const Pratice = () => {

    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [item, setItem] = useState("");

    const data = {
        Electric: {
            Mobile: ["Apple", "MI", "Lenovo"],
            Laptop: ["HP", "Dell", "Asus"]
        },
        Cloth: {
            Men: ["Shirt", "Pant", "Tshirt"],
            Women: ["Sari", "Kurti", "Dress"]
        },
        Vehicle: {
            Car: ["BMW", "Audi", "XUV"],
            Bike: ["Honda", "KTM", "Yamaha"]
        }
    };

    return (
        <div>

            <select
                value={category}
                onChange={(e) => {
                    setCategory(e.target.value);
                    setSubCategory("");
                    setItem("");
                }}
            >
                <option value="">Select Category</option>

                {Object.keys(data).map((cat, index) => (
                    <option key={index}>{cat}</option>
                ))}
            </select>

            {/* Sub Category */}
            <select
                value={subCategory}
                onChange={(e) => {
                    setSubCategory(e.target.value);
                    setItem("");
                }}
            >
                <option value="">Select Sub Category</option>

                {category &&
                    Object.keys(data[category]).map((sub, index) => (
                        <option key={index}>{sub}</option>
                    ))}
            </select>

            <select value={item} onChange={(e) => setItem(e.target.value)}>
                <option value="">Select Item</option>

                {subCategory &&
                    data[category][subCategory].map((it, index) => (
                        <option key={index}>{it}</option>
                    ))}
            </select>

        </div>
    );
};

export default Pratice;