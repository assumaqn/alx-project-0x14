import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white mt-8">
    <div className="container mx-auto text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} MovieApp. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
