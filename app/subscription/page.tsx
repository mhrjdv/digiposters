import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubscriptionPage() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      description: "Perfect for individuals",
      features: ["Create up to 50 posters/month", "Basic templates", "Standard support", "Basic sharing options"],
    },
    {
      name: "Pro",
      price: "$19.99",
      description: "Best for professionals",
      features: [
        "Unlimited posters",
        "Premium templates",
        "Priority support",
        "Advanced sharing features",
        "Custom branding",
        "Analytics dashboard",
      ],
    },
    {
      name: "Team",
      price: "$49.99",
      description: "For organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Admin dashboard",
        "API access",
        "Dedicated support",
        "Custom integration",
      ],
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-muted-foreground">Select the perfect plan for your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <p className="text-3xl font-bold mt-4">{plan.price}</p>
              <p className="text-muted-foreground">/month</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

