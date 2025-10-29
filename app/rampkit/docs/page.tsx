// RampKit API Documentation
// Authors: [Your Team Name]
// Interactive API documentation with code examples

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Zap, ArrowLeft, CheckCircle2, Lock, Globe, DollarSign } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/rampkit" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">RampKit</span>
              </div>
            </Link>
            <Badge className="bg-green-50 text-green-700 border-0">API v1.0</Badge>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="mb-16">
            <h1 className="text-5xl font-black text-gray-900 mb-4">API Documentation</h1>
            <p className="text-xl text-gray-600 mb-8">
              Integrate stablecoin on/off-ramps in 3 lines of code. Built for developers, trusted by regulators.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Code2 className="mr-2 h-5 w-5" />
                Get API Key
              </Button>
              <Button variant="outline">View on GitHub</Button>
            </div>
          </div>

          {/* Quick Start */}
          <Card className="mb-12 border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Zap className="h-6 w-6 text-blue-600" />
                Quick Start
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="node" className="w-full">
                <TabsList>
                  <TabsTrigger value="node">Node.js</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                <TabsContent value="node">
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="font-mono text-sm text-gray-300">
                      <code>{`// Install the SDK
npm install @rampkit/sdk

// Initialize
import { RampKit } from '@rampkit/sdk'
const rampkit = new RampKit({ apiKey: 'your_api_key' })

// Create a deposit
const deposit = await rampkit.deposits.create({
  amount: 1000,
  currency: 'USD',
  stablecoin: 'USDC',
  walletAddress: '0x...'
})

console.log(deposit.status) // 'pending'`}</code>
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="python">
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="font-mono text-sm text-gray-300">
                      <code>{`# Install the SDK
pip install rampkit

# Initialize
from rampkit import RampKit
rampkit = RampKit(api_key='your_api_key')

# Create a deposit
deposit = rampkit.deposits.create(
    amount=1000,
    currency='USD',
    stablecoin='USDC',
    wallet_address='0x...'
)

print(deposit.status)  # 'pending'`}</code>
                    </pre>
                  </div>
                </TabsContent>
                <TabsContent value="curl">
                  <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                    <pre className="font-mono text-sm text-gray-300">
                      <code>{`curl https://api.rampkit.io/v1/deposits \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 1000,
    "currency": "USD",
    "stablecoin": "USDC",
    "wallet_address": "0x..."
  }'`}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Core Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Deposits & Withdrawals</h3>
                <p className="text-sm text-gray-600">Convert fiat to stablecoins and back with instant settlement</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Built-in Compliance</h3>
                <p className="text-sm text-gray-600">Automated KYC/AML verification and regulatory reporting</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Global Coverage</h3>
                <p className="text-sm text-gray-600">50+ currencies, local payment methods, 24/7 settlement</p>
              </CardContent>
            </Card>
          </div>

          {/* API Endpoints */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Core Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-green-100 text-green-700 border-0 font-mono">POST</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/deposits</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Create a new fiat → stablecoin deposit</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-mono text-gray-700">
                      Parameters: amount, currency, stablecoin, wallet_address
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-green-100 text-green-700 border-0 font-mono">POST</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/withdrawals</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Create a new stablecoin → fiat withdrawal</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-mono text-gray-700">
                      Parameters: amount, stablecoin, currency, bank_account
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-blue-100 text-blue-700 border-0 font-mono">GET</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/transactions/:id</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Get transaction status and details</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-mono text-gray-700">Returns: status, amount, fees, timestamps</p>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-green-100 text-green-700 border-0 font-mono">POST</Badge>
                    <code className="text-sm font-mono text-gray-900">/v1/kyc/verify</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Verify user identity for compliance</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-xs font-mono text-gray-700">
                      Parameters: user_id, document_type, document_image
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Webhooks */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Webhooks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Receive real-time notifications when transaction status changes. Configure webhook URLs in your
                dashboard.
              </p>
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="font-mono text-sm text-gray-300">
                  <code>{`{
  "event": "deposit.completed",
  "data": {
    "id": "dep_1234567890",
    "amount": 1000,
    "currency": "USD",
    "stablecoin": "USDC",
    "status": "completed",
    "wallet_address": "0x...",
    "tx_hash": "0x...",
    "created_at": "2025-01-15T10:30:00Z",
    "completed_at": "2025-01-15T10:32:15Z"
  }
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Sandbox */}
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
            <CardContent className="pt-10 pb-10">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">Sandbox Environment</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Test your integration risk-free with our sandbox environment. No real money, full API access.
                  </p>
                  <div className="flex gap-3">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">Get Sandbox Key</Button>
                    <Button variant="outline">View Test Data</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
