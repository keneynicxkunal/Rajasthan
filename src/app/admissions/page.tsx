import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  Calendar, 
  Target, 
  Award,
  Users,
  FileText,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const admissionInfo = {
  importantDates: [
    { event: "Application Start", date: "2024-04-01", status: "upcoming" },
    { event: "Application Deadline", date: "2024-05-31", status: "upcoming" },
    { event: "Entrance Exam", date: "2024-06-15", status: "upcoming" },
    { event: "Result Declaration", date: "2024-07-01", status: "upcoming" },
    { event: "Counseling Start", date: "2024-07-15", status: "upcoming" },
    { event: "Classes Begin", date: "2024-08-01", status: "upcoming" }
  ],
  eligibility: [
    "10+2 with Physics, Chemistry, and Mathematics (PCM)",
    "Minimum 60% aggregate marks in qualifying examination",
    "Valid score in REU Entrance Exam or JEE Main",
    "Age limit: 17-25 years as on December 31, 2024",
    "Domicile: Rajasthan state preference (as per government norms)"
  ],
  programs: [
    {
      name: "B.Tech Programs",
      duration: "4 Years",
      seats: 580,
      fee: "₹75,000 - ₹85,000 per year",
      icon: GraduationCap
    },
    {
      name: "M.Tech Programs",
      duration: "2 Years",
      seats: 105,
      fee: "₹88,000 - ₹95,000 per year",
      icon: Target
    },
    {
      name: "Ph.D Programs",
      duration: "3-5 Years",
      seats: 54,
      fee: "₹45,000 - ₹50,000 per year",
      icon: Award
    }
  ],
  quickLinks: [
    { title: "Application Process", href: "/admissions/process", icon: FileText },
    { title: "Eligibility Criteria", href: "/admissions/eligibility", icon: Target },
    { title: "Fee Structure", href: "/admissions/fees", icon: Award },
    { title: "Download Forms", href: "/downloads", icon: Download }
  ]
}

export default function AdmissionsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'ongoing': return 'bg-yellow-500'
      case 'upcoming': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Admissions
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join Rajasthan Engineering University and embark on a journey of academic excellence, 
                innovation, and personal growth. Apply now for our diverse range of engineering programs.
              </p>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Important Dates
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay updated with the admission schedule and important deadlines
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admissionInfo.importantDates.map((date, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${getStatusColor(date.status)} text-white`}>
                        {date.status.toUpperCase()}
                      </Badge>
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {date.event}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {new Date(date.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Eligibility Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Eligibility Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {admissionInfo.eligibility.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/admissions/eligibility">
                      <Button variant="outline" className="w-full">
                        View Detailed Eligibility <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Programs Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>Programs Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {admissionInfo.programs.map((program, index) => {
                      const Icon = program.icon
                      return (
                        <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                          <Icon className="h-8 w-8 text-primary" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{program.name}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{program.duration}</span>
                              <span>•</span>
                              <span>{program.seats} Seats</span>
                              <span>•</span>
                              <span>{program.fee}</span>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-6">
                    <Link href="/academics/courses">
                      <Button variant="outline" className="w-full">
                        View All Programs <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Quick Links
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access important admission-related information and resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionInfo.quickLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all group cursor-pointer">
                    <Link href={link.href}>
                      <CardContent className="p-6 text-center">
                        <Icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {link.title}
                        </h3>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                          Explore
                        </Button>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Application Process Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Process Overview
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Simple and streamlined application process for all programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Register", description: "Create your account on the admission portal" },
                { step: 2, title: "Fill Form", description: "Complete the application form with required details" },
                { step: 3, title: "Upload Documents", description: "Submit necessary documents and photographs" },
                { step: 4, title: "Pay Fee", description: "Pay application fee and submit application" }
              ].map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/admissions/process">
                <Button size="lg">
                  View Detailed Process
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Need Help with Admissions?
                  </h2>
                  <p className="text-gray-600">
                    Our admission team is here to assist you throughout the application process
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-white border-gray-200">
                    <CardContent className="p-4 text-center">
                      <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900 mb-1">Admission Office</h4>
                      <p className="text-sm text-gray-600">Main Building, Ground Floor</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white border-gray-200">
                    <CardContent className="p-4 text-center">
                      <AlertCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900 mb-1">Helpline</h4>
                      <p className="text-sm text-gray-600">1800-123-4567</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white border-gray-200">
                    <CardContent className="p-4 text-center">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-sm text-gray-600">admissions@reu.ac.in</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Brochure
                  </Button>
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
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