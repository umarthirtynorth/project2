// import React, { useState } from "react";
// import products from "../../productApi";


// const SearchBar = () => {
//     const [product , setProduct] = useState(products);
//     const [search , setSearch] = useState("");

//     const filteredProducts = product.filter((pro) => {
//         if (
//           pro.pname.toLowerCase().includes(search) ||
//           pro.category.toLowerCase().includes(search)
//         ) {
//           return pro;
//         }
//         setProduct(filteredProducts);
        
//       });

//       const handleChange = (e) => {
//         setSearch(e.target.value.toLowerCase())
//       }

//     return (
//         <>
//             <div >
//                 <form className="d-flex" role="search">
//                     <input 
//                         className="form-control me-2" 
//                         type="search" 
//                         placeholder="Search" 
//                         aria-label="Search" 
//                         onChange={() => handleChange}
//                     />
//                     <button 
//                         className="btn btn-outline-success" 
//                         type="submit"
//                     >Search</button>
//                 </form>
//             </div>
            
            
//         </>
//     );
// };

// export default SearchBar;