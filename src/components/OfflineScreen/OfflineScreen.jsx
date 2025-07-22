import useOnlineStatus from "../../hooks/useOnlineStatus";
import { faRotate, faSignal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OfflineScreen({ children }) {
  const status = useOnlineStatus();

  if (status) {
    return children;
  }

  return (
    <>
      {children}
      <div className="bg-red-300 text-white px-3 py-2 fixed top-5 right-5 rounded-lg text-15">
        <FontAwesomeIcon className="mr-1 text-red-600" icon={faSignal} /> Have to check your
        internet connection <FontAwesomeIcon className="text-gray-500 ml-1" icon={faRotate} spin />
      </div>
    </>
  );
}
