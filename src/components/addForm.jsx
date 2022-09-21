import React, { useRef, memo } from 'react';

const AddForm = memo((props) => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-form-input"
        placeholder="please enter your habit"
      />
      <button className="add-form-button">ADD</button>
    </form>
  );
});

export default AddForm;
