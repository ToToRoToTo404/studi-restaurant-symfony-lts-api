// ...existing code...
const response = await fetch('http://localhost:8000/api/registration', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(userData)
});
// ...existing code...
