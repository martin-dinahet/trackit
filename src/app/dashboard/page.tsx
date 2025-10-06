"use client";

import { redirect } from "next/navigation";
import type { FC } from "react";
import { useCurrentUser } from "@/providers/user-provider";

const DashboardPage: FC = () => {
  const { user, logout } = useCurrentUser();
  if (!user) redirect("/login");

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>
        username: <code>{user.username}</code>
      </p>
      <p>
        email: <code>{user.email}</code>
      </p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
