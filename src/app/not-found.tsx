import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-code" aria-label="Error 404">404</div>
      <h1>PAGE NOT FOUND</h1>
      <p style={{ color: 'var(--muted)', fontSize: '14px', maxWidth: '320px' }}>
        The page you&apos;re looking for doesn&apos;t exist. Head back to the studio.
      </p>
      <Link href="/" className="btn btn-primary" style={{ marginTop: '8px' }}>
        BACK TO HOME
      </Link>
    </div>
  )
}

