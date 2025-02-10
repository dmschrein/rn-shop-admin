"use client";

import { useEffect } from "react";

export default function SetSession() {
  useEffect(() => {
    async function setCookie() {
      await fetch("/api/set-cookie", { method: "POST" });
    }

    setCookie();
  }, []);

  return null; // No UI needed, just setting the session
}
