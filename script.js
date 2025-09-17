document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values correctly
  const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
  const costume = this.querySelector('input[placeholder="Costume Name"]').value.trim();
  const date = this.querySelector('input[type="date"]').value.trim();

  // Simple validation before sending
  if (!name || !costume || !date) {
    alert("Please fill all fields!");
    return;
  }

  fetch("/api/bookings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, costume, date }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Booking successful! Thank you.");
      this.reset();
    })
    .catch((err) => {
      alert("Booking failed!");
      console.error(err);
    });
});
