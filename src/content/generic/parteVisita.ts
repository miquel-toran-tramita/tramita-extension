import { ADMIN_URL } from '@/content/generic/variables'

let isButtonAdded = false
export const addParteVisitaButton = (ev: MouseEvent) => {
  if (isButtonAdded) return
  isButtonAdded = true

  const HTMLFirstElement = document.getElementById('tusplantillas1') as HTMLInputElement
  const ref = document.getElementById('js_card_visita_propiedad_ref')?.textContent
  const name = document.getElementById('no.cliente')?.textContent?.trim()
  const phone = document.getElementById('no.demtelefono2')?.textContent?.trim()
  const agent = document.getElementById('js_card_visita_demanda_agente_info')?.children[0]?.children[0]?.textContent?.split(' ')[0]
  const nDemanda = document.getElementById('js_card_visita_demanda_numdemanda')?.textContent

  // Crear el enlace
  const link = document.createElement('a')
  link.className = 'acciones__btn'
  link.href = `${ADMIN_URL}/panel/herramientas/partes-de-visita?ref=${ref}&name=${name}&agent=${agent}&phone=${phone}&nDemanda=${nDemanda}`
  link.target = '_blank'
  link.textContent = '⭐ Parte de visita nuevo'
  link.style.textDecoration = 'none'
  link.className = 'acciones__btn'

  // Insertar el enlace y el botón justo antes de HTMLFirstElement
  if (HTMLFirstElement && HTMLFirstElement.parentNode) {
    HTMLFirstElement.parentNode.insertBefore(link, HTMLFirstElement)
  }
}
