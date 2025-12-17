import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <header></header>
            <Outlet />
            <footer></footer>
        </>
    );
}
export default DefaultLayout