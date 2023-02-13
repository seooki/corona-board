const getDate = () => {
  const today = new Date();
  const getYear = today.getFullYear();
  const getMonth = (today.getMonth() + 1).toString();
  const getDay = today.getDate().toString();

  const monthArray = [...getMonth];
  const dayArray = [...getDay];

  if (monthArray.length < 2) {
    monthArray.unshift("0");
  }

  if (dayArray.length < 2) {
    dayArray.unshift("0");
  }

  const month = monthArray.join("");
  const day = dayArray.join("");

  const date = getYear + month + day;

  return date;
};

export default getDate;

// 한자리 숫자는 앞에 0 붙이기
// 년 월 일 - 구분

//배열로 바꾸고 배열 갯수가 한개라면 앞에 0추가하기
