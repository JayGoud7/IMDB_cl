"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navitems = () => {
  const NAV_ITEMS = [
    {
      name: "Home",
      pathname: "/",
    },
    {
      name: "About",
      pathname: "/about",
    },
  ];

  const router = useRouter();
  return (
    <div className="navi">
      {NAV_ITEMS.map((item, index) => (
        <Link
          key={index}
          href={item.pathname}
          className={router.pathname === "/" ? "active" : "anc-h"}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navitems;
