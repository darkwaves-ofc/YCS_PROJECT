// import axios from "axios";
// import { useState } from "react";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../../../../../AuthContext";

import SelectableSlot from "./SelectableSlot";

import classes from "./SaveSlotsList.module.css";

const SaveSlotList = (props) => {

  const slots = props.slots;
  const setSelectedSlot = props.selectedSlotSetter;

  return (
    <div className={classes.save_slots_list}>
      <SelectableSlot
        slotId="slot1"
        content={slots.slot1 ? slots.slot1.topic : "empty"}
        setter={setSelectedSlot}
      />
      <SelectableSlot
        slotId="slot2"
        content={slots.slot2 ? slots.slot2.topic : "empty"}
        setter={setSelectedSlot}
      />
      <SelectableSlot
        slotId="slot3"
        content={slots.slot3 ? slots.slot3.topic : "empty"}
        setter={setSelectedSlot}
      />
      <SelectableSlot
        slotId="slot4"
        content={slots.slot4 ? slots.slot4.topic : "empty"}
        setter={setSelectedSlot}
      />
      <SelectableSlot
        slotId="slot5"
        content={slots.slot5 ? slots.slot5.topic : "empty"}
        setter={setSelectedSlot}
      />
    </div>
  );
};

export default SaveSlotList;
