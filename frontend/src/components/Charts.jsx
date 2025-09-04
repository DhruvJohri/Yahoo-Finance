// import React from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const Charts = ({ companies, loading }) => {
//   if (loading) {
//     return (
//       <div className="space-y-6">
//         <div className="card">
//           <div className="animate-pulse">
//             <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//             <div className="h-48 bg-gray-200 rounded"></div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="animate-pulse">
//             <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
//             <div className="h-48 bg-gray-200 rounded"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Process data for Sector pie chart
//   const sectorData = companies.reduce((acc, company) => {
//     const sector = company.Sector || 'Unknown';
//     acc[sector] = (acc[sector] || 0) + 1;
//     return acc;
//   }, {});

//   const sectorChartData = Object.entries(sectorData).map(([sector, count]) => ({
//     name: sector,
//     value: count
//   }));

//   // Process data for Industry bar chart
//   const industryData = companies.reduce((acc, company) => {
//     const Valuation = company.Valuation || 'Unknown';
//     acc[Valuation] = (acc[Valuation] || 0) + 1;
//     return acc;
//   }, {});

//   const industryChartData = Object.entries(industryData)
//     .map(([Valuation, count]) => ({
//       name: Valuation.length > 20 ? Valuation.substring(0, 20) + '...' : Valuation,
//       count
//     }))
//     .sort((a, b) => b.count - a.count)
//     .slice(0, 8); // Show top 8 industries

//   const COLORS = [
//     '#3B82F6', '#10B981', '#F59E0B', '#EF4444', 
//     '#8B5CF6', '#06B6D4', '#F97316', '#84CC16'
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="card">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">
//           Companies by Sector
//         </h3>
//         {sectorChartData.length > 0 ? (
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie
//                 data={sectorChartData}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//                 label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//               >
//                 {sectorChartData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         ) : (
//           <div className="h-48 flex items-center justify-center text-gray-500">
//             No sector data available
//           </div>
//         )}
//       </div>

//       <div className="card">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">
//           Top Industries
//         </h3>
//         {industryChartData.length > 0 ? (
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart
//               data={industryChartData}
//               margin={{ top: 5, right: 30, left: 20, bottom: 80 }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis 
//                 dataKey="name" 
//                 angle={-45}
//                 textAnchor="end"
//                 height={100}
//                 fontSize={12}
//               />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="count" fill="#3B82F6" />
//             </BarChart>
//           </ResponsiveContainer>
//         ) : (
//           <div className="h-72 flex items-center justify-center text-gray-500">
//             No industry data available
//           </div>
//         )}
//       </div>

//       <div className="card">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4">
//           Quick Stats
//         </h3>
//         <div className="space-y-3">
//           <div className="flex justify-between">
//             <span className="text-sm text-gray-600">Total Companies</span>
//             <span className="text-sm font-medium">{companies.length}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-sm text-gray-600">Unique Sectors</span>
//             <span className="text-sm font-medium">{Object.keys(sectorData).length}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-sm text-gray-600">Unique Industries</span>
//             <span className="text-sm font-medium">{Object.keys(industryData).length}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Charts;

// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Dialog } from "@headlessui/react";
// import { Expand } from "lucide-react";

// const Charts = ({ companies, loading }) => {
//   const [open, setOpen] = useState(false);
//   const [activeChart, setActiveChart] = useState(null);

//   if (loading) {
//     return (
//       <div className="space-y-6">
//         <div className="card animate-pulse h-48"></div>
//         <div className="card animate-pulse h-48"></div>
//       </div>
//     );
//   }

//   // Process data for Sector pie chart
//   const sectorData = companies.reduce((acc, company) => {
//     const sector = company.Sector || "Unknown";
//     acc[sector] = (acc[sector] || 0) + 1;
//     return acc;
//   }, {});

//   const sectorChartData = Object.entries(sectorData).map(([sector, count]) => ({
//     name: sector,
//     value: count,
//   }));

//   // Process data for Industry bar chart
//   const industryData = companies.reduce((acc, company) => {
//     const Valuation = company.Valuation || "Unknown";
//     acc[Valuation] = (acc[Valuation] || 0) + 1;
//     return acc;
//   }, {});

//   const industryChartData = Object.entries(industryData)
//     .map(([Valuation, count]) => ({
//       name:
//         Valuation.length > 20 ? Valuation.substring(0, 20) + "..." : Valuation,
//       count,
//     }))
//     .sort((a, b) => b.count - a.count);

