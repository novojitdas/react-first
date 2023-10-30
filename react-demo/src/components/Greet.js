export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} aka {props.heroName}!
      </h1>
      {props.children}
    </div>
  );
};
