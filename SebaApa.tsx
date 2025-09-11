import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Send, 
  Heart, 
  Shield, 
  Scale, 
  DollarSign,
  ArrowLeft,
  Bot
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'seba';
  timestamp: Date;
  category?: string;
}

export default function SebaApa() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello sister! I'm Seba Apa, your digital elder sister. I'm here to provide you with guidance, support, and assistance on any matter. How can I help you today?",
      sender: 'seba',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const categories = [
    { name: 'Health', icon: Heart, color: 'bg-pink-100 text-pink-700' },
    { name: 'Safety', icon: Shield, color: 'bg-red-100 text-red-700' },
    { name: 'Legal', icon: Scale, color: 'bg-blue-100 text-blue-700' },
    { name: 'Financial', icon: DollarSign, color: 'bg-green-100 text-green-700' }
  ];

  const quickResponses = [
    "I need help with a health issue",
    "I want to report a safety concern",
    "I need legal advice",
    "I need financial assistance",
    "I'm feeling overwhelmed",
    "I need emergency help"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate Seba Apa response
    setTimeout(() => {
      const sebaResponse: Message = {
        id: messages.length + 2,
        text: generateSebaResponse(inputMessage),
        sender: 'seba',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, sebaResponse]);
    }, 1000);

    setInputMessage('');
  };

  const generateSebaResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('health') || input.includes('medical')) {
      return "I understand you have health concerns. I can help you connect with women doctors through our telemedicine service, or provide information about women's health resources. Would you like me to schedule a consultation or provide specific health guidance?";
    }
    
    if (input.includes('safety') || input.includes('danger') || input.includes('help')) {
      return "Your safety is my priority. If you're in immediate danger, please use the emergency SOS button. For non-urgent safety concerns, I can help you file a complaint or connect you with support services. Are you currently safe?";
    }
    
    if (input.includes('legal') || input.includes('law') || input.includes('rights')) {
      return "I can help you understand your legal rights and connect you with women lawyers who specialize in women's issues. What specific legal matter do you need assistance with?";
    }
    
    if (input.includes('money') || input.includes('financial') || input.includes('loan')) {
      return "I can guide you through our financial assistance programs and connect you with resources for women's economic empowerment. What kind of financial support are you looking for?";
    }
    
    if (input.includes('sad') || input.includes('depressed') || input.includes('overwhelmed')) {
      return "I'm here for you, sister. It's okay to feel overwhelmed sometimes. Would you like to talk about what's bothering you, or shall I connect you with our mental health support services?";
    }
    
    return "Thank you for sharing that with me. I'm here to support you in any way I can. Could you tell me more about what specific help you need so I can guide you to the right resources?";
  };

  const handleQuickResponse = (response: string) => {
    setInputMessage(response);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Bot className="h-6 w-6 text-purple-600" />
              <h1 className="text-xl font-bold text-purple-600">Seba Apa</h1>
            </div>
            <Badge variant="outline" className="text-purple-600">
              Your Digital Elder Sister
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-all">
                <CardContent className="p-4 text-center">
                  <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-medium">{category.name}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Chat Interface */}
        <Card className="h-96 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat with Seba Apa
            </CardTitle>
          </CardHeader>
          
          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Responses */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Quick Responses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickResponses.map((response, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left h-auto py-3"
                onClick={() => handleQuickResponse(response)}
              >
                {response}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}