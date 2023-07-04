export interface Row {
  last_name: string;
  id: number;
  state: string;
  gender: string;
  job: string;
  [key: string]: string | number;
}

export interface ResponseData {
  users: Row[];
  total_users: number;
}

export const fetchRows = async (
  page: number,
  rowsPerPage: number,
  searchQuery: string,
  sortDirection: string
): Promise<ResponseData> => {
  const url = `https://api.slingacademy.com/v1/sample-data/users?offset=${page}&limit=${rowsPerPage}&search=${searchQuery}&sort=${sortDirection}`;
  const response = await fetch(url);
  const data: ResponseData = await response.json();
  return data;
};

// const [debouncedFetchRows] = useState(() => debounce(fetchRows, 300));
