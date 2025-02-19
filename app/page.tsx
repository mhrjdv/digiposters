import Link from "next/link"
import { ArrowRight, Smartphone, Image, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">DigiPosters</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Create and share personalized political posters with ease using our Android app.
          </p>
          <Button asChild size="lg" className="group">
            <Link
              href="https://play.google.com/store/apps/details?id=com.bharat.posters&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download on Google Play
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Pre-made Templates</h2>
              <p className="text-muted-foreground">Choose from a variety of ready-to-use political poster templates.</p>
            </div>
            <div className="text-center">
              <Image className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Customize Posters</h2>
              <p className="text-muted-foreground">
                Add party logos, leader images, and personal photos to your posters.
              </p>
            </div>
            <div className="text-center">
              <Share2 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Easy Sharing</h2>
              <p className="text-muted-foreground">
                Share your customized posters seamlessly on social media platforms.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

