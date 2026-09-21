"use client";

import Link from "next/link";
import { User as UserIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { spannerPathCat } from "@/spanner/api";
import { getUser, User } from "@/spanner/user";

const styles = {
  desktop: {
    join: "font-bold text-blue-700 hover:underline",
    login: "inline-flex items-center gap-1 text-ink/70 hover:text-blue-700",
    name: "inline-flex items-center gap-1 text-ink/70 hover:text-blue-700",
  },
  mobile: {
    join: "px-2 py-2 text-blue-700",
    login:
      "inline-flex items-center gap-1 rounded px-2 py-2 text-ink/70 hover:bg-gray-100",
    name: "inline-flex items-center gap-1 rounded px-2 py-2 text-ink/70 hover:bg-gray-100",
  },
};

export default function LoginStatus({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const [user, setUser] = useState<User | null>(null);
  const classes = styles[variant];

  useEffect(() => {
    let cancelled = false;

    getUser().then((user) => {
      if (!cancelled) setUser(user);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (user) {
    return (
      <a
        href={spannerPathCat("account/settings")}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.name}
      >
        {user.first_name}
        <UserIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <>
      <Link href="/join" className={classes.join}>
        Join
      </Link>
      <a
        href={spannerPathCat("account/sign-in")}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.login}
      >
        Login
      </a>
    </>
  );
}
