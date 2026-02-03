import { Link, routes, navigate } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const AdminLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  const handleLogout = async () => {
    await logOut()
    navigate(routes.login())
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      {/* Admin Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link
                to={routes.home()}
                className="text-xl font-bold text-purple-400 hover:text-purple-300"
              >
                The Barracks
              </Link>
              <nav className="flex space-x-4">
                <Link
                  to={routes.adminDrinks()}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  Drinks
                </Link>
                <Link
                  to={routes.adminQRCode()}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  QR Code
                </Link>
                <Link
                  to={routes.menu()}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                >
                  View Menu →
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  <span className="text-sm text-gray-400">
                    {currentUser?.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-red-600/20 transition-colors"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
