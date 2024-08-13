let reminders = [];
let reminderId = 0;

const reminderTextInput = document.getElementById('reminderText');
const reminderTimeInput = document.getElementById('reminderTime');
const addReminderButton = document.getElementById('addReminderButton');
const reminderList = document.getElementById('reminderList');

// Function to add a new reminder
function addReminder() {
    const text = reminderTextInput.value;
    const time = new Date(reminderTimeInput.value).getTime();

    if (!text || isNaN(time)) {
        alert('Please enter valid reminder details and time.');
        return;
    }

    const id = reminderId++;
    const timeoutId = setTimeout(() => triggerReminder(id), time - Date.now());

    const reminder = { id, text, time, timeoutId };
    reminders.push(reminder);
    renderReminders();

    // Clear input fields
    reminderTextInput.value = '';
    reminderTimeInput.value = '';
}

// Function to trigger the reminder
function triggerReminder(id) {
    const reminder = reminders.find(r => r.id === id);
    if (reminder) {
        alert(`Reminder: ${reminder.text}`);
        deleteReminder(id); // Auto-delete after triggering
    }
}

// Function to delete a reminder
function deleteReminder(id) {
    const reminderIndex = reminders.findIndex(r => r.id === id);
    if (reminderIndex !== -1) {
        clearTimeout(reminders[reminderIndex].timeoutId);
        reminders.splice(reminderIndex, 1);
        renderReminders();
    }
}

// Function to render the list of reminders
function renderReminders() {
    reminderList.innerHTML = '';

    reminders.forEach(reminder => {
        const li = document.createElement('li');
        li.className = 'reminder-item';

        const timeString = new Date(reminder.time).toLocaleString();
        li.textContent = `${reminder.text} - ${timeString}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteReminder(reminder.id);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editReminder(reminder.id);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        reminderList.appendChild(li);
    });
}

// Function to edit a reminder
function editReminder(id) {
    const reminder = reminders.find(r => r.id === id);
    if (reminder) {
        reminderTextInput.value = reminder.text;
        reminderTimeInput.value = new Date(reminder.time).toISOString().slice(0, 16);

        deleteReminder(id);
    }
}

addReminderButton.addEventListener('click', addReminder);

// Periodic update to ensure reminders are correctly displayed and triggered
setInterval(renderReminders, 1000);
