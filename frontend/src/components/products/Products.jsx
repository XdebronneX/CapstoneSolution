// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts, clearErrors } from "../../actions/productActions";
// import { Card } from "primereact/card";
// import { Button } from "primereact/button";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { Toast } from "primereact/toast";

// const Products = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const toast = useRef(null);
//     const { products, error, loading } = useSelector((state) => state.allProducts);

//     useEffect(() => {
//         dispatch(getProducts());
//         if (error) {
//             toast.current.show({ severity: 'error', summary: 'Error', detail: error });
//             dispatch(clearErrors());
//         }
//     }, [dispatch, error]);

//     const handleProductClick = (id) => {
//         navigate(`/showSingleProduct/${id}`);
//     };

//     return (
//         <div className="p-4">
//             <Toast ref={toast} />

//             {loading ? (
//                 <div className="flex justify-center items-center">
//                     <ProgressSpinner />
//                 </div>
//             ) : (
//                 <>
//                     <h4 className="text-2xl font-bold mb-4">Products</h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                         {products && products.map((product) => (
//                             <div key={product._id} className="flex justify-center">
//                                 <Card
//                                     style={{
//                                         borderRadius: '10px',
//                                         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                                         padding: '1rem',
//                                         width: '300px',
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         height: 'auto'
//                                     }}
//                                     header={
//                                         <img
//                                             alt={product.name}
//                                             src={product.images && product.images.length > 0 ? product.images[0].url : 'placeholder-image-url'}
//                                             style={{
//                                                 width: '100%',
//                                                 height: '200px',
//                                                 objectFit: 'cover',
//                                                 borderRadius: '10px 10px 0 0'
//                                             }}
//                                         />
//                                     }
//                                     footer={
//                                         <div className="flex justify-center mt-4">
//                                             <Button
//                                                 label="Add to Cart"
//                                                 icon="pi pi-shopping-cart"
//                                                 className="p-button-text"
//                                                 style={{
//                                                     color: '#00AEEF',
//                                                     border: '1px solid #00AEEF',
//                                                     borderRadius: '10px',
//                                                     fontSize: '1rem',
//                                                     width: '100%' // Full width button
//                                                 }}
//                                                 disabled={product.stock <= 0}
//                                             />
//                                         </div>
//                                     }
//                                     onClick={() => handleProductClick(product._id)}
//                                 >
//                                     <div className="flex flex-col h-full">
//                                         {/* Type centered */}
//                                         <div className="flex justify-center mb-2">
//                                             <span className="text-sm font-medium">{product.type}</span>
//                                         </div>
//                                         {/* Project Title and Price */}
//                                         <div className="flex justify-between items-center mb-2">
//                                             <h3 className="text-xl font-semibold">{product.projectTitle}</h3>
//                                             <span className="text-xl font-bold">{`₱${product.price.toFixed(2)}`}</span>
//                                         </div>
//                                         {/* Description */}
//                                         <p className="text-gray-500 mb-4 flex-grow">{product.description}</p>
//                                     </div>
//                                 </Card>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Products;

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts, clearErrors } from "../../actions/productActions";
// import { Card } from "primereact/card";
// import { Button } from "primereact/button";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { Toast } from "primereact/toast";
// import { Tooltip } from "primereact/tooltip";

// const Products = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const toast = useRef(null);
//     const { products, error, loading } = useSelector((state) => state.allProducts);

//     useEffect(() => {
//         dispatch(getProducts());
//         if (error) {
//             toast.current.show({ severity: 'error', summary: 'Error', detail: error });
//             dispatch(clearErrors());
//         }
//     }, [dispatch, error]);

//     const handleProductClick = (id) => {
//         navigate(`/showSingleProduct/${id}`);
//     };

//      // Carousel item template
//      const itemTemplate = (image) => {
//         return (
//             <img
//                 alt="Product"
//                 src={image.url}
//                 style={{
//                     width: '100%',
//                     height: '200px',
//                     objectFit: 'cover',
//                     borderRadius: '12px'
//                 }}
//             />
//         );
//     };

//     return (
//         <div className="p-6">
//             <Toast ref={toast} />
//             <Tooltip target=".info-icon" content="View Details" />

