import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "~/components/Layout";
import { FeatureCard } from "~/components/FeatureCard";
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Handshake, 
  BookOpen, 
  TreePine,
  Building,
  Calendar,
  TrendingUp,
  Shield
} from "lucide-react";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the center of everything we do, ensuring their success is our success."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We maintain the highest standards of security and transparency in all our operations."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge financial solutions for the digital age."
    },
    {
      icon: Handshake,
      title: "Community",
      description: "We're committed to supporting and strengthening the communities we serve."
    }
  ];

  const leadership = [
    {
      name: "Sarah Mitchell",
      position: "Chief Executive Officer",
      bio: "Sarah brings over 20 years of banking experience and a passion for digital innovation. She leads our mission to make banking more accessible and user-friendly.",
      initial: "S"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Michael oversees our digital transformation initiatives and ensures our technology platform remains secure, scalable, and innovative.",
      initial: "M"
    },
    {
      name: "Emily Rodriguez",
      position: "Chief Financial Officer",
      bio: "Emily manages our financial operations and strategic planning, ensuring sustainable growth while maintaining fiscal responsibility.",
      initial: "E"
    },
    {
      name: "David Thompson",
      position: "Chief Risk Officer",
      bio: "David leads our risk management and compliance efforts, ensuring we maintain the highest standards of security and regulatory compliance.",
      initial: "D"
    }
  ];

  const communityInitiatives = [
    {
      icon: BookOpen,
      title: "Financial Education",
      description: "Free financial literacy workshops and resources for community members of all ages.",
      impact: "5,000+ people educated annually"
    },
    {
      icon: Building,
      title: "Small Business Support",
      description: "Mentorship programs and microloans to help local entrepreneurs start and grow their businesses.",
      impact: "$2M+ in small business loans"
    },
    {
      icon: TreePine,
      title: "Environmental Initiatives",
      description: "Paperless banking options and support for local environmental conservation projects.",
      impact: "50,000 trees saved annually"
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Collaborations with local nonprofits and charities to address community needs.",
      impact: "$500K+ donated annually"
    }
  ];

  const milestones = [
    { year: "2015", event: "ModernBank founded with a vision for digital-first banking" },
    { year: "2017", event: "Launched award-winning mobile banking app" },
    { year: "2019", event: "Reached 100,000 satisfied customers" },
    { year: "2021", event: "Introduced AI-powered financial insights" },
    { year: "2023", event: "Expanded to serve 500,000+ customers nationwide" },
    { year: "2024", event: "Recognized as 'Best Digital Bank' by FinTech Awards" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About ModernBank
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Empowering financial futures through innovation and trust
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Founded in 2015, ModernBank was born from a simple belief: banking should be 
                  accessible, transparent, and designed for the digital age. We saw an industry 
                  stuck in the past and knew there was a better way.
                </p>
                <p>
                  Starting as a small team of banking and technology experts, we set out to create 
                  a financial institution that truly serves its customers' needs. Today, we're proud 
                  to serve over 500,000 customers nationwide with innovative digital banking solutions.
                </p>
                <p>
                  Our journey has been guided by our commitment to putting customers first, embracing 
                  innovation, and building strong communities. Every feature we develop, every service 
                  we offer, and every decision we make is centered around one question: "How can we 
                  make banking better for our customers?"
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "To democratize financial services by providing secure, innovative, and accessible 
                banking solutions that empower individuals and businesses to achieve their financial goals."
              </blockquote>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">$2B+</div>
                  <div className="text-sm text-gray-600">Assets Under Management</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Reliability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600">4.8★</div>
                  <div className="text-sm text-gray-600">App Store Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experienced leaders driving our vision forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{leader.initial}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{leader.position}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and innovation
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-300"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`bg-white rounded-lg shadow-lg p-6 max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-bold text-blue-600">{milestone.year}</span>
                    </div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Community Involvement
            </h2>
            <p className="text-xl text-gray-600">
              Giving back to the communities we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityInitiatives.map((initiative, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
                    <initiative.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{initiative.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{initiative.description}</p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm font-semibold text-green-600">Impact:</p>
                  <p className="text-lg font-bold text-gray-900">{initiative.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600">
              Industry recognition for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Best Digital Bank 2024</h3>
              <p className="text-gray-600">FinTech Innovation Awards</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Customer Choice Award</h3>
              <p className="text-gray-600">Banking Excellence Awards 2023</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovation in Mobile Banking</h3>
              <p className="text-gray-600">Digital Finance Awards 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the future of banking with ModernBank
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
              Open an Account
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
