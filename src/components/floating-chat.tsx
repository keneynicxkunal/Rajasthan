'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Globe,
  Clock,
  HelpCircle,
  Phone,
  Mail
} from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  language?: string
}

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  keywords: string[]
  language: 'en' | 'hi' | 'bn' | 'ta' | 'te'
}

const faqs: FAQ[] = [
  // English FAQs
  {
    id: 'en-1',
    question: 'What are the admission requirements for B.Tech?',
    answer: 'For B.Tech admission, you need 10+2 with Physics, Chemistry, and Mathematics with minimum 60% aggregate marks (55% for SC/ST). You must have a valid JEE Main score or REU Entrance Test score. Age limit is 17-25 years as on 1st July.',
    category: 'Admissions',
    keywords: ['admission', 'btech', 'requirements', 'eligibility', 'jee'],
    language: 'en'
  },
  {
    id: 'en-2',
    question: 'What is the fee structure for B.Tech programs?',
    answer: 'The total fee for B.Tech programs is ₹1,40,000 per annum, including tuition fee (₹95,000), development fee (₹15,000), examination fee (₹10,000), library fee (₹5,000), laboratory fee (₹8,000), and other fees (₹7,000). Scholarships are available for meritorious students.',
    category: 'Fees',
    keywords: ['fee', 'btech', 'cost', 'structure', 'tuition'],
    language: 'en'
  },
  {
    id: 'en-3',
    question: 'When is the last date for application submission?',
    answer: 'The last date for application submission for the 2024-25 academic session is June 30, 2024. However, it\'s recommended to apply early as seats are filled on a first-come-first-served basis.',
    category: 'Admissions',
    keywords: ['deadline', 'last date', 'application', 'submission'],
    language: 'en'
  },
  {
    id: 'en-4',
    question: 'What hostel facilities are available?',
    answer: 'REU provides separate hostels for boys and girls with facilities like Wi-Fi, mess, gym, study rooms, and laundry. Boys Hostel A has AC/Non-AC options for 400 students, Boys Hostel B is Non-AC for 350 students, and Girls Hostel has AC/Non-AC options for 300 students. Fees range from ₹45,000 to ₹90,000 per annum.',
    category: 'Hostel',
    keywords: ['hostel', 'facilities', 'accommodation', 'mess', 'wifi'],
    language: 'en'
  },
  {
    id: 'en-5',
    question: 'What sports facilities are available on campus?',
    answer: 'REU has excellent sports facilities including cricket ground, football field, basketball courts, indoor sports complex, swimming pool, and tennis courts. All facilities are open from 6:00 AM to 8:00 PM. The indoor complex is open until 10:00 PM.',
    category: 'Sports',
    keywords: ['sports', 'facilities', 'cricket', 'football', 'basketball'],
    language: 'en'
  },
  
  // Hindi FAQs
  {
    id: 'hi-1',
    question: 'बी.टेक में प्रवेश के लिए आवश्यकताएँ क्या हैं?',
    answer: 'बी.टेक प्रवेश के लिए आपके पास भौतिकी, रसायन और गणित के साथ 10+2 होना चाहिए और न्यूनतम 60% एग्रीगेट अंक (एससी/एसटी के लिए 55%) होने चाहिए। आपके पास वैध जेई मेन स्कोर या आरईयू प्रवेश परीक्षा स्कोर होना चाहिए। आयु सीमा 1 जुलाई को 17-25 वर्ष है।',
    category: 'प्रवेश',
    keywords: ['प्रवेश', 'बीटेक', 'आवश्यकताएँ', 'पात्रता', 'जेई'],
    language: 'hi'
  },
  {
    id: 'hi-2',
    question: 'बी.टेक प्रोग्राम के लिए फीस संरचना क्या है?',
    answer: 'बी.टेक प्रोग्राम के लिए कुल फीस प्रति वर्ष ₹1,40,000 है, जिसमें ट्यूशन फीस (₹95,000), विकास शुल्क (₹15,000), परीक्षा शुल्क (₹10,000), लाइब्रेरी शुल्क (₹5,000), प्रयोगशाला शुल्क (₹8,000), और अन्य शुल्क (₹7,000) शामिल हैं। मेधावी छात्रों के लिए छात्रवृत्ति उपलब्ध है।',
    category: 'फीस',
    keywords: ['फीस', 'बीटेक', 'लागत', 'संरचना', 'ट्यूशन'],
    language: 'hi'
  },
  {
    id: 'hi-3',
    question: 'आवेदन जमा करने की अंतिम तिथि क्या है?',
    answer: '2024-25 शैक्षणिक सत्र के लिए आवेदन जमा करने की अंतिम तिथि 30 जून, 2024 है। हालांकि, सीटें पहले आओ-पहले पाओ के आधार पर भरी जाती हैं, इसलिए जल्दी आवेदन करने की सलाह दी जाती है।',
    category: 'प्रवेश',
    keywords: ['अंतिम तिथि', 'आवेदन', 'जमा', 'डेडलाइन'],
    language: 'hi'
  },
  {
    id: 'hi-4',
    question: 'क्या हॉस्टल सुविधाएँ उपलब्ध हैं?',
    answer: 'आरईयू लड़कों और लड़कियों के लिए अलग-अलग हॉस्टल प्रदान करता है जिनमें वाई-फाई, मेस, जिम, अध्ययन कक्ष, और लॉन्ड्री जैसी सुविधाएँ हैं। बॉयज हॉस्टल ए में 400 छात्रों के लिए एसी/नॉन-एसी विकल्प हैं, बॉयज हॉस्टल बी 350 छात्रों के लिए नॉन-एसी है, और गर्ल्स हॉस्टल में 300 छात्राओं के लिए एसी/नॉन-एसी विकल्प हैं। फीस ₹45,000 से ₹90,000 प्रति वर्ष है।',
    category: 'हॉस्टल',
    keywords: ['हॉस्टल', 'सुविधाएँ', 'आवास', 'मेस', 'वाईफाई'],
    language: 'hi'
  },
  {
    id: 'hi-5',
    question: 'परिसर में क्या खेल सुविधाएँ उपलब्ध हैं?',
    answer: 'आरईयू में क्रिकेट मैदान, फुटबॉल मैदान, बास्केटबॉल कोर्ट, इनडोर स्पोर्ट्स कॉम्प्लेक्स, स्विमिंग पूल, और टेनिस कोर्ट सहित उत्कृष्ट खेल सुविधाएँ हैं। सभी सुविधाएँ सुबह 6:00 बजे से रात 8:00 बजे तक खुली हैं। इनडोर कॉम्प्लेक्स रात 10:00 बजे तक खुला रहता है।',
    category: 'खेल',
    keywords: ['खेल', 'सुविधाएँ', 'क्रिकेट', 'फुटबॉल', 'बास्केटबॉल'],
    language: 'hi'
  }
]

