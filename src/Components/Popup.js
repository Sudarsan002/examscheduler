import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { Box } from "./Box";

function Popup(props) {
  const {setModalOpen,modalOpen} = props
  
  return (
    // <Box style={{height:'100%',width:'100%'}}>
    <Box style={{
      height:"293px",
      width:"908px",
    }}>
    
      <Button 
         style={{

          width: "174px",
          height: "40px",
          background: "#5375E2",
          borderRadius: " 5px",

          margin: "4px 59px 88.56px 1201px",
      }} type="button" onClick={() => setModalOpen(!modalOpen)}>
        Save
      </Button>

      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div
          style={{
            width: "100%",
            height: "22px",
            left: "817px",
            top: "16px",
            fontSize: "16px",
            lineHeight: "22px",
            textDecorationLine: "underline",
            color: "#5375E2",
          }}
        >
          <a style={{
          alignItems:"right",
            color: "#5375E2",
          }} href="http://localhost:3000/AllocationPage">Go Home</a>
        </div>
        <div className=" modal-header">
          <h5 className=" " id="exampleModalLabel">
            // BE EEE SEM3 schedule was successfully created. //
          </h5>
          {/* <button
           
            
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button> */}
        </div>
        {/* <ModalBody>...</ModalBody> */}
        <ModalFooter>
          <div
            style={{
              display: "flex",
              flesDirection: "row",
              padding: "10px",
              gap: "30px",
            }}
          >
            {" "}
            <Button
              style={{
                width: "185px",
                height: "40px",
                borderColor: "#5375E2",
                borderRadius: "5px",
                color: "#5375E2",
                background: "white",
                border: "1px solid #5375E2",
              }}
              onClick={() => setModalOpen(!modalOpen)}
            >
              Create New schedule
            </Button>
            <Button
              style={{
                width: "185px",
                height: "40px",
                borderColor: "#5375E2",
                borderRadius: "5px",
                background: "#5375E2",
                border: "#5375E2",
                color: "white",
              }}
              color="primary"
              type="button"
            >
              Allocate schedule
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </Box>
    // </Box>
  );
}

export default Popup;


