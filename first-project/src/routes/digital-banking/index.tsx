import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "~/components/Layout";
import { FeatureCard } from "~/components/FeatureCard";
import { 
  Smartphone, 
  Monitor, 
  Shield, 
  CreditCard, 
  Bell, 
  BarChart3, 
  Lock, 
  Fingerprint,
  Eye,
  Download,
  Zap,
  Clock,
  DollarSign,
  PiggyBank,
  Send,
  QrCode,
  Camera,
  MapPin
} from "lucide-react";

export const Route = createFileRoute("/digital-banking/")({
  component: DigitalBankingPage,
});

function DigitalBankingPage() {
  const onlineBankingFeatures = [
    {
      icon: Monitor,
      title: "Account Management",
      description: "View balances, transaction history, and manage all your accounts in one place."
    },
    {
      icon: Send,
      title: "Money Transfers",
      description: "Send money to friends, family, or businesses instantly with just a few clicks."
    },
    {
      icon: CreditCard,
      title: "Bill Pay",
      description: "Pay bills online, set up automatic payments, and never miss a due date again."
    },
    {
      icon: BarChart3,
      title: "Financial Insights",
      description: "Track spending, categorize expenses, and get personalized financial insights."
    },
    {
      icon: Bell,
      title: "Alerts & Notifications",
      description: "Stay informed with real-time alerts for transactions, low balances, and more."
    },
    {
      icon: PiggyBank,
      title: "Savings Goals",
      description: "Set and track savings goals with automated transfers and progress monitoring."
    }
  ];

  const mobileAppFeatures = [
    {
      icon: Camera,
      title: "Mobile Check Deposit",
      description: "Deposit checks instantly by taking a photo with your smartphone camera."
    },
    {
      icon: QrCode,
      title: "QR Code Payments",
      description: "Make payments quickly and securely by scanning QR codes at participating merchants."
    },
    {
      icon: Fingerprint,
      title: "Biometric Login",
      description: "Access your account securely using fingerprint or face recognition technology."
    },
    {
      icon: MapPin,
      title: "ATM & Branch Locator",
      description: "Find the nearest ATMs and branch locations with real-time directions."
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Get push notifications for all account activity and important updates."
    },
    {
      icon: DollarSign,
      title: "Spend Tracking",
      description: "Monitor your spending in real-time with categorized transaction insights."
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Multi-Factor Authentication",
      description: "Extra layers of security to protect your account from unauthorized access."
    },
    {
      icon: Lock,
      title: "256-Bit Encryption",
      description: "Bank-level encryption protects your data during transmission and storage."
    },
    {
      icon: Eye,
      title: "Fraud Monitoring",
      description: "24/7 monitoring systems detect and prevent suspicious account activity."
    },
    {
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Instant notifications for all transactions help you spot unauthorized activity."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Banking
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-8">
              Banking that fits your digital lifestyle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                Try Online Banking
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Digital Banking Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Banking Made Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the convenience of modern banking with our comprehensive digital platform. 
              Manage your finances anytime, anywhere, with complete security and ease.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Access</h3>
              <p className="text-gray-600">
                Bank whenever you want, wherever you are. Our digital platform never sleeps.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Transactions</h3>
              <p className="text-gray-600">
                Transfer money, pay bills, and deposit checks instantly with our fast platform.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bank-Level Security</h3>
              <p className="text-gray-600">
                Your money and data are protected with the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Banking Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Online Banking
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Take control of your finances with our comprehensive online banking platform. 
                Everything you need to manage your money is just a click away.
              </p>
              
              <div className="space-y-6">
                {onlineBankingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-indigo-100 rounded-lg p-2 mr-4">
                      <feature.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Access Online Banking
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Account Overview</h3>
                  <div className="text-sm text-gray-500">Last updated: 2 min ago</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Checking Account</p>
                      <p className="text-sm text-gray-500">****1234</p>
                    </div>
                    <p className="text-lg font-bold text-gray-900">$2,847.32</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Savings Account</p>
                      <p className="text-sm text-gray-500">****5678</p>
                    </div>
                    <p className="text-lg font-bold text-gray-900">$15,234.89</p>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Credit Card</p>
                      <p className="text-sm text-gray-500">****9012</p>
                    </div>
                    <p className="text-lg font-bold text-red-600">-$1,234.56</p>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button className="bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium">
                    Transfer Money
                  </button>
                  <button className="border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium">
                    Pay Bills
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mobile Banking App
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Bank on the go with our award-winning mobile app. All the power of online banking 
                in the palm of your hand, plus exclusive mobile-only features.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mobileAppFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className="bg-white"
                  />
                ))}
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download for iOS
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download for Android
                </button>
              </div>
            </div>
            
            <div className="lg:order-1 flex justify-center">
              <div className="relative">
                <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6 w-64">
                    <div className="text-center mb-6">
                      <div className="bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <Smartphone className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900">ModernBank</h3>
                      <p className="text-sm text-gray-500">Mobile Banking</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium">Balance</span>
                        <span className="text-lg font-bold text-indigo-600">$2,847</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <button className="bg-indigo-600 text-white py-2 rounded-lg text-xs">Transfer</button>
                        <button className="bg-gray-200 text-gray-700 py-2 rounded-lg text-xs">Deposit</button>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Coffee Shop</span>
                          <span>-$4.50</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Salary Deposit</span>
                          <span className="text-green-600">+$3,200</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Online Purchase</span>
                          <span>-$89.99</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Center */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your security is our top priority. We use advanced technology and industry best practices 
              to keep your money and personal information safe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {securityFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Safety Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">Never share your login credentials with anyone</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">Always log out completely when finished banking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">Use strong, unique passwords for your accounts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">Monitor your accounts regularly for suspicious activity</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Report Fraud</h3>
                <p className="text-gray-700 mb-4">
                  If you notice any suspicious activity on your account, contact us immediately.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">24/7 Fraud Hotline:</p>
                  <p className="text-lg font-bold text-blue-600">1-800-FRAUD-1</p>
                  <p className="text-sm text-gray-600">Available 24 hours a day, 7 days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Experience the future of banking with our digital platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
              Start Online Banking
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
              Download Mobile App
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
