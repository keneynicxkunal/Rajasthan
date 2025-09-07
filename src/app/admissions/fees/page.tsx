import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Clock } from 'lucide-react'
import { 
  CreditCard, 
  Download, 
  Calculator, 
  Info,
  CheckCircle,
  AlertCircle,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  ArrowRight
} from 'lucide-react'

const feeStructure = {
  undergraduate: [
    {
      program: "B.Tech Computer Science Engineering",
      tuition: 75000,
      development: 10000,
      examination: 5000,
      library: 3000,
      laboratory: 4000,
      hostel: 60000,
      total: 157000,
      scholarship: "Available"
    },
    {
      program: "B.Tech Electrical Engineering",
      tuition: 70000,
      development: 10000,
      examination: 5000,
      library: 3000,
      laboratory: 5000,
      hostel: 60000,
      total: 153000,
      scholarship: "Available"
    },
    {
      program: "B.Tech Mechanical Engineering",
      tuition: 72000,
      development: 10000,
      examination: 5000,
      library: 3000,
      laboratory: 4500,
      hostel: 60000,
      total: 154500,
      scholarship: "Available"
    },
    {
      program: "B.Tech Electronics Engineering",
      tuition: 73000,
      development: 10000,
      examination: 5000,
      library: 3000,
      laboratory: 4500,
      hostel: 60000,
      total: 155500,
      scholarship: "Available"
    },
    {
      program: "B.Tech Civil Engineering",
      tuition: 68000,
      development: 10000,
      examination: 5000,
      library: 3000,
      laboratory: 4000,
      hostel: 60000,
      total: 150000,
      scholarship: "Available"
    },
    {
      program: "B.Tech Chemical Engineering",
      tuition: 65000,
      development: 10000,
      examination: 5000,
      library: 3000,
      laboratory: 5000,
      hostel: 60000,
      total: 148000,
      scholarship: "Available"
    }
  ],
  postgraduate: [
    {
      program: "M.Tech Computer Science Engineering",
      tuition: 85000,
      development: 12000,
      examination: 6000,
      library: 4000,
      laboratory: 5000,
      hostel: 60000,
      total: 172000,
      scholarship: "Available"
    },
    {
      program: "M.Tech Power Systems",
      tuition: 80000,
      development: 12000,
      examination: 6000,
      library: 4000,
      laboratory: 6000,
      hostel: 60000,
      total: 168000,
      scholarship: "Available"
    },
    {
      program: "M.Tech Thermal Engineering",
      tuition: 78000,
      development: 12000,
      examination: 6000,
      library: 4000,
      laboratory: 5500,
      hostel: 60000,
      total: 165500,
      scholarship: "Available"
    },
    {
      program: "M.Tech VLSI Design",
      tuition: 88000,
      development: 12000,
      examination: 6000,
      library: 4000,
      laboratory: 7000,
      hostel: 60000,
      total: 177000,
      scholarship: "Available"
    }
  ],
  doctoral: [
    {
      program: "Ph.D Computer Science Engineering",
      tuition: 45000,
      development: 8000,
      examination: 4000,
      library: 3000,
      laboratory: 4000,
      hostel: 60000,
      total: 124000,
      fellowship: "Available"
    },
    {
      program: "Ph.D Electrical Engineering",
      tuition: 42000,
      development: 8000,
      examination: 4000,
      library: 3000,
      laboratory: 4500,
      hostel: 60000,
      total: 121500,
      fellowship: "Available"
    },
    {
      program: "Ph.D Mechanical Engineering",
      tuition: 43000,
      development: 8000,
      examination: 4000,
      library: 3000,
      laboratory: 4000,
      hostel: 60000,
      total: 122000,
      fellowship: "Available"
    }
  ]
}

const scholarships = [
  {
    name: "Merit Scholarship",
    eligibility: "90%+ in qualifying exam",
    benefit: "50% tuition fee waiver",
    icon: Award
  },
  {
    name: "EWS Scholarship",
    eligibility: "Family income < 8 LPA",
    benefit: "100% tuition fee waiver",
    icon: Users
  },
  {
    name: "Sports Scholarship",
    eligibility: "State/National level players",
    benefit: "25-50% fee concession",
    icon: Award
  },
  {
    name: "Defense Ward Scholarship",
    eligibility: "Children of defense personnel",
    benefit: "25% tuition fee waiver",
    icon: Users
  }
]

