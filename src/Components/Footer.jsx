import React from "react";
import { userProfile } from "../data/userProfile";

export const Footer = () => {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} {userProfile.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};