//             {loading ? (
//                 <div className="flex justify-center items-center h-screen">
//                     <ProgressSpinner />
//                 </div>
//             ) : (
//                 <>
//                     <h4 className="text-3xl font-bold mb-6 text-center">Products</h4>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                         {products && products.map((product) => (
//                             <div key={product._id} className="relative">
//                                 <Card
//                                     style={{
//                                         borderRadius: '12px',
//                                         boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
//                                         padding: '1.5rem',
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         height: 'auto',
//                                         cursor: 'pointer',
//                                     }}
//                                     header={
//                                         <img
//                                             alt={product.name}
//                                             src={product.images && product.images.length > 0 ? product.images[0].url : 'placeholder-image-url'}
//                                             style={{
//                                                 width: '100%',
//                                                 height: '200px',
//                                                 objectFit: 'cover',
//                                                 borderRadius: '12px 12px 0 0'
//                                             }}
//                                         />
//                                     }
//                                     footer={
//                                         <div className="flex justify-center mt-4">
//                                             <Tooltip target=".info-icon">
//                                                 <Button
//                                                     icon="pi pi-info-circle"
//                                                     className="info-icon p-button-rounded p-button-text"
//                                                     onClick={() => handleProductClick(product._id)}
//                                                     style={{ fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.1)', border: 'none' }}
//                                                 />
//                                             </Tooltip>
//                                         </div>
//                                     }
//                                 >
//                                     <div className="flex flex-col h-full">
//                                         <p className="text-blue-600 text-lg font-bold mb-2">{product.name}</p>
//                                         <p className="text-gray-600 text-md mb-2">{product.type}</p>
//                                         <p className="text-gray-800 text-lg font-semibold">{product.price}</p>
//                                     </div>
//                                 </Card>
//                             </div>
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Products;

// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts, clearErrors } from "../../actions/productActions";
// import { Card } from "primereact/card";
// import { Button } from "primereact/button";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { Toast } from "primereact/toast";
// import { Tooltip } from "primereact/tooltip";

// const Products = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const toast = useRef(null);
//   const { products, error, loading } = useSelector(
//     (state) => state.allProducts
//   );

//   useEffect(() => {
//     dispatch(getProducts());
//     if (error) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: error,
//       });
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error]);

//   const handleProductClick = (id) => {
//     navigate(`/showSingleProduct/${id}`);
//   };

//   return (
//     <div className="p-4">
//       <Toast ref={toast} />
//       {/* <Tooltip target=".info-icon" content="View Details" /> */}

//       {loading ? (
//         <div className="flex justify-center items-center h-screen">
//           <ProgressSpinner />
//         </div>
//       ) : (
//         <>
//           <h4 className="text-3xl font-bold mb-6 text-center">Products</h4>
//           <div className="flex justify-content-center flex-wrap">
//             {products &&
//               products.map((product) => (
//                 <div
//                   key={product._id}
//                   className="w-60 h-auto bg-primary text-white font-bold border-round m-2"
//                 >
//                   <Card
//                     style={{
//                       borderRadius: "12px",
//                       boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
//                       padding: "1.5rem",
//                       height: "100%",
//                       cursor: "pointer",
//                     }}
//                     header={
//                       <img
//                         alt={product.name}
//                         src={
//                           product.images && product.images.length > 0
//                             ? product.images[0].url
//                             : "placeholder-image-url"
//                         }
//                         style={{
//                           width: "100%",
//                           height: "200px",
//                           objectFit: "cover",
//                           borderRadius: "12px 12px 0 0",
//                         }}
//                       />
//                     }
//                     footer={
//                       <div className="flex justify-center mt-4 border border-red-500">
//                         <Button
//                           label="Add to Cart"
//                           icon="pi pi-shopping-cart"
//                           className="p-button-text"
//                           style={{
//                             color: "#00AEEF",
//                             border: "1px solid #00AEEF",
//                             borderRadius: "10px",
//                             fontSize: "1rem",
//                             width: "100%", // Full width button
//                           }}
//                           disabled={product.stock <= 0}
//                         />
//                       </div>
//                     }
//                   >
//                     <div class="p-4">
//                       <h3 class="text-lg font-semibold mb-2">
//                         {product.projectTitle}
//                       </h3>
//                       <p class="text-sm text-muted-foreground mb-4">
//                         {product.description}
//                       </p>
//                       <div class="flex justify-between items-center">
//                         <span class="text-primary font-semibold">
//                           ₱ {product.price}
//                         </span>
//                         {/* <button class="bg-primary text-primary-foreground px-3 py-1 rounded-md hover:bg-primary/80">Add to Cart</button> */}
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//               ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Products;

