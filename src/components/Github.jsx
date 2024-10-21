import React from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
  const data = useLoaderData();

  return (
    <div className="w-full h-96 flex items-center justify-center gap-10 bg-gray-600">
      <div className="p-5 bg-gray-400 m-5 rounded-full">
        <img
          src={data?.avatar_url}
          alt="Github page"
          width={200}
          className="rounded-full"
        />
      </div>
      <div className="flex gap-5 flex-col">
        <div className="bg-gray-400 p-5 gap-10 rounded-lg text-white">
          <h1>{data?.name}</h1>
          <h4>Repositories: {data.public_repos}</h4>
          <h4>Followers: {data.followers}</h4>
        </div>
        <div className="bg-gray-400 p-5 gap-10 rounded-lg text-white w-96">
          <p>{data?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export const fetchGithubData = async () => {
  const res = await fetch(`https://api.github.com/users/hanumant-dombale`);
  return res.json();
};
