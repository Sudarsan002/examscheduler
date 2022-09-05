import React, { useState } from "react";
import { AllocationPageComp } from "../src/Components/AllocationPageComp";
//import GlobalStyle from "../src/GlobalStyle";
import Footer from "../src/Layouts/Footer";
import Header from "../src/Layouts/Header";

const AllocationPage = (props) => {
  // const { subjectDetails } = props;
  const [cardDetails, setCardDetails] = useState([
    {
      createCard: true,
    },
    {
      heading: "BE IT SEM3",
      branch: "B.E",
      department: "I.T",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: false,
    },
    {
      heading: "BE EEE SEM 3",
      branch: "B.E",
      department: "I.T",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: true,
    },
    {
      heading: "BTECH CIVIL SEM5",
      branch: "B.E",
      department: "I.T",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: true,
    },
    {
      heading: "BE CSE SEM 3",
      branch: "B.E",
      department: "I.T",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: false,
    },
    {
      heading: "BTECH CSBS SEM2",
      branch: "B.E",
      department: "I.T",
      semester: "3",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: true,
    },
  ]);

  const onDelete = (item, index) => {
    // create duplicate Value
    const tempCardDetails = [...cardDetails];
    tempCardDetails.splice(index, 1);
    setCardDetails(tempCardDetails);
  };
  return (
    <>
      <Header />
      <div
        style={{
          padding: "37px 120px",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {cardDetails?.map((item, index) => {
          return (
            <AllocationPageComp
              isCreateCard={item?.createCard}
              heading={item?.heading}
              deletePress={() => null}
              editPress={() => null}
              branch={item?.branch}
              department={item?.department}
              semester={item?.semester}
              subject={item?.subject}
              lab={item?.lab}
              ExamType={item?.ExamType}
              isCompleted={item?.completed}
              // marginRight={(index + 1) % 3 !== 0 ? "20px" : 0}
              marginTop={51}
             deletePress={() => onDelete(item, index)}
            // editPress={()=> }

            />
          );
        })}
      </div>

      <Footer />
    </>
  );
};
export default AllocationPage;
