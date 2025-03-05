import { Button, Card, Input } from "acceuntry-ui";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Register clicked", { email, password });
    // Call API for registration
  };

  return (
    <Card>
      <h2>Register</h2>
      <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleRegister}>Register</Button>
    </Card>
  );
};

export default Register;

