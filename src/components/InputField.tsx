import React from 'react';

const InputField = ({
  text,
  handleInput,
  handleSubmit,
}: {
  text: string;
  handleInput: (text: string) => void;
  handleSubmit: (text: string) => void;
}) => {
  return (
    <div className="mainAdd d-flex">
      <input
        className="form-control mr-sm-2 me-2"
        type="search"
        placeholder="Search"
        value={text}
        onChange={event => handleInput(event.target.value)}
      />
      <button
        className="btn btn-outline-success"
        onClick={() => handleSubmit(text)}
      >
        Search
      </button>
    </div>
  );
};

export default InputField;
