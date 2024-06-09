import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'
import Brand from '../Pages/Brand'
import Categories from "../Pages/Categories"
import Luxe from "../Pages/Luxe";
import Fashion from "../Pages/Fashion";
import BeautyAdvice from "../Pages/BeautyAdvice";
import LoginPage from "../Pages/LoginPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/luxe" element={<Luxe />} />
      <Route path="/nykaa_fashion" element={<Fashion />} />
      <Route path="/beauty_Advice" element={<BeautyAdvice />} />
      <Route path="/login" element={<LoginPage />} />

    </Routes>
  );
}
