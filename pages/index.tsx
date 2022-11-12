import React, { useState } from "react";
import { Box, UnderlineNav } from "@primer/react";
import PackageCard from "../components/PackageCard/PackageCard";
import { AppLayouts, HomeUnderlineNavItems } from "../utils/constants";
import useSWR, { useSWRConfig } from "swr";

const fetcher = async ({ url, type }: any) => {
  let packages = await fetch(url).then((res) => res.json());
  if (type !== "ALL") {
    packages = packages.filter((packageItem: any) => packageItem.type === type);
  }
  return packages;
};

export default function Home(): JSX.Element {
  const [selectedNavKey, setSelectedNavKey] = useState("ALL");
  const { data } = useSWR(
    {
      url: "/packages.json",
      type: selectedNavKey,
    },
    fetcher
  );

  const handleSelectUnderlineNavItem = (navItemKey: string): void => {
    setSelectedNavKey(navItemKey);
    // mutate({
    //   url: "/packages.json",
    //   type: selectedNavKey,
    // });
  };

  return (
    <Box>
      <Box mb={3}>
        <UnderlineNav aria-label="Main">
          {HomeUnderlineNavItems.map((item: any) => (
            <UnderlineNav.Link
              key={item.key}
              selected={item.key === selectedNavKey}
              onClick={(event) => {
                event.preventDefault();
                handleSelectUnderlineNavItem(item.key);
              }}
            >
              {item.title}
            </UnderlineNav.Link>
          ))}
        </UnderlineNav>
      </Box>
      <Box
        display={"grid"}
        gridGap={3}
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
      >
        {data?.map((item: any) => (
          <PackageCard
            key={item.id}
            type={item.type}
            id={item.id}
            name={item.name}
            packageUrl={item.packageUrl}
            githubUrl={item.githubUrl}
            description={item.description}
          />
        ))}
      </Box>
    </Box>
  );
}

Home.layout = AppLayouts.GENERAL_LAYOUT;
