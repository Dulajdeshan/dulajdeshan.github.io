import React, { ReactNode } from "react";
import GeneralLayout from "./../GeneralLayout/GeneralLayout";
import SingleLayout from "./../SingleLayout/SingleLayout";
import { AppLayouts } from "../../utils/constants";

const Layouts: any = {
  [AppLayouts.GENERAL_LAYOUT]: GeneralLayout,
  [AppLayouts.SINGLE_LAYOUT]: SingleLayout,
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
  return <GeneralLayout>{children}</GeneralLayout>;
}

export default AppLayout;
