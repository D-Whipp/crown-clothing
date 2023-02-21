import { createContext, useState, useEffect } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };

    return (
        <ProductsContext.Provider value={value}>
            {' '}
            {children}{' '}
        </ProductsContext.Provider>
    );
};

// import {
//     onAuthStateChangedListener,
//     createUserDocumentFromAuth,
// } from '../utils/firebase/firebase.utils';

// // as the actual value you want to access
// export const ProductContext = createContext({
//     currentProduct: null,
//     setCurrentProduct: () => null,
// });

// export const ProductProvider = ({ children }) => {
//     const [currentProduct, setCurrentProduct] = useState(null);
//     const value = { currentProduct, setCurrentProduct };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChangedListener((product) => {
//             if (product) {
//                 createUserDocumentFromAuth(product);
//             }

//             setCurrentProduct(product);
//         });

//         return unsubscribe;
//     }, []);

//     return (
//         <ProductContext.Provider value={value}>
//             {children}
//         </ProductContext.Provider>
//     );
// };
