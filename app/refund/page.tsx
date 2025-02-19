import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RefundPage() {
  return (
    <div className="container mx-auto py-12">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Refund and Cancellation Policy</CardTitle>
          <CardDescription>Last updated: February 19, 2024</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-gray dark:prose-invert">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Subscription Cancellation</h2>
            <p className="text-muted-foreground mb-4">
              You can cancel your subscription at any time through your account settings. Upon cancellation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your subscription will remain active until the end of your current billing period</li>
              <li>You will not be charged for the next billing cycle</li>
              <li>No partial refunds are provided for unused time in the current billing period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Refund Eligibility</h2>
            <p className="text-muted-foreground mb-4">We offer refunds under the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Technical issues preventing service access for more than 24 hours</li>
              <li>Incorrect charges or billing errors</li>
              <li>Service unavailability in your region</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Contact Us</h2>
            <p className="text-muted-foreground">
              For any questions about our refund policy or to request a refund, please contact our support team at
              support@digiposters.com
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}

