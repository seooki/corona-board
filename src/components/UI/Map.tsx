import { useEffect } from "react";
import "../../styles/Map.scss";
import { sidoGeo } from "../../services/sidoGeo";
import getDate from "../../services/getDate";
export const Map = () => {
  const { naver }: any = window;
  const geo: {} = sidoGeo;

  console.log(geo);

  getDate();

  useEffect(() => {
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    var map = new naver.maps.Map("map", mapOptions);
  }, []);

  return (
    <>
      <div id="map"></div>
    </>
  );
};

/* default값으로 오늘 날짜의 코로나 확진자 수를 지도위에 maker로 표시한다
  날짜를 선택하면 선택한 날짜의 코로나 확진자 수를 지도위에 maker로 표시한다

*/
