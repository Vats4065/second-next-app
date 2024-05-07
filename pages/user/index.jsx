import Link from "next/link";
// import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function user() {
  //   const [user, setUser] = useState([]);

  //   console.log("user", user);

  //   useEffect(() => {
  //     const fetchUser = async () => {
  //       const data = await fetch("https://dummyjson.com/users");
  //       setUser(await data.json());
  //     };
  //     fetchUser();
  //   }, []);

  const { data, err } = useSWR("https://dummyjson.com/users", fetcher);
  if (err) return <h1>failed to load</h1>;
  if (!data) return <h1>Loading...</h1>;

  console.log(data);
  return (
    <>
      <h1>User</h1>
      {/* {user &&
        user.users &&
        user.users.map((item) => (
          <Link href={`/user/${item.id}`} key={item.id}>
            <div>{item.firstName}</div>
          </Link>
        ))} */}

      {data &&
        data.users.map((item) => (
            <Link href={`/user/${item.id}` } key={item.id}>
              <br />
            <div>{item.firstName}</div>
      
          </Link>
        ))}
    </>
  );
}

export default user;
