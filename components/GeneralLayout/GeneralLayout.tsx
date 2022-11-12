import React from "react";
import { PageLayout } from "@primer/react";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <PageLayout.Content
      padding="normal"
      width="xlarge"
      sx={{
        minHeight: [
          "calc(100vh - 162px)",
          "calc(100vh - 162px)",
          "calc(100vh - 162px)",
          "calc(100vh - 178px)",
        ],
      }}
    >
      {children}
    </PageLayout.Content>
  );
}
