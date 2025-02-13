import {Skia} from '@shopify/react-native-skia';

// constants
import {Constants} from '../utils';

const topX = Constants.SCREEN_WIDTH / 4; // starting X position for first shape

// top shape
const topShapePath = Skia.Path.Make();
topShapePath.moveTo(topX, 0);
topShapePath.quadTo(
  Constants.SCREEN_WIDTH * 0.3,
  (Constants.SCREEN_HEIGHT * 0.2) / 2,
  Constants.SCREEN_WIDTH * 0.6,
  (Constants.SCREEN_HEIGHT * 0.2) / 4,
);
topShapePath.quadTo(
  Constants.SCREEN_WIDTH / 2 + 80,
  (Constants.SCREEN_HEIGHT * 0.2) / 8,
  Constants.SCREEN_WIDTH * 0.85,
  Constants.SCREEN_HEIGHT * 0.16,
);
topShapePath.quadTo(
  Constants.SCREEN_WIDTH * 0.95,
  Constants.SCREEN_HEIGHT * 0.22,
  Constants.SCREEN_WIDTH,
  Constants.SCREEN_HEIGHT * 0.14,
);
topShapePath.moveTo(Constants.SCREEN_WIDTH, Constants.SCREEN_HEIGHT * 0.14);
topShapePath.lineTo(Constants.SCREEN_WIDTH, 0);
topShapePath.lineTo(topX, 0);
topShapePath.close();

// bottom shape
const bottomShapePath = Skia.Path.Make();
bottomShapePath.moveTo(-10, 30);
bottomShapePath.quadTo(
  Constants.SCREEN_WIDTH * 0.08,
  -30,
  Constants.SCREEN_WIDTH * 0.13,
  Constants.SCREEN_HEIGHT * 0.05,
);
bottomShapePath.lineTo(
  Constants.SCREEN_WIDTH * 0.16,
  Constants.SCREEN_HEIGHT * 0.13,
);
bottomShapePath.quadTo(
  Constants.SCREEN_WIDTH * 0.2,
  Constants.SCREEN_HEIGHT * 0.18,
  Constants.SCREEN_WIDTH * 0.3,
  Constants.SCREEN_HEIGHT * 0.14,
);
bottomShapePath.quadTo(
  Constants.SCREEN_WIDTH * 0.5,
  Constants.SCREEN_HEIGHT * 0.08,
  Constants.SCREEN_WIDTH * 0.7,
  Constants.SCREEN_HEIGHT * 0.16,
);
bottomShapePath.quadTo(
  Constants.SCREEN_WIDTH * 0.8,
  Constants.SCREEN_HEIGHT * 0.2,
  Constants.SCREEN_WIDTH * 0.7,
  Constants.SCREEN_HEIGHT * 0.22,
);
bottomShapePath.lineTo(0, Constants.SCREEN_HEIGHT);
bottomShapePath.lineTo(-10, Constants.SCREEN_HEIGHT * 0.88);
bottomShapePath.close();

export default {
  topShapePath,
  bottomShapePath,
};
