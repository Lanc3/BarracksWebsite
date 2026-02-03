import { createDbAuthClient, createAuth } from '@redwoodjs/auth-dbauth-web'

// #region agent log
const debugLog = (location, message, data, hypothesisId) => {
  fetch('http://127.0.0.1:7247/ingest/789729a2-b0dd-42b1-98cc-734a0e0732e3',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location,message,data,timestamp:Date.now(),sessionId:'debug-session',hypothesisId})}).catch(()=>{});
};
// #endregion

const dbAuthClient = createDbAuthClient()

// #region agent log
// Wrap the getToken method to log what it returns
const originalGetToken = dbAuthClient.getToken.bind(dbAuthClient)
dbAuthClient.getToken = async () => {
  debugLog('auth.js:getToken:start', 'getToken called', {}, 'A')
  try {
    const token = await originalGetToken()
    const tokenPreview = typeof token === 'string' ? token.substring(0, 100) : token
    debugLog('auth.js:getToken:result', 'getToken returned', { tokenType: typeof token, tokenPreview, isHtml: typeof token === 'string' && token.includes('<!DOCTYPE') }, 'A,C')
    return token
  } catch (err) {
    debugLog('auth.js:getToken:error', 'getToken threw error', { error: err.message }, 'A,C')
    throw err
  }
}
// #endregion

export const { AuthProvider, useAuth } = createAuth(dbAuthClient)
