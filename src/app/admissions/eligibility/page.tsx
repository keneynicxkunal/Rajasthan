import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Target, 
  GraduationCap, 
  Calendar, 
  Users,
  CheckCircle,
  AlertCircle,
  Info,
  BookOpen,
  Award,
  ArrowRight
} from 'lucide-react'

const eligibilityCriteria = {
  undergraduate: {
    title: "Undergraduate Programs (B.Tech)",
    icon: GraduationCap,
    requirements: [
      {
        category: "Academic Qualification",
        items: [
          "10+2 or equivalent examination from a recognized board",
          "Physics, Chemistry, and Mathematics as compulsory subjects",
          "Minimum 60% aggregate marks in PCM (55% for SC/ST candidates)",
          "English as a compulsory subject in 10+2"
        ]
      },
      {
        category: "Entrance Examination",
        items: [
          "Valid score in REU Entrance Examination (REE) OR",
          "Valid score in JEE Main (Paper-1)",
          "Minimum cutoff score as decided by the university",
          "Rank in merit list based on entrance exam score"
        ]
      },
      {
        category: "Age Limit",
        items: [
          "Minimum age: 17 years as on December 31, 2024",
          "Maximum age: 25 years as on December 31, 2024",
          "Relaxation of 3 years for SC/ST candidates",
          "Relaxation of 5 years for PWD candidates"
        ]
      },
      {
        category: "Domicile Requirements",
        items: [
          "Rajasthan state candidates will have preference",
          "85% seats reserved for Rajasthan domicile holders",
          "15% seats open for All India candidates",
          "Domicile certificate required for state quota"
        ]
      }
    ]
  },
  postgraduate: {
    title: "Postgraduate Programs (M.Tech)",
    icon: BookOpen,
    requirements: [
      {
        category: "Academic Qualification",
        items: [
          "B.Tech/B.E degree in relevant discipline from a recognized university",
          "Minimum 60% marks in qualifying degree (55% for SC/ST)",
          "Valid GATE score (preferred but not mandatory)",
          "Candidates without GATE score must appear for REU Entrance Exam"
        ]
      },
      {
        category: "Discipline Requirements",
        items: [
          "CSE: B.Tech in CSE/IT or equivalent",
          "Electrical: B.Tech in EE/EEE or equivalent",
          "Mechanical: B.Tech in ME or equivalent",
          "Electronics: B.Tech in ECE/EEE or equivalent",
          "Civil: B.Tech in CE or equivalent",
          "Chemical: B.Tech in Chemical or equivalent"
        ]
      },
      {
        category: "Age Limit",
        items: [
          "No upper age limit for M.Tech programs",
          "Minimum age: 20 years as on December 31, 2024"
        ]
      },
      {
        category: "Additional Requirements",
        items: [
          "Valid GATE score card (if applicable)",
          "Degree certificate and mark sheets",
          "Migration certificate (if applicable)",
          "Character certificate from previous institution"
        ]
      }
    ]
  },
  doctoral: {
    title: "Doctoral Programs (Ph.D)",
    icon: Award,
    requirements: [
      {
        category: "Academic Qualification",
        items: [
          "M.Tech/M.E degree in relevant discipline with 60% marks",
          "OR B.Tech/B.E degree with 70% marks and valid GATE score",
          "OR equivalent qualification from a recognized university",
          "Qualifying in REU Ph.D. Entrance Test and Interview"
        ]
      },
      {
        category: "Research Proposal",
        items: [
          "Detailed research proposal in selected area",
          "Synopsis of proposed research work",
          "Literature review and methodology",
          "Expected outcomes and contributions"
        ]
      },
      {
        category: "Experience Requirements",
        items: [
          "Teaching/Research experience preferred",
          "Industry experience considered for relevant fields",
          "Publications in peer-reviewed journals advantageous",
          "Conference presentations and patents considered"
        ]
      },
      {
        category: "Additional Requirements",
        items: [
          "Valid score in UGC-NET/JRF (if applicable)",
          "No objection certificate from employer (if employed)",
          "Two letters of recommendation",
          "Statement of purpose"
        ]
      }
    ]
  }
}

const reservationPolicy = [
  {
    category: "Vertical Reservation",
    details: [
      { category: "Scheduled Caste (SC)", percentage: "16%" },
      { category: "Scheduled Tribe (ST)", percentage: "12%" },
      { category: "Other Backward Classes (OBC)", percentage: "21%" },
      { category: "Economically Weaker Section (EWS)", percentage: "10%" }
    ]
  },
  {
    category: "Horizontal Reservation",
    details: [
      { category: "Women", percentage: "30% in each category" },
      { category: "Persons with Disabilities (PWD)", percentage: "5%" },
      { category: "Defense Personnel", percentage: "3%" },
      { category: "Kashmiri Migrants", percentage: "1%" }
    ]
  }
]

export default function EligibilityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Eligibility Criteria
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed eligibility requirements for all programs at Rajasthan Engineering University. 
                Find out if you meet the criteria for your desired course.
              </p>
            </div>
          </div>
        </section>

        {/* Program-wise Eligibility */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Program-wise Eligibility
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed eligibility criteria for different academic programs
              </p>
            </div>

            <div className="space-y-8">
              {Object.values(eligibilityCriteria).map((program, index) => {
                const Icon = program.icon
                return (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="bg-primary/5">
                      <CardTitle className="flex items-center space-x-3 text-xl">
                        <Icon className="h-8 w-8 text-primary" />
                        <span>{program.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {program.requirements.map((requirement, reqIndex) => (
                          <div key={reqIndex}>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Target className="h-5 w-5 text-primary mr-2" />
                              {requirement.category}
                            </h4>
                            <ul className="space-y-2">
                              {requirement.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Reservation Policy */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Reservation Policy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reservation policy as per Government of Rajasthan norms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reservationPolicy.map((policy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>{policy.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {policy.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-900">{detail.category}</span>
                          <Badge className="bg-primary text-white">{detail.percentage}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Info className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">
                      Important Notes
                    </h4>
                    <ul className="space-y-1 text-blue-800">
                      <li>• Reservation benefits are applicable only to Rajasthan domicile candidates</li>
                      <li>• Candidates must produce valid category certificates during counseling</li>
                      <li>• Reservation percentages are subject to change as per government norms</li>
                      <li>• Supernumerary seats are available for PWD and Kashmiri Migrants</li>
                      <li>• All reservations are subject to verification of documents</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Instructions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Document Verification</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Original documents must be produced during counseling</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Attested photocopies of all documents required</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Migration certificate for candidates from other universities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Character certificate from previous institution</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Medical fitness certificate from registered medical practitioner</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span>Rejection Criteria</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">False information in application form</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Failure to meet eligibility criteria</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Invalid or fake documents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Non-appearance in counseling on scheduled date</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Failure to pay admission fee within stipulated time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact for Queries */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardContent className="p-8 text-center">
                <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Have Questions About Eligibility?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our admission counselors are available to help you understand the eligibility criteria 
                  and guide you through the application process.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                    <p className="text-gray-600">1800-123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 9AM-6PM</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">admission@reu.ac.in</p>
                    <p className="text-sm text-gray-500">24/7 Support</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">Visit</h4>
                    <p className="text-gray-600">Admission Office</p>
                    <p className="text-sm text-gray-500">REU Campus</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    Check Eligibility
                  </Button>
                  <Button variant="outline" size="lg">
                    <ArrowRight className="h-4 w-4 mr-2" />
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