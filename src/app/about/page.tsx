import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Building,
  Target,
  Eye,
  Calendar,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  const stats = [
    { icon: GraduationCap, label: "Programs", value: "50+" },
    { icon: Users, label: "Students", value: "5000+" },
    { icon: Award, label: "Faculty", value: "200+" },
    { icon: BookOpen, label: "Research Papers", value: "1000+" }
  ]

  const highlights = [
    {
      title: "Excellence in Education",
      description: "Committed to providing world-class engineering education with state-of-the-art facilities",
      icon: Target
    },
    {
      title: "Research & Innovation",
      description: "Fostering cutting-edge research and innovation across various engineering disciplines",
      icon: BookOpen
    },
    {
      title: "Industry Collaboration",
      description: "Strong partnerships with leading industries for enhanced learning and placement opportunities",
      icon: Building
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Rajasthan Engineering University
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A premier institution dedicated to excellence in engineering education, research, and innovation, 
                preparing future engineers to meet global challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose REU?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We stand out through our commitment to excellence, innovation, and holistic development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="h-16 w-16 text-primary mx-auto mb-4" />
                      <CardTitle className="text-xl">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{highlight.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quick Links to About Sub-pages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore More About REU
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our rich history, mission, vision, and administrative structure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all cursor-pointer">
                <Link href="/about/history">
                  <CardHeader className="text-center">
                    <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">Our History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Journey through our establishment and evolution as a leading engineering institution
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-all cursor-pointer">
                <Link href="/about/mission">
                  <CardHeader className="text-center">
                    <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">Mission & Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Understand our core values, mission, and vision for the future of engineering education
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-all cursor-pointer">
                <Link href="/about/administration">
                  <CardHeader className="text-center">
                    <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">Administration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Meet our leadership team and administrative structure that drives excellence
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join Our Community
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Become part of a vibrant community dedicated to engineering excellence and innovation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Schedule a Visit
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}