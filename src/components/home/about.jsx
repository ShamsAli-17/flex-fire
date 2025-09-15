import { Award, Users, Clock, Target } from 'lucide-react'

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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Why Choose <span className="text-red-600">PowerFit Gym?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At PowerFit Gym, we believe fitness is more than just physical transformation. 
              It's about building confidence, creating lasting habits, and becoming the best 
              version of yourself. Our state-of-the-art facility and expert team are here 
              to support you every step of the way.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-lg p-2 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Modern gym equipment"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}