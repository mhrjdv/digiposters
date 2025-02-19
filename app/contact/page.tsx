import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm prose-gray dark:prose-invert">
          <p>
            If you have any questions, concerns, or feedback about the DigiPosters app, please don't hesitate to reach
            out to us:
          </p>
          <ul>
            <li>Email: rpaventures.tech@gmail.com</li>
            <li>In-app support: Use the "Contact Us" feature in the DigiPosters app settings</li>
            <li>Google Play Store: Leave a review or comment on our app page</li>
          </ul>
          <p>We strive to respond to all inquiries within 24-48 hours. Thank you for using DigiPosters!</p>
        </CardContent>
      </Card>
    </div>
  )
}

