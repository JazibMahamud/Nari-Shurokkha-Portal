import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Scale, 
  DollarSign, 
  FileText, 
  Upload,
  ArrowLeft,
  BookOpen,
  Users,
  Award
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Support() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('legal');
  const [legalForm, setLegalForm] = useState({
    issueType: '',
    description: '',
    urgency: 'medium'
  });
  const [financialForm, setFinancialForm] = useState({
    assistanceType: '',
    amount: '',
    purpose: '',
    income: ''
  });

  const legalIssues = [
    'Domestic Violence',
    'Divorce & Separation',
    'Property Rights',
    'Workplace Harassment',
    'Child Custody',
    'Dowry Issues',
    'Other Legal Matter'
  ];

  const financialAssistance = [
    'Emergency Financial Aid',
    'Business Loan',
    'Education Loan',
    'Skill Development Grant',
    'Healthcare Support',
    'Housing Assistance'
  ];

  const resources = [
    {
      title: 'Women\'s Rights Guide',
      description: 'Comprehensive guide to legal rights and protections',
      category: 'Legal',
      type: 'PDF Guide'
    },
    {
      title: 'Financial Planning for Women',
      description: 'Step-by-step guide to financial independence',
      category: 'Financial',
      type: 'Video Series'
    },
    {
      title: 'Entrepreneurship Support',
      description: 'Resources for starting and growing your business',
      category: 'Business',
      type: 'Toolkit'
    }
  ];

  const handleLegalSubmit = () => {
    if (!legalForm.issueType || !legalForm.description) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Legal aid request submitted. A women lawyer will contact you within 24 hours.');
    setLegalForm({ issueType: '', description: '', urgency: 'medium' });
  };

  const handleFinancialSubmit = () => {
    if (!financialForm.assistanceType || !financialForm.purpose) {
      alert('Please fill in all required fields');
      return;
    }
    alert('Financial assistance application submitted. You will receive a response within 5 business days.');
    setFinancialForm({ assistanceType: '', amount: '', purpose: '', income: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
              <Scale className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold text-blue-600">Legal & Financial Support</h1>
            </div>
            <Badge variant="outline" className="text-blue-600">
              Professional Support
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          <Button
            variant={activeTab === 'legal' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('legal')}
            className="flex-1"
          >
            <Scale className="h-4 w-4 mr-2" />
            Legal Aid
          </Button>
          <Button
            variant={activeTab === 'financial' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('financial')}
            className="flex-1"
          >
            <DollarSign className="h-4 w-4 mr-2" />
            Financial Support
          </Button>
          <Button
            variant={activeTab === 'resources' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('resources')}
            className="flex-1"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Resources
          </Button>
        </div>

        {/* Legal Aid Tab */}
        {activeTab === 'legal' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Request Legal Aid</CardTitle>
                  <CardDescription>
                    Connect with experienced women lawyers who specialize in women's legal issues
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Legal Issue *</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={legalForm.issueType}
                      onChange={(e) => setLegalForm({...legalForm, issueType: e.target.value})}
                    >
                      <option value="">Select issue type</option>
                      {legalIssues.map((issue, index) => (
                        <option key={index} value={issue}>{issue}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description *</label>
                    <Textarea
                      placeholder="Describe your legal issue in detail..."
                      value={legalForm.description}
                      onChange={(e) => setLegalForm({...legalForm, description: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Urgency Level</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={legalForm.urgency}
                      onChange={(e) => setLegalForm({...legalForm, urgency: e.target.value})}
                    >
                      <option value="low">Low - General consultation</option>
                      <option value="medium">Medium - Important matter</option>
                      <option value="high">High - Urgent legal help needed</option>
                    </select>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">Upload relevant documents (optional)</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Choose Files
                    </Button>
                  </div>

                  <Button onClick={handleLegalSubmit} className="w-full bg-blue-600 hover:bg-blue-700">
                    Submit Legal Aid Request
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Legal Support Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Women-only legal team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Free initial consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Experienced specialists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Scale className="h-5 w-5 text-blue-600" />
                    <span className="text-sm">Complete confidentiality</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Financial Support Tab */}
        {activeTab === 'financial' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Apply for Financial Assistance</CardTitle>
                  <CardDescription>
                    Access various financial support programs designed for women's empowerment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Assistance *</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={financialForm.assistanceType}
                      onChange={(e) => setFinancialForm({...financialForm, assistanceType: e.target.value})}
                    >
                      <option value="">Select assistance type</option>
                      {financialAssistance.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Amount Needed</label>
                    <Input
                      placeholder="Enter amount in rupees"
                      value={financialForm.amount}
                      onChange={(e) => setFinancialForm({...financialForm, amount: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Purpose *</label>
                    <Textarea
                      placeholder="Explain how you plan to use this financial assistance..."
                      value={financialForm.purpose}
                      onChange={(e) => setFinancialForm({...financialForm, purpose: e.target.value})}
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Income</label>
                    <Input
                      placeholder="Your current monthly income"
                      value={financialForm.income}
                      onChange={(e) => setFinancialForm({...financialForm, income: e.target.value})}
                    />
                  </div>

                  <Button onClick={handleFinancialSubmit} className="w-full bg-green-600 hover:bg-green-700">
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Available Programs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold text-sm">Emergency Aid</div>
                    <div className="text-xs text-gray-600">Up to ₹50,000</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold text-sm">Business Loans</div>
                    <div className="text-xs text-gray-600">Up to ₹10 lakhs</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold text-sm">Education Support</div>
                    <div className="text-xs text-gray-600">Scholarships available</div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="font-semibold text-sm">Skill Development</div>
                    <div className="text-xs text-gray-600">Free training programs</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <Badge variant="secondary">{resource.type}</Badge>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{resource.category}</Badge>
                    <Button size="sm">Access Resource</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}