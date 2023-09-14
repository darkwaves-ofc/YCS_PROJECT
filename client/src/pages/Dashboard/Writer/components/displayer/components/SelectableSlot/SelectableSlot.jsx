import "./SelectableSlot.css";

const SelectableSlot = (props) => {
  const slotId = props.slotId;
  const content = props.content;
  const setSelectedSlot = props.setter;

  return (
    <div
      id={slotId}
      className="selectable_slot"
      onClick={(e) =>
        setSelectedSlot((prev) => ({
          oldSlotId: prev.currentSlotId,
          currentSlotId: slotId,
        }))
      }
    >
      <p className="slot_id">{slotId}</p>
      <p className="slot_content">Current content:- {content}</p>
    </div>
  );
};

export default SelectableSlot;
