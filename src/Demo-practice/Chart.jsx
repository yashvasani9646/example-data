import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {

    const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                label: "My Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)"
                ],
                hoverOffset: 4
            }
        ]
    };

    return (
        <div style={{ width: "400px" }}>
            <Pie data={data} />
        </div>
    );
};

export default PieChart; 