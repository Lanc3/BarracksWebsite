import { useState } from 'react'

import { motion } from 'framer-motion'

import { Form, Label, TextField, PasswordField, Submit, FieldError } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { logIn } = useAuth()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const response = await logIn({
        username: data.email,
        password: data.password,
      })

      if (response.message) {
        toast(response.message)
      } else if (response.error) {
        toast.error(response.error)
      } else {
        toast.success('Welcome back!')
        navigate(routes.adminDrinks())
      }
    } catch (error) {
      toast.error(error.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
              <p className="text-gray-400">Sign in to manage The Barracks</p>
            </div>

            <Form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label
                  name="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </Label>
                <TextField
                  name="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="admin@barracks.local"
                  autoFocus
                  validation={{
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                  }}
                />
                <FieldError name="email" className="text-red-400 text-sm mt-1" />
              </div>

              <div>
                <Label
                  name="password"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Password
                </Label>
                <PasswordField
                  name="password"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                />
                <FieldError name="password" className="text-red-400 text-sm mt-1" />
              </div>

              <Submit
                disabled={loading}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Submit>
            </Form>

            <div className="mt-6 text-center">
              <Link
                to={routes.home()}
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                ← Back to website
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default LoginPage
