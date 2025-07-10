import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "~/components/Layout";
import { FeatureCard } from "~/components/FeatureCard";
import { 
  CheckCircle, 
  PiggyBank, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  CreditCard,
  Gift,
  Users,
  Clock,
  Calculator
} from "lucide-react";

export const Route = createFileRoute("/accounts/")({
  component: AccountsPage,
});

function AccountsPage() {
  const checkingTiers = [
    {
      name: "Essential Checking",
      monthlyFee: "$0",
      minimumBalance: "$0",
      features: [
        "No monthly maintenance fee",
        "Free online and mobile banking",
        "Free ATM access at 60,000+ locations",
        "Mobile check deposit",
        "Overdraft protection available"
      ]
    },
    {
      name: "Premium Checking",
      monthlyFee: "$15",
      minimumBalance: "$1,500",
      features: [
        "All Essential Checking features",
        "No foreign transaction fees",
        "Premium customer support",
        "Higher ATM reimbursement limits",
        "Free checks and money orders",
        "Identity theft protection"
      ]
    },
    {
      name: "Elite Checking",
      monthlyFee: "$25",
      minimumBalance: "$5,000",
      features: [
        "All Premium Checking features",
        "Dedicated relationship manager",
        "Priority customer service",
        "Exclusive investment opportunities",
        "Complimentary financial planning",
        "Premium rewards program"
      ]
    }
  ];

  const savingsOptions = [
    {
      name: "High-Yield Savings",
      apy: "2.5%",
      minimumBalance: "$100",
      features: [
        "Competitive interest rate",
        "No monthly maintenance fees",
        "Online and mobile access",
        "Automatic savings tools",
        "FDIC insured up to $250,000"
      ]
    },
    {
      name: "Kids' Savings",
      apy: "3.0%",
      minimumBalance: "$25",
      features: [
        "Higher interest rate for minors",
        "No monthly fees",
        "Financial education resources",
        "Parental controls",
        "Goal-setting tools"
      ]
    }
  ];

  const cdRates = [
    { term: "6 months", apy: "2.8%", minimum: "$1,000" },
    { term: "1 year", apy: "3.2%", minimum: "$1,000" },
    { term: "2 years", apy: "3.5%", minimum: "$1,000" },
    { term: "3 years", apy: "3.8%", minimum: "$1,000" },
    { term: "5 years", apy: "4.1%", minimum: "$1,000" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Banking Accounts
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Choose the perfect account for your financial needs
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Open an Account Today
            </button>
          </div>
        </div>
      </div>

      {/* Account Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Bank With Us?
            </h2>
            <p className="text-xl text-gray-600">
              Experience banking that works for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Shield}
              title="FDIC Insured"
              description="Your deposits are protected up to $250,000 by the FDIC."
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile Banking"
              description="Manage your accounts 24/7 with our award-winning mobile app."
            />
            <FeatureCard
              icon={Clock}
              title="24/7 Support"
              description="Get help whenever you need it with our round-the-clock support."
            />
            <FeatureCard
              icon={Gift}
              title="No Hidden Fees"
              description="Transparent pricing with no surprise fees or charges."
            />
          </div>
        </div>
      </section>

      {/* Checking Accounts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Checking Accounts
            </h2>
            <p className="text-xl text-gray-600">
              Find the checking account that fits your lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {checkingTiers.map((tier, index) => (
              <div key={tier.name} className={`bg-white border-2 rounded-xl p-8 ${index === 1 ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
                {index === 1 && (
                  <div className="bg-blue-500 text-white text-center py-2 px-4 rounded-lg mb-4 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">{tier.monthlyFee}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">Minimum balance: {tier.minimumBalance}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  index === 1 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Open Account
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Accounts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Savings Accounts
            </h2>
            <p className="text-xl text-gray-600">
              Grow your money with competitive interest rates
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {savingsOptions.map((option) => (
              <div key={option.name} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <PiggyBank className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{option.name}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-600">{option.apy}</span>
                  <span className="text-gray-600 ml-2">APY</span>
                </div>
                <p className="text-gray-600 mb-6">Minimum balance: {option.minimumBalance}</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Open Savings Account
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates of Deposit */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certificates of Deposit (CDs)
            </h2>
            <p className="text-xl text-gray-600">
              Lock in competitive rates for guaranteed returns
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Term</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">APY</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Minimum Deposit</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cdRates.map((cd, index) => (
                    <tr key={cd.term} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{cd.term}</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-bold">{cd.apy}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{cd.minimum}</td>
                      <td className="px-6 py-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                          Open CD
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How CDs Work</h3>
            <p className="text-gray-700">
              Certificates of Deposit offer guaranteed returns in exchange for keeping your money deposited for a fixed term. 
              The longer the term, the higher the interest rate. Early withdrawal penalties may apply.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Open Your Account?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started in just 5 minutes with our simple online application
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
            Start Your Application
          </button>
        </div>
      </section>
    </Layout>
  );
}
