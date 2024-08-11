// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Galleria } from "primereact/galleria";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { Toast } from "primereact/toast";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { Divider } from "primereact/divider";
// import { getProductDetails, clearErrors } from "../../actions/productActions";

// const ProductDetails = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const { loading, product, error } = useSelector(
//     (state) => state.productDetails
//   );
//   const toast = useRef(null);

//   useEffect(() => {
//     dispatch(getProductDetails(id));
//     if (error) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: error,
//       });
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error, id]);

//   // Galleria item template
//   const itemTemplate = (item) => {
//     return (
//       <div className="flex justify-center items-center">
//         <img
//           alt="Product"
//           src={item.url}
//           style={{
//             width: "100%",
//             height: "300px",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       </div>
//     );
//   };

//   // Galleria thumbnail template
//   const thumbnailTemplate = (item) => {
//     return (
//       <div className="flex justify-center items-center">
//         <img
//           alt="Thumbnail"
//           src={item.url}
//           style={{
//             width: "80px",
//             height: "80px",
//             objectFit: "cover",
//             borderRadius: "8px",
//           }}
//         />
//       </div>
//     );
//   };

//   return (
//     <div className="grid grid-nogutter surface-0 text-800 min-h-screen">
//       <Toast ref={toast} />
//       {loading ? (
//         <div className="flex justify-center items-center h-full">
//           <ProgressSpinner />
//         </div>
//       ) : error ? (
//         <div className="text-red-500 text-center">{error}</div>
//       ) : (
//         <div className="container">
//           <Card
//             style={{
//               borderRadius: "20px",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//               display: "flex",
//               width: "100%",
//             }}
//           >
//             <div className="w-full lg:w-1/2 p-4">
//               <Galleria
//                 value={product.images}
//                 item={itemTemplate}
//                 thumbnail={thumbnailTemplate}
//                 showThumbnails
//                 showIndicators
//                 showNavigators
//                 style={{ borderRadius: "12px" }}
//                 circular
//                 autoPlay transitionInterval={3000}
//               />
//             </div>

//             <div className="w-full lg:w-1/2 p-4 space-y-4">
//               <h2 className="text-3xl font-bold">{product.projectTitle}</h2>
//               <div className="flex items-center space-x-4 border-t py-3">
//                 <h3 className="text-2xl text-red-500">₱{product.price}</h3>
//               </div>
//               <Button
//                 label="Add to Cart"
//                 className={`p-button-rounded p-button-primary ${
//                   product.stock > 0 ? "" : "p-button-disabled"
//                 }`}
//                 disabled={product.stock <= 0}
//               />
//               <Divider />
//               <h4 className="font-bold">Description</h4>
//               <p>{product.description}</p>
//               <p className="text-red-500 text-xs">
//                 Please be advised that our product warranty is exclusively
//                 applicable to services performed by our team when we assemble
//                 the parts on your motorcycle. The warranty does not cover
//                 products ordered online or assembled by third parties.
//               </p>
//             </div>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

//** Latest */
// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { Galleria } from "primereact/galleria";
// import { Button } from "primereact/button";
// import { Card } from "primereact/card";
// import { Toast } from "primereact/toast";
// import { ProgressSpinner } from "primereact/progressspinner";
// import { Divider } from "primereact/divider";
// import { getProductDetails, clearErrors } from "../../actions/productActions";

// const ProductDetails = () => {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const { loading, product, error } = useSelector(
//     (state) => state.productDetails
//   );
//   const toast = useRef(null);

//   useEffect(() => {
//     dispatch(getProductDetails(id));
//     if (error) {
//       toast.current.show({
//         severity: "error",
//         summary: "Error",
//         detail: error,
//       });
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error, id]);

//   // Galleria item template
//   const itemTemplate = (item) => {
//     return (
//       <div className="flex justify-center items-center">
//         <img
//           alt="Product"
//           src={item.url}
//           style={{
//             width: "90%",
//             height: "400px",
//             objectFit: "cover",
//             borderRadius: "12px",
//           }}
//         />
//       </div>
//     );
//   };

