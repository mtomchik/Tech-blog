async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="entry-title"]').value;
  const entry_content = document
    .querySelector('textarea[name="entry-content"]')
    .value.trim();

  const response = await fetch(`/api/entrys`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      entry_content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-entry-form')
  .addEventListener('submit', newFormHandler);
