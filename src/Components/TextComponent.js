import React from "react";
const TextComponent = (props) => {
  const { styleProps, label, className, CustomTag = "div" } = props;
  console.log("hello", props.label);
  return (
    <CustomTag className={className} style={styleProps}>
      {label}
    </CustomTag>
  );
};

export default TextComponent;

export const TextComponent1 = (props) => {
  const { styleProps, label, className, CustomTag = "div" } = props;
  console.log("hello", props.label);
  return <CustomTag className={className}>{label}</CustomTag>;
};