const paymentMethods = [
  {
    method: "Online Payment",
    description: "Pay through our secure online portal",
    options: ["Credit Card", "Debit Card", "Net Banking", "UPI"],
    processingTime: "Instant"
  },
  {
    method: "Bank Transfer",
    description: "Direct transfer to university bank account",
    options: ["NEFT", "RTGS", "IMPS"],
    processingTime: "1-2 working days"
  },
  {
    method: "Demand Draft",
    description: "DD in favor of Rajasthan Engineering University",
    options: ["From any nationalized bank"],
    processingTime: "3-5 working days"
  },
  {
    method: "Cash Payment",
    description: "Pay at university accounts section",
    options: ["At campus only"],
    processingTime: "Instant"
  }
]

export default function FeesPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
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
                Fee Structure
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive fee structure for all programs at Rajasthan Engineering University. 
                Transparent pricing with various scholarship opportunities and flexible payment options.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Structure Tables */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Program-wise Fee Structure
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed fee breakdown for all academic programs (Annual Fees)
              </p>
            </div>

            <Tabs defaultValue="undergraduate" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
                <TabsTrigger value="undergraduate">B.Tech</TabsTrigger>
                <TabsTrigger value="postgraduate">M.Tech</TabsTrigger>
                <TabsTrigger value="doctoral">Ph.D</TabsTrigger>
              </TabsList>

              {/* Undergraduate Fees */}
              <TabsContent value="undergraduate">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Program</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Tuition</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Development</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Examination</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Library</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Laboratory</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Hostel</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Total</th>
                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Scholarship</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.undergraduate.map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 font-medium">{fee.program}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.tuition)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.development)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.examination)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.library)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.laboratory)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.hostel)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right font-bold">{formatCurrency(fee.total)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            <Badge className="bg-green-500 text-white">{fee.scholarship}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              {/* Postgraduate Fees */}
              <TabsContent value="postgraduate">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Program</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Tuition</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Development</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Examination</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Library</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Laboratory</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Hostel</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Total</th>
                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Scholarship</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.postgraduate.map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 font-medium">{fee.program}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.tuition)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.development)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.examination)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.library)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.laboratory)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.hostel)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right font-bold">{formatCurrency(fee.total)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            <Badge className="bg-green-500 text-white">{fee.scholarship}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>

              {/* Doctoral Fees */}
              <TabsContent value="doctoral">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Program</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Tuition</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Development</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Examination</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Library</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Laboratory</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Hostel</th>
                        <th className="border border-gray-300 px-4 py-3 text-right font-semibold">Total</th>
                        <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Fellowship</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.doctoral.map((fee, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3 font-medium">{fee.program}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.tuition)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.development)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.examination)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.library)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.laboratory)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right">{formatCurrency(fee.hostel)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-right font-bold">{formatCurrency(fee.total)}</td>
                          <td className="border border-gray-300 px-4 py-3 text-center">
                            <Badge className="bg-blue-500 text-white">{fee.fellowship}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Scholarships */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Scholarships & Financial Aid
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Various scholarship opportunities to support deserving and meritorious students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarships.map((scholarship, index) => {
                const Icon = scholarship.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {scholarship.name}
                      </h3>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium text-gray-700">Eligibility:</span>
                          <p className="text-gray-600">{scholarship.eligibility}</p>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-gray-700">Benefit:</span>
                          <p className="text-gray-600">{scholarship.benefit}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Payment Methods
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple convenient payment options for fee payment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <CreditCard className="h-8 w-8 text-primary mt-1" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {method.method}
                        </h3>
                        <p className="text-gray-600 mb-3">{method.description}</p>
                        <div className="mb-3">
                          <span className="text-sm font-medium text-gray-700">Options:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {method.options.map((option, optIndex) => (
                              <Badge key={optIndex} variant="outline" className="text-xs">
                                {option}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          Processing: {method.processingTime}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Fee Payment Guidelines</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Fees must be paid within the stipulated deadline</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Late payment attracts a fine of ₹500 per day</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Hostel fees are optional for day scholars</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Fee once paid is non-refundable except under specific conditions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Keep payment receipts safe for future reference</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span>Important Notes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Fee structure is subject to revision as per university norms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Additional fees may apply for special courses or facilities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Scholarship applications must be submitted before the deadline</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Installment payment options available for deserving students</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Contact accounts section for any fee-related queries</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardContent className="p-8 text-center">
                <Download className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Download Fee Information
                </h2>
                <p className="text-gray-600 mb-6">
                  Get detailed fee structure, scholarship information, and payment guidelines
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Fee Structure PDF
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Scholarship Brochure
                  </Button>
                  <Button variant="outline" size="lg">
                    <Calculator className="h-4 w-4 mr-2" />
                    Fee Calculator
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