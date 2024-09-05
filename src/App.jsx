import { Routes, Route } from "react-router-dom";
import { router } from "./configs/routes";

const App = () => {
  return (
    <div>
      <Routes>
        {router.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
