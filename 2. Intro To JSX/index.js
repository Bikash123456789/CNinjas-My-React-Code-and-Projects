const App = () => {
  const email = "xyz@gmail.com";
  const password = "demo";
  return (
    <>
      {email == "xyz@gmail.com" ? (
        password == "demo" ? (
          <h1>User Exists</h1>
        ) : (
          <h1>Wrong Password</h1>
        )
      ) : (
        <h1>Create a new Account</h1>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
