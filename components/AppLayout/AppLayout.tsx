import React, { ReactNode } from "react";
import { Box } from "@primer/react";
import GeneralLayout from "./../GeneralLayout/GeneralLayout";
import { AppLayouts } from "../../utils/constants";

const Layouts: any = {
  [AppLayouts.GENERAL_LAYOUT]: GeneralLayout,
};

interface AppLayoutProps {
  layout?: string;
  children: ReactNode;
}

function AppLayout({ layout, children }: AppLayoutProps) {
  if (layout) {
    const Layout = Layouts[layout] ?? GeneralLayout;
    return <Layout>{children}</Layout>;
  }
  return (
    <Box display="flex" width="100%" justifyContent="center">
      {children}
    </Box>
  );
}

export default AppLayout;
