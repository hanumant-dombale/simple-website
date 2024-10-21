import {
    BrowserRouter,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import {
    Home,
    About,
    Contact,
    fetchGithubData,
    Github,
    User,
    Layout,
} from "./components";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route
                path="github"
                element={<Github />}
                loader={fetchGithubData}
            />
            <Route path="user/:id" element={<User />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename="/simple-website/">
            <RouterProvider router={router} />
        </BrowserRouter>
    </StrictMode>
);
