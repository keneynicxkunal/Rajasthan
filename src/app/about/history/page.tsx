import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar, 
  Award, 
  GraduationCap, 
  Building,
  Users,
  TrendingUp,
  Clock
} from 'lucide-react'

const timelineEvents = [
  {
    year: "1995",
    title: "Establishment of REU",
    description: "Rajasthan Engineering University was established with a vision to provide quality engineering education in the region.",
    icon: Building,
    milestone: true
  },
  {
    year: "1998",
    title: "First Graduating Batch",
    description: "The first batch of engineers graduated from REU, marking a significant milestone in our journey.",
    icon: GraduationCap
  },
  {
    year: "2005",
    title: "Research Center Inauguration",
    description: "State-of-the-art research facilities were established, promoting innovation and advanced studies.",
    icon: Award
  },
  {
    year: "2010",
    title: "NBA Accreditation",
    description: "All engineering programs received NBA accreditation, recognizing our commitment to quality education.",
    icon: Award,
    milestone: true
  },
  {
    year: "2015",
    title: "International Collaborations",
    description: "Established partnerships with leading international universities for student and faculty exchange programs.",
    icon: Users
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Complete digital transformation of academic processes and online learning infrastructure.",
    icon: TrendingUp
  },
  {
    year: "2024",
    title: "Ranked Among Top Engineering Colleges",
    description: "Recognized among the top engineering institutions in Rajasthan and nationally.",
    icon: Award,
    milestone: true
  }
]

const achievements = [
  {
    title: "Academic Excellence",
    description: "Consistently maintained high academic standards with excellent results and placements",
    icon: Award
  },
  {
    title: "Research Innovation",
    description: "Over 1000 research publications and patents in various engineering disciplines",
    icon: TrendingUp
  },
  {
    title: "Industry Partnerships",
    description: "Strong collaborations with 200+ industries for internships and placements",
    icon: Building
  },
  {
    title: "Alumni Network",
    description: "Strong alumni network of 50,000+ graduates working globally",
    icon: Users
  }
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our History
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A journey of excellence spanning decades, from humble beginnings to becoming a premier engineering institution
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Journey Through Time
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key milestones that have shaped our institution into what it is today
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/20 h-full"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => {
                  const Icon = event.icon
                  const isLeft = index % 2 === 0
                  
                  return (
                    <div key={index} className="relative flex items-center">
                      <div className={`flex-1 ${isLeft ? 'text-right pr-8' : 'pl-8 order-2'}`}>
                        <Card className="inline-block text-left max-w-md hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <Icon className="h-6 w-6 text-primary" />
                              <Badge variant="outline">{event.year}</Badge>
                              {event.milestone && (
                                <Badge className="bg-primary text-white">Milestone</Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-600">
                              {event.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                      
                      <div className="flex-1"></div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Achievements
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Recognition and accomplishments that demonstrate our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Looking Ahead
                </h2>
                <p className="text-gray-600 mb-6">
                  As we continue our journey, we remain committed to our founding principles while embracing innovation 
                  and change. Our history inspires us to reach greater heights and make lasting contributions to 
                  engineering education and society.
                </p>
                <p className="text-gray-600">
                  Join us as we write the next chapter in our story of excellence and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}