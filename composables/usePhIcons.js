import {
  PhStorefront,
  PhQuestion,
  PhInfo,
  PhArticle,
  PhUser,
  PhShoppingCartSimple,
  PhEnvelopeSimple
} from "@phosphor-icons/vue"

const ICONS = {
  storefront: PhStorefront,
  question: PhQuestion,
  info: PhInfo,
  article: PhArticle,
  user: PhUser,
  cartsimple: PhShoppingCartSimple,
  envelopsimple: PhEnvelopeSimple
}

export function usePhIcon(name) {
  return ICONS[name] || null
}

