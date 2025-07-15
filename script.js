document.getElementById("login-btn").addEventListener("click", () => {
  // TODO: Integrate VATSIM SSO or Discord OAuth here
  alert("Login with CID will be implemented via VATSIM SSO or Discord OAuth.");
});

document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const position = document.getElementById("position").value;
  const startTime = document.getElementById("start-time").value;
  const endTime = document.getElementById("end-time").value;

  // TODO: Replace with POST to backend API
  console.log("Booking Submitted:", { position, startTime, endTime });
  alert("Booking submitted. Replace this with actual backend call.");
});

function loadSchedule() {
  // TODO: Replace this mock data with actual API call
  const scheduleData = [
    { cid: "1234567", position: "OMDB_TWR", start: "2025-07-15T16:00", end: "2025-07-15T18:00" },
    { cid: "7654321", position: "OERK_APP", start: "2025-07-16T14:00", end: "2025-07-16T16:00" }
  ];

  const list = document.getElementById("schedule-list");
  list.innerHTML = "";

  scheduleData.forEach(slot => {
    const item = document.createElement("div");
    item.className = "schedule-item";
    item.innerHTML = <strong>${slot.position}</strong> — ${slot.start} to ${slot.end}<br><small>CID: ${slot.cid}</small>;
    list.appendChild(item);
  });
}

loadSchedule();
