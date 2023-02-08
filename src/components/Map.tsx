import { useEffect } from "react";
import "../styles/Map.scss";
export const Map = () => {
  const { naver }: any = window;

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
