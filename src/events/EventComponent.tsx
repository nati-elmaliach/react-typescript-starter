const EventComponent: React.FC = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event);
  };

  const onDragStart : React.DragEventHandler<HTMLDivElement> = (event) => {
    console.log(event)
  }

  return (
    <div>
      <input type='text' onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag Me</div>
    </div>
  );
};

export default EventComponent;
