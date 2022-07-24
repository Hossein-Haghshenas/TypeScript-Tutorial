type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;

const textBox: UiWidget = {
  drag: () => {},
  resize: () => {},
};
