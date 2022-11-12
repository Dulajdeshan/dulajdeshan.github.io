import React from "react";
import { PageLayout, NavList, Box } from "@primer/react";
import { useRouter } from "next/router";
import Link from "next/link";

interface INavItemProps {
  href: string | { pathname: string; query: any };
  children: React.ReactNode;
}

function NavItem({ href, children }: INavItemProps): JSX.Element {
  const router = useRouter();
  const isCurrent =
    typeof href === "string"
      ? router.asPath === href
      : router.pathname === href.pathname;
  return (
    <Link href={href} passHref>
      <NavList.Item aria-current={isCurrent ? "page" : false}>
        {children}
      </NavList.Item>
    </Link>
  );
}

function NavNestedItem({ href, children }: INavItemProps): JSX.Element {
  const router = useRouter();
  const isCurrent =
    typeof href === "string"
      ? router.asPath === href
      : router.pathname === href.pathname;
  return (
    <Link href={href} passHref>
      <NavList.Item
        sx={{
          "&:hover": {
            backgroundColor: "btn.selectedBg",
          },
          "&:not(:hover)": {
            backgroundColor: "transparent !important",
          },
          "&::after": {
            backgroundColor: "transparent !important",
          },
        }}
        aria-current={isCurrent ? "location" : undefined}
      >
        {children}
      </NavList.Item>
    </Link>
  );
}

export default function SingleLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      width="xlarge"
      sx={{
        margin: "auto",
      }}
    >
      <PageLayout.Content padding="normal">{children}</PageLayout.Content>
      <PageLayout.Pane
        divider="line"
        padding="normal"
        position="start"
        resizable
        sticky
      >
        <NavList>
          <NavItem href="/item-1">Item 1</NavItem>
          <NavNestedItem href="/item-2">
            Item 2
            <NavList.SubNav>
              <NavItem href="/item-2/sub-item-1">Sub item 1</NavItem>
              <NavItem href="/item-2/sub-item-2">Sub item 2</NavItem>
            </NavList.SubNav>
          </NavNestedItem>
          <NavItem href="/item-3">Item 3</NavItem>
        </NavList>
      </PageLayout.Pane>
    </Box>
  );
}
