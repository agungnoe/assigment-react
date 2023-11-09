function Auth({ title, href }) {
  return (
    <>
      <li>
        <a
          href={href}
          className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
        >
          {title}
        </a>
      </li>
    </>
  );
}

export default Auth;
