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
export const fetchRows = async (pathParam: string): Promise<ResponseData> => {
  // console.log(process.env.REACT_APP_BASE_URL);
  const url = `${process.env.REACT_APP_BASE_URL}${pathParam}`;
  const response = await fetch(url);
  const data: ResponseData = await response.json();
  return data;
};


