import React, { useRef } from 'react';

const WithUseRef = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  function handleSubmit() {
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Data Saved!");
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          ref={nameRef}
        />

        <input
          type="text"
          placeholder="Enter your email"
          ref={emailRef}
        />

        <input
          type="text"
          placeholder="Enter your phone"
          ref={phoneRef}
        />

        <button type="button" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default WithUseRef;
