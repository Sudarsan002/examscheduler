import React, {useState} from "react";
import TextComponent from "../src/Components/TextComponent";
import { Box } from "../src/Components/Box";
import {
  Dropdown,
  Dropdown1,
  Date,
  CheckBox,
  Button,
  Button1,
  Submit,
  Time,
  Dropdown0,
  InputBox,
  InputBox1,
  Dropdown4,
} from "../src/Components/Dropdown";
//import Drop from"../src/Components/Drop"

export const SubEs = () => {

  const [branch,setBranch] = useState(['B.E','B.Tech'])
  const [dept,setDept] = useState(['I.T','C.S.E','EEE','ECE'])
  const [subcode,setSubcode]=useState(['19QSA011','19HSM002','19ASR008','19CTR105','19MNS202'])
  const [examtype,setExamType]=useState(['Internal','Model','Semester'])
  return (
    <>
      <Box
        style={{
          margin: "19.74px 122px 56px 122px",

          background: "#FBFBFB",
          fontWeight: "700",
          //   height:"1464px",
          //   width:"1196px",
          // padding: "95.05px 122px 56.26px 122px",
          padding: "54.05px 61px 61.26px",
          //   BorderRadius:"19px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontWeight: "700",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // padding: " 8px 16px",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
          <div>
            <TextComponent label="Branch" />
            <Dropdown0 style={{width:"344px"}} data={branch}/>
          </div>
          <div>
            <TextComponent label="Department" />
            <Dropdown0 style={{width:"344px"}} data={dept} />
          </div>
          <div>
            <TextComponent label="Semester " />
            <InputBox1  />
            {/* <input type="text" /> */}
          </div>
        </div>
        <div
          style={{
            marginTop: "25px",
          }}
        >
          <TextComponent label="Exam Type" />
          <Dropdown0 data={examtype} />
        </div>

        <div
          style={{
            marginTop: "13px",
            marginBottom: "12px",
          }}
        >
          {" "}
          <TextComponent label="Time Range" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "21px",
          }}
        >
          <div
            style={{
              width: "21px",
              height: "22px",
              left: "179px",
              top: "517px",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "22px",
              marginLeft: "0px",
            }}
          >
            <div
              style={{
                marginTop: "15px",
              }}
            >
              <TextComponent label="FN" />
              {/* <div style={{
              
                  opacity:"0.5",
                  marginLeft:"900px"
            }}>  <TextComponent label="Set all for FN"/></div> */}
            </div>
          </div>

          <Time />
          <Time />
          <Time />

          <div
            style={{
              marginTop: "15px",
            }}
          >
            <TextComponent label="to" />
          </div>
          <Time />
          <Time />
          <Time />
          <CheckBox />
          <label
            style={{
              opacity: "0.5",
              marginTop: "18px",
            }}
          >
            Set for all FN
          </label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "21px",
            // padding: "10px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "21px",
              height: "22px",
              left: "179px",
              top: "517px",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "22px",
            }}
          >
            <div
              style={{
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  marginTop: "15px",
                }}
              >
                <TextComponent label="AN" />
              </div>
            </div>
          </div>

          <Time />
          <Time />
          <Time />
          <TextComponent
            style={{
              padding: "15px",
            }}
            label="to"
          />
          <Time />
          <Time />
          <Time />
          <CheckBox />
          <label
            style={{
              opacity: "0.5",
              marginTop: "18px",
            }}
          >
            Set for all AN
          </label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              marginRight: "30px",
            }}
          >
            <div
              style={{
                marginTop: "10px",
              }}
            >
              {" "}
              <TextComponent label="Subjects" />
            </div>
            <InputBox1 />
          </div>
          <div>
            <div
              style={{
                marginTop: "10px",
              }}
            >
              {" "}
              <TextComponent label="Labs" />
            </div>
            <InputBox1 />
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextComponent label="Subject1" />
            <div style={{ marginLeft: "570px",paddingLeft:"22px"}}>
              <TextComponent label="Date" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // padding: " 8px 16px",
            gap: "8px",
            width: "423px",
            height: "56px",
            top: "921.422119140625px",
            borderRadius: "5px",
          }}
        >
          <Dropdown0  data={subcode} />
          <InputBox />
          <Date />
          <Button />
          <Button1 />
        </div>
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextComponent label="Subject2" />
            <div
              style={{
                marginLeft: "570px",
              }}
            >
             <div style={{ paddingLeft:"22px" }}>
              <TextComponent label="Date" /></div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            //padding: " 8px 16px",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
         <Dropdown0 data={subcode} />
          <InputBox />
          <Date />
          <Button />
          <Button1 />
        </div>
        <div style={{ marginTop: "10px" }}>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextComponent label="Subject3" />
            <div
              style={{
                marginLeft: "570px",
              }}
            >
             <div style={{ paddingLeft:"22px" }}>
              <TextComponent label="Date" /></div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            //padding: " 8px 16px",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
          <Dropdown0 data={subcode} />
          <InputBox />
          <Date />
          <Button />
          <Button1 />
        </div>
        <div style={{ marginTop: "10px" }}>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextComponent label="Subject4" />
            <div style={{ marginLeft: "570px",paddingLeft:"22px" }}>
              <TextComponent label="Date" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            //padding: " 8px 16px",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
         <Dropdown0 data={subcode} />
          <InputBox />
          <Date />
          <Button />
          <Button1 />
        </div>
        <div style={{ marginTop: "10px" }}>
          {" "}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextComponent label="Subject5" />
            <div
              style={{
                marginLeft: "570px",
              }}
            >
             <div style={{
                  paddingLeft:"22px"
                }}>
                <TextComponent label="Date"  /></div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            //padding: " 8px 16px",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
        <Dropdown0 data={subcode} />
          <InputBox />
          <Date />
          <Button />
          <Button1 />
        </div>
        <div
          style={{
            width: "35px",
            height: "27px",
            left: "178px",
            top: "1356.26px",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "27px",
            color: " #000000",
            borderTop: "10px",
          }}
        >
          <div style={{ marginTop: "1px" }}>
            {" "}
            <div style={{ marginTop: "15px" }}>
              <TextComponent label="Lab" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TextComponent label="Lab1" />
            <div style={{ marginLeft: "600px" ,paddingLeft:"22px"}}>
              <TextComponent label="Date" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "344px",
            height: "56px",
            marginTop: "10px",
            marginLeft: "4px",
          }}
        >
         <Dropdown0 data={subcode} />
          <InputBox />
          <Date />
          <Button />
          <Button1 />
        </div>
        <div style={{ display: "flex", marginRight: "300px" }}>
          <div style={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TextComponent label="Lab2" />
              <div
                style={{
                  marginLeft: "600px",
                }}
              >
                {" "}
                <div style={{
                  paddingLeft:"22px"
                }}>
                <TextComponent label="Date"  /></div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: " 8px 16px",
            gap: "8px",
            width: "344px",
            height: "56px",
            padding: "4px",
          }}
        >
          <Dropdown0 data={subcode} />
          <InputBox />
          <Date />
          <Button />
          <Button1 />
        </div>
      </Box>
      <Submit />
    </>
  );
};
