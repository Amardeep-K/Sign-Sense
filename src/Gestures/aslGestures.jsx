// aslA.js
import * as fp from "fingerpose";
const aslAGesture = new fp.GestureDescription("A");
aslAGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslAGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslAGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslAGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslAGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslBGesture = new fp.GestureDescription("B");
aslBGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
[fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky].forEach(finger => {
  aslBGesture.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
  aslBGesture.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
});

const aslCGesture = new fp.GestureDescription("C");
aslCGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslCGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
aslCGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 1.0);
aslCGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
aslCGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);

const aslDGesture = new fp.GestureDescription("D");
aslDGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
aslDGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslDGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslDGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslDGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslEGesture = new fp.GestureDescription("E");
aslEGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
aslEGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslEGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslEGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslEGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslFGesture = new fp.GestureDescription("F");
aslFGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslFGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslFGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
aslFGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
aslFGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

const aslGGesture = new fp.GestureDescription("G");
// Thumb: no curl, horizontal
aslGGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslGGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
aslGGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);

// Index: no curl, horizontal
aslGGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslGGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
aslGGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);

// Middle, Ring, Pinky: full curl
[fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky].forEach(finger => {
  aslGGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
});

const aslHGesture = new fp.GestureDescription("H");
aslHGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
[fp.Finger.Index, fp.Finger.Middle].forEach(finger => {
    aslHGesture.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    aslHGesture.addDirection(finger, fp.FingerDirection.HorizontalRight, 1.0);
    aslHGesture.addDirection(finger, fp.FingerDirection.HorizontalLeft, 1.0);
  });
  [fp.Finger.Ring, fp.Finger.Pinky].forEach(finger => {
    aslHGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  });

const aslIGesture = new fp.GestureDescription("I");
aslIGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
aslIGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslIGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

const aslJGesture = new fp.GestureDescription("J");
aslJGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 0.5);
aslJGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.5);
aslJGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslJGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslJGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslJGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

const aslKGesture = new fp.GestureDescription("K");
// Thumb: Half curl, pointing diagonally up
aslKGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
// aslKGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
// aslKGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

// Index: No curl, pointing straight up
aslKGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslKGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

// Middle: No curl, slightly angled
aslKGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
aslKGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);
aslKGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);

// Ring and Pinky: Full curl
[fp.Finger.Ring, fp.Finger.Pinky].forEach(finger => {
  aslKGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
});

const aslLGesture = new fp.GestureDescription("L");
// Index: No curl, vertical up
aslLGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslLGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);

// Thumb: No curl, horizontal
aslLGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslLGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
aslLGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);

// Other fingers: Full curl
[fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky].forEach(finger => {
  aslLGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
});

const aslMGesture = new fp.GestureDescription("M");
aslMGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslMGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
aslMGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
[fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring].forEach(finger =>
  aslMGesture.addCurl(finger, fp.FingerCurl.HalfCurl, 1.0)
);
aslMGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslNGesture = new fp.GestureDescription("N");
aslNGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
aslNGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslNGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
aslNGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslNGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslOGesture = new fp.GestureDescription("O");
aslOGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
aslOGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslOGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslOGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslOGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslPGesture = new fp.GestureDescription("P");
aslPGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
aslPGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 10);
aslPGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslPGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownLeft, 10);
aslPGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalDownRight, 10);
aslPGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
[fp.Finger.Ring, fp.Finger.Pinky].forEach(finger =>
  aslPGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0)
);

const aslQGesture = new fp.GestureDescription("Q");
aslQGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslQGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 0.75);
aslQGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslQGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalDown, 0.75);
[fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky].forEach(finger =>
  aslQGesture.addCurl(finger, fp.FingerCurl.FullCurl, 1.0)
);
const aslRGesture = new fp.GestureDescription("R");
aslRGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslRGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslRGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
aslRGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslRGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslSGesture = new fp.GestureDescription("S");
aslSGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
aslSGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslSGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslSGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslSGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslTGesture = new fp.GestureDescription("T");
aslTGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslTGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslTGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslTGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslTGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslUGesture = new fp.GestureDescription("U");
aslUGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslUGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslUGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
aslUGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslUGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslVGesture = new fp.GestureDescription("V");
aslVGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslVGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslVGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
aslVGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslVGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslWGesture = new fp.GestureDescription("W");
aslWGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
aslWGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
aslWGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslXGesture = new fp.GestureDescription("X");
aslXGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);
aslXGesture.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
aslXGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslXGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslXGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

const aslYGesture = new fp.GestureDescription("Y");
aslYGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslYGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
aslYGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslYGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslYGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);

const aslZGesture = new fp.GestureDescription("Z");
aslZGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
aslZGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
aslZGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
aslZGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);
aslZGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
aslZGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
aslZGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);


// Export all gestures as a module
const gestures = {
  A: aslAGesture,
  B: aslBGesture,
  C: aslCGesture,
  D: aslDGesture,
  E: aslEGesture,
  F: aslFGesture,
  G: aslGGesture,
  H: aslHGesture,
  I: aslIGesture,
  J: aslJGesture,
  K: aslKGesture,
  L: aslLGesture,
  M: aslMGesture,
  N: aslNGesture,
  O: aslOGesture,
  P: aslPGesture,
  Q: aslQGesture,
  R: aslRGesture,
  S: aslSGesture,
  T: aslTGesture,
  U: aslUGesture,
  V: aslVGesture,
  W: aslWGesture,
  X: aslXGesture,
  Y: aslYGesture,
  Z: aslZGesture,
};

export default gestures;