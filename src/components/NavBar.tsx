import { Link } from "react-router-dom";

export default function Navbar() {
  const lien = [
    {
      text: "Accueil",
      path: "/",
    },
  ];
  return (
    <nav className="p-4 border-2 border-b customShadow">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">
          La taverne
        </Link>
        <div className="flex gap-3">
          {lien.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:underline hover:text-red-300"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
