export type LayoutKey = "admin" | "auth" | "default" | "participant"
declare module '@nuxt/schema' {
  interface AppRouteRulesExtensions {
    appLayout?: LayoutKey | false
  }
  interface RouteRuleConfigExtensions {
    appLayout?: LayoutKey | false
  }
}
declare module 'nuxt/schema' {
  interface AppRouteRulesExtensions {
    appLayout?: LayoutKey | false
  }
  interface RouteRuleConfigExtensions {
    appLayout?: LayoutKey | false
  }
}