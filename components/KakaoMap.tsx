import { KAKAO_SDK_URL } from 'consts';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

const KakaoMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      kakao.maps.load(() => {
        // @ts-ignore
        map.current = new kakao.maps.Map(mapContainer.current, {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 6,
        });
      });
    }
  }, [mapContainer.current]);

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <div ref={mapContainer} className="w-full h-full bg-gray-200">
        Kakao map
      </div>
    </>
  );
};

export default KakaoMap;
