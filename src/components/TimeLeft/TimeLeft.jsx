import { useEffect, useState } from "react";
import { calcTimeLeft } from "../../utils/counterDown";

export default function TimeLeft() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="flex gap-2 items-center *:bg-black/85 *:text-white *:size-7 *:rounded-md *:text-13 *:flex *:items-center *:justify-center">
        <span>{String(timeLeft.hours).padStart(2, "0")}</span> :{" "}
        <span>{String(timeLeft.minutes).padStart(2, "0")}</span> :{" "}
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
    </>
  );
}
