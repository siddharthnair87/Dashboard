import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function usePartnersData() {
  const { data, error } = useSWR(
    `https://incrudibles.herokuapp.com/partners`,
    fetcher
  );

  return {
    response: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useResponsesData() {
  const { data, error } = useSWR(
    `https://incrudibles.herokuapp.com/responses`,
    fetcher
  );

  return {
    response: data,
    isLoading: !error && !data,
    isError: error,
  };
}
