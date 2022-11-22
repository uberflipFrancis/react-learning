import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  console.log(refContainer);
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input ref={refContainer} type="text" />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}></div>
    </>
  );
};

export default UseRefBasics;
