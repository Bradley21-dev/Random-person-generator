import { useEffect, useState } from "react";

function App() {
  const [user, setUsers] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data.results[0]);
        console.log(res);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  if (!user)
    return (
      <div className="mt-10 p-5 text-cyan-950  flex flex-col gap-5 items-center animate-bounce text-5xl text-mono font-bold">
        {" "}
        <div class="animate-spin h-10 w-10 border-4 rounded-full border-t-transparent border-blue-500"></div>
      </div>
    );
  return (
    <div className="mt-10 mx-auto p-5 w-200 rounded-4xl flex flex-col text-white bg-emerald-900 gap-5 items-center">
      <h1 className="text-4xl  font-bold text-mono">Random Person Generator</h1>

      <div>
        <h1 className="text-2xl font-bold text-mono">
          First Name: {user.name.first}
        </h1>
        <h1 className="text-2xl font-bold text-mono">
          Last Name: {user.name.last}
        </h1>
        <h1 className="text-2xl font-bold text-mono">Email: {user.email}</h1>
        <h1 className="text-2xl font-bold text-mono">Sex: {user.gender}</h1>
        <h1 className="text-2xl font-bold text-mono">
          Nationality: {user.nat}
        </h1>
        <div className="flex justify-center">
          <img
            src={user.picture.large}
            className="mt-4 h-60 w-60 rounded-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => window.location.reload()}
            className="py-2 px-4 bg-lime-700 rounded mt-10  cursor-pointer duration-150 hover:bg-lime-800 hover:scale-105 active:bg-amber-900"
          >
            Change Person
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
