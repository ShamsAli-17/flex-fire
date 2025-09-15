import { Award, Users, Clock, Target } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Expert Trainers",
      description: "Certified professionals with years of experience in fitness and nutrition"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Join a supportive community that motivates and inspires each other"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Work out on your schedule with round-the-clock gym access"
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Personalized programs designed to help you achieve your specific fitness goals"
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Text Content - Mobile First */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose <span className="text-red-600">FlexFire Gym?</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
              At FlexFire Gym, we believe fitness is more than just physical transformation. 
              It's about building confidence, creating lasting habits, and becoming the best 
              version of yourself. Our state-of-the-art facility and expert team are here 
              to support you every step of the way.
            </p>
            
            {/* Features Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-3 sm:p-4 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="bg-red-100 rounded-lg p-2 sm:p-3 flex-shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base group-hover:text-red-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section - Mobile First */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative group">
              {/* Main Image with Next.js optimization */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
                <Image
                  src="/about.jpeg"
                  alt="Modern FlexFire Gym equipment and training area"
                  width={600}
                  height={450}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Stats Badge - Responsive positioning */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-red-600 to-red-700 text-white p-4 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black">10+</div>
                <div className="text-xs sm:text-sm font-medium opacity-90">Years Experience</div>
              </div>
              
              {/* Additional floating stats */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white/95 backdrop-blur-sm text-gray-900 p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="text-lg sm:text-xl lg:text-2xl font-black text-red-600">2000+</div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">Happy Members</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
