async function deleteFormHandler(event) {
    event.preventDefault();

    const entry_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/entrys/${entry_id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-entry-btn').addEventListener('click', deleteFormHandler);