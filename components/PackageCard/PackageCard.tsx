import React from "react";
import { Box, Link, StyledOcticon, Text, Tooltip, Button } from "@primer/react";
import { PlayIcon } from "@primer/octicons-react";
import NpmIcon from "../../assets/icons/npmIcon";
import { IPackage, IPackageType } from "../../utils/interfaces";

const PackageCardIcon = {
  [IPackageType.NPM]: NpmIcon,
  [IPackageType.GITHUB_ACTION]: PlayIcon,
};

const PackageCardTooltip = {
  [IPackageType.NPM]: "Npm Package",
  [IPackageType.GITHUB_ACTION]: "Github Action",
};

interface IPackageCardProps extends IPackage {}

export default function PackageCard({
  type,
  packageUrl,
  id,
  name,
  githubUrl,
  description,
  docUrl,
}: IPackageCardProps): JSX.Element {
  return (
    <Box
      backgroundColor="canvas.subtle"
      borderColor="border.default"
      borderWidth={1}
      borderStyle="solid"
      borderRadius={10}
    >
      <Box
        backgroundColor="neutral.subtle"
        px={3}
        py={2}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      >
        <Text fontWeight="bold">{name}</Text>
      </Box>
      <Box p={3}>
        <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
          <Box flexGrow={1}>
            <Link
              href={githubUrl ?? "#"}
              target="_blank"
              sx={{ fontWeight: "bold" }}
            >
              {id}
            </Link>
          </Box>
          {type && PackageCardIcon[type] ? (
            <Tooltip aria-label={PackageCardTooltip[type] || ""}>
              <Link href={packageUrl ?? "#"} target="_blank">
                <StyledOcticon icon={PackageCardIcon[type]} size={24} />
              </Link>
            </Tooltip>
          ) : null}
        </Box>
      </Box>

      <Box backgroundColor="canvas.default" p={3}>
        <Text>{description ?? ""}</Text>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        gridGap={3}
        backgroundColor="canvas.subtle"
        px={3}
        py={2}
        borderBottomLeftRadius={10}
        borderBottomRightRadius={10}
      >
        <Button variant="outline" as={Link} href={docUrl ?? "#"}>
          Documentation
        </Button>
        <Button variant="outline" as={Link} href="#">
          Demo
        </Button>
      </Box>
    </Box>
  );
}