//** Best ui aug 10,2024 */
// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts, clearErrors } from "../../actions/productActions";
// import { Card } from "primereact/card";
// import { Button } from "primereact/button";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { Toast } from "primereact/toast";
// import { Divider } from "primereact/divider";

// const Products = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const toast = useRef(null);
//   const { products, error, loading } = useSelector(
//     (state) => state.allProducts
//   );

//   useEffect(() => {
//     dispatch(getProducts());
//     if (error) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: error,
//       });
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error]);

//   const handleProductClick = (id) => {
//     navigate(`/showSingleProduct/${id}`);
//   };

//   return (
//     <div className="p-4">
//       <Toast ref={toast} />

//       {loading ? (
//         <div className="flex justify-center items-center">
//           <ProgressSpinner />
//         </div>
//       ) : (
//         <>
//           <h4 className="text-2xl font-bold mb-4">Products</h4>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {products &&
//               products.map((product) => (
//                 <div key={product._id} className="w-60 h-auto bg-primary text-white font-bold border-round m-2">
//                   <Card
//                     style={{
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                       padding: "1rem",
//                       width: "300px",
//                       display: "flex",
//                       flexDirection: "column",
//                       height: "auto",
//                     }}
//                     header={
//                       <img
//                         alt={product.projectTitle}
//                         src={
//                           product.images && product.images.length > 0
//                             ? product.images[0].url
//                             : "placeholder-image-url"
//                         }
//                         style={{
//                           width: "100%",
//                           height: "200px",
//                           objectFit: "cover",
//                           borderRadius: "10px 10px 0 0",
//                         }}
//                       />
//                     }
//                     footer={
//                       <div className="flex justify-center mt-4">
//                         <Button
//                           label="view details"
//                           icon="pi pi-info-circle"
//                           className="p-button-text"
//                           style={{
//                             color: "#00AEEF",
//                             border: "1px solid #00AEEF",
//                             borderRadius: "10px",
//                             fontSize: "1rem",
//                             width: "100%",
//                           }}
//                           disabled={product.stock <= 0}
//                         />
//                       </div>
//                     }
//                     onClick={() => handleProductClick(product._id)}
//                   >
//                     <Divider />
//                     <div classname="flex justify-between items-center">
//                         <span className="text-primary font-semibold">
//                           ₱ {product.price}
//                         </span>
//                         <h3 className="text-lg font-semibold mb-2">
//                         {product.projectTitle} <span className="text-blue-400">({product.type})</span>
//                       </h3>
//                       <p className="text-sm text-muted-foreground mb-2">
//                         {product.description}
//                       </p>
//                       </div>
//                     {/* <div className="p-4">
//                       <h3 className="text-lg font-semibold mb-2">
//                         {product.projectTitle} <br /> <span className="text-blue-400">({product.type})</span>
//                       </h3>
//                       <p className="text-sm text-muted-foreground mb-2">
//                         {product.description}
//                       </p>

//                     </div> */}
//                   </Card>
//                 </div>
//               ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Products;

//** 10:51pm Best ui aug 10,2024 */
// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts, clearErrors } from "../../actions/productActions";
// import { Card } from "primereact/card";
// import { Button } from "primereact/button";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { Toast } from "primereact/toast";
// import { Divider } from "primereact/divider";
// import { Accordion, AccordionTab } from 'primereact/accordion';

// const Products = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const toast = useRef(null);
//   const { products, error, loading } = useSelector(
//     (state) => state.allProducts
//   );

//   useEffect(() => {
//     dispatch(getProducts());
//     if (error) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: error,
//       });
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error]);

