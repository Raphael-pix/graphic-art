import React from "react";

const Header = ({ navItems, handleItemClick }) => {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-fit mx-auto">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className="flex items-baseline cursor-pointer group"
          >
            <h2
              className={`text-5xl md:text-6xl font-serif transition-colors duration-300 group-hover:text-neutral-grey ${
                item.isActive ? "" : "text-gray-300"
              }`}
            >
              {item.label}
            </h2>
            <span
              className={`ml-2 text-sm font-mono transition-colors duration-300 self-start group-hover:text-neutral-grey${
                item.isActive ? "" : "text-gray-300"
              }`}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
