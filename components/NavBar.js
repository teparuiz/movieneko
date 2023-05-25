import Link from "next/link";

const NavBar = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/account/register"> Registrar </Link>
        </li>
        <li>
          <Link href="/account/login"> Ingresar </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