//   const handleProductClick = (id) => {
//     navigate(`/singleProduct/${id}`);
//   };
  

//   //   return (
//   //     <div className="p-4">
//   //       <Toast ref={toast} />

//   //       {loading ? (
//   //         <div className="flex justify-center items-center">
//   //           <ProgressSpinner />
//   //         </div>
//   //       ) : (
//   //         <>
//   //           <h4 className="text-2xl font-bold mb-4">Products</h4>
//   //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//   //             {products &&
//   //               products.map((product) => (
//   //                 <div key={product._id} className="w-60 h-auto bg-primary text-white font-bold border-round m-2">
//   //                   <Card
//   //                     style={{
//   //                       borderRadius: "10px",
//   //                       boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//   //                       padding: "1rem",
//   //                       width: "300px",
//   //                       display: "flex",
//   //                       flexDirection: "column",
//   //                       height: "auto",
//   //                     }}
//   //                     header={
//   //                       <img
//   //                         alt={product.projectTitle}
//   //                         src={
//   //                           product.images && product.images.length > 0
//   //                             ? product.images[0].url
//   //                             : "placeholder-image-url"
//   //                         }
//   //                         style={{
//   //                           width: "100%",
//   //                           height: "200px",
//   //                           objectFit: "cover",
//   //                           borderRadius: "10px 10px 0 0",
//   //                         }}
//   //                       />
//   //                     }
//   //                     footer={
//   //                       <div className="flex justify-center mt-4">
//   //                         <Button
//   //                           label="view details"
//   //                           icon="pi pi-info-circle"
//   //                           className="p-button-text"
//   //                           style={{
//   //                             color: "#00AEEF",
//   //                             border: "1px solid #00AEEF",
//   //                             borderRadius: "10px",
//   //                             fontSize: "1rem",
//   //                             width: "100%",
//   //                           }}
//   //                           disabled={product.stock <= 0}
//   //                         />
//   //                       </div>
//   //                     }
//   //                     onClick={() => handleProductClick(product._id)}
//   //                   >
//   //                     <Divider />
//   //                     <div classname="flex justify-between items-center">
//   //                         <span className="text-primary font-semibold">
//   //                           ₱ {product.price}
//   //                         </span>
//   //                         <h3 className="text-lg font-semibold mb-2">
//   //                         {product.projectTitle} <span className="text-blue-400">({product.type})</span>
//   //                       </h3>
//   //                       <p className="text-sm text-muted-foreground mb-2">
//   //                         {product.description}
//   //                       </p>
//   //                       </div>
//   //                     {/* <div className="p-4">
//   //                       <h3 className="text-lg font-semibold mb-2">
//   //                         {product.projectTitle} <br /> <span className="text-blue-400">({product.type})</span>
//   //                       </h3>
//   //                       <p className="text-sm text-muted-foreground mb-2">
//   //                         {product.description}
//   //                       </p>

//   //                     </div> */}
//   //                   </Card>
//   //                 </div>
//   //               ))}
//   //           </div>
//   //         </>
//   //       )}
//   //     </div>
//   //   );
// //   return (
// //     <div className="p-4">
// //       <Toast ref={toast} />

