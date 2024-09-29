import React, { useState, useEffect } from "react";

function Sample() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://0.0.0.0:3000/assignments");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="pt-14">Loading...</div>;
  }

  if (error) {
    return <div className="pt-14">Error: {error}</div>;
  }
  console.log(data.assignments);
  return (
    <div className="p-15">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Sample;
