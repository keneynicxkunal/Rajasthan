import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  BookOpen, 
  Users, 
  Award, 
  Building,
  Target,
  TrendingUp,
  Clock,
  ArrowRight,
  GraduationCap,
  FlaskConical,
  Cpu,
  Zap,
  Wrench,
  TestTube
} from 'lucide-react'
import Link from 'next/link'

const departments = [
  {
    name: "Computer Science Engineering",
    icon: Cpu,
    programs: 8,
    faculty: 35,
    students: 1200,
    description: "Cutting-edge education in software development, AI, and emerging technologies",
    color: "bg-blue-500"
  },
  {
    name: "Electrical Engineering",
    icon: Zap,
    programs: 6,
    faculty: 28,
    students: 950,
    description: "Comprehensive study of power systems, electronics, and control engineering",
    color: "bg-yellow-500"
  },
  {
    name: "Mechanical Engineering",
    icon: Wrench,
    programs: 7,
    faculty: 32,
    students: 1100,
    description: "In-depth knowledge of design, manufacturing, and thermal systems",
    color: "bg-green-500"
  },
  {
    name: "Electronics Engineering",
    icon: Cpu,
    programs: 5,
    faculty: 25,
    students: 800,
    description: "Focus on electronic circuits, communication systems, and VLSI design",
    color: "bg-purple-500"
  },
  {
    name: "Civil Engineering",
    icon: Building,
    programs: 6,
    faculty: 30,
    students: 1000,
    description: "Education in construction, infrastructure, and environmental engineering",
    color: "bg-orange-500"
  },
  {
    name: "Chemical Engineering",
    icon: TestTube,
    programs: 4,
    faculty: 20,
    students: 600,
    description: "Study of chemical processes, plant design, and industrial applications",
    color: "bg-red-500"
  }
]

const programs = [
  {
    level: "Undergraduate",
    degree: "B.Tech",
    duration: "4 Years",
    programs: 15,
    icon: GraduationCap
  },
  {
    level: "Postgraduate",
    degree: "M.Tech",
    duration: "2 Years",
    programs: 12,
    icon: BookOpen
  },
  {
    level: "Doctoral",
    degree: "Ph.D",
    duration: "3-5 Years",
    programs: 8,
    icon: Award
  },
  {
    level: "Diploma",
    degree: "Diploma",
    duration: "3 Years",
    programs: 6,
    icon: Target
  }
]

const highlights = [
  {
    title: "NBA Accredited",
    value: "100%",
    description: "All programs accredited by National Board of Accreditation",
    icon: Award
  },
  {
    title: "Research Output",
    value: "500+",
    description: "Research publications annually",
    icon: TrendingUp
  },
  {
    title: "Industry Partners",
    value: "200+",
    description: "Companies for internships and placements",
    icon: Building
  },
  {
    title: "Lab Facilities",
    value: "50+",
    description: "State-of-the-art laboratories",
    icon: FlaskConical
  }
]

export default function AcademicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Academics
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive academic programs, world-class faculty, and cutting-edge research 
                opportunities that prepare students for successful careers in engineering and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Highlights */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-primary mb-2">{highlight.value}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                      <p className="text-gray-600 text-sm">{highlight.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Departments
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Six specialized departments offering comprehensive engineering education and research opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => {
                const Icon = dept.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-all group cursor-pointer">
                    <Link href="/academics/departments">
                      <CardHeader className="text-center">
                        <div className={`${dept.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-xl">{dept.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-primary">{dept.programs}</div>
                            <div className="text-xs text-gray-600">Programs</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{dept.faculty}</div>
                            <div className="text-xs text-gray-600">Faculty</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{dept.students}</div>
                            <div className="text-xs text-gray-600">Students</div>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Academic Programs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Academic Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Diverse range of programs catering to different educational aspirations and career goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program, index) => {
                const Icon = program.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <Badge className="mb-3">{program.level}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.degree}</h3>
                      <div className="flex items-center justify-center text-sm text-gray-600 mb-3">
                        <Clock className="h-4 w-4 mr-1" />
                        {program.duration}
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">{program.programs}</div>
                      <p className="text-gray-600 text-sm">Programs Available</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore Academics
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Quick access to detailed information about our academic offerings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all cursor-pointer">
                <Link href="/academics/departments">
                  <CardHeader className="text-center">
                    <Building className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">Departments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Detailed information about each department, faculty, and research areas
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      Explore Departments <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-all cursor-pointer">
                <Link href="/academics/courses">
                  <CardHeader className="text-center">
                    <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete list of courses, curriculum, and program structures
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      View Courses <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>

              <Card className="group hover:shadow-lg transition-all cursor-pointer">
                <Link href="/academics/faculty">
                  <CardHeader className="text-center">
                    <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">Faculty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Meet our distinguished faculty members and their expertise
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                      Meet Faculty <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Academic Excellence */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Academic Excellence
                </h2>
                <p className="text-gray-600 mb-6">
                  At Rajasthan Engineering University, we are committed to maintaining the highest standards 
                  of academic excellence. Our curriculum is regularly updated to reflect industry trends, 
                  our faculty are leaders in their fields, and our research initiatives address real-world 
                  challenges. We provide a nurturing environment that encourages innovation, critical thinking, 
                  and holistic development.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Brochure
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