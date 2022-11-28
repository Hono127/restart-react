const ColorfulMessage = (props) => {
  const { color, children } = props;
  const pinkStyle = {

    color: color,
    fontSize: '18px'
  };
  return (
    <div style={pinkStyle}>{children}</div>
  )
}

export default ColorfulMessage