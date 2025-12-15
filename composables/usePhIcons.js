import {
  PhStorefront,
  PhQuestion,
  PhInfo,
  PhArticle,
  PhUser,
  PhShoppingCartSimple,
  PhCirclesThreePlus
} from "@phosphor-icons/vue"

const ICONS = {
  storefront: PhStorefront,
  question: PhQuestion,
  info: PhInfo,
  article: PhArticle,
  user: PhUser,
  cartsimple: PhShoppingCartSimple,
  circlesthreeplus: PhCirclesThreePlus
}

export function usePhIcon(name) {
  return ICONS[name] || null
}

