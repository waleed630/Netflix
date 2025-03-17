export const EventProps = () => {
  const HandleWelcomeUser = (user) => {
    alert(`Hey ${user}`);
  };
  const handleHover = () => {
    alert(`Hey thanks for hovering me`);
  };
  return (
    <>
      <WelcomeUser
        onClick={() => HandleWelcomeUser("vinod")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
    const{onClick,onMouseEnter}=props; //if we dont write this line (destructuring)
  const handleGreeting = () => {
    console.log(`Hey user Welcome`);
    props.onClick();
  };
  return (
    <>
      <button onClick={onClick}>Click</button>  {/*than here we ll write props.onClick*/}
      <button onMouseEnter={onMouseEnter}>Hover me</button> {/*and props.onMouseEnter*/}
      <button onClick={handleGreeting}>Greetings</button>
    </>
  );
};
