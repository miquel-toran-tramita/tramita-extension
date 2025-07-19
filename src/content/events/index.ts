export const copyEvent = () => {
  const crearEvento = document.querySelector('button#aceptar')
  const HTMLInputId = document.getElementById('seguimiento.codseg') as HTMLInputElement
  const HTMLInputTitle = document.getElementById('seguimiento.asunto') as HTMLInputElement
  const HTMLIframeDesc = document.querySelector('iframe.cke_wysiwyg_frame')?.contentWindow.document as any
  const HTMLType = document.getElementById('seguimiento.keytiposeg') as HTMLInputElement
  const HTMLDate = document.getElementById('seguimiento.fechaaviso') as HTMLInputElement
  const HTMLAgent = document.getElementById('js_seguimiento_keyagente') as HTMLInputElement
  const HTMLAgentCreator = document.getElementById('seguimiento_altaagente_nombre') as HTMLInputElement

  let event = {
    id: HTMLInputId.value,
    title: HTMLInputTitle.value,
    description: HTMLIframeDesc?.querySelector('.cke_editable')?.innerHTML,
    type: HTMLType.shadowRoot?.querySelector('.select__input-valor')?.value,
    date: HTMLDate.shadowRoot?.querySelector('.js-display')?.value,
    agent: HTMLAgent.shadowRoot?.querySelector('.select__input-valor')?.value,
    agentCreator: HTMLAgentCreator.innerHTML,
  }

  console.log(event)
}
