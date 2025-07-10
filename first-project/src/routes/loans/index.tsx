import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "~/components/Layout";
import { FeatureCard } from "~/components/FeatureCard";
import { 
  DollarSign, 
  Home, 
  Car, 
  Building, 
  Calculator, 
  Clock, 
  Shield, 
  CheckCircle,
  FileText,
  Users,
  TrendingUp,
  CreditCard
} from "lucide-react";

export const Route = createFileRoute("/loans/")({
  component: LoansPage,
});

function LoansPage() {
  const loanTypes = [
    {
      name: "Personal Loans",
      icon: DollarSign,
      rate: "5.99% - 24.99%",
      amount: "$2,000 - $40,000",
      term: "2 - 7 years",
      description: "Flexible financing for life's important moments",
      features: [
        "No collateral required",
        "Fixed monthly payments",
        "Quick approval process",
        "Use for any purpose",
        "No prepayment penalties"
      ],
      useCases: [
        "Debt consolidation",
        "Home improvements",
        "Medical expenses",
        "Wedding costs",
        "Vacation funding"
      ]
    },
    {
      name: "Mortgages",
      icon: Home,
      rate: "6.25% - 7.50%",
      amount: "Up to $2,000,000",
      term: "15 - 30 years",
      description: "Make your homeownership dreams a reality",
      features: [
        "Competitive interest rates",
        "Multiple loan programs",
        "Expert guidance",
        "Fast closing process",
        "Local underwriting"
      ],
      useCases: [
        "First-time homebuyers",
        "Refinancing",
        "Investment properties",
        "Jumbo loans",
        "Construction loans"
      ]
    },
    {
      name: "Auto Loans",
      icon: Car,
      rate: "4.99% - 18.99%",
      amount: "$5,000 - $150,000",
      term: "2 - 8 years",
      description: "Drive away with confidence and great rates",
      features: [
        "New and used vehicles",
        "Competitive rates",
        "Flexible terms",
        "Quick pre-approval",
        "No application fees"
      ],
      useCases: [
        "New car purchase",
        "Used car financing",
        "Refinancing existing loan",
        "Motorcycle/RV loans",
        "Boat financing"
      ]
    },
    {
      name: "Business Loans",
      icon: Building,
      rate: "7.50% - 25.00%",
      amount: "$10,000 - $500,000",
      term: "1 - 10 years",
      description: "Fuel your business growth and success",
      features: [
        "SBA loan programs",
        "Equipment financing",
        "Working capital",
        "Business lines of credit",
        "Commercial real estate"
      ],
      useCases: [
        "Business expansion",
        "Equipment purchase",
        "Inventory financing",
        "Cash flow management",
        "Real estate acquisition"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Loans & Financing
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Competitive rates and flexible terms to meet your needs
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Check Your Rate
            </button>
          </div>
        </div>
      </div>

      {/* Loan Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Loans?
            </h2>
            <p className="text-xl text-gray-600">
              Experience lending that puts you first
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={TrendingUp}
              title="Competitive Rates"
              description="Get some of the best rates in the market with transparent pricing."
            />
            <FeatureCard
              icon={Clock}
              title="Quick Approval"
              description="Fast application process with decisions in as little as 24 hours."
            />
            <FeatureCard
              icon={Users}
              title="Expert Support"
              description="Our loan specialists guide you through every step of the process."
            />
            <FeatureCard
              icon={Shield}
              title="Secure Process"
              description="Your personal information is protected with bank-level security."
            />
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Loan Products
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect loan for your financial goals
            </p>
          </div>
          
          <div className="space-y-12">
            {loanTypes.map((loan, index) => (
              <div key={loan.name} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <loan.icon className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-3xl font-bold text-gray-900">{loan.name}</h3>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">{loan.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-600 font-semibold">Interest Rate</p>
                      <p className="text-lg font-bold text-green-800">{loan.rate}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-600 font-semibold">Loan Amount</p>
                      <p className="text-lg font-bold text-blue-800">{loan.amount}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-purple-600 font-semibold">Term</p>
                      <p className="text-lg font-bold text-purple-800">{loan.term}</p>
                    </div>
                  </div>
                  
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {loan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Common Uses</h4>
                    <ul className="space-y-2">
                      {loan.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mortgage Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Estimate your monthly mortgage payments
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Home Price
                    </label>
                    <input
                      type="text"
                      placeholder="$400,000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Down Payment
                    </label>
                    <input
                      type="text"
                      placeholder="$80,000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Interest Rate
                    </label>
                    <input
                      type="text"
                      placeholder="6.5%"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Loan Term
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>30 years</option>
                      <option>15 years</option>
                      <option>20 years</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Payment</h3>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$2,147</div>
                  <p className="text-green-700">Principal & Interest</p>
                </div>
                
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Principal & Interest</span>
                    <span className="font-semibold">$2,147</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Tax</span>
                    <span className="font-semibold">$333</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Insurance</span>
                    <span className="font-semibold">$167</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total Monthly Payment</span>
                      <span className="text-xl font-bold text-green-600">$2,647</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Pre-Approved
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Get approved in just a few easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600">Complete our secure online application in minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Approved</h3>
              <p className="text-gray-600">Receive a decision within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Submit Documents</h3>
              <p className="text-gray-600">Upload required documents securely online</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Your Funds</h3>
              <p className="text-gray-600">Receive your loan proceeds quickly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Apply for a Loan?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Start your application today and get the financing you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Talk to a Specialist
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
