async function createEntryHandler(event) {
  event.preventDefault();

  document.location.replace('/dashboard/new');
}

document
  .querySelector('#create-new-entry')
  .addEventListener('click', createEntryHandler);
