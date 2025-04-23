import { NavLink } from 'react-router-dom';

export default function NavItems({ navItems }) {
  return (
    
      <div className=" px-4 py-3 flex justify-between items-center">
        <ul className="flex gap-2">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-gray-400 ' : 'text-gray-600'} hover:text-[#47d7ac]`
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
