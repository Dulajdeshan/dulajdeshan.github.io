import React, { useCallback, useEffect, useState } from "react";
import { Box, UnderlineNav } from "@primer/react";
import { useDispatch } from "react-redux";
import PackageCard from "../components/PackageCard/PackageCard";
import { AppLayouts, HomeUnderlineNavItems } from "../utils/constants";
import { appActions, fetchPackagesAsync } from "../redux/app/slice";
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
    handleFilterValues(navItemKey);
  };

  const handleFilterValues = useCallback(
    (key: string) => {
      if (key !== "ALL") {
        setFilteredPackages([
          ...packages.filter((packageItem: any) => packageItem.type === key),
        ]);
      } else {
        setFilteredPackages(packages);
      }
    },
    [packages]
  );

  useEffect(() => {
    handleFilterValues(selectedNavKey);
  }, [selectedNavKey, handleFilterValues]);

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
        {filteredPackages?.map((item: any) => (
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
