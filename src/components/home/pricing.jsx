import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: 2499,
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
      price: 4999,
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
      price: 8299,
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-red-600">Membership Plan</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 cursor-pointer
                hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20
                hover:border-2 hover:border-red-500 hover:-translate-y-2
                ${plan.popular ? 'ring-2 ring-red-600 scale-105 z-10' : 'hover:z-20'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-black text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      ₹{plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group-hover:translate-x-1 transition-transform duration-300" style={{transitionDelay: `${featureIndex * 0.05}s`}}>
                      <Check className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
