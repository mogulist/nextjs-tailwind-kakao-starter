import { KAKAO_SDK_URL } from 'consts';
import { useEffect, useRef } from 'react';

const KakaoMap = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = KAKAO_SDK_URL;
    document.head.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      kakao.maps.load(() => {
        // @ts-ignore
        map.current = new kakao.maps.Map(mapContainer.current, {
          // @ts-ignore
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 6,
        });
      });
    };
  }, [mapContainer]);

  return (
    <div ref={mapContainer} className="w-full h-full bg-gray-200">
      Kakao map
    </div>
  );
};

export default KakaoMap;
