import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm prose-gray dark:prose-invert">
          <p>
            DigiPosters is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard
            your information:
          </p>
          <ul>
            <li>We collect minimal personal information necessary for app functionality.</li>
            <li>Your created posters are stored locally on your device.</li>
            <li>We do not sell or share your personal information with third parties.</li>
            <li>We use industry-standard security measures to protect your data.</li>
            <li>You can request deletion of your account and associated data at any time.</li>
          </ul>
          <p>For the complete privacy policy, please refer to the information provided within the DigiPosters app.</p>
        </CardContent>
      </Card>
    </div>
  )
}

