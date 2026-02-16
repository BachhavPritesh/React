import React, { useRef } from 'react';

const WithUseRef = () => {

  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Data Saved!");

    // ✅ Reset entire form
    formRef.current.reset();
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
        />

        <input
          type="text"
          name="email"
          placeholder="Enter your email"
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter your phone"
        />

        <button type="submit">
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default WithUseRef;
