import React, { useState } from "react";
import TextComponent from "./TextComponent";

export const Dropdown0 = (props) => {
  const { data, onChange = () => null } = props;
  // console.log("data",data)
  return (
    <div>
      <select
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          padding: " 8px 16px",
          gap: "30px",
          width: "181px",
          height: "56px",
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "10px",
          order: "1",
          flexGrow: "0",
          borderRadius: "5px",
          height: "56px",
          marginRight: "20px",
          opacity: "0.5",
          ...props.style,
        }}
        onChange={onChange}
      >
        {data.map((item) => {
          return <option value={item.id}>{item?.name || item}</option>;
        })}
      </select>
    </div>
  );
};

export const InputBox = (props) => {
  return (
    <div
      style={{
        paddingLeft: "400px",
        marginLeft: "18px",
        marginRight: "18px",
        background: "#F2F2F2",
        border: "1px solid #E8E8EA",
        borderRadius: "5px",
        width: "423px",
        height: "56px",

        flexDirection:
          props.type === "text" || props.type === "number" ? "column" : "row",
      }}
    >
      <TextComponent
        label={props.label}
        CustomTag={
          props.type === "text" || props.type === "number" ? "div" : "span"
        }
      />
      {(props.type === "text" || props.type === "number") && (
        <input {...props}></input>
      )}
    </div>
  );
};

export const Date = () => {
  return (
    <div>
      {/* <div style={{
    marginBottom:"7px"
   }}> <TextComponent label="Date" /></div> */}
      <input
        type="date"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          width: "260px",
          height: "56px",
          borderRadius: "4px",
          opacity: "0.5",

          //   paddingLeft: "10px",
          //   padding:10
          //   backgroundColor:'red',
        }}
      />
    </div>
  );
};

export const CheckBox = () => {
  return (
    <div
      style={{
        marginLeft: "20%",
        marginTop: "19px",
      }}
    >
      <input type="checkbox" name="FN" value="FN" />
    </div>
  );
};
export const Button = () => {
  // console.log(Button);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button
      style={{
        boxSizing: "border-box",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        background: "",
        marginLeft: "18px",
        backgroundColor: isActive ? "#5375E2" : "white",
        color: isActive ? "white" : "",
      }}
    >
      <div
        style={{
          padding: "19px",
          width: "15px",
        }}
        onClick={handleClick}
      >
        FN
      </div>
    </button>
  );
};
export const Button1 = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  return (
    <button
      style={{
        boxSizing: "border-box",

        border: " 1px solid #5375E2",
        borderRadius: "5px",
        background: "",
        marginLeft: "18px",
        backgroundColor: isActive ? "#5375E2" : "white",
        color: isActive ? "white" : "",
      }}
    >
      <div
        style={{
          padding: "19px",
          width: "15px",
        }}
        onClick={handleClick}
      >
        AN
      </div>
    </button>
  );
};

export const Time = () => {
  return (
    <div>
      <input
        type="Number"
        min="0"
        max="12"
        style={{
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          width: "68.5px",
          height: "56px",
          borderRadius: "5px",
          opacity: "0.5",

          //           height: 56px;
          // width: 68.52857208251953px;
          // left: 0px;
          // top: 0px;
          // border-radius: 5px;
        }}
      />
    </div>
  );
};

export const Time1 = () => {
  return (
    <div >
    
    <select style={{
      background: "#FFFFFF",
      border: "1px solid #E5E5E5",
      width: "68.5px",
      height: "56px",
      borderRadius: "5px",
      opacity: "0.5",
    }}>
 
 <option value="two">AM</option>
 <option value="three">PM</option>
</select>
    </div>
  );
};

export const InputBox1 = (props) => {
  return (
    <div>
      <div>
        <input
          type="text"
          style={{
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px",
            width: "340px",
            height: "55px",
          }}
        />
      </div>
    </div>
  );
};

export const DotBox = () => {
  return (
    <div
      style={{
        boxSizing: " border-box",
        width: "392px",
        height: "252px",
        left: "102px",
        top: "175px",
        background: "#F6F6F6",
        border: "1px dashed #000000",
        borderRadius: "10px",
        margin: "79px 30px 57px 102px",
      }}
    >
      <ButtonComponent1 />
    </div>
  );
};

export const Box1 = () => {
  return (
    <div
      style={{
        boxSizing: " border-box",
        width: "392px",
        height: "252px",
        left: "524px",
        top: "176px",
        border: "1px solid #FFA500",
        borderRadius: "10px",
        margin: "79px 30px 57px 30px",
      }}
    >
      <InnerBorder />
    </div>
  );
};
export const Box2 = () => {
  return (
    <div
      style={{
        boxSizing: " border-box",
        width: "392px",
        height: "252px",
        left: "524px",
        top: "176px",
        border: "1px solid #5375E2",
        borderRadius: "10px",
        margin: "79px 102px 56px 30px",
      }}
    >
      <InnerBorder1 />
    </div>
  );
};
export const Box3 = () => {
  return (
    <div
      style={{
        boxSizing: " border-box",
        width: "382px",
        height: "252px",
        left: "524px",
        top: "176px",
        border: "1px solid #5375E2",
        borderRadius: "10px",
        margin: "25px 30px 57px  92px",
      }}
    >
      <InnerBorder1 />
    </div>
  );
};

export const Box4 = () => {
  return (
    <div
      style={{
        boxSizing: " border-box",
        width: "392px",
        height: "252px",
        left: "524px",
        top: "176px",
        border: "1px solid #FFA500",
        borderRadius: "10px",
        margin: "25px 30px 57px 30px",
      }}
    >
      <InnerBorder />
    </div>
  );
};
export const Box5 = () => {
  return (
    <div
      style={{
        boxSizing: " border-box",
        width: "392px",
        height: "252px",
        left: "524px",
        top: "176px",
        border: "1px solid #FFA500",
        borderRadius: "10px",
        margin: "25px 92px 57px 30px",
      }}
    >
      <InnerBorder />
    </div>
  );
};
export const ButtonComponent1 = (props) => {
  const { type } = props;
  return (
    <div>
      <div>
        <button
          type={type}
          style={{
            marginLeft: "85px",
            marginTop: "90px",
            backgroundColor: "#5375e2",
            borderRadius: "10px",
            borderColor: "white",
          }}
        >
          <div
            style={{ fontSize: "20px", color: "white", padding: "15px 27px" }}
          >
            <TextComponent label="+ Create New" />
          </div>
        </button>
      </div>
    </div>
  );
};

export const InnerBorder = () => {
  return (
    <div
      style={{
        width: "380px",
        height: "56px",
        left: "102px",
        top: "680px",
        background: "#FFA500",
        borderRadius: "10px",
        marginTop: "195px",
      }}
    >
      <TextComponent
        label="Not Allocated"
        styleProps={{
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "27px",
          color: "#FFFFFF",
          padding: "12px 34px",
        }}
      />
    </div>
  );
};
export const InnerBorder1 = () => {
  return (
    <div
      style={{
        width: "380px",
        height: "56px",
        left: "102px",
        top: "680px",
        background: "#5375E2",
        borderRadius: "10px",
        marginTop: "195px",
      }}
    >
      <TextComponent
        label="Allocated"
        styleProps={{
          width: "96px",
          height: "27px",
          left: "986px",
          top: "385px",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "27px",
          color: "#FFFFFF",
          // padding:"12px 34px"
        }}
      />
    </div>
  );
};