const languageOptions = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'ta', name: 'தமிழ்', flag: '🇱🇰' },
  { code: 'te', name: 'తెలుగు', flag: '🇮🇳' }
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्ते! मैं राजस्थान इंजीनियरिंग विश्वविद्यालय का चैटबॉट हूँ। मैं आपकी कैसे मदद कर सकता हूँ?\n\nHello! I am the Rajasthan Engineering University chatbot. How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
      language: 'hi'
    }
  ])
  const [inputText, setInputText] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('hi')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const detectLanguage = (text: string): string => {
    // Simple language detection based on script
    const hindiRegex = /[\u0900-\u097F]/
    const bengaliRegex = /[\u0980-\u09FF]/
    const tamilRegex = /[\u0B80-\u0BFF]/
    const teluguRegex = /[\u0C00-\u0C7F]/

    if (hindiRegex.test(text)) return 'hi'
    if (bengaliRegex.test(text)) return 'bn'
    if (tamilRegex.test(text)) return 'ta'
    if (teluguRegex.test(text)) return 'te'
    return 'en'
  }

  const findBestFAQ = (query: string, language: string): FAQ | null => {
    const normalizedQuery = query.toLowerCase()
    
    // Filter FAQs by language first
    const languageFAQs = faqs.filter(faq => faq.language === language)
    
    // If no FAQs in detected language, use English
    const faqsToSearch = languageFAQs.length > 0 ? languageFAQs : faqs.filter(faq => faq.language === 'en')
    
    let bestFAQ: FAQ | null = null
    let highestScore = 0

    faqsToSearch.forEach(faq => {
      let score = 0
      
      // Check for exact question match
      if (faq.question.toLowerCase().includes(normalizedQuery) || normalizedQuery.includes(faq.question.toLowerCase())) {
        score += 10
      }
      
      // Check for keyword matches
      faq.keywords.forEach(keyword => {
        if (normalizedQuery.includes(keyword.toLowerCase())) {
          score += 5
        }
      })
      
      // Check for partial matches
      const queryWords = normalizedQuery.split(' ')
      const faqWords = faq.question.toLowerCase().split(' ')
      
      queryWords.forEach(queryWord => {
        faqWords.forEach(faqWord => {
          if (queryWord === faqWord || faqWord.includes(queryWord) || queryWord.includes(faqWord)) {
            score += 1
          }
        })
      })
      
      if (score > highestScore) {
        highestScore = score
        bestFAQ = faq
      }
    })

    // Only return if we have a reasonable match
    return highestScore >= 3 ? bestFAQ : null
  }

  const generateResponse = async (query: string, language: string): Promise<string> => {
    setIsLoading(true)
    
    try {
      // First try to find a matching FAQ
      const faq = findBestFAQ(query, language)
      
      if (faq) {
        setIsLoading(false)
        return faq.answer
      }
      
      // If no FAQ found, call the backend API
      try {
        const response = await fetch('/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: query,
            sessionId: 'client-session',
            language: language
          }),
        })
        
        if (!response.ok) {
          throw new Error('API request failed')
        }
        
        const data = await response.json()
        setIsLoading(false)
        return data.response || 
          'मुझे खेद है, मैं इस सवाल का जवाब नहीं दे सकता। कृपया विश्वविद्यालय प्रशासन से संपर्क करें।\n\nSorry, I cannot answer this question. Please contact the university administration.'
      } catch (apiError) {
        console.error('API Error:', apiError)
        setIsLoading(false)
        return 'मुझे खेद है, वर्तमान में तकनीकी समस्या के कारण मैं आपकी सहायता नहीं कर सकता। कृपया बाद में पुन: प्रयास करें।\n\nSorry, I cannot assist you due to technical issues. Please try again later.'
      }
    } catch (error) {
      console.error('General Error:', error)
      setIsLoading(false)
      return 'मुझे खेद है, वर्तमान में तकनीकी समस्या के कारण मैं आपकी सहायता नहीं कर सकता। कृपया बाद में पुन: प्रयास करें।\n\nSorry, I cannot assist you due to technical issues. Please try again later.'
    }
  }

  const handleSend = async () => {
    if (!inputText.trim()) return

    const detectedLanguage = detectLanguage(inputText)
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      language: detectedLanguage
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    // Generate bot response
    const response = await generateResponse(inputText, detectedLanguage)
    
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      language: detectedLanguage
    }

    setMessages(prev => [...prev, botMessage])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-600 hover:bg-blue-700"
        size="lg"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
      <Card className="shadow-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6" />
              <div>
                <CardTitle className="text-lg">REU Assistant</CardTitle>
                <div className="text-xs opacity-90">{getGreeting()}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Globe className="h-4 w-4 cursor-pointer" />
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                >
                  {languageOptions.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <ScrollArea className="h-96 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line">{message.text}</div>
                    <div
                      className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                  
                  {message.sender === 'user' && (
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  selectedLanguage === 'hi' ? 'अपना सवाल टाइप करें...' :
                  selectedLanguage === 'bn' ? 'আপনার প্রশ্ন লিখুন...' :
                  selectedLanguage === 'ta' ? 'உங்கள் கேள்வியை தட்டச்சு செய்யவும்...' :
                  selectedLanguage === 'te' ? 'మీ ప్రశ్నను టైప్ చేయండి...' :
                  'Type your question...'
                }
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                <HelpCircle className="h-3 w-3 mr-1" />
                {selectedLanguage === 'hi' ? 'प्रवेश' : 'Admissions'}
              </Badge>
              <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                <Clock className="h-3 w-3 mr-1" />
                {selectedLanguage === 'hi' ? 'फीस' : 'Fees'}
              </Badge>
              <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                <Mail className="h-3 w-3 mr-1" />
                {selectedLanguage === 'hi' ? 'हॉस्टल' : 'Hostel'}
              </Badge>
              <Badge variant="outline" className="text-xs cursor-pointer hover:bg-gray-100">
                <Phone className="h-3 w-3 mr-1" />
                {selectedLanguage === 'hi' ? 'संपर्क' : 'Contact'}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}