export const UserGreeting = () => {
  const isLoggedIn = true;
  return (
    <div>
      <div>Welcome {isLoggedIn ? "Novojit" : "Guest"}</div>
      <div>{isLoggedIn && "Login Successful"}</div>
    </div>
  );
};
