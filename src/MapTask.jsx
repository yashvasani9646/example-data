import React, { useState } from "react";
import geoData from "./Demo-practice/indian.json";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const stateData = {
  Gujarat: 200,
  Maharashtra: 300,
  Rajasthan: 150,
  Karnataka: 180,
  Telangana: 120,
  // "Madhya Pradesh": 120,
};
const MapTask = () => {
  const [tooltip, setTooltip] = useState("");
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-10 bg-gray-100">

      <div className="mb-4 px-4 py-2 bg-black text-white rounded shadow">
        {tooltip || "Hover on any state"}
      </div>

      {selectedState && (
        <div className="mb-4 px-4 py-2 bg-blue-600 text-white rounded shadow">
          <p><strong>State:</strong> {selectedState.name}</p>
          <p><strong>Value:</strong> {selectedState.value}</p>
        </div>
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 750,
          center: [78.9629, 22.5937],
        }}
        width={800}
        height={600}
        style={{ width: "100%", maxWidth: "800px", height: "auto" }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {

              const name =
                geo.properties.st_nm ||
                geo.properties.NAME_1 ||
                geo.properties.name;

              const cleanName = name?.trim();

              const value = stateData[cleanName] ?? "No Data";

              const isSelected = selectedState?.name === cleanName;

              const fillColor =
                value !== "No Data" ? "#4CAF50" : "#E0E0E0";

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltip(`${cleanName} : ${value}`);
                  }}
                  onMouseLeave={() => {
                    setTooltip("");
                  }}
                  onClick={() => {
                    setSelectedState({
                      name: cleanName,
                      value: value,
                    });
                  }}
                  style={{
                    default: {
                      fill: isSelected ? "#2196F3" : fillColor,
                      stroke: "#000",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#FF5722",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF9800",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapTask;