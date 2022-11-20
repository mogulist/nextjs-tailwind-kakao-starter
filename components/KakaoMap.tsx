import { useEffect, useRef } from 'react';

const KakaoMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    let map = new kakao.maps.Map(mapRef.current, {
      // @ts-ignore
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 6,
    });
  }, []);

  return (
    <div ref={mapRef} id="map" className="w-full h-full bg-gray-200">
      Kakao map
    </div>
  );
};

export default KakaoMap;
