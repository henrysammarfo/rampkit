import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/rampkit")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-balance mb-6 text-gray-900">Road to Buenos Aires 2025</h1>
          <p className="text-xl text-gray-600 text-balance mb-8 leading-relaxed">
            Two startup submissions showcasing innovation in DeFi infrastructure and DePIN optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-blue-600 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">RampKit</CardTitle>
              <CardDescription className="text-base">IDEA Stage Submission</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compliant stablecoin on/off-ramp infrastructure for Latin American fintech developers. Solving the 6%
                remittance fee problem with built-in compliance.
              </p>
              <Link href="/rampkit">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View RampKit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-cyan-600 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">NodeWatch</CardTitle>
              <CardDescription className="text-base">MVP Stage Submission</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI-powered DePIN node profitability optimizer. Turn idle infrastructure into profit machines with
                real-time optimization and demand matching.
              </p>
              <Link href="/nodewatch">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
                  View NodeWatch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
