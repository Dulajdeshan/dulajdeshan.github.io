import "../styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import {
  ThemeProvider,
  theme,
  BaseStyles,
  Box,
  PageLayout,
} from "@primer/react";
import deepmerge from "deepmerge";
import { AppLayouts } from "../utils/constants";
import AppLayout from "../components/AppLayout/AppLayout";
import PageHeader from "../components/PageHeader/PageHeader";

const customTheme = deepmerge(theme, {
  fonts: {
    mono: "Roboto, sans-serit",
  },
});

type NextPageWithLayout = NextPage & {
  layout?: AppLayouts;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <ThemeProvider theme={customTheme} colorMode="night">
      <BaseStyles>
        <Box minHeight="100vh" bg="canvas.default">
          <PageLayout
            columnGap="none"
            containerWidth="full"
            padding="none"
            rowGap="none"
            sx={{ justifyContent: "center" }}
          >
            <PageHeader />
            <AppLayout layout={Component.layout}>
              <Component {...pageProps} />
            </AppLayout>
            <PageLayout.Footer
              divider="line"
              padding="normal"
            ></PageLayout.Footer>
          </PageLayout>
        </Box>
      </BaseStyles>
    </ThemeProvider>
  );
}
