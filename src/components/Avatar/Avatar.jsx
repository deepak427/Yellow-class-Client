const Avatar = ({
  children,
  backgroundColor,
  px,py,
  borderRadius,
  color,
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    borderRadius,
    textAlign: "center",
    color: color || "black",
    backgroundSize: "100%",
    marginRight: "0.2rem",
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
