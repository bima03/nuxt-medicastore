import {
  PhStorefront,
  PhQuestion,
  PhInfo,
  PhArticle,
  PhUser,
  PhShoppingCartSimple,
  PhEnvelopeSimple,
  PhLinkSimple
} from "@phosphor-icons/vue"

const ICONS = {
  storefront: PhStorefront,
  question: PhQuestion,
  info: PhInfo,
  article: PhArticle,
  user: PhUser,
  cartsimple: PhShoppingCartSimple,
  envelopsimple: PhEnvelopeSimple,
  linksimple: PhLinkSimple
}

export function usePhIcon(name) {
  return ICONS[name] || null
}

