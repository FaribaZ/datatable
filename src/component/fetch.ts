export interface Row {
  last_name: string;
  id: number;
  state: string;
  gender: string;
  job: string;
  [key: string]: string | number;
}


export interface ResponseData {
  users?: Row[];
  total_users: number;
  products?: Row[];
}
export interface TableProps {
  rows: Row[];
  handleSort: (column: string) => void;
  emptyRows: any;
  columns: { key: string; label: string }[];
}
export const fetchRows = async (pathParam: string): Promise<ResponseData> => {
  // console.log(process.env.REACT_APP_BASE_URL);
  const url = `${process.env.REACT_APP_BASE_URL}${pathParam}`;
  console.log(url);
  const response = await fetch(url);
  const data: ResponseData = await response.json();
  return data;
};


