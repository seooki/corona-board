import axios from "axios";

export const getCoronaData = (sido: string, date: string) => {
  const url = `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=REACT_APP_APIS_KEY&std_day=${date}&gubun=${sido}`;
  axios
    .get(url)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
