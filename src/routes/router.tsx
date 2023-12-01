import Admin from "../pages/Admin";
import Order from "../pages/Order";
import ProductMenu from "../pages/OrderPage";
import Shop from "../pages/Shop";


export enum ROUTES {
    ORDER_ROUTE = '/',
    ADMIN_ROUTE = '/admin',
    SHOP_ROUTE = '/shop',
    PRODUCT_ROUTE = '/product/:id',
}

export const routes = [
    {
        path: ROUTES.ORDER_ROUTE,
        Component: Order
    },
    {
        path: ROUTES.ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ROUTES.SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ROUTES.PRODUCT_ROUTE,
        Component: ProductMenu
    },
]
