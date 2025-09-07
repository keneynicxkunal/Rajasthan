import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Upload, 
  CreditCard, 
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Download,
  ArrowRight,
  Info
} from 'lucide-react'

const applicationSteps = [
  {
    step: 1,
    title: "Online Registration",
    description: "Create your account on the admission portal using valid email ID and mobile number",
    duration: "5-10 minutes",
    required: true,
    details: [
      "Visit the official admission portal",
      "Click on 'New Registration'",
      "Fill in basic personal details",
      "Verify email and mobile number",
      "Set password and security questions"
    ]
  },
  {
    step: 2,
    title: "Application Form",
    description: "Complete the detailed application form with academic and personal information",
    duration: "20-30 minutes",
    required: true,
    details: [
      "Personal information and contact details",
      "Educational qualifications (10th, 12th, etc.)",
      "Entrance exam details (JEE Main, REU Entrance, etc.)",
      "Program preferences (up to 5 choices)",
      "Category and reservation details"
    ]
  },
  {
    step: 3,
    title: "Document Upload",
    description: "Upload scanned copies of required documents and photographs",
    duration: "15-20 minutes",
    required: true,
    details: [
      "Recent passport size photograph",
      "Signature",
      "10th mark sheet and certificate",
      "12th mark sheet and certificate",
      "Category certificate (if applicable)",
      "Income certificate (if applicable)",
      "Domicile certificate (if applicable)",
      "Entrance exam score card"
    ]
  },
  {
    step: 4,
    title: "Application Fee Payment",
    description: "Pay the application fee through online payment gateway",
    duration: "5 minutes",
    required: true,
    details: [
      "Application fee: ₹1000 for General/OBC",
      "Application fee: ₹500 for SC/ST/PWD",
      "Payment modes: Credit Card, Debit Card, Net Banking",
      "Keep transaction details for future reference",
      "Fee is non-refundable"
    ]
  },
  {
    step: 5,
    title: "Application Submission",
    description: "Review and submit your completed application",
    duration: "5 minutes",
    required: true,
    details: [
      "Review all entered information carefully",
      "Check uploaded documents for clarity",
      "Verify program preferences",
      "Accept terms and conditions",
      "Submit application and generate acknowledgment"
    ]
  },
  {
    step: 6,
    title: "Admission Process",
    description: "Complete the admission process after selection",
    duration: "Varies",
    required: false,
    details: [
      "Check merit list and counseling schedule",
      "Attend counseling as per schedule",
      "Document verification",
      "Fee payment for seat confirmation",
      "Report to institute for joining"
    ]
  }
]

const documentList = [
  { name: "Passport Size Photograph", size: "20-50 KB", format: "JPG/PNG", required: true },
  { name: "Signature", size: "10-20 KB", format: "JPG/PNG", required: true },
  { name: "10th Mark Sheet", size: "100-200 KB", format: "PDF", required: true },
  { name: "10th Certificate", size: "100-200 KB", format: "PDF", required: true },
  { name: "12th Mark Sheet", size: "100-200 KB", format: "PDF", required: true },
  { name: "12th Certificate", size: "100-200 KB", format: "PDF", required: true },
  { name: "Category Certificate", size: "100-200 KB", format: "PDF", required: false },
  { name: "Income Certificate", size: "100-200 KB", format: "PDF", required: false },
  { name: "Domicile Certificate", size: "100-200 KB", format: "PDF", required: false },
  { name: "Entrance Exam Score Card", size: "100-200 KB", format: "PDF", required: true }
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Application Process
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow our simple and streamlined application process to apply for admission at 
                Rajasthan Engineering University. Step-by-step guidance for a hassle-free experience.
              </p>
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Step-by-Step Application Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete your application in 6 simple steps
              </p>
            </div>

            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <Card key={step.step} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 bg-primary/10 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                            {step.step}
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                          <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
                            <Clock className="h-4 w-4 mr-1" />
                            {step.duration}
                          </div>
                          {step.required && (
                            <Badge className="bg-red-500 text-white mt-2">Required</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="md:w-3/4 p-6">
                        <p className="text-gray-700 mb-4">{step.description}</p>
                        <div className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Document Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Document Requirements
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                List of documents required for application with specifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documentList.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold text-gray-900">{doc.name}</h3>
                      </div>
                      {doc.required ? (
                        <Badge className="bg-red-500 text-white">Required</Badge>
                      ) : (
                        <Badge variant="outline">Optional</Badge>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Size:</span>
                        <span className="text-gray-700 ml-2">{doc.size}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Format:</span>
                        <span className="text-gray-700 ml-2">{doc.format}</span>
                      </div>
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
                      Important Notes for Document Upload
                    </h4>
                    <ul className="space-y-1 text-blue-800">
                      <li>• All documents should be clear and legible</li>
                      <li>• Scanned copies should be in color</li>
                      <li>• File names should be descriptive and without spaces</li>
                      <li>• Keep original documents ready for verification</li>
                      <li>• Invalid documents may lead to application rejection</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Application Guidelines */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Do's</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Read all instructions carefully before applying</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Fill all mandatory fields marked with *</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Provide valid and active email ID and mobile number</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Upload clear and scanned documents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Keep transaction details of fee payment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Take printout of submitted application</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span>Don'ts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Don't provide false or incorrect information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Don't upload blurred or unclear documents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Don't wait until the last date to apply</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Don't use someone else's email or mobile number</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Don't submit multiple applications</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Don't forget to save application before submission</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Help & Support */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-white border-primary/20">
              <CardContent className="p-8 text-center">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Help with Application?
                </h2>
                <p className="text-gray-600 mb-6">
                  If you face any issues during the application process, our support team is here to help you
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">Helpline</h4>
                    <p className="text-gray-600">1800-123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 9AM-6PM</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                    <p className="text-gray-600">support@reu.ac.in</p>
                    <p className="text-sm text-gray-500">24/7 Support</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">FAQs</h4>
                    <p className="text-gray-600">Visit Help Center</p>
                    <p className="text-sm text-gray-500">Self-service</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg">
                    <FileText className="h-4 w-4 mr-2" />
                    Start Application
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Download Guide
                  </Button>
                  <Button variant="outline" size="lg">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Visit Help Center
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