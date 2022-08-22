import { useEffect, useState } from "react";

export default function LastSalesPage() {
  const [sales, setSales] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://next-js-course-4150c-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const transfomedSales = [];

        for (const key in data) {
          transfomedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transfomedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No sales</p>;
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
