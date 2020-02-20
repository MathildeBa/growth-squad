import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/allCountries">
        <a style={linkStyle}>allCountries</a>
      </Link>
      <Link href="/euCountries">
        <a style={linkStyle}>euCountries</a>
      </Link>
      <Link href="/searchCountries">
        <a style={linkStyle}>searchCountries</a>
      </Link>
    </div>
  )
}