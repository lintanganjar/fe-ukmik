// eslint-disable-next-line no-unused-vars
import React from "react";
import { Form, Route, Routes } from "react-router-dom";
import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import Users from "@/pages/users/Users";
import EditUsers from "./pages/users/edit-users";
import EditUsersCA from "./pages/users/editusers-ca";
import ForgotPassword from "@/pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";
import EmailApproved from "@/emails/email-aproved";
import EmailFailed from "./emails/email-failed";
import MultiStepForm from "./pages/form/multistepform";
import { ProtectedRoute } from "./ProtectedRoute";
import { useAuthStore } from "./stores/useAuthStore";
import Sidebar from "./components/section/Sidebar";

const App = () => {
  const { accessToken } = useAuthStore();
  return (
    <div className="flex">
      {accessToken && <Sidebar />}

      <div className="ml-[200px] max-w-[85vw]">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        {/* open recruitment */}
        <Route
          path="/email-approved"
          element={
            <ProtectedRoute>
              <EmailApproved />
            </ProtectedRoute>
          }
        />
        <Route
          path="/email-failed"
          element={
            <ProtectedRoute>
              <EmailFailed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route path="/users/edit-users/:id" element={<EditUsers />} />
        <Route path="/editusers-ca" element={<EditUsersCA />} />
        <Route path="/multistepform" element={<MultiStepForm />} />
      </Routes>
    </div>
    </div>
    
  );
};

export default App;
