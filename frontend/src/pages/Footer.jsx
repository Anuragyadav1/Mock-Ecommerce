const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 rounded-lg shadow dark:bg-gray-900 dark:text-gray-400">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center md:justify-between">
        <span className="text-sm text-center">
          © 2024 MockShop. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center ml-4 text-sm font-medium">
          <li>
            <a href="#" className="hover:underline mx-2 md:mx-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline mx-2 md:mx-4">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline mx-2 md:mx-4">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline mx-2 md:mx-4">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
