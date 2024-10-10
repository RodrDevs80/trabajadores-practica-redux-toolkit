import { Route, Routes } from "react-router-dom";
import { Usuarios } from "../compomentes/Usuarios";
import { Gestion } from "../compomentes/Gestion";

export const MiRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Usuarios />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/gestion" element={<Gestion />} />
      <Route path="*" element={<Usuarios />} />
    </Routes>
  );
};
