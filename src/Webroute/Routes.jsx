// src/Routes/Webroute.jsx
import  { Suspense, lazy } from 'react';
import { Routes, Route , Navigate  } from 'react-router-dom';
const Hero= lazy(() => import('../Pages/Hero'));


const WebRoutes = () => {

  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center">
          <div className="loadingio-spinner-ripple-9yaj8a57f0u">
            <div className="ldio-24eutxqm1o1">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      }
    >
      <Routes>

        <Route exact path="/" element={<Hero/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
);
};

export default WebRoutes;
