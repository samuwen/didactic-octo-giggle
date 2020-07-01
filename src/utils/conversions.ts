export default class Conversion {
  static gramsToLbs(q: number) {
    return q / 453.5;
  }

  static lbsToGrams(q: number) {
    return q * 453.5;
  }
}
