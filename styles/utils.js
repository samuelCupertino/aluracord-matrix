export const clockProps = (props = [], suffix = "px") => {
  const applySuffix = (prop) => prop + (isNaN(prop) ? "" : suffix);

  const cssProps = props.map(applySuffix).join(" ");

  return cssProps;
};
