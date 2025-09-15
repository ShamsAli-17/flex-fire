import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for beginners getting started",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: 59,
      period: "month",
      description: "Most popular choice for serious fitness enthusiasts",
      features: [
        "Everything in Basic",
        "Group fitness classes",
        "Nutrition consultation",
        "Personal trainer session (1/month)",
        "Guest passes (2/month)",
        "Towel service"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: 99,
      period: "month",
      description: "Ultimate package for maximum results",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom meal planning",
        "Recovery services",
        "Priority booking",
        "VIP lounge access",
        "Supplement discounts"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Choose Your <span className="text-red-600">Membership Plan</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-red-600 scale-105 z-10' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 7-day free trial</p>
          <p className="text-sm text-gray-500">No commitment • Cancel anytime • Money-back guarantee</p>
        </div>
      </div>
    </section>
  )
}