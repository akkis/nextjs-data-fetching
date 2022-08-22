import { useEffect, useState } from "react";
import useSwr from "swr";

export default function LastSalesPage() {
  const [sales, setSales] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSwr(
    "https://next-js-course-4150c-default-rtdb.europe-west1.firebasedatabase.app/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transfomedSales = [];

      for (const key in data) {
        transfomedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transfomedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     "https://next-js-course-4150c-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const transfomedSales = [];

  //       for (const key in data) {
  //         transfomedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(transfomedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}
