async function createEntryHandler(event) {
    event.preventDefault();

    document.location.replace('/homepage/new')
}


document.querySelector('#create-new-entry').addEventListener('click', createEntryHandler);