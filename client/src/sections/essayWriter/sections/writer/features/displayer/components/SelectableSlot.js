import classes from "./SelectableSlot.module.css";

const SelectableSlot = (props) => {
  const slotId = props.slotId;
  const content = props.content;
  const setSelectedSlot = props.setter;

  return (
    <div id={slotId} className={classes.selectable_slot} onClick={(e) => setSelectedSlot(prev => ({oldSlotId: prev.currentSlotId,currentSlotId: slotId}))}>
      <p className={classes.slot_id}>{slotId}</p>
      <p className={classes.slot_content}>Current content:- {content}</p>
    </div>
  );
};

export default SelectableSlot;
