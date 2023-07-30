import { Route, createBrowserRouter, createRoutesFromElements,} from "react-router-dom";
import Dashboard from "../components/Dashboard/dashboard";
import Messages from "../components/Messages/Messages";

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Dashboard/>}/>
            <Route path="/message" element={<Messages/>}/>
        </Route>
    )
)