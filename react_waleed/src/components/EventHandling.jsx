import "./EV.css";

export const EventHandling = () => {
  //   function handleButtonClick() {
  //     alert("Hey I am on click event");
  //   }

  const handleButtonClick = () => {
    alert("Hey I am on click event");
  };

  const handleWelcomeUser = (user) => {
    console.log(`Welcome ${user}`);
  };

  return (
    <>
      <button onClick={handleButtonClick}>Click Me</button>
      <br />
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      <button onClick={(event) => console.log(event)}>Inline</button>
      {/* Inline arr function */}
      <button onClick={() => alert()}>Inline Arr function</button>
      {/* passing arguments to event handlers */}
      <button onClick={() => handleWelcomeUser("Waleed")}>
        Click Me Users
      </button>
    </>
  );
};
