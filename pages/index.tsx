import React, { useState } from "react";
import { Box, UnderlineNav } from "@primer/react";
import PackageCard from "../components/PackageCard/PackageCard";
import { AppLayouts, HomeUnderlineNavItems } from "../utils/constants";

export default function Home(): JSX.Element {
  const [selectedNavKey, setSelectedNavKey] = useState("ALL");
  const packages: any[] = [];

  const handleSelectUnderlineNavItem = (navItemKey: string): void => {
    setSelectedNavKey(navItemKey);
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
        {packages?.map((item) => (
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
