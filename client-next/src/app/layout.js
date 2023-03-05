import Nav from '../components/Nav'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
