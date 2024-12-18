import { useQuery } from "@tanstack/react-query";

import { getProjects } from "./client";

export const useProjectData = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });

  return { data, error, isLoading };
};
