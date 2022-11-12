import React from "react";
import {
  Box,
  PageLayout,
  Header,
  StyledOcticon,
  Avatar,
  Autocomplete,
} from "@primer/react";

export default function PageHeader(): JSX.Element {
  const [filterVal, setFilterVal] = React.useState("");
  const [searchInputWidth, setSearchInputWidth] = React.useState<
    number | undefined
  >(undefined);
  const packages: any = [];
  const handleChange = (event: any): void => {
    setFilterVal(event.currentTarget.value);
  };
  const customFilterFn = (item: any): boolean =>
    item.text.toLowerCase().includes(filterVal.toLowerCase());

  const handleOnSelectedChange = (selectedItem: any): void => {
    console.log(selectedItem);
  };

  const handleOnOpenChange = (open: boolean): void => {
    setSearchInputWidth(open ? 300 : undefined);
  };
  return (
    <PageLayout.Header divider="line" padding="none">
      <Header
        sx={{
          justifyContent: "center",
        }}
      >
        <Box width="xlarge" display="flex">
          <Header.Item>
            <Header.Link href="#">
              <StyledOcticon
                icon={() => (
                  <svg
                    width="31"
                    height="32"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.3201 4C26.5394 4 26.7514 4.07884 26.9174 4.22215C27.287 4.54107 27.3389 5.09119 27.044 5.47281L27.0122 5.51167L26.5118 6.09143C25.3886 7.39286 23.7647 8.15209 22.0492 8.18194L21.944 8.18286H17.2067C15.589 8.18286 14.2733 9.47547 14.236 11.0841L14.2352 11.1543V12.7372C14.2352 12.9335 14.2806 13.1271 14.3679 13.3029C14.4285 13.425 14.5588 13.4903 14.6876 13.4731C14.9764 13.3456 15.2684 13.2203 15.5624 13.0975L15.8694 12.9609L15.8495 12.9787L16.1401 12.8605L16.4315 12.744L16.7235 12.6294L17.0156 12.5165L17.3078 12.4056L17.5997 12.2967L18.0365 12.1371L18.3266 12.0334L18.6156 11.9318L18.9031 11.8325L19.331 11.6879L19.7543 11.5488L20.0335 11.4591L20.3099 11.372L20.7189 11.2463L20.9873 11.1659L21.3831 11.0505L21.6419 10.9771L21.8965 10.9067L22.1465 10.8393L22.3917 10.7749L22.6318 10.7136L22.8666 10.6555L23.0957 10.6007L23.3191 10.5491L23.5363 10.501L23.7471 10.4562L23.9513 10.4149C23.9848 10.4083 24.018 10.4019 24.0509 10.3956L24.2446 10.3597L24.4311 10.3274C24.4616 10.3223 24.4917 10.3174 24.5215 10.3127L24.6966 10.286C24.7537 10.2777 24.8094 10.27 24.8638 10.263L25.0227 10.244C25.7191 10.167 26.1587 10.2091 26.235 10.3955C26.3014 10.5582 26.1445 10.8333 25.8137 11.1941L25.7235 11.2902L25.6256 11.39L25.5202 11.4935L25.4075 11.6006L25.2877 11.7112C25.2672 11.7299 25.2464 11.7488 25.2252 11.7678L25.0951 11.8834L24.9584 12.0022L24.7414 12.1862L24.589 12.3126L24.3493 12.5074L24.097 12.7084L23.8326 12.915L23.5568 13.1269L23.1726 13.4172L22.8729 13.6403L22.6679 13.7913L22.2466 14.0985L21.8112 14.4119L21.3635 14.7306L20.6721 15.2167L20.0811 15.6275L19.4798 16.0416L18.6268 16.6241L17.8187 17.1713L16.7886 17.8641L15.4454 18.7624C15.3358 18.8356 15.2268 18.9084 15.1186 18.9806C14.9391 19.1735 14.7811 19.386 14.6473 19.6142L14.5915 19.7129L14.4301 20.0092C14.3139 20.2227 14.2479 20.4596 14.2369 20.7018L14.2352 20.7746V27.0857C14.2352 27.5754 13.8503 27.9751 13.3666 27.9989L13.3209 28H10.4867C9.99702 28 9.59727 27.6151 9.57349 27.1313L9.57238 27.0857V23.1456C9.57238 23.0125 9.53408 22.8823 9.46207 22.7705C9.26261 22.4607 8.85771 22.3632 8.54075 22.5413L8.50458 22.5631L8.51325 22.5456C7.78447 22.8383 7.01738 23.1233 6.212 23.4004C6.00167 23.4728 5.77217 23.466 5.56649 23.3813C5.11415 23.1951 4.89102 22.6878 5.05226 22.2318L5.06907 22.1879L5.1328 22.0355C6.01564 19.9563 7.31671 18.1972 9.03599 16.7582C9.17024 16.6016 9.2839 16.428 9.3741 16.2416C9.49273 15.9965 9.55953 15.7299 9.5707 15.4584L9.57238 15.3768V8.11429C9.57238 5.86728 11.3737 4.04099 13.6111 4.00068L13.6867 4H26.3201Z"
                      fill="white"
                    />
                  </svg>
                )}
                size={32}
                sx={{ mr: 2 }}
              />
            </Header.Link>
          </Header.Item>
          <Header.Item full>
            <Autocomplete>
              <Autocomplete.Input
                onChange={handleChange}
                width={["200px", searchInputWidth ?? "200px"]}
                sx={{
                  transition: "width 80ms",
                }}
              />
              <Autocomplete.Overlay
                sx={{
                  width: ["200px", searchInputWidth ?? "200px"],
                  transition: "width 80ms",
                }}
              >
                <Autocomplete.Menu
                  items={packages.map((packageItem: any) => ({
                    text: packageItem.name,
                    id: packageItem.id,
                  }))}
                  selectedItemIds={[]}
                  aria-labelledby="autocompleteLabel-basic"
                  filterFn={customFilterFn}
                  onSelectedChange={handleOnSelectedChange}
                  onOpenChange={handleOnOpenChange}
                />
              </Autocomplete.Overlay>
            </Autocomplete>
          </Header.Item>
          <Header.Item>
            <Avatar
              src="https://github.com/octocat.png"
              size={20}
              square
              alt="@octocat"
            />
          </Header.Item>
        </Box>
      </Header>
    </PageLayout.Header>
  );
}
