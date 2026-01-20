// import { TbPointFilled } from "react-icons/tb";

// export default function ProgressBar({ value, pending = false, completed = false, inProgress = false }) {
//   return (
//     <>
//       {pending && (
//         <div style={{ width: "100%" }}>
//           <div
//             style={{
//               width: "100%",
//               background: "#eee",
//               height: "5px",
//               borderRadius: "10px",
//             }}
//           >
//             <div
//               style={{
//                 width: `${100}%`,
//                 background: "#707070",
//                 height: "100%",
//                 borderRadius: "10px",
//                 transition: "width 0.3s",
//               }}
//             />
//           </div>
//           <div className="pt-2">
//             <p className="text flex items-center">
//               Pending <TbPointFilled /> Waiting for user to xend
//             </p>
//           </div>
//         </div>
//       )}
//       {completed && (
//         <div style={{ width: "100%" }}>
//           <div
//             style={{
//               width: "100%",
//               background: "#eee",
//               height: "5px",
//               borderRadius: "10px",
//             }}
//           >
//             <div
//               style={{
//                 width: `${100}%`,
//                 background: "#2db83d",
//                 height: "100%",
//                 borderRadius: "10px",
//                 transition: "width 0.3s",
//               }}
//             />
//           </div>
//           <div className="pt-2">
//             <p className="text flex items-center">
//               <span className="font-medium text-primary-green">100%</span>{" "}
//               <TbPointFilled /> Completed
//             </p>
//           </div>
//         </div>
//       )}
//       {inProgress && (
//         <div style={{ width: "100%" }}>
//           <div
//             style={{
//               width: "100%",
//               background: "#eee",
//               height: "5px",
//               borderRadius: "10px",
//             }}
//           >
//             <div
//               style={{
//                 width: `${20}%`,
//                 background: "#e28400",
//                 height: "100%",
//                 borderRadius: "10px",
//                 transition: "width 0.3s",
//               }}
//             />
//           </div>
//           <div className="pt-2">
//             <p className="text flex items-center">
//               <span className="font-medium text-primary-orange">
//                 {value}% done
//               </span>{" "}
//               <TbPointFilled /> Waiting for Rider
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
