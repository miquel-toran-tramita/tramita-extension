/*import { mount } from 'svelte'
import App from './views/App.svelte'

console.log('[CRXJS] Hello world from content script!')

// Mount the Svelte app to the DOM.
 
function mountApp() {
  const container = document.createElement('div')
  container.id = 'crxjs-app'
  document.body.appendChild(container)
  mount(App, {
    target: container,
  })
}

mountApp() */

import { copyEvent } from '@/content/events'
import { addParteVisitaButton } from '@/content/generic/parteVisita'

document.body.addEventListener('click', (ev: MouseEvent) => {
  if (window.location.pathname.includes('seguimiento')) {
    console.log('ETRAAAAAAAAAAAAAA')

    addParteVisitaButton(ev)
    copyEvent(ev)
  }
})
