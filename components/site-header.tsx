import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          DigiPosters
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
          <Button asChild size="sm">
            <Link
              href="https://play.google.com/store/apps/details?id=com.bharat.posters&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

