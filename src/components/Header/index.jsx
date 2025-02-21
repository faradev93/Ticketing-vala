const Header = () => {
  return (
    <ul className="flex flex-wrap gap-4">
      <a href="#">
        <li className="font-thin text-2xl hover:border-b-2 hover:text-sky-700 hover:transition-all p-2 h-full w-full">
          Login Page
        </li>
      </a>
      <a href="#">
        <li className="font-thin text-2xl hover:border-b-2 hover:text-sky-700 hover:transition-all p-2 h-full w-full">
          Sigun UP
        </li>
      </a>
      <a href="#">
        <li className="font-thin text-2xl hover:border-b-2 hover:text-sky-700 hover:transition-all p-2 h-full w-full">
          Ticketing
        </li>
      </a>
      <a href="#">
        <li className="font-thin text-2xl hover:border-b-2 hover:text-sky-700 hover:transition-all p-2 h-full w-full">
          My Ticket
        </li>
      </a>
    </ul>
  );
};
export default Header;
