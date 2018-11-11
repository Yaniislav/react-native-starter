import { StyleSheet } from 'react-native';

const getAndroidTextStyle = (style, isHanzipen) => {
  const fontWeight = style ? StyleSheet.flatten(style).fontWeight : null;
  const fontFamily = isHanzipen ? 'Hanzipen_SC_regular' : parseHelveticanFont(fontWeight);
  return {
    fontFamily,
    fontWeight: undefined,
  };
};

const parseHelveticanFont = (fontWeight) => {
  switch (fontWeight) { // eslint-disable-line
    // Thin
    case '100': return 'Helveticaneuecyr_thin';
    // Ultra Light
    case '200': return 'Helveticaneuecyr_ultralight';
    // Light
    case '300': return 'Helveticaneuecyr_light';
    // Regular
    case '400':
    // Medium
    case '500':
    // Semibold
    case '600':
    // Bold
    case '700':
    // Heavy
    case '800': return 'Helveticaneuecyr_bold';
    default:
      return 'Helveticaneuecyr_light';
  }
};

export default getAndroidTextStyle;
