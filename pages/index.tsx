import React, { useCallback, useEffect, useState } from "react";
import { Box, UnderlineNav } from "@primer/react";
import PackageCard from "../components/PackageCard/PackageCard";
import { AppLayouts, HomeUnderlineNavItems } from "../utils/constants";
import { fetchPackagesAsync } from "../redux/app/slice";
import { useAppContext, IAppContext } from "../redux/AppContext";

export default function Home(): JSX.Element {
  const {
    state: { packages },
    dispatch,
  } = useAppContext() as IAppContext;

  const [selectedNavKey, setSelectedNavKey] = useState("ALL");
  const [filteredPackages, setFilteredPackages] = useState(packages);

  const handleSelectUnderlineNavItem = (navItemKey: string): void => {
    setSelectedNavKey(navItemKey);
  };

  const getFilteredPackages = useCallback(
    (key: string) => {
      const filteredValues =
        key !== "ALL"
          ? packages.filter((packageItem: any) => packageItem.type === key)
          : packages;
      return filteredValues;
    },
    [packages]
  );

  useEffect(() => {
    setFilteredPackages(getFilteredPackages(selectedNavKey));
  }, [selectedNavKey, getFilteredPackages]);

  useEffect(() => {
    dispatch(fetchPackagesAsync());
  }, [selectedNavKey, dispatch]);

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
        {filteredPackages?.map((item) => (
          <PackageCard key={item.id} {...item} />
        ))}
      </Box>
    </Box>
  );
}

Home.layout = AppLayouts.GENERAL_LAYOUT;
