import DriveSlot from "./DriveSlot.js";

import classes from "./DriveSlots.module.css";

const DriveSlots = (props) => {
  const slots = props.slots;

  if(!slots) return (<></>);


  const slot1 = slots.slot1
  const slot2 = slots.slot2
  const slot3 = slots.slot3
  const slot4 = slots.slot4
  const slot5 = slots.slot5

  return (
    <div className={classes.slotsContainer}>
      {slot1 ? <DriveSlot topic={slot1.topic} writing={slot1.body} slotId="1"/> : <DriveSlot />}
      {slot2 ? <DriveSlot topic={slot2.topic} writing={slot2.body} slotId="2"/> : <DriveSlot />}
      {slot3 ? <DriveSlot topic={slot3.topic} writing={slot3.body} slotId="3"/> : <DriveSlot />}
      {slot4 ? <DriveSlot topic={slot4.topic} writing={slot4.body} slotId="4"/> : <DriveSlot />}
      {slot5 ? <DriveSlot topic={slot5.topic} writing={slot5.body} slotId="5"/> : <DriveSlot />}
    </div>
  );
};

export default DriveSlots;