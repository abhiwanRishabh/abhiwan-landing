import React, { useEffect, useState } from "react";

function useFetchApi(fetchData) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [totalPages, setTotalPages] = useState(10); // Mock total pages, should come from API

  useEffect(() => {
    fetchData()
      .then((response) => {
        const result = response.data;
        setData(result.data);
        setTotalPages(result.pagination.totalPages); // Set from API response
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [fetchData]);

  return { data, loading, totalPages };
}

export default useFetchApi;
