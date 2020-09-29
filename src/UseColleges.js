import { useEffect, useState } from "react";
import jsonData from "./data/colleges.json";
export default function UseColleges(startNumber) {
  const [loading, setloading] = useState(true);
  const [more, setmore] = useState(false);
  const [colleges, setcolleges] = useState([]);
  console.log("start number", startNumber);
  useEffect(() => {
    setloading(true);
    const data = jsonData.colleges.slice(startNumber, startNumber + 10);

    setTimeout(() => {
      setcolleges((prev) => [...prev, ...data]);
      setmore(data.length > 0);
      setloading(false);
    }, 1000);
  }, [startNumber]);

  return { loading, more, colleges };
}
