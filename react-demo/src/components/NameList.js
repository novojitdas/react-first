export const NameList = () => {
  const names = ["Novojit", "Das", "Dipta"];
  return (
    <div>
      {names.map((name) => {
        return <h1 key={name}>{name}</h1>;
      })}
    </div>
  );
};
