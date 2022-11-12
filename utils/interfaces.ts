export interface IPackage {
  id: string;
  name: string;
  description: string;
  type: IPackageType;
  currentVersion: string;
  releasedDate: string;
  docUrl: string;
  githubUrl: string;
  packageUrl: string;
}

export enum IPackageType {
  NPM = "NPM",
  GITHUB_ACTION = "GITHUB_ACTION",
}
