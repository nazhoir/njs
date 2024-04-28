import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="container min-h-screen py-8">{children}</div>;
}
