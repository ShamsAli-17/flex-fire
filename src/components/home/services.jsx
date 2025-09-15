import { Dumbbell, Heart, Users, Zap } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive weight training programs",
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: Heart,
      title: "Cardio Workouts",
      description: "Improve cardiovascular health with high-energy cardio sessions and equipment",
      image: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join our energetic group fitness classes including yoga, pilates, and HIIT",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      icon: Zap,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers for personalized fitness programs",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover a wide range of fitness services designed to help you achieve your health and wellness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 h-48">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-red-600 rounded-lg p-2">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  )
}