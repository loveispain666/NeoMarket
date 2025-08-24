import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogPage from "./CatalogPage";
import ItemCard from "./pages/ItemCard/ItemCard";

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CatalogPage />} />
                <Route path="/catalog/:id" element={<ItemCard />} />
            </Routes>
        </BrowserRouter>
    );
}
