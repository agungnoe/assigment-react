import logo from "../../../assets/images/logo-adopt.png";
import Auth from "./auth";
import Menu from "./menu";

function Navbar() {
  return (
    <>
      <header className="flex items-center">
        <div style={{ height: "54px" }} className="pr-5">
          <img
            src={logo}
            alt="logo"
            className="h-full"
            style={{ height: "55px" }}
          />
        </div>

        <ul className="flex items-center">
          <Menu title="Home" href="/" />
          <Menu title="Find a Pet" href="/card" />
          <Menu title="About" href="#footer" />
        </ul>

        <ul className="flex ml-auto items-center mt-2">
          <Auth title="Sign in" href="/sign-in" />
          <Auth title="Sign up" href="/sign-up" />
        </ul>
      </header>
    </>
  );
}

export default Navbar;
