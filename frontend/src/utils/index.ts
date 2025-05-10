import { EnterpriseRouter, HomeRouter, Router, WifiRouter } from "../types";

export function isWifiRouter(router: Router): router is WifiRouter {
  return router.type === 'wifi';
}

export function isEnterpriseRouter(router: Router): router is EnterpriseRouter {
  return router.type === 'enterprise';
}

export function isHomeRouter(router: Router): router is HomeRouter {
  return router.type === 'home';
}