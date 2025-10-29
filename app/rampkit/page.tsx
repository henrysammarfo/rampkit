"use client"

// RampKit Landing Page
// Authors: [Your Team Name]
// Built for Road to Buenos Aires 2025

import type React from "react"

import {
  Shield,
  Code2,
  Globe,
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Zap,
  Lock,
  BarChart3,
  Users,
  Rocket,
  ArrowRight,
  Target,
  Calendar,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Link from "next/link"

export default function RampKitPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting email:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">RampKit</span>
              {/* Removed "IDEA STAGE" badge */}
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Problem
              </a>
              <a href="#solution" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Solution
              </a>
              <a href="#validation" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Validation Plan
              </a>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <Badge className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-100 border-0 px-4 py-2 text-sm font-medium">
                <Lock className="w-4 h-4 mr-2" />
                Compliance-First Infrastructure
              </Badge>
              <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-tight text-balance">
                The Stripe for Stablecoins
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed text-balance">
                Developer-first API to convert fiat ↔ stablecoins with built-in compliance. Integrate in 3 lines of
                code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 text-base font-semibold"
                  onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                {/* Updated View Docs button to link to actual docs page */}
                <Link href="/rampkit/docs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base font-semibold border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent w-full"
                  >
                    <Code2 className="mr-2 h-5 w-5" />
                    View API Docs
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">0.5% fees vs 6.5% average</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Built-in KYC/AML</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="font-medium">3-line integration</span>
                </div>
              </div>
            </div>

            {/* Right: Floating Product Mockup */}
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500">Transaction Flow</div>
                      <div className="text-2xl font-bold text-gray-900">Real-Time</div>
                    </div>
                  </div>
                  <Badge className="bg-green-50 text-green-700 border-0">Live</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">USD → USDC</div>
                        <div className="text-xs text-gray-500">Instant Settlement</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">$10,000</div>
                      <div className="text-xs text-green-600">0.5% fee</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">KYC Verified</div>
                        <div className="text-xs text-gray-500">Automated</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">Approved</div>
                      <div className="text-xs text-gray-500">2 seconds</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Global Settlement</div>
                        <div className="text-xs text-gray-500">50+ Countries</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">24/7</div>
                      <div className="text-xs text-gray-500">Instant</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Code Snippet */}
              <div className="absolute -bottom-8 -left-8 bg-gray-900 rounded-xl p-6 shadow-2xl border border-gray-800 max-w-sm transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="font-mono text-sm text-gray-300">
                  <code>
                    <span className="text-purple-400">const</span> <span className="text-blue-300">rampkit</span> ={" "}
                    <span className="text-purple-400">new</span> <span className="text-yellow-300">RampKit</span>()
                    {"\n"}
                    <span className="text-purple-400">await</span> rampkit.
                    <span className="text-yellow-300">deposit</span>({"{"}...{"}"})
                  </code>
                </pre>
              </div>

              {/* Floating Stats Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-200 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-3xl font-black text-gray-900 mb-1">$300B</div>
                <div className="text-xs font-medium text-gray-500">Stablecoin Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Stats */}
      <section className="border-y border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-50 text-green-700 border-0 px-4 py-2 text-sm font-medium">
                Market Opportunity
              </Badge>
              <h3 className="text-2xl font-bold text-gray-900">Massive, Validated Market</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-5xl font-black text-gray-900 mb-2">6.5%</div>
                <div className="text-sm text-gray-600 font-medium">Global Remittance Fees</div>
                <div className="text-xs text-gray-500 mt-1">World Bank 2025</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-gray-900 mb-2">$300B</div>
                <div className="text-sm text-gray-600 font-medium">Stablecoin Market Cap</div>
                <div className="text-xs text-gray-500 mt-1">+75% YoY Growth</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-gray-900 mb-2">$46T</div>
                <div className="text-sm text-gray-600 font-medium">Annual Stablecoin Volume</div>
                <div className="text-xs text-gray-500 mt-1">Matches Visa Scale</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-gray-900 mb-2">$10B</div>
                <div className="text-sm text-gray-600 font-medium">Monthly Stablecoin Payments</div>
                <div className="text-xs text-gray-500 mt-1">+70% Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-red-50 text-red-700 hover:bg-red-100 border-0 px-4 py-2 text-sm font-medium">
              The Problem
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 text-balance">
              Global Payments Are Broken
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stablecoins are the future of payments, but developers can't integrate them compliantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <DollarSign className="h-7 w-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">Crushing Fees</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Average <span className="text-red-600 font-bold">6.5% per transaction</span> in global remittance
                      fees (World Bank 2025).
                    </p>
                    <p className="text-sm text-gray-500">
                      Cash-based methods cost 9%, bank transfers 4.6%. Consumers lose billions annually.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <Shield className="h-7 w-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">Compliance Nightmare</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Existing solutions lack proper KYC/AML ={" "}
                      <span className="text-purple-600 font-bold">massive legal risk</span> for businesses.
                    </p>
                    <p className="text-sm text-gray-500">
                      Fintech developers face stringent PCI DSS, GDPR, SOC compliance requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Code2 className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">Developer Friction</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Developers spend <span className="text-blue-600 font-bold">6-12 months</span> building payment
                      infrastructure from scratch.
                    </p>
                    <p className="text-sm text-gray-500">
                      API integration challenges, third-party dependencies, security concerns slow innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <TrendingUp className="h-7 w-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">Market Timing</h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      Stablecoins processed <span className="text-orange-600 font-bold">$46T in 2025</span> - matching
                      Visa and PayPal scale.
                    </p>
                    <p className="text-sm text-gray-500">
                      Major players (Visa, Mastercard, Stripe) integrating stablecoins NOW. Window is closing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="bg-gray-50 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-blue-50 text-blue-700 hover:bg-blue-100 border-0 px-4 py-2 text-sm font-medium">
                The Solution
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 text-balance">
                Built for Developers, Trusted by Regulators
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Compliance-first stablecoin infrastructure that takes 3 lines of code to integrate.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg bg-white">
                <CardContent className="pt-10 pb-10 text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">Lightning Fast</h3>
                  <p className="text-gray-600 leading-relaxed">
                    3 lines of code. RESTful API with SDKs. Sandbox included. Go live in minutes, not months.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg bg-white">
                <CardContent className="pt-10 pb-10 text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">Compliance Built-In</h3>
                  <p className="text-gray-600 leading-relaxed">
                    KYC/AML verification and regulatory reporting handled automatically. Zero legal risk.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg bg-white">
                <CardContent className="pt-10 pb-10 text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 text-gray-900">Global Coverage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Support for 50+ currencies. Local payment methods. Instant settlement worldwide, 24/7.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* How It Works */}
            <Card className="border-2 border-gray-200 bg-white">
              <CardContent className="pt-12 pb-12">
                <h3 className="text-3xl font-black mb-12 text-center text-gray-900">How It Works</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl mx-auto mb-5">
                      1
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Integrate API</h4>
                    <p className="text-sm text-gray-600">Add 3 lines of code to your app</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl mx-auto mb-5">
                      2
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">User Deposits</h4>
                    <p className="text-sm text-gray-600">Local currency via bank or card</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl mx-auto mb-5">
                      3
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Auto Compliance</h4>
                    <p className="text-sm text-gray-600">KYC/AML handled instantly</p>
                  </div>
                  <div className="text-center">
                    <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl mx-auto mb-5">
                      4
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Instant Stablecoins</h4>
                    <p className="text-sm text-gray-600">USDC/USDT in user wallet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Defensibility */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-purple-50 text-purple-700 hover:bg-purple-100 border-0 px-4 py-2 text-sm font-medium">
              Competitive Advantage
            </Badge>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 text-balance">Our Defensible Moat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Four compounding advantages that take competitors 18+ months to replicate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Shield className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">Regulatory Advantage</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Compliance-first architecture with built-in KYC/AML. Regulatory approval pathway established.
                    </p>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-900 font-medium">
                        Takes competitors 12-18 months to replicate regulatory relationships
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                    <Globe className="h-7 w-7 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">Global Network</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Deep integration with local payment rails across 50+ countries. Banking partnerships in pipeline.
                    </p>
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                      <p className="text-sm text-green-900 font-medium">
                        Banking partnerships provide exclusive settlement infrastructure access
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                    <Code2 className="h-7 w-7 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">Developer Experience</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Stripe-quality API with webhooks, sandbox, and comprehensive docs. Network effects kick in fast.
                    </p>
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                      <p className="text-sm text-purple-900 font-medium">
                        More developers = more liquidity = better rates = more developers
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                    <BarChart3 className="h-7 w-7 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3 text-gray-900">B2B Focus</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Targeting fintech developers, not consumers. Higher LTV, lower CAC, faster validation.
                    </p>
                    <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                      <p className="text-sm text-orange-900 font-medium">
                        B2B SaaS: $500-5K MRR per customer vs $5-20 consumer ARPU
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Validation Plan */}
      <section id="validation" className="bg-gray-50 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-green-50 text-green-700 hover:bg-green-100 border-0 px-4 py-2 text-sm font-medium">
                <Lightbulb className="w-4 h-4 mr-2" />
                Discovery Plan
              </Badge>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 text-balance">
                90-Day Validation Roadmap
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Systematic approach to validate demand, build MVP, and secure first paying customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-blue-200 bg-white hover:shadow-lg transition-all">
                <CardContent className="pt-10 pb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-lg">
                      Q1
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">Month 1</div>
                      <div className="text-sm text-gray-500">Customer Discovery</div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Interview 50 fintech CTOs/developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Validate pain points and willingness to pay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Secure 10 LOIs from interested companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Finalize API design with feedback</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm font-bold text-blue-600">Target: 10 LOIs</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-white hover:shadow-lg transition-all">
                <CardContent className="pt-10 pb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-black text-lg">
                      Q2
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">Month 2</div>
                      <div className="text-sm text-gray-500">MVP Development</div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Build core API (deposit, withdraw, KYC)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Integrate 2 payment rails (USD, EUR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Launch sandbox environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Onboard 5 pilot partners</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm font-bold text-green-600">Target: Working MVP</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200 bg-white hover:shadow-lg transition-all">
                <CardContent className="pt-10 pb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-black text-lg">
                      Q3
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">Month 3</div>
                      <div className="text-sm text-gray-500">First Revenue</div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Process $500K in pilot transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Convert 3 pilots to paying customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Achieve $2.5K MRR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Begin regulatory approval process</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="text-sm font-bold text-purple-600">Target: $2.5K MRR</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-gray-200 bg-white">
              <CardContent className="pt-10 pb-10">
                <h3 className="font-bold text-2xl mb-8 text-gray-900 text-center flex items-center justify-center gap-3">
                  <Target className="h-7 w-7 text-blue-600" />
                  Success Metrics
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Customer Validation</div>
                      <div className="text-sm text-gray-600">
                        10 LOIs from fintech companies, 5 active pilots, 3 paying customers by Day 90
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Revenue Validation</div>
                      <div className="text-sm text-gray-600">
                        $500K transaction volume, $2.5K MRR, 0.5% take rate validated
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Product Validation</div>
                      <div className="text-sm text-gray-600">
                        Working API, 2 payment rails, sandbox environment, 85%+ developer satisfaction
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Regulatory Validation</div>
                      <div className="text-sm text-gray-600">
                        Compliance framework approved, regulatory approval process initiated
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Now / Why Us */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="pt-10 pb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-3xl text-gray-900">Why Now</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Stablecoins Hit Mainstream</div>
                      <div className="text-sm text-gray-600">
                        $300B market cap, $46T annual volume. Visa, Mastercard, Stripe all integrating NOW.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Regulatory Clarity Emerging</div>
                      <div className="text-sm text-gray-600">
                        Global frameworks being established. First-movers with compliance win.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Developer Demand Exploding</div>
                      <div className="text-sm text-gray-600">
                        Fintech developers need compliant infrastructure NOW. No good solutions exist.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Window Closing Fast</div>
                      <div className="text-sm text-gray-600">
                        Big players moving in. 12-18 month window to establish regulatory moat.
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
              <CardContent className="pt-10 pb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-3xl text-gray-900">Why Us</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Compliance-First Mindset</div>
                      <div className="text-sm text-gray-600">
                        We're building regulatory advantage from day one, not bolting it on later.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Developer-First DNA</div>
                      <div className="text-sm text-gray-600">
                        We understand developer experience. Stripe-quality API is non-negotiable.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Systematic Validation</div>
                      <div className="text-sm text-gray-600">
                        90-day roadmap to validate demand, build MVP, and secure first revenue.
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-base text-gray-900 mb-1">Execution Speed</div>
                      <div className="text-sm text-gray-600">
                        We move fast. 2-person team, no bureaucracy, customer-obsessed.
                      </div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section id="waitlist" className="bg-gradient-to-br from-blue-600 to-blue-700 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Rocket className="h-16 w-16 text-white mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Join the Waitlist</h2>
            <p className="text-2xl text-blue-100 mb-4 leading-relaxed">Get early access to RampKit API.</p>
            <p className="text-xl text-blue-200 mb-12">
              First 100 developers get <span className="text-white font-bold">6 months free</span> and priority support.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white text-gray-900 placeholder:text-gray-500 flex-1 h-14 text-base border-0"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white h-14 px-10 text-base font-semibold"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Join Waitlist"}
                </Button>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl p-12 max-w-2xl mx-auto mb-12">
                <CheckCircle2 className="h-16 w-16 text-white mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-white">You're on the list!</h3>
                <p className="text-xl text-blue-100">We'll send you API documentation and early access details soon.</p>
              </div>
            )}
            <div className="flex flex-wrap justify-center gap-8 text-base text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span>API docs sent immediately</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-white" />
                <span>Sandbox access included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">RampKit</span>
                {/* Removed "IDEA STAGE" badge */}
              </div>
              <div className="flex gap-10 text-sm text-gray-600 font-medium">
                <a href="#problem" className="hover:text-gray-900 transition-colors">
                  Problem
                </a>
                <a href="#solution" className="hover:text-gray-900 transition-colors">
                  Solution
                </a>
                <a href="#validation" className="hover:text-gray-900 transition-colors">
                  Validation Plan
                </a>
                {/* Updated API Docs link */}
                <Link href="/rampkit/docs" className="hover:text-gray-900 transition-colors">
                  API Docs
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
              <p>© 2025 RampKit. Built for Road to Buenos Aires 2025. Compliance-first stablecoin infrastructure.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
