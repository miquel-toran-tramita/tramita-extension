chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === 'enviar_evento') {
    const data = message.payload

    await fetch('http://localhost:5000/api/extension/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
})