// //       {loading ? (
// //         <div className="flex justify-center items-center h-screen">
// //           <ProgressSpinner />
// //         </div>
// //       ) : (
// //         <>
// //           <h4 className="text-2xl font-bold mb-4 text-center">Products</h4>
// //           <div className="flex justify-center ml-4 md:ml-8">
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 me-0">
// //               {products &&
// //                 products.map((product) => (
// //                   <div
// //                     key={product._id}
// //                     className="w-60 h-auto bg-primary text-white font-bold border-round m-0"
// //                   >
// //                     <Card
// //                       style={{
// //                         borderRadius: "10px",
// //                         boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
// //                         padding: "1rem",
// //                         width: "300px",
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         height: "auto",
// //                       }}
// //                       header={
// //                         <img
// //                           alt={product.projectTitle}
// //                           src={
// //                             product.images && product.images.length > 0
// //                               ? product.images[0].url
// //                               : "placeholder-image-url"
// //                           }
// //                           style={{
// //                             width: "100%",
// //                             height: "200px",
// //                             objectFit: "cover",
// //                             borderRadius: "10px 10px 0 0",
// //                           }}
// //                         />
// //                       }
// //                       footer={
// //                         <div className="flex justify-center mt-4">
// //                           <Button
// //                             label="View Details"
// //                             icon="pi pi-info-circle"
// //                             className="p-button-text"
// //                             style={{
// //                               color: "#00AEEF",
// //                               border: "1px solid #00AEEF",
// //                               borderRadius: "10px",
// //                               fontSize: "1rem",
// //                               width: "100%",
// //                             }}
// //                             disabled={product.stock <= 0}
// //                           />
// //                         </div>
// //                       }
// //                       onClick={() => handleProductClick(product._id)}
// //                     >
// //                       <Divider />
// //                       <span className="text-primary font-semibold">
// //                         ₱ {product.price}
// //                       </span>
// //                       <h3 className="text-lg font-semibold mb-2">
// //                         {product.projectTitle}{" "}
// //                         <span className="text-blue-400">({product.type})</span>
// //                       </h3>
// //                       <p className="text-sm text-muted-foreground mb-2">
// //                         {product.description}
// //                       </p>
// //                     </Card>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );

// // return (
// //     <div className="p-4">
// //       <Toast ref={toast} />
  
// //       {loading ? (
// //         <div className="flex justify-center items-center h-screen">
// //           <ProgressSpinner />
// //         </div>
// //       ) : (
// //         <>
// //           <h4 className="text-2xl font-bold mb-4 text-center">Products</h4>
// //           <div className="flex justify-center md:ml-8">
// //             <div className="flex flex-wrap justify-start md:justify-start ml-4 md:ml-8 gap-4">
// //               {products &&
// //                 products.map((product) => (
// //                   <div
// //                     key={product._id}
// //                     className="relative"
// //                   >
// //                     <Card
// //                       style={{
// //                         borderRadius: "20px",
// //                         boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
// //                         padding: "0.5rem",
// //                         width: "300px",
// //                         display: "flex",
// //                         flexDirection: "column",
// //                         height: "auto",
// //                         cursor: "pointer"
// //                       }}
// //                       header={
// //                         <img
// //                           alt={product.projectTitle}
// //                           src={
// //                             product.images && product.images.length > 0
// //                               ? product.images[0].url
// //                               : "placeholder-image-url"
// //                           }
// //                           style={{
// //                             width: "100%",
// //                             height: "200px",
// //                             objectFit: "cover",
// //                             borderRadius: "10px 10px 0 0",
// //                           }}
// //                         />
// //                       }
// //                       footer={
// //                         <div className="flex justify-center mt-4">
// //                           <Button
// //                             label="View Details"
// //                             icon="pi pi-info-circle"
// //                             className="p-button-text"
// //                             style={{
// //                               color: "#00AEEF",
// //                               border: "1px solid #00AEEF",
// //                               borderRadius: "10px",
// //                               fontSize: "1rem",
// //                               width: "100%",
// //                             }}
// //                             disabled={product.stock <= 0}
// //                           />
// //                         </div>
// //                       }
// //                       onClick={() => handleProductClick(product._id)}
// //                     >
// //                       <Divider />
// //                       <span className="text-primary font-semibold">
// //                         ₱ {product.price}
// //                       </span>
// //                       <h3 className="text-lg font-semibold mb-2">
// //                         {product.projectTitle}{" "}
// //                         <span className="text-blue-400">({product.type})</span>
// //                       </h3>
// //                       <p className="text-sm text-muted-foreground mb-2">
// //                         {product.description}
// //                       </p>
// //                     </Card>
// //                   </div>
// //                 ))}
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// return (
//     <div className="p-4">
//       <Toast ref={toast} />

