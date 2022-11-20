import Script from 'next/script';
import { Map, Circle, Polygon } from 'react-kakao-maps-sdk';
import { KAKAO_SDK_URL } from 'consts';

const KakaoMap = () => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 33.450701, lng: 126.570667 }} style={{ width: '100%', height: '100%' }}>
        <Circle
          center={{
            lat: 33.450701,
            lng: 126.570667,
          }}
          radius={50}
          strokeWeight={5} // 선의 두께입니다
          strokeColor={'#75B8FA'} // 선의 색깔입니다
          strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'dash'} // 선의 스타일 입니다
          fillColor={'#CFE7FF'} // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
        />
        <Polygon
          path={[
            { lat: 33.45133510810506, lng: 126.57159381623066 },
            { lat: 33.44955812811862, lng: 126.5713551811832 },
            { lat: 33.449986291544086, lng: 126.57263296172184 },
            { lat: 33.450682513554554, lng: 126.57321034054742 },
            { lat: 33.451346760004206, lng: 126.57235740081413 },
          ]}
          strokeWeight={3} // 선의 두께입니다
          strokeColor={'#39DE2A'} // 선의 색깔입니다
          strokeOpacity={0.8} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle={'longdash'} // 선의 스타일입니다
          fillColor={'#A2FF99'} // 채우기 색깔입니다
          fillOpacity={0.7} // 채우기 불투명도 입니다
        />
      </Map>
    </>
  );
};

export default KakaoMap;