//   const COLORS = [
//     "#3B82F6",
//     "#10B981",
//     "#F59E0B",
//     "#EF4444",
//     "#8B5CF6",
//     "#06B6D4",
//     "#F97316",
//     "#84CC16",
//     "#EC4899",
//     "#14B8A6",
//   ];

//   // Chart renderer (reused inside modal & compact view)
//   const renderSectorChart = (big = false) => (
//     <ResponsiveContainer width="100%" height={big ? 400 : 200}>
//       <PieChart>
//         <Pie
//           data={sectorChartData}
//           cx="50%"
//           cy="50%"
//           innerRadius={big ? 100 : 40}
//           outerRadius={big ? 160 : 80}
//           dataKey="value"
//           onMouseEnter={(data, index) => {}}
//         >
//           {sectorChartData.map((entry, index) => (
//             <Cell
//               key={`cell-${index}`}
//               fill={COLORS[index % COLORS.length]}
//               stroke="#fff"
//               strokeWidth={1}
//             />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   );

//   const renderIndustryChart = (big = false) => (
//     <ResponsiveContainer width="100%" height={big ? 400 : 300}>
//       <BarChart
//         data={big ? industryChartData : industryChartData.slice(0, 8)}
//         margin={{ top: 5, right: 30, left: 20, bottom: 80 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis
//           dataKey="name"
//           angle={-45}
//           textAnchor="end"
//           height={100}
//           fontSize={big ? 14 : 10}
//         />
//         <YAxis />
//         <Tooltip />
//         <Bar dataKey="count" fill="#3B82F6" />
//       </BarChart>
//     </ResponsiveContainer>
//   );

//   return (
//     <div className="space-y-6">
//       {/* Pie Chart Card */}
//       <div className="card relative">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">
//           Companies by Sector
//           <button
//             onClick={() => {
//               setActiveChart("sector");
//               setOpen(true);
//             }}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <Expand size={18} />
//           </button>
//         </h3>
//         {sectorChartData.length > 0 ? (
//           renderSectorChart()
//         ) : (
//           <div className="h-48 flex items-center justify-center text-gray-500">
//             No sector data available
//           </div>
//         )}
//       </div>

//       {/* Bar Chart Card */}
//       <div className="card relative">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">
//           Top Industries
//           <button
//             onClick={() => {
//               setActiveChart("industry");
//               setOpen(true);
//             }}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <Expand size={18} />
//           </button>
//         </h3>
//         {industryChartData.length > 0 ? (
//           renderIndustryChart()
//         ) : (
//           <div className="h-72 flex items-center justify-center text-gray-500">
//             No industry data available
//           </div>
//         )}
//       </div>

//       {/* Modal Popup */}
//       <Dialog
//         open={open}
//         onClose={() => setOpen(false)}
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//       >
//         <div className="bg-white rounded-2xl p-6 w-[90%] max-w-5xl shadow-xl">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">
//               {activeChart === "sector"
//                 ? "Full Sector Distribution"
//                 : "Full Industry Distribution"}
//             </h2>
//             <button onClick={() => setOpen(false)} className="text-gray-500">
//               ✖
//             </button>
//           </div>
//           {activeChart === "sector" ? renderSectorChart(true) : renderIndustryChart(true)}
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default Charts;

// new code last working code

//new bar chart c
// ode


// import React, { useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Dialog } from "@headlessui/react";
// import { Expand } from "lucide-react";

// const Charts = ({ companies, loading }) => {
//   const [open, setOpen] = useState(false);
//   const [activeChart, setActiveChart] = useState(null);

//   if (loading) {
//     return (
//       <div className="space-y-6">
//         <div className="card animate-pulse h-48"></div>
//         <div className="card animate-pulse h-48"></div>
//       </div>
//     );
//   }

//   // Companies by Sector (for pie chart)
//   const sectorData = companies.reduce((acc, company) => {
//     const sector = company.Sector || "Unknown";
//     acc[sector] = (acc[sector] || 0) + 1;
//     return acc;
//   }, {});

//   const sectorChartData = Object.entries(sectorData).map(([sector, count]) => ({
//     name: sector,
//     value: count,
//   }));

//   // ✅ Meaningful Bar Chart: Top Sectors by Total Valuation
//   const sectorValuationData = companies.reduce((acc, company) => {
//     const sector = company.Sector || "Unknown";

//     // Normalize Valuation to number
//     let valuation = company.Valuation;
//     if (typeof valuation === "string") {
//       valuation = parseFloat(valuation.replace(/[^\d.-]/g, ""));
//       if (company.Valuation.includes("T")) valuation *= 1e12;
//       else if (company.Valuation.includes("B")) valuation *= 1e9;
//       else if (company.Valuation.includes("M")) valuation *= 1e6;
//     }