//       {loading ? (
//         <div className="flex justify-center items-center h-screen">
//           <ProgressSpinner />
//         </div>
//       ) : (
//         <>
//           <h4 className="text-2xl font-bold mb-4 text-center">Products</h4>
//           <div className="flex justify-center md:ml-8">
//             <div className="flex flex-wrap justify-start md:justify-start ml-4 md:ml-8 gap-2">
//               {products &&
//                 products.map((product) => (
//                   <div key={product._id} className="relative">
//                     <Card
//                       style={{
//                         borderRadius: '20px',
//                         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                         padding: '0.5rem',
//                         width: '300px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         height: 'auto',
//                         cursor: 'pointer',
//                       }}
//                       header={
//                         <img
//                           alt={product.projectTitle}
//                           src={
//                             product.images && product.images.length > 0
//                               ? product.images[0].url
//                               : 'placeholder-image-url'
//                           }
//                           style={{
//                             width: '100%',
//                             height: '200px',
//                             objectFit: 'cover',
//                             borderRadius: '10px 10px 0 0',
//                           }}
//                         />
//                       }
//                       footer={
//                         <div className="flex justify-center mt-4">
//                           <Button
//                             label="more details"
//                             icon="pi pi-info-circle"
//                             className="p-button-text"
//                             style={{
//                               color: '#00AEEF',
//                               border: '1px solid #00AEEF',
//                               borderRadius: '10px',
//                               fontSize: '1rem',
//                               width: '100%',
//                             }}
//                             // disabled={product.stock <= 0}
//                             onClick={() => handleProductClick(product._id)}
//                           />
//                         </div>
//                       }
//                     >
//                       <Divider />
//                       <span className="text-primary font-semibold">
//                         ₱ {product.price.toLocaleString(undefined, {
//                                 minimumFractionDigits: 2,
//                               })}
//                       </span>
//                       <h3 className="text-lg font-semibold mb-2">
//                         {product.projectTitle}
//                       </h3>
//                       <h4> <span className="text-blue-400">({product.type})</span></h4>
//                       {/* <Accordion>
//                         <AccordionTab header="Details">
//                           <p className="text-sm text-muted-foreground mb-2">
//                             {product.description}
//                           </p>
//                         </AccordionTab>
//                       </Accordion> */}
//                     </Card>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Products;



import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, clearErrors } from "../../actions/productActions";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);
  const { products, error, loading } = useSelector(
    (state) => state.allProducts
  );

  useEffect(() => {
    dispatch(getProducts());
    if (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const handleProductClick = (id) => {
    navigate(`/singleProduct/${id}`);
  };

  return (
    <div className="p-4">
      <Toast ref={toast} />

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ProgressSpinner />
        </div>
      ) : (
        <>
          <h4 className="text-2xl font-bold mb-4 text-center">Products</h4>
          <div className="flex justify-center md:ml-8">
            <div className="flex flex-wrap justify-start md:justify-start ml-4 md:ml-8 gap-2">
              {products &&
                products.map((product) => (
                  // Only render the card if the product is activated
                  product.activation && (
                    <div key={product._id} className="relative">
                      <Card
                        style={{
                          borderRadius: '20px',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                          padding: '0.5rem',
                          width: '300px',
                          display: 'flex',
                          flexDirection: 'column',
                          height: 'auto',
                          cursor: 'pointer',
                        }}
                        header={
                          <img
                            alt={product.projectTitle}
                            src={
                              product.images && product.images.length > 0
                                ? product.images[0].url
                                : 'placeholder-image-url'
                            }
                            style={{
                              width: '100%',
                              height: '200px',
                              objectFit: 'cover',
                              borderRadius: '10px 10px 0 0',
                            }}
                          />
                        }
                        footer={
                          <div className="flex justify-center mt-4">
                            <Button
                              label="More details"
                              icon="pi pi-info-circle"
                              className="p-button-text"
                              style={{
                                color: '#00AEEF',
                                border: '1px solid #00AEEF',
                                borderRadius: '10px',
                                fontSize: '1rem',
                                width: '100%',
                              }}
                              onClick={() => handleProductClick(product._id)}
                            />
                          </div>
                        }
                      >
                        <Divider />
                        <span className="text-primary font-semibold">
                          ₱ {product.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                        <h3 className="text-lg font-semibold mb-2">
                          {product.projectTitle}
                        </h3>
                        <h4>
                          <span className="text-blue-400">
                            ({product.type})
                          </span>
                        </h4>
                      </Card>
                    </div>
                  )
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
