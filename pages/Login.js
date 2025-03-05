import { Button, Card, Input } from "@aceternity/ui";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
  try {
    const res = await fetch("http://localhost:5001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      // Login successful – store token and user info
      localStorage.setItem("token", data.token);
      // You might also store user ID or name if needed:
      localStorage.setItem("userId", data.userId);
      alert("Login successful!");
      // Redirect to a protected page or refresh state
    } else {
      alert(`Login failed: ${data.message}`);
    }
  } catch (err) {
    console.error("Error logging in:", err);
  }
};


  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-2">Login</h2>
      <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin} className="mt-2">Login</Button>
    </Card>
  );
};

export default Login;
