export const clockProps = (props = [], suffix = "px") => {
  const applySuffix = (prop) => prop + (isNaN(prop) ? "" : suffix);

  const cssProps = props.map(applySuffix).join(" ");

  return cssProps;
};

export const toAlphaHex = opacity => opacity 
  ? Math.round(opacity * 15).toString(16).repeat(2)
  : "";
