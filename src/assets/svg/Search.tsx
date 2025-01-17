import * as React from 'react';
import Svg, {Path, Rect, SvgProps} from 'react-native-svg';

export const Search = (props: SvgProps) => (
  <Svg
    fill="#000000"
    width="24px"
    height="24px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    {...props}>
    <Path d="M16.33,5.05A10.95,10.95,0,1,1,5.39,16,11,11,0,0,1,16.33,5.05m0-2.05a13,13,0,1,0,13,13,13,13,0,0,0-13-13Z" />
    <Path d="M35,33.29l-7.37-7.42-1.42,1.41,7.37,7.42A1,1,0,1,0,35,33.29Z" />
    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </Svg>
);
