"use client";

import React, { ReactNode, useEffect, useState } from "react";

export const RenderMounted = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div style={{ visibility: "hidden" }}>{children}</div>;

  return <>{children}</>;
};
