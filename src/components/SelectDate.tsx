import "../styles/SelectDate.scss";

export const SelectDate = () => {
  return (
    <>
      <div className="input--bar">
        <input className="input--date" type="date"></input>
        <input type="submit" className="button" value="확인"></input>
      </div>
    </>
  );
};
