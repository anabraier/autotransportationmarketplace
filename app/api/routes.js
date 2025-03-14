export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "API is working" });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "Data received" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
