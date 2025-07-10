import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "~/components/Layout";
import { FeatureCard } from "~/components/FeatureCard";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  HelpCircle, 
  Send,
  Globe,
  Smartphone,
  Building,
  Users,
  CreditCard,
  Shield,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
});

function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    category: string;
  }>();

  const onSubmit = async (data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    category: string;
  }) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Contact form submission:", data);
      toast.success("Thank you for your message! We'll get back to you within 24 hours.");
      reset();
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
    }
  };

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with our customer service team",
      contact: "1-800-MODERN-1",
      hours: "24/7 Available",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help through our website",
      contact: "Start Chat",
      hours: "Mon-Fri: 8AM-8PM",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      contact: "support@modernbank.com",
      hours: "Response within 24 hours",
      color: "purple"
    },
    {
      icon: Building,
      title: "Visit a Branch",
      description: "Meet with us in person",
      contact: "Find Locations",
      hours: "Mon-Fri: 9AM-5PM",
      color: "orange"
    }
  ];

  const faqs = [
    {
      question: "How do I open a new account?",
      answer: "You can open a new account online in just 5 minutes. Simply click 'Open Account' on our homepage, choose your account type, and follow the guided application process. You'll need a valid ID and initial deposit to get started."
    },
    {
      question: "What are your fees?",
      answer: "We believe in transparent pricing. Most of our accounts have no monthly maintenance fees. Our Essential Checking is completely free, while Premium accounts have low monthly fees that can be waived with minimum balance requirements. Check our fee schedule for complete details."
    },
    {
      question: "Is mobile banking secure?",
      answer: "Yes, absolutely. We use bank-level 256-bit encryption, multi-factor authentication, and biometric login options. Our app is monitored 24/7 for suspicious activity, and we offer zero liability protection for unauthorized transactions."
    },
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking 'Forgot Password' on the login page. Enter your username or email, and we'll send you a secure link to create a new password. For additional security, you may need to verify your identity."
    },
    {
      question: "What if I lose my debit card?",
      answer: "If you lose your debit card, immediately log into mobile banking or call our 24/7 customer service line to freeze your card. We can order a replacement card that will arrive within 3-5 business days, or you can visit a branch for a temporary card."
    },
    {
      question: "How do I dispute a transaction?",
      answer: "You can dispute a transaction through mobile banking, online banking, or by calling customer service. We'll investigate the dispute and provide provisional credit within 10 business days while we resolve the issue with the merchant."
    },
    {
      question: "What are your ATM policies?",
      answer: "We offer free access to over 60,000 ATMs nationwide. If you use an out-of-network ATM, we'll reimburse up to $10 in fees per month for Essential Checking customers, and unlimited reimbursements for Premium customers."
    },
    {
      question: "How do I set up direct deposit?",
      answer: "Setting up direct deposit is easy. Provide your employer with your account number and our routing number (found in mobile banking). Most direct deposits are processed within 1-2 pay cycles. You can also set up direct deposit for government benefits and tax refunds."
    }
  ];

  const branches = [
    {
      name: "Downtown Financial Center",
      address: "123 Banking Street, Finance City, FC 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM, Sat: 9AM-2PM"
    },
    {
      name: "Westside Branch",
      address: "456 Commerce Avenue, Finance City, FC 12346",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-1PM"
    },
    {
      name: "Northtown Location",
      address: "789 Business Boulevard, Finance City, FC 12347",
      phone: "(555) 345-6789",
      hours: "Mon-Fri: 9AM-5PM"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 mb-8">
              We're here to help with all your banking needs
            </p>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support method that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className={`bg-${channel.color}-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className={`h-8 w-8 text-${channel.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-3">{channel.description}</p>
                <p className="font-semibold text-gray-900 mb-1">{channel.contact}</p>
                <p className="text-sm text-gray-500">{channel.hours}</p>
                <button className={`mt-4 bg-${channel.color}-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-${channel.color}-700 transition-colors`}>
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    id="category"
                    {...register("category", { required: "Please select a category" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select a category</option>
                    <option value="account">Account Questions</option>
                    <option value="loans">Loans & Credit</option>
                    <option value="technical">Technical Support</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Brief description of your inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Please provide details about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 disabled:bg-teal-400 transition-colors flex items-center justify-center mx-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Branch Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit us in person at one of our convenient locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-teal-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{branch.name}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <p className="text-gray-700">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500 mr-2" />
                    <p className="text-gray-700">{branch.phone}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500 mr-2" />
                    <p className="text-gray-700">{branch.hours}</p>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Emergency & Fraud Reporting
          </h2>
          <p className="text-gray-700 mb-6">
            If you suspect fraudulent activity on your account or need to report a lost/stolen card, 
            contact us immediately using our 24/7 emergency line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-gray-900">24/7 Fraud Hotline</p>
              <p className="text-xl font-bold text-red-600">1-800-FRAUD-1</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-sm font-medium text-gray-900">Lost/Stolen Cards</p>
              <p className="text-xl font-bold text-red-600">1-800-CARD-911</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
