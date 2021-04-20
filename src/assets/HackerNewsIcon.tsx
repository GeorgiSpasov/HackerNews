import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HackerNewsIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <Path d="M42 42H6V6h36z" fill="#FF6D00" />
      <Path d="M8 8v32h32V8zm30 30H10V10h28z" fill="#FFF" />
      <Path
        d="M23 32h2v-6l5.5-10h-2.102L24 24.102 19.602 16H17.5L23 26z"
        fill="#FFF"
      />
    </Svg>
  );
}

export default HackerNewsIcon;
