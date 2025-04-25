import { NavLink } from 'react-router-dom';

export default function NavItems({ navItems }) {
  return (
    
      <div className=" px-4 py-3 flex justify-between items-center">
        <ul className="flex gap-4 justify-center flex-wrap w-full">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium whitespace-nowrap ${isActive ? 'text-gray-500 ' : 'text-gray-600'} hover:text-[#383f9e]`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
  );
}
