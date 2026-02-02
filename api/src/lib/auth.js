import { AuthenticationError, ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from './db'

/**
 * The session is decoded from the cookie by the `authDecoder`
 * and returns the user's ID. We then look up the user in the database.
 */
export const getCurrentUser = async (session) => {
  if (!session || typeof session.id !== 'number') {
    throw new AuthenticationError('Invalid session')
  }

  return await db.user.findUnique({
    where: { id: session.id },
    select: { id: true, email: true, roles: true },
  })
}

/**
 * Check if the current user is authenticated.
 */
export const isAuthenticated = () => {
  return !!context.currentUser
}

/**
 * Check if the current user has one of the specified roles.
 * Roles can be a single string or an array of strings.
 */
export const hasRole = (roles) => {
  if (!isAuthenticated()) {
    return false
  }

  const currentUserRoles = context.currentUser?.roles

  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      return currentUserRoles === roles
    } else if (Array.isArray(currentUserRoles)) {
      return currentUserRoles.includes(roles)
    }
  }

  if (Array.isArray(roles)) {
    if (typeof currentUserRoles === 'string') {
      return roles.includes(currentUserRoles)
    } else if (Array.isArray(currentUserRoles)) {
      return roles.some((role) => currentUserRoles.includes(role))
    }
  }

  return false
}

/**
 * Require authentication to access the resource.
 * Optionally check for specific roles.
 */
export const requireAuth = ({ roles } = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.")
  }
}