//     acc[sector] = (acc[sector] || 0) + (valuation || 0);
//     return acc;
//   }, {});

//   const valuationChartData = Object.entries(sectorValuationData)
//     .map(([sector, total]) => ({
//       name: sector,
//       value: Math.round(total / 1e9), // display in Billions
//     }))
//     .sort((a, b) => b.value - a.value)
//     .slice(0, 8); // Top 8 sectors

//   const COLORS = [
//     "#3B82F6",
//     "#10B981",
//     "#F59E0B",
//     "#EF4444",
//     "#8B5CF6",
//     "#06B6D4",
//     "#F97316",
//     "#84CC16",
//     "#EC4899",
//     "#14B8A6",
//   ];

//   // Chart renderers
//   const renderSectorChart = (big = false) => (
//     <ResponsiveContainer width="100%" height={big ? 400 : 200}>
//       <PieChart>
//         <Pie
//           data={sectorChartData}
//           cx="50%"
//           cy="50%"
//           innerRadius={big ? 100 : 40}
//           outerRadius={big ? 160 : 80}
//           dataKey="value"
//         >
//           {sectorChartData.map((entry, index) => (
//             <Cell
//               key={`cell-${index}`}
//               fill={COLORS[index % COLORS.length]}
//               stroke="#fff"
//               strokeWidth={1}
//             />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </ResponsiveContainer>
//   );

//   const renderValuationChart = (big = false) => (
//     <ResponsiveContainer width="100%" height={big ? 400 : 300}>
//       <BarChart
//         data={valuationChartData}
//         margin={{ top: 5, right: 30, left: 20, bottom: 80 }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis
//           dataKey="name"
//           angle={-45}
//           textAnchor="end"
//           height={100}
//           fontSize={big ? 14 : 10}
//         />
//         <YAxis label={{ value: "Valuation (B USD)", angle: -90, position: "insideLeft" }} />
//         <Tooltip formatter={(v) => `${v} B`} />
//         <Bar dataKey="value" fill="#3B82F6" />
//       </BarChart>
//     </ResponsiveContainer>
//   );

//   return (
//     <div className="space-y-6">
//       {/* Pie Chart Card */}
//       <div className="card relative">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">
//           Companies by Sector
//           <button
//             onClick={() => {
//               setActiveChart("sector");
//               setOpen(true);
//             }}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <Expand size={18} />
//           </button>
//         </h3>
//         {sectorChartData.length > 0 ? (
//           renderSectorChart()
//         ) : (
//           <div className="h-48 flex items-center justify-center text-gray-500">
//             No sector data available
//           </div>
//         )}
//       </div>

//       {/* Bar Chart Card */}
//       <div className="card relative">
//         <h3 className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">
//           Top Sectors by Total Valuation
//           <button
//             onClick={() => {
//               setActiveChart("valuation");
//               setOpen(true);
//             }}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <Expand size={18} />
//           </button>
//         </h3>
//         {valuationChartData.length > 0 ? (
//           renderValuationChart()
//         ) : (
//           <div className="h-72 flex items-center justify-center text-gray-500">
//             No valuation data available
//           </div>
//         )}
//       </div>

//       {/* Modal */}
//       <Dialog
//         open={open}
//         onClose={() => setOpen(false)}
//         className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
//       >
//         <div className="bg-white rounded-2xl p-6 w-[90%] max-w-5xl shadow-xl">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">
//               {activeChart === "sector"
//                 ? "Full Sector Distribution"
//                 : "Full Sector Valuation"}
//             </h2>
//             <button onClick={() => setOpen(false)} className="text-gray-500">
//               ✖
//             </button>
//           </div>
//           {activeChart === "sector"
//             ? renderSectorChart(true)
//             : renderValuationChart(true)}
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default Charts;

// lates code


import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Dialog } from "@headlessui/react";
import { Expand } from "lucide-react";

