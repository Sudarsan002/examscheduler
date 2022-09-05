import React, { useState } from "react";
import TextComponent from "../src/Components/TextComponent";
import { Box } from "../src/Components/Box";
import {
  Date,
  CheckBox,
  Button,
  Button1,
  Time,
  Time1,
  Dropdown0,
  InputBox,
  InputBox1,
} from "../src/Components/Dropdown";
import Popup from "../src/Components/Popup";
import RadioButton from "../src/Components/Session";

export const SubEs = () => {
  const [branch, setBranch] = useState([
    { name: "select", id: "0" },
    { name: "B.E", id: "1" },
    { name: "B.Tech", id: "2" },
  ]);
  const [dept, setDept] = useState([
    { name: "I.T", id: "2" },
    { name: "C.S.E", id: "1" },
    { name: "EEE", id: "1" },
    { name: "ECE", id: "1" },
    { name: "MECH", id: "1" },
  ]);
  const [subcode, setSubcode] = useState([
    "19QSA011",
    "19HSM002",
    "19ASR008",
    "19CTR105",
    "19MNS202",
  ]);
  const [subjectName, setSubjectName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [examtype, setExamType] = useState(["Internal", "Model", "Semester"]);
  const [selectedDept, setSelectedDept] = useState([
    { name: "select", id: "0" },
  ]);

  const subjectsArray = [
    { subcode: "19QSA011", subName: "Measurement and Instrumentation" },
    { subcode: "19HSM002", subName: "Electrical Machines" },
    { subcode: "19ASR008", subName: "Power Systems" },
    { subcode: "19CTR105", subName: "Microcontrollers" },
    { subcode: "19MNS202", subName: "Control Systems" },
  ];

  const onChangeSelectBranch = (data) => {
    const selectedValue = data.target.value;
    setSelectedDept(
      dept.filter((selectDept) => selectDept.id === selectedValue)
    );
  };

  const onChangeSelectCode = (data) => {
    const selectedValue = data.target.value;
    const filter = subjectsArray.filter(
      (item) => item.subcode === selectedValue
    );
    console.log("hello",subjectsArray)
    setSubjectName(filter[0].subName);
  };

  return (  
    <>
      <Box
        style={{
          margin: "19.74px 122px 56px 122px",
          background: "#FBFBFB",
          fontWeight: "700",
          padding: "54.05px 61px 61.26px",
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
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
          <div>
            <TextComponent label="Branch" />
            <Dropdown0
              style={{ width: "344px" }}
              data={branch}
              onChange={onChangeSelectBranch}
            />
          </div>
          <div>
            <TextComponent label="Department" />
            <Dropdown0 style={{ width: "344px" }} data={selectedDept} />
          </div>
          <div>
            <TextComponent label="Semester " />
            <InputBox1 />
            {/* <input type="text" /> */}
          </div>
        </div>
        <div
          style={{
            marginTop: "25px",
          }}
        >
          <TextComponent label="Exam Type" />
          <Dropdown0 style={{ width: "1090px" }} data={examtype} />
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
            </div>
          </div>

          <Time />
          <Time />
          <Time1 />

          <div
            style={{
              marginTop: "15px",
            }}
          >
            <TextComponent label="to" />
          </div>
          <Time />
          <Time />
          <Time1 />
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
          <Time1 />
          <TextComponent
            style={{
              padding: "15px",
            }}
            label="to"
          />
          <Time />
          <Time />
          <Time1 />
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
            <div style={{ marginLeft: "570px", paddingLeft: "22px" }}>
              <TextComponent label="Date" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            width: "423px",
            height: "56px",
            top: "921.422119140625px",
            borderRadius: "5px",
          }}
        >
          <Dropdown0 data={subcode} onChange={onChangeSelectCode} />
          <InputBox text={subjectName} />
          <Date />
         <RadioButton/>
          
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
              <div style={{ paddingLeft: "22px" }}>
                <TextComponent label="Date" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
          <Dropdown0 data={subcode} onChange={onChangeSelectCode} />
          <InputBox text={subjectName} />
          <Date />
          <RadioButton/>
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
              <div style={{ paddingLeft: "22px" }}>
                <TextComponent label="Date" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
          <Dropdown0 data={subcode} onChange={onChangeSelectCode} />
          <InputBox text={subjectName} />
          <Date />
          <RadioButton/>
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
            <div style={{ marginLeft: "570px", paddingLeft: "22px" }}>
              <TextComponent label="Date" />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
          <Dropdown0 data={subcode} onChange={onChangeSelectCode} />
          <InputBox text={subjectName} />
          <Date />
          <RadioButton/>
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
              <div
                style={{
                  paddingLeft: "22px",
                }}
              >
                <TextComponent label="Date" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            width: "344px",
            height: "56px",
          }}
        >
          <Dropdown0 data={subcode} onChange={onChangeSelectCode} />
          <InputBox text={subjectName} />
          <Date />
          <RadioButton/>
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
            <div style={{ marginLeft: "600px", paddingLeft: "22px" }}>
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
          <RadioButton/>
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
                <div
                  style={{
                    paddingLeft: "22px",
                  }}
                >
                  <TextComponent label="Date" />
                </div>
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
          <RadioButton/>
        </div>
      </Box>
      <Popup modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {/* <Submit /> */}
    </>
  );
};
