function Menu({ title, href = "/" }) {
  return (
    <>
      <li>
        <a
          className="text-white hover:text-orange-400 text-lg 
            px-4 py-3"
          href={href}
        >
          {title}
        </a>
      </li>
    </>
  );
}

export default Menu;
