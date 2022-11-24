async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="entry-title"]').value;
    const entry_content = document.querySelector('textarea[name="entry-content"]').value.trim();
    const entry_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/entrys/${entry_id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            entry_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/homepage');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-entry-form').addEventListener('submit', editFormHandler);