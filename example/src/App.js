// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="Parent">
//       <ProductFoto />
//       <ProductInfo IsDiscount="coming" name="Pinky Sneakers" category="LEBARAN" />
//     </div>
//   );
// }

// function ProductFoto() {
//   return (
//     <div className="Foto">
//       <img src="sneakers.jpeg" />
//     </div>
//   );
// }

// function CheckDiscount(props) {
//   const { IsDiscount } = props;
//   if (IsDiscount == "yes") {
//     return <p>Diskon 50% Off</p>;
//   } else if (IsDiscount == "coming") {
//     return <p>Akan Ada Diskon ...</p>;
//   } else {
//     return <p>Diskon 50% Off</p>;
//   }
// }

// function ProductInfo(props) {
//   const benefits = ["Tahan air", "mudah dicuci", "gampang kering", "tahan panas"];
//   const listBenefits = benefits.map((itemBenefit) =>
//   <li>{itemBenefit}</li>
//   );
//   const { category, name, IsDiscount } = props;
//   return (
//     <div>
//       <div className="Deskripsi">
//         <p className="Cate">{category}</p>
//         <h1 className="Title">{name} </h1>
//         <p className="Price">IDR 200.000</p>
//         <CheckDiscount IsDiscount={IsDiscount} />
//         <p className="Info">
//           one of the most shoes the al collection gdjadamdbyeye
//           ksndksdhPUEHHNSjdjd kdhfgyrur aas xdhhygk,akjfaeh
//         </p>
//         <ul>
//           {listBenefits}
//         </ul>
//         <a onClick={(e) => TambahCart(name, e)} href="#">
//           Add to cart
//         </a>
//       </div>
//     </div>
//   );
// }

// function TambahCart(e) {
//   return console.log("Membeli " + e);
// }

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
export default App;
