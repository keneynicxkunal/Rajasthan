import { NextRequest, NextResponse } from 'next/server'

interface ChatMessage {
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
    answer: 'बी.टेक प्रवेश के लिए आपके पास भौतिकी, रसायन और गणित के साथ 10+2 होना चाहिए और न्यूनतम 60% एग्रीगेट अंक (एससी/एसटी के लिए 55%) होना चाहिए। आपके पास वैध जेई मेन स्कोर या आरईयू प्रवेश परीक्षा स्कोर होना चाहिए। आयु सीमा 1 जुलाई को 17-25 वर्ष है।',
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

// Simple conversation context storage
const conversationContext = new Map<string, ChatMessage[]>()

const detectLanguage = (text: string): string => {
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

  return highestScore >= 3 ? bestFAQ : null
}

const logConversation = async (sessionId: string, messages: ChatMessage[]) => {
  try {
    // In a real implementation, this would log to a database
    console.log(`Conversation log for session ${sessionId}:`, messages)
    
    // For demo purposes, we'll just keep the last 50 messages per session
    if (messages.length > 50) {
      conversationContext.set(sessionId, messages.slice(-50))
    }
  } catch (error) {
    console.error('Error logging conversation:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId, language = 'auto' } = await request.json()
    
    if (!message || !sessionId) {
      return NextResponse.json(
        { error: 'Message and sessionId are required' },
        { status: 400 }
      )
    }

    // Detect language if auto
    const detectedLanguage = language === 'auto' ? detectLanguage(message) : language
    
    // Initialize conversation context for new session
    if (!conversationContext.has(sessionId)) {
      conversationContext.set(sessionId, [])
    }
    
    const context = conversationContext.get(sessionId) || []
    
    // Add user message to context
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
      language: detectedLanguage
    }
    
    context.push(userMessage)
    
    // Try to find matching FAQ first
    const faq = findBestFAQ(message, detectedLanguage)
    let response: string
    
    if (faq) {
      response = faq.answer
    } else {
      // Use AI service for complex queries
      try {
        const ZAI = await import('z-ai-web-dev-sdk')
        const zai = await ZAI.create()
        
        const systemPrompt = `You are a helpful assistant for Rajasthan Engineering University. 
        Answer student questions in ${detectedLanguage === 'hi' ? 'Hindi' : detectedLanguage === 'bn' ? 'Bengali' : detectedLanguage === 'ta' ? 'Tamil' : detectedLanguage === 'te' ? 'Telugu' : 'English'}.
        Keep answers concise and helpful. If you don't know the answer, suggest contacting the university directly.
        Topics include: admissions, fees, courses, hostel facilities, sports, library, exams, results, and general university information.`
        
        const completion = await zai.chat.completions.create({
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: message }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
        
        response = completion.choices[0]?.message?.content || 
          'मुझे खेद है, मैं इस सवाल का जवाब नहीं दे सकता। कृपया विश्वविद्यालय प्रशासन से संपर्क करें।\n\nSorry, I cannot answer this question. Please contact the university administration.'
      } catch (aiError) {
        console.error('AI Service Error:', aiError)
        response = 'मुझे खेद है, वर्तमान में तकनीकी समस्या के कारण मैं आपकी सहायता नहीं कर सकता। कृपया बाद में पुन: प्रयास करें।\n\nSorry, I cannot assist you due to technical issues. Please try again later.'
      }
    }
    
    // Add bot response to context
    const botMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      language: detectedLanguage
    }
    
    context.push(botMessage)
    
    // Update conversation context
    conversationContext.set(sessionId, context)
    
    // Log conversation
    await logConversation(sessionId, context)
    
    return NextResponse.json({
      response,
      language: detectedLanguage,
      messageId: botMessage.id,
      timestamp: botMessage.timestamp
    })
    
  } catch (error) {
    console.error('Chatbot API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('sessionId')
  
  if (!sessionId) {
    return NextResponse.json(
      { error: 'SessionId is required' },
      { status: 400 }
    )
  }
  
  const context = conversationContext.get(sessionId) || []
  
  return NextResponse.json({
    messages: context,
    sessionExists: conversationContext.has(sessionId)
  })
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('sessionId')
  
  if (!sessionId) {
    return NextResponse.json(
      { error: 'SessionId is required' },
      { status: 400 }
    )
  }
  
  conversationContext.delete(sessionId)
  
  return NextResponse.json({
    message: 'Conversation context cleared successfully'
  })
}