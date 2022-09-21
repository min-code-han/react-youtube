import React, { useRef } from 'react';

const AddForm = () => {
  const formRef = useRef();
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
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
};

export default AddForm;
