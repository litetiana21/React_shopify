import { lazy } from "react";

const Routes = [

    {
        name: "Product",
        path: "/product/:id",
        component: lazy(() => import("pages/Product")),
        exact: true
    },
    {
        name: "wishlist",
        path: "/wishlist",
        component: lazy(() => import("pages/WishList")),
        exact: true
    },
    {
        name: "cart",
        path: "/cart",
        component: lazy(() => import("pages/Cart")),
        exact: true
    },
    {
        name: "about",
        path: "/about",
        component: lazy(() => import("pages/About")),
        exact: true
    },
    {
        name: "contact",
        path: "/contact",
        component: lazy(() => import("pages/Contact")),
        exact: true
    },
    {
        name: "ProductList",
        path: "/productList",
        component: lazy(() => import("pages/ProductList")),
        exact: true
    },
    {
        name: "Home",
        path: "/",
        component: lazy(() => import("pages/Home")),
        exact: true,
    },
]

export default Routes;