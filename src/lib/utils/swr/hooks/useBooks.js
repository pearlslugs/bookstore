import useSWR from "swr";
import fetcher from "./fetcher";

const useBooks = () => {
  const { data, error, mutate } = useSWR(
   `/api/getBooks`,
    fetcher,
    { revalidateOnFocus: false }
  );

  return {
    books: data,
    booksError: error,
    booksIsLoading: !error && !data,
    mutateBooks: mutate,
  };
};

export default useBooks;
