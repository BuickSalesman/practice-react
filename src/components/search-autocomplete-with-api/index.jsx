import { useEffect, useState } from "react";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  async function fetchListOfUsers() {
    try {
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers;
  }, []);

  return (
    <div className="search-autocomplete-container">
      <input name="search-users" placeholder="Search here!" />
    </div>
  );
}

// RETURN TO VIDEO AT 3:40:10
