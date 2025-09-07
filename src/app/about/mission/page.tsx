import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  Eye, 
  Lightbulb, 
  Users,
  Award,
  BookOpen,
  Globe,
  Heart
} from 'lucide-react'

const missionPoints = [
  {
    title: "Academic Excellence",
    description: "To provide world-class engineering education that fosters critical thinking, innovation, and lifelong learning.",
    icon: BookOpen
  },
  {
    title: "Research & Innovation",
    description: "To promote cutting-edge research and innovation that addresses global challenges and contributes to societal development.",
    icon: Lightbulb
  },
  {
    title: "Industry Integration",
    description: "To bridge the gap between academia and industry through meaningful collaborations and practical exposure.",
    icon: Globe
  },
  {
    title: "Holistic Development",
    description: "To nurture well-rounded individuals with strong ethical values, leadership qualities, and social responsibility.",
    icon: Users
  }
]

const visionPoints = [
  {
    title: "Global Recognition",
    description: "To be recognized globally as a premier engineering institution known for excellence in education and research.",
    icon: Award
  },
  {
    title: "Innovation Hub",
    description: "To become a hub of innovation that produces engineers capable of solving complex real-world problems.",
    icon: Lightbulb
  },
  {
    title: "Social Impact",
    description: "To create a positive impact on society through technological advancements and sustainable solutions.",
    icon: Heart
  },
  {
    title: "Future-Ready",
    description: "To prepare future-ready engineers who can thrive in a rapidly evolving technological landscape.",
    icon: Target
  }
]

const coreValues = [
  {
    title: "Integrity",
    description: "Upholding the highest ethical standards in all our endeavors",
    icon: Heart
  },
  {
    title: "Excellence",
    description: "Striving for continuous improvement and exceptional quality",
    icon: Award
  },
  {
    title: "Innovation",
    description: "Embracing creativity and forward-thinking approaches",
    icon: Lightbulb
  },
  {
    title: "Collaboration",
    description: "Fostering teamwork and partnerships for mutual growth",
    icon: Users
  },
  {
    title: "Diversity",
    description: "Celebrating and leveraging diverse perspectives and backgrounds",
    icon: Globe
  },
  {
    title: "Sustainability",
    description: "Committed to environmental and social responsibility",
    icon: Target
  }
]

export default function MissionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mission & Vision
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our guiding principles and aspirations that drive us toward excellence in engineering education
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Target className="h-12 w-12 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are committed to transforming lives through exceptional engineering education and research
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{point.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{point.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Eye className="h-12 w-12 text-primary mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Envisioning a future where our engineers lead technological advancement and social transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visionPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <Icon className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">{point.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{point.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The fundamental principles that guide our actions and decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardHeader className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Strategic Goals 2025-2030</h2>
                <p className="text-gray-600">Our roadmap for the next five years</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge className="bg-primary text-white mt-1">1</Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhance Academic Programs</h3>
                    <p className="text-gray-600 text-sm">Introduce emerging technologies and interdisciplinary programs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-primary text-white mt-1">2</Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900">Expand Research Infrastructure</h3>
                    <p className="text-gray-600 text-sm">Establish centers of excellence in key engineering domains</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-primary text-white mt-1">3</Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900">Strengthen Industry Partnerships</h3>
                    <p className="text-gray-600 text-sm">Create more opportunities for internships and collaborative research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-primary text-white mt-1">4</Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900">Promote Internationalization</h3>
                    <p className="text-gray-600 text-sm">Increase student and faculty exchange programs globally</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge className="bg-primary text-white mt-1">5</Badge>
                  <div>
                    <h3 className="font-semibold text-gray-900">Foster Entrepreneurship</h3>
                    <p className="text-gray-600 text-sm">Develop incubation centers and startup support ecosystem</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}