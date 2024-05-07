"use client"

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState([]);

  console.log("user", userInfo);

  useEffect(() => {
    const id = router.query.id;
    async function getUserById(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUserInfo(await data.json());
    }
    getUserById(id)
  }, [router.query.id]);
  return (
    <>
    <h1>User</h1>
    <br />
      <h2>{userInfo?.firstName}</h2>
      <h2>{userInfo?.email}</h2>
      <Link href = {`/user/`}>Back</Link>
    </>
  );
};

export default page;
