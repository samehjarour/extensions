import React from "react";
import {
  // getApplications, Grid, getPreferenceValues,
  // LaunchProps,
  List,
} from "@raycast/api";

// import { ErrorView } from "./components/ErrorView";
// import { useVisitedFiles } from "./hooks/useVisitedFiles";
// import { resolveAllFiles } from "./api";
// import { useCachedPromise } from "@raycast/utils";
// import type { TeamFiles } from "./types";
// import { loadStarredFiles } from "./starFiles";
import { terminal } from "./oauth";
import { withAccessToken } from "@raycast/utils";

function Command() {
  // const { data, isLoading, error } = useCachedPromise(
  //   async () => {
  //     const results = await resolveAllFiles();
  //     return results;
  //   },
  //   [],
  //   {
  //     keepPreviousData: true,
  //   },
  // );

  // const {
  //   data: starredFiles,
  //   isLoading: isLoadingStarredFiles,
  //   error: starredFilesError,
  //   revalidate: revalidateStarredFiles,
  // } = useCachedPromise(async () => {
  //   const results = await loadStarredFiles();
  //   return results;
  // }, []);

  // const { files: visitedFiles, visitFile, isLoading: isLoadingVisitedFiles } = useVisitedFiles();
  // const isLoadingBlock = isLoading || isLoadingVisitedFiles || isLoadingStarredFiles;
  // const [filteredFiles, setFilteredFiles] = useState(data);
  // const [isFiltered, setIsFiltered] = useState(false);
  // const [desktopApp, setDesktopApp] = useState<Application>();
  // const [searchText, setSearchText] = useState<string>(launchContext?.query ?? "");

  // useEffect(() => {
  //   getApplications()
  //     .then((apps) => apps.find((a) => a.bundleId === "com.figma.Desktop"))
  //     .then(setDesktopApp);
  // }, []);

  // useEffect(() => {
  //   setFilteredFiles(data);
  // }, [data]);

  // if (error || starredFilesError) {
  //   return <ErrorView />;
  // }

  // function handleDropdownChange(value: string) {
  //   if (data && !isLoading) {
  //     if (value === "All") {
  //       setFilteredFiles(data);
  //       setIsFiltered(false);
  //     } else if (value.includes("team=")) {
  //       setFilteredFiles(data.filter((team) => team.name === value.split("=")[1]));
  //       setIsFiltered(true);
  //     } else {
  //       setFilteredFiles([
  //         {
  //           name: value.split("&$%")[0],
  //           files: data
  //             .filter((team) => team.name === value.split("&$%")[0])[0]
  //             .files.filter((project) => project.name === value.split("&$%")[1]),
  //         } as TeamFiles,
  //       ]);
  //       setIsFiltered(true);
  //     }
  //   }
  // }

  // const { TEAM_ID } = getPreferenceValues();
  // const teamID: string[] = TEAM_ID.split(",").map((team: string) => team.toString().trim());
  // const filterDropdown = () => (
  //   <Grid.Dropdown
  //     tooltip={teamID.length > 1 ? "Teams" : "Projects"}
  //     defaultValue="All"
  //     onChange={handleDropdownChange}
  //   >
  //     <Grid.Dropdown.Item key="all" title={teamID.length > 1 ? "All teams" : "All projects"} value="All" />
  //     {teamID.length > 1 &&
  //       data?.map((team) => (
  //         <Grid.Dropdown.Item key={team.name} title={team.name} value={`team=${team.name}`} icon="team.svg" />
  //       ))}

  //     {data?.map((team) => (
  //       <Grid.Dropdown.Section title={team.name} key={team.name}>
  //         {team.files.map((project) => (
  //           <Grid.Dropdown.Item
  //             key={project.name}
  //             title={project.name}
  //             value={`${team.name}&$%${project.name}`}
  //             icon="project.svg"
  //           />
  //         ))}
  //       </Grid.Dropdown.Section>
  //     ))}
  //   </Grid.Dropdown>
  // );

  return (
    <List>
      <List.Item title="Raycast Coffee" />
    </List>
  );
}

export default withAccessToken(terminal)(Command);