//   // Galleria thumbnail template
//   const thumbnailTemplate = (item) => {
//     return (
//       <div className="flex justify-center items-center">
//         <img
//           alt="Thumbnail"
//           src={item.url}
//           style={{
//             width: "70px",
//             height: "65px",
//             borderRadius: "8px",
//           }}
//         />
//       </div>
//     );
//   };

//   return (
//     <div className="grid grid-nogutter surface-0 text-800 min-h-screen">
//       <Toast ref={toast} />
//       {loading ? (
//         <div className="flex justify-center items-center h-full">
//           <ProgressSpinner />
//         </div>
//       ) : error ? (
//         <div className="text-red-500 text-center">{error}</div>
//       ) : (
//         <div className="container mx-auto px-4">
//           <Card
//             style={{
//               borderRadius: "20px",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//               display: "flex",
//               width: "100%",
//             }}
//           >
//             <div className="w-full p-4">
//               <Galleria
//                 value={product.images}
//                 item={itemTemplate}
//                 thumbnail={thumbnailTemplate}
//                 showIndicators
//                 style={{ borderRadius: "10px" }}
//                 // circular
//                 autoPlay transitionInterval={3000}
//               />
//             </div>

//             <div className="w-full lg:w-1/2 p-4 space-y-4">
//               <h2 className="text-3xl font-bold">{product.projectTitle}</h2>
//               <div className="flex items-center space-x-4 border-t py-3">
//                 <h3 className="text-2xl text-red-500">₱{product.price}</h3>
//               </div>
//               <Button
//                 label="Add to Cart"
//                 className={`p-button-rounded p-button-primary ${
//                   product.stock > 0 ? "" : "p-button-disabled"
//                 }`}
//                 disabled={product.stock <= 0}
//               />
//               <Divider />
//               <h4 className="font-bold">Description</h4>
//               <p>{product.description}</p>
//               <p className="text-red-500 text-xs">
//                 Please be advised that our product warranty is exclusively
//                 applicable to services performed by our team when we assemble
//                 the parts on your motorcycle. The warranty does not cover
//                 products ordered online or assembled by third parties.
//               </p>
//             </div>
//           </Card>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

import React, { Fragment, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import { getProductDetails, clearErrors } from "../../actions/productActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const toast = useRef(null);

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
    if (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error, id]);

  const imageTemplate = (item) => {
    return (
      <img
        src={item.url}
        alt={product.projectTitle}
        // className="w-full h-screen object-cover rounded-sm"
            style={{
            width: "100%",
            height: "900px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
      />
    );
  };

  return (
    <Fragment className="layout-wrapper">
      <Toast ref={toast} />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
          <ProgressSpinner />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-red-500">Error: {error}</p>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen py-5 px-8">
          <div className="container mx-auto grid lg:grid-cols-2 gap-8">
            {/* Carousel */}
            <Card className="p-0 rounded-lg shadow-2xl">
              <Carousel
                value={product.images}
                numVisible={1}
                circular
                autoplayInterval={3000}
                itemTemplate={imageTemplate}
                className="w-full h-96"
              />
            </Card>

            {/* Product Details */}
            <Card className="container mx-auto grid lg:grid-cols-2 gap-8 shadow-lg">
              <div>
                <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
                  {product.projectTitle}
                </h1>
                <p className="text-sm text-gray-500 mb-2"># {product._id}</p>
                <p className="text-2xl font-bold text-blue-600 mb-6">
                  ₱{" "}
                  {product.price !== undefined
                    ? product.price.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })
                    : "N/A"}
                </p>
                <Divider />
                <div className="mt-6">
                  <p className="text-lg font-semibold mb-2">Description</p>
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
              {/* Optional Add to Cart Section */}
              {/* <div className="flex items-center my-4">
                <Button
                  icon="pi pi-minus"
                  className="p-button-rounded p-button-danger mr-2"
                />
                <input
                  type="number"
                  className="form-control mx-2 text-center w-20"
                  value={1} // Static value since we are not handling quantity here
                  readOnly
                />
                <Button
                  icon="pi pi-plus"
                  className="p-button-rounded p-button-primary ml-2"
                />
                <Button
                  label="Add to Cart"
                  className="ml-4"
                  disabled={product.stock === 0}
                />
              </div> */}
            </Card>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductDetails;

