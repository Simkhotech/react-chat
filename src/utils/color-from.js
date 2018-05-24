import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from 'material-ui/colors/blueGrey';

const colors = [
  amber, blue, blueGrey, brown, cyan,
  deepOrange, deepPurple, green, grey,
  indigo, lightBlue, lightGreen, lime,
  orange, pink, purple, red, teal, yellow,
];

export default function colorFrom(string) {
  try {
    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0);

    const colorIndex = index % colors.length;

    return colors[colorIndex][500];
  } catch (e) {
    console.error(e);
    return blueGrey[500];
  }
}
