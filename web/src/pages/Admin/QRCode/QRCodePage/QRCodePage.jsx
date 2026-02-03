import { useRef, useState, useEffect } from 'react'

import { Metadata } from '@redwoodjs/web'
import { QRCodeSVG } from 'qrcode.react'

const QRCodePage = () => {
  const qrRef = useRef(null)
  const [menuUrl, setMenuUrl] = useState('')

  useEffect(() => {
    // Get the full URL dynamically on client side
    setMenuUrl(`${window.location.origin}/menu`)
  }, [])

  const downloadQRCode = () => {
    const svg = qrRef.current?.querySelector('svg')
    if (!svg) return

    // Create a canvas to convert SVG to PNG
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const svgData = new XMLSerializer().serializeToString(svg)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    const img = new Image()
    img.onload = () => {
      // Set canvas size for high quality print (512x512)
      canvas.width = 512
      canvas.height = 512

      // Fill white background
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw the QR code
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      // Create download link
      const pngUrl = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.href = pngUrl
      downloadLink.download = 'barracks-menu-qrcode.png'
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)

      URL.revokeObjectURL(url)
    }
    img.src = url
  }

  return (
    <>
      <Metadata title="QR Code" description="Generate QR code for the menu" />

      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Menu QR Code</h1>
          <p className="text-gray-400">
            Generate and download a QR code that links to your drinks menu.
            Perfect for printing on table tents, posters, or promotional materials.
          </p>
        </header>

        <div className="bg-gray-800 rounded-lg p-8 text-center">
          {/* QR Code Display */}
          <div
            ref={qrRef}
            className="inline-block bg-white p-6 rounded-lg mb-6"
          >
            {menuUrl && (
              <QRCodeSVG
                value={menuUrl}
                size={256}
                level="H"
                includeMargin={false}
              />
            )}
          </div>

          {/* URL Display */}
          <div className="mb-6">
            <p className="text-sm text-gray-400 mb-1">This QR code links to:</p>
            <code className="text-purple-400 bg-gray-900 px-3 py-1 rounded text-sm">
              {menuUrl || 'Loading...'}
            </code>
          </div>

          {/* Download Button */}
          <button
            onClick={downloadQRCode}
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PNG
          </button>

          {/* Size Info */}
          <p className="text-xs text-gray-500 mt-4">
            Downloads as a 512x512 pixel PNG image
          </p>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-gray-800/50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-white mb-3">How to use</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>1. Click the download button to save the QR code image</li>
            <li>2. Print the QR code on menus, table tents, or promotional materials</li>
            <li>3. Customers can scan the QR code with their phone camera to view the drinks menu</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default QRCodePage
