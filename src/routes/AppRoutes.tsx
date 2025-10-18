import { Route, Routes } from "react-router-dom";
import ProjectsPage from "../pages/ProjectsPage";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<HomePage />} />
        </Routes>
    )
}