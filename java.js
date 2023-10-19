const timeSlots = [
    "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
];

// Function to create table rows for time slots and availability cells
function createTable() {
    const table = document.getElementById("availability-table");
    for (const slot of timeSlots) {
        const row = table.insertRow();
        const timeCell = row.insertCell(0);
        timeCell.textContent = slot;
        const availabilityCell = row.insertCell(1);
        availabilityCell.classList.add("availability-cell");
    }
}

// Function to convert time slots to the selected time zone
function convertTimezone() {
    const selectedTimezone = document.getElementById("timezone").value;
    const availabilityCells = document.querySelectorAll(".availability-cell");
    for (let i = 0; i < timeSlots.length; i++) {
        const istTime = new Date(`2023-10-24T${timeSlots[i]}:00`);
        const viewerTime = istTime.toLocaleTimeString("en-US", { timeZone: selectedTimezone });
        availabilityCells[i].textContent = viewerTime;
    }
}

// Initialize the table and set default time zone
createTable();
convertTimezone();
