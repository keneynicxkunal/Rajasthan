import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BookOpen, 
  Clock, 
  Users, 
  Award,
  Target,
  Calendar,
  Star,
  Download,
  Info
} from 'lucide-react'

const courses = {
  undergraduate: [
    {
      id: 1,
      name: "B.Tech Computer Science Engineering",
      duration: "4 Years",
      seats: 120,
      eligibility: "10+2 with PCM (60%)",
      description: "Comprehensive program covering software development, AI, machine learning, and emerging technologies.",
      highlights: ["NBA Accredited", "100% Placement", "Industry Internships", "Research Opportunities"],
      fee: "₹85,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
    },
    {
      id: 2,
      name: "B.Tech Electrical Engineering",
      duration: "4 Years",
      seats: 100,
      eligibility: "10+2 with PCM (60%)",
      description: "Program focusing on power systems, electronics, control engineering, and renewable energy.",
      highlights: ["NBA Accredited", "Power Sector Placements", "Advanced Labs", "Industry MoUs"],
      fee: "₹80,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
    },
    {
      id: 3,
      name: "B.Tech Mechanical Engineering",
      duration: "4 Years",
      seats: 110,
      eligibility: "10+2 with PCM (60%)",
      description: "Comprehensive education in mechanical design, manufacturing, thermal systems, and automotive engineering.",
      highlights: ["NBA Accredited", "Auto Industry Placements", "CAD/CAM Lab", "Workshop Facilities"],
      fee: "₹82,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
    },
    {
      id: 4,
      name: "B.Tech Electronics Engineering",
      duration: "4 Years",
      seats: 90,
      eligibility: "10+2 with PCM (60%)",
      description: "Program covering electronic circuits, communication systems, VLSI design, and embedded systems.",
      highlights: ["NBA Accredited", "Core Electronics Placements", "VLSI Design Center", "Communication Lab"],
      fee: "₹83,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
    },
    {
      id: 5,
      name: "B.Tech Civil Engineering",
      duration: "4 Years",
      seats: 100,
      eligibility: "10+2 with PCM (60%)",
      description: "Education in construction technology, structural engineering, transportation, and environmental engineering.",
      highlights: ["NBA Accredited", "Infrastructure Placements", "Material Testing Lab", "Surveying Equipment"],
      fee: "₹78,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
    },
    {
      id: 6,
      name: "B.Tech Chemical Engineering",
      duration: "4 Years",
      seats: 60,
      eligibility: "10+2 with PCM (60%)",
      description: "Program focusing on chemical processes, plant design, environmental engineering, and industrial applications.",
      highlights: ["NBA Accredited", "Chemical Industry Placements", "Process Design Lab", "Environmental Research"],
      fee: "₹75,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
    }
  ],
  postgraduate: [
    {
      id: 7,
      name: "M.Tech Computer Science Engineering",
      duration: "2 Years",
      seats: 30,
      eligibility: "B.Tech in CSE/IT (60%)",
      description: "Advanced program in computer science with specialization in AI, ML, and software engineering.",
      highlights: ["Research Focus", "Industry Projects", "Ph.D Pathway", "Publication Support"],
      fee: "₹95,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
    },
    {
      id: 8,
      name: "M.Tech Power Systems",
      duration: "2 Years",
      seats: 25,
      eligibility: "B.Tech in EE (60%)",
      description: "Specialized program in power systems engineering, smart grids, and renewable energy integration.",
      highlights: ["Power Sector Focus", "Smart Grid Lab", "Industry Collaboration", "Research Opportunities"],
      fee: "₹90,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
    },
    {
      id: 9,
      name: "M.Tech Thermal Engineering",
      duration: "2 Years",
      seats: 25,
      eligibility: "B.Tech in ME (60%)",
      description: "Advanced study in thermal systems, heat transfer, and energy management.",
      highlights: ["Thermal Research", "Energy Systems", "Industry Projects", "Lab Facilities"],
      fee: "₹88,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
    },
    {
      id: 10,
      name: "M.Tech VLSI Design",
      duration: "2 Years",
      seats: 20,
      eligibility: "B.Tech in ECE/EE (60%)",
      description: "Specialized program in VLSI design, semiconductor technology, and embedded systems.",
      highlights: ["VLSI Design Center", "Industry Tools", "Semiconductor Focus", "Research Projects"],
      fee: "₹92,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
    }
  ],
  doctoral: [
    {
      id: 11,
      name: "Ph.D Computer Science Engineering",
      duration: "3-5 Years",
      seats: 15,
      eligibility: "M.Tech/M.E in CS/IT",
      description: "Research program in advanced computer science topics with focus on innovation and publication.",
      highlights: ["Research Fellowship", "Publication Support", "Conference Funding", "Lab Access"],
      fee: "₹50,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/d53bfb15-fbcb-436c-8953-ae2fe52d4ce6_1490672731php4JWbaj.jpeg?auth_key=1788703866-8facb3963044476aa3b6622e0368bdda-0-aadf0b30d97e761124cbbdfa078d1b99"
    },
    {
      id: 12,
      name: "Ph.D Electrical Engineering",
      duration: "3-5 Years",
      seats: 12,
      eligibility: "M.Tech/M.E in EE",
      description: "Advanced research in electrical engineering with focus on power systems and control engineering.",
      highlights: ["Power Systems Research", "Industry Collaboration", "Funding Opportunities", "Expert Guidance"],
      fee: "₹45,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/f786bb9d-fd0c-4dd7-831e-da8500096595_1592816798phpQDBzOl.png?auth_key=1788703866-15915bde74f142a6954430969a89f3cf-0-eb33eff22e29aab97d592cf465a81b4e"
    },
    {
      id: 13,
      name: "Ph.D Mechanical Engineering",
      duration: "3-5 Years",
      seats: 12,
      eligibility: "M.Tech/M.E in ME",
      description: "Research program in mechanical engineering focusing on design, manufacturing, and thermal systems.",
      highlights: ["Advanced Manufacturing", "Thermal Research", "Design Innovation", "Industry Projects"],
      fee: "₹48,000 per year",
      image: "https://z-cdn-media.chatglm.cn/files/2cf1fddc-9521-419a-ae39-27d4fa2e339c_rajasthan-technical-university-rtu-kota-1200x675.jpg?auth_key=1788703866-6c1a20c19a714988a4a3c07a6cfcaccb-0-d152d0712f6934461efdd49b19c59e89"
    }
  ]
}

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Courses & Programs
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of undergraduate, postgraduate, and doctoral programs 
                designed to prepare students for successful careers in engineering and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="undergraduate" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="postgraduate">Postgraduate</TabsTrigger>
                <TabsTrigger value="doctoral">Doctoral</TabsTrigger>
              </TabsList>

              {/* Undergraduate Programs */}
              <TabsContent value="undergraduate">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.undergraduate.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="aspect-video bg-gray-200">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {course.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {course.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            {course.seats} Seats
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Target className="h-4 w-4 mr-2" />
                            {course.eligibility}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2" />
                            {course.fee}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {course.highlights.map((highlight, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            Apply Now
                          </Button>
                          <Button variant="outline" size="sm">
                            <Info className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Postgraduate Programs */}
              <TabsContent value="postgraduate">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.postgraduate.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="aspect-video bg-gray-200">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {course.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {course.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            {course.seats} Seats
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Target className="h-4 w-4 mr-2" />
                            {course.eligibility}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2" />
                            {course.fee}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {course.highlights.map((highlight, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            Apply Now
                          </Button>
                          <Button variant="outline" size="sm">
                            <Info className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Doctoral Programs */}
              <TabsContent value="doctoral">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.doctoral.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="aspect-video bg-gray-200">
                        <img
                          src={course.image}
                          alt={course.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {course.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {course.description}
                        </p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {course.duration}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            {course.seats} Seats
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Target className="h-4 w-4 mr-2" />
                            {course.eligibility}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Award className="h-4 w-4 mr-2" />
                            {course.fee}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                          <div className="flex flex-wrap gap-1">
                            {course.highlights.map((highlight, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            Apply Now
                          </Button>
                          <Button variant="outline" size="sm">
                            <Info className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Course Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Curriculum & Structure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Undergraduate Programs</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 8 Semesters (4 Years)</li>
                        <li>• Credit-based system</li>
                        <li>• Core + Elective courses</li>
                        <li>• Industry internship</li>
                        <li>• Final year project</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Postgraduate Programs</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 4 Semesters (2 Years)</li>
                        <li>• Advanced coursework</li>
                        <li>• Research methodology</li>
                        <li>• Thesis/Project work</li>
                        <li>• Publications encouraged</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-5 w-5" />
                    <span>Program Highlights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Academic Excellence</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• NBA accredited programs</li>
                        <li>• Experienced faculty</li>
                        <li>• Modern curriculum</li>
                        <li>• Continuous evaluation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Industry Integration</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Industry internships</li>
                        <li>• Guest lectures</li>
                        <li>• Industry projects</li>
                        <li>• Placement assistance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <Download className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Download Course Information
                </h2>
                <p className="text-gray-600 mb-6">
                  Get detailed information about our courses, curriculum, fee structure, and admission process
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Course Brochure
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Fee Structure
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Academic Calendar
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