function hexToRgb(hex: string) {
  const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) return normal.slice(1).map((e) => parseInt(e, 16));

  const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shorthand) return shorthand.slice(1).map((e) => 0x11 * parseInt(e, 16));

  return null;
}

const DEFAULT_ALFA = 0.6;

export const CHART_COLORS: Array<string> = [
  `rgba(${hexToRgb("#264c99")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#0c7012")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#bf7200")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#720072")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#007294")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#b72153")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#4c7f00")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#8a2222")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#244a6f")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#723372")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#197f72")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#7f7f0c")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#4c2699")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#ac5600")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#680505")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#4b0c4d")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#256d49")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#3f577c")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#2c2e81")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#a52a0d")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#895619")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#10a017")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#8a0e62")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#d30b79")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#754227")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#7e930e")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#1f5969")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#4c6914")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#8e7b0e")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#084219")}, ${DEFAULT_ALFA})`,
  `rgba(${hexToRgb("#57270c")}, ${DEFAULT_ALFA})`,
];
