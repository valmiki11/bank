import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "~/components/Layout";
import { FeatureCard } from "~/components/FeatureCard";
import { 
  CreditCard, 
  Gift, 
  Plane, 
  Shield, 
  Percent, 
  Star, 
  CheckCircle,
  DollarSign,
  Globe,
  Smartphone,
  Lock,
  Award
} from "lucide-react";

export const Route = createFileRoute("/credit-cards/")({
  component: CreditCardsPage,
});

function CreditCardsPage() {
  const creditCards = [
    {
      name: "Rewards Cashback Card",
      type: "Rewards",
      icon: Gift,
      annualFee: "$0",
      intro: "0% APR for 15 months",
      ongoing: "16.99% - 24.99% Variable APR",
      rewards: "2% cashback on all purchases",
      bonus: "$200 bonus after spending $1,000 in first 3 months",
      features: [
        "2% cashback on all purchases",
        "No annual fee",
        "0% intro APR for 15 months",
        "No foreign transaction fees",
        "Mobile wallet compatibility",
        "Fraud protection"
      ],
      benefits: [
        "Unlimited cashback earning",
        "Quarterly bonus categories",
        "Automatic cashback redemption",
        "Extended warranty protection",
        "Purchase protection"
      ],
      bestFor: "Everyday spending and cashback rewards"
    },
    {
      name: "Travel Rewards Card",
      type: "Travel",
      icon: Plane,
      annualFee: "$95",
      intro: "60,000 bonus miles",
      ongoing: "18.99% - 25.99% Variable APR",
      rewards: "2X miles on travel, 1X on everything else",
      bonus: "60,000 bonus miles after spending $4,000 in first 3 months",
      features: [
        "2X miles on travel purchases",
        "1X mile on all other purchases",
        "No foreign transaction fees",
        "TSA PreCheck/Global Entry credit",
        "Priority boarding",
        "Free checked bag"
      ],
      benefits: [
        "Airport lounge access",
        "Travel insurance coverage",
        "Concierge service",
        "Hotel elite status",
        "Rental car benefits"
      ],
      bestFor: "Frequent travelers and vacation enthusiasts"
    },
    {
      name: "Low APR Card",
      type: "Low Interest",
      icon: Percent,
      annualFee: "$0",
      intro: "0% APR for 21 months",
      ongoing: "12.99% - 22.99% Variable APR",
      rewards: "No rewards program",
      bonus: "0% APR on purchases and balance transfers",
      features: [
        "0% intro APR for 21 months",
        "Low ongoing APR",
        "No annual fee",
        "Balance transfer option",
        "Credit score monitoring",
        "Payment flexibility"
      ],
      benefits: [
        "Save on interest charges",
        "Debt consolidation option",
        "Budget-friendly payments",
        "Credit building opportunity",
        "Financial planning tools"
      ],
      bestFor: "Large purchases and debt consolidation"
    },
    {
      name: "Secured Credit Card",
      type: "Secured",
      icon: Shield,
      annualFee: "$0",
      intro: "Build credit history",
      ongoing: "22.99% Variable APR",
      rewards: "1% cashback on all purchases",
      bonus: "Graduation to unsecured card possible",
      features: [
        "Secured with deposit",
        "Credit building opportunity",
        "1% cashback rewards",
        "No annual fee",
        "Graduation potential",
        "Credit monitoring"
      ],
      benefits: [
        "Establish credit history",
        "Improve credit score",
        "Access to credit",
        "Financial education resources",
        "Path to unsecured card"
      ],
      bestFor: "Building or rebuilding credit"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Credit Cards
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Find the perfect card for your lifestyle and spending habits
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Compare Cards
            </button>
          </div>
        </div>
      </div>

      {/* Card Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Credit Cards?
            </h2>
            <p className="text-xl text-gray-600">
              Experience credit cards designed with your needs in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Award}
              title="Great Rewards"
              description="Earn cashback, miles, or points on every purchase you make."
            />
            <FeatureCard
              icon={Shield}
              title="Fraud Protection"
              description="Advanced security features and zero liability for unauthorized charges."
            />
            <FeatureCard
              icon={Smartphone}
              title="Mobile Ready"
              description="Manage your card, make payments, and track spending on the go."
            />
            <FeatureCard
              icon={Globe}
              title="Global Acceptance"
              description="Use your card anywhere in the world with no foreign transaction fees."
            />
          </div>
        </div>
      </section>

      {/* Credit Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Credit Cards
            </h2>
            <p className="text-xl text-gray-600">
              Choose the card that matches your spending style
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {creditCards.map((card, index) => (
              <div key={card.name} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-300 transition-colors">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <card.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{card.name}</h3>
                    <p className="text-purple-600 font-semibold">{card.type}</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-purple-100 text-sm">Annual Fee</p>
                      <p className="text-2xl font-bold">{card.annualFee}</p>
                    </div>
                    <CreditCard className="h-8 w-8 text-purple-200" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-purple-100 text-sm">Intro Offer</p>
                    <p className="font-semibold">{card.intro}</p>
                    <p className="text-purple-100 text-sm">Ongoing APR</p>
                    <p className="font-semibold">{card.ongoing}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <p className="text-yellow-800 font-semibold text-sm">WELCOME BONUS</p>
                    <p className="text-yellow-900">{card.bonus}</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">Rewards</p>
                  <p className="text-gray-700">{card.rewards}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-lg font-semibold text-gray-900 mb-3">Key Features</p>
                  <ul className="space-y-2">
                    {card.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-600 font-medium">Best For: {card.bestFor}</p>
                </div>
                
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Card Comparison
            </h2>
            <p className="text-xl text-gray-600">
              Compare features side by side
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Rewards</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Travel</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Low APR</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Secured</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Annual Fee</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">$0</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">$95</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">$0</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">$0</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Cashback/Rewards</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">2% cashback</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">2X miles</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">None</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">1% cashback</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Intro APR</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">0% for 15 months</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">N/A</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">0% for 21 months</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">N/A</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Foreign Transaction Fees</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">
                      <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">
                      <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">3%</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">3%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Credit Building</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">Good</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">Good</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">Good</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900">Excellent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Application Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Credit Card Application Tips
            </h2>
            <p className="text-xl text-gray-600">
              Improve your chances of approval
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Check Your Credit Score</h3>
              <p className="text-gray-700">
                Know your credit score before applying. Higher scores typically qualify for better terms and rewards.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stable Income</h3>
              <p className="text-gray-700">
                Ensure you have a stable income source. Lenders want to see you can make monthly payments.
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manage Existing Debt</h3>
              <p className="text-gray-700">
                Keep your credit utilization low and pay existing debts on time to improve your creditworthiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Apply for a Credit Card?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Choose the card that fits your lifestyle and start earning rewards today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors">
              Apply Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Compare Cards
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
