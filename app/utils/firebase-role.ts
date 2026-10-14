import type { UserRole } from '../types/firebase'

export function getUserRole(profileRole: unknown): UserRole {
  return profileRole === 'admin' ? 'admin' : 'participant'
}
