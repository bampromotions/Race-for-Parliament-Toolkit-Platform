import type { UserRole } from '../types/firebase'

export function getUserRole(claims: Record<string, unknown>): UserRole {
  if (claims.admin === true) return 'admin'
  if (claims.role === 'admin' || claims.role === 'contentEditor' || claims.role === 'marker') {
    return claims.role
  }
  return 'participant'
}
