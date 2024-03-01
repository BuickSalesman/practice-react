import { useEffect, useState } from "react";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("BuickSalesman");

  function handleSubmit() {}

  async function fetchGithubUserData(){
    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data
  }

  useEffect(()=>{
    fetchGithubUserData
  }.[])

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Useername..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search!</button>
      </div>
    </div>
  );
}
