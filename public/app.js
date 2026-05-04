async function book() {
  const booking = {
    name: document.getElementById("name").value,
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  const res = await fetch("/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(booking),
  });

  const text = await res.text();
  document.getElementById("msg").innerText = text;
}