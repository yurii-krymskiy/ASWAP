import { Link } from "react-router-dom";

const NavLinks = ({ onClick }: { onClick?: () => void }) => {

  const navLinks = [
    { label: "Buy Crypto", path: "/buy-crypto" },
    { label: "Swap", path: "/swap" },
    { label: "Coin join", path: "/coin-join" },
  ];

  return (
    <ul className="flex flex-col md:flex-row gap-6 text-[14px] md:text-[16px] text-[#7B7B7B]">
      {navLinks.map(({ label, path }) => (
        <li key={path}>
          <Link to={path} onClick={onClick} className="flex items-center gap-2 cursor-pointer">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
