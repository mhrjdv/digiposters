import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Terms of Use</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm prose-gray dark:prose-invert">
          <p>By using the DigiPosters app, you agree to the following terms:</p>
          <ul>
            <li>You must be at least 13 years old to use this app.</li>
            <li>You are responsible for any content you create and share using our app.</li>
            <li>Do not use our app for any illegal or unauthorized purpose.</li>
            <li>Respect copyright and intellectual property rights when using images and logos.</li>
            <li>We reserve the right to terminate or suspend your account for violations of these terms.</li>
          </ul>
          <p>For the full terms of use, please refer to the information provided within the DigiPosters app.</p>
        </CardContent>
      </Card>
    </div>
  )
}

