import { Link } from "react-router-dom";

function VendorNavBar() {
  return (
    <nav className="flex justify-end space-x-8 my-4 ">
      <Link to="#" className=" border-red-600 pb-1">
        ماركت
      </Link>
      <Link
        to="#"
        className="text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1"
      >
        ساعات
      </Link>
      <Link
        to="#"
        className="text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1"
      >
        ملابس
      </Link>
      <Link
        to="#"
        className="text-red-600 border-b-2 text-gray-600 hover:text-red-600 hover:border-red-600 hover:border-b-2 pb-1"
      >
        الكل
      </Link>
    </nav>
  );
}

export default VendorNavBar;