const Charts = ({ companies, loading }) => {
  const [open, setOpen] = useState(false);
  const [activeChart, setActiveChart] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="card animate-pulse h-48"></div>
        <div className="card animate-pulse h-48"></div>
      </div>
    );
  }

  // ✅ Build sector -> company mapping
  const sectorCompanies = companies.reduce((acc, company) => {
    const sector = company.Sector || "Unknown";
    if (!acc[sector]) acc[sector] = [];
    acc[sector].push(company.Company || company.Name || "Unnamed");
    return acc;
  }, {});

  // ✅ Companies by Sector (for pie chart)
  const sectorChartData = Object.entries(sectorCompanies).map(
    ([sector, list]) => ({
      name: sector,
      value: list.length,
      companies: list,
    })
  );

  // ✅ Sector Valuation Bar Chart
  const sectorValuationData = companies.reduce((acc, company) => {
    const sector = company.Sector || "Unknown";

    let valuation = company.Valuation;
    if (typeof valuation === "string") {
      valuation = parseFloat(valuation.replace(/[^\d.-]/g, ""));
      if (company.Valuation.includes("T")) valuation *= 1e12;
      else if (company.Valuation.includes("B")) valuation *= 1e9;
      else if (company.Valuation.includes("M")) valuation *= 1e6;
    }

    acc[sector] = (acc[sector] || 0) + (valuation || 0);
    return acc;
  }, {});

  const valuationChartData = Object.entries(sectorValuationData)
    .map(([sector, total]) => ({
      name: sector,
      value: Math.round(total / 1e9),
    }))
    .sort((a, b) => b.value - a.value);

  const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4",
    "#F97316",
    "#84CC16",
    "#EC4899",
    "#14B8A6",
  ];

  // ✅ Pie Chart Renderer (click selects sector)
  const renderSectorChart = (big = false) => (
    <ResponsiveContainer width="100%" height={big ? 400 : 200}>
      <PieChart>
        <Pie
          data={sectorChartData}
          cx="50%"
          cy="50%"
          innerRadius={big ? 100 : 40}
          outerRadius={big ? 160 : 80}
          dataKey="value"
          onClick={(entry) => setSelectedSector(entry)} // 👈 click shows panel
        >
          {sectorChartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              stroke="#fff"
              strokeWidth={1}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(v, n, props) => [`${v} companies`, props.payload.name]}
        />
      </PieChart>
    </ResponsiveContainer>
  );

  // ✅ Valuation Bar Chart Renderer
  const renderValuationChart = (big = false) => (
    <div className="overflow-x-auto">
      <div
        style={{
          width: Math.max(900, valuationChartData.length * 120),
          height: big ? 400 : 300,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={valuationChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              angle={-30}
              textAnchor="end"
              interval={0}
              height={80}
              tick={{ fontSize: big ? 14 : 12 }}
            />
            <YAxis
              label={{
                value: "Valuation (B USD)",
                angle: -90,
                position: "insideLeft",
                style: { textAnchor: "middle" },
              }}
              tickFormatter={(val) => `${val}B`}
            />
            <Tooltip formatter={(v) => [`${v} Billion USD`, "Valuation"]} />
            <Bar
              dataKey="value"
              fill="#3B82F6"
              radius={[6, 6, 0, 0]}
              barSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Pie Chart Card */}
      <div className="card relative">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">
          Companies by Sector
          <button
            onClick={() => {
              setActiveChart("sector");
              setOpen(true);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <Expand size={18} />
          </button>
        </h3>
        {sectorChartData.length > 0 ? (
          renderSectorChart()
        ) : (
          <div className="h-48 flex items-center justify-center text-gray-500">
            No sector data available
          </div>
        )}

        {/* 👇 Scrollable list appears when a slice is clicked */}
        {selectedSector && (
          <div className="mt-4 p-4 border rounded-lg shadow max-h-64 overflow-y-auto">
            <h3 className="font-bold text-lg mb-2">
              {selectedSector.name} ({selectedSector.value} companies)
            </h3>
            <ul className="space-y-1">
              {selectedSector.companies.map((c, i) => (
                <li key={i} className="text-sm text-gray-700">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Valuation Bar Chart Card */}
      <div className="card relative">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex justify-between">
          Sector Valuation (Billions)
          <button
            onClick={() => {
              setActiveChart("valuation");
              setOpen(true);
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <Expand size={18} />
          </button>
        </h3>
        {valuationChartData.length > 0 ? (
          renderValuationChart()
        ) : (
          <div className="h-72 flex items-center justify-center text-gray-500">
            No valuation data available
          </div>
        )}
      </div>

      {/* Modal Popup */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-2xl p-6 w-[95%] max-w-6xl shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              {activeChart === "sector"
                ? "Full Sector Distribution"
                : "Full Sector Valuation"}
            </h2>
            <button onClick={() => setOpen(false)} className="text-gray-500">
              ✖
            </button>
          </div>
          {activeChart === "sector"
            ? renderSectorChart(true)
            : renderValuationChart(true)}
        </div>
      </Dialog>
    </div>
  );
};

export default Charts;
