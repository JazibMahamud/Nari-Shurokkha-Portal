import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Eye, 
  EyeOff,
  ArrowLeft,
  Lock,
  Mail,
  User,
  Phone,
  MapPin,
  FileText,
  Upload,
  CheckCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [signupForm, setSignupForm] = useState({
    // Step 1: Basic Info
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Step 2: Identity Verification
    documentType: '',
    documentNumber: '',
    dateOfBirth: '',
    address: '',
    
    // Step 3: Emergency Contacts
    emergencyContact1: '',
    emergencyContact2: '',
    
    // Terms
    agreeTerms: false
  });

  const documentTypes = [
    'National ID Card (NID)',
    'Birth Registration Certificate',
    'Passport'
  ];

  const handleNext = () => {
    if (currentStep === 1) {
      if (!signupForm.fullName || !signupForm.email || !signupForm.phone || !signupForm.password || !signupForm.confirmPassword) {
        alert('Please fill in all required fields');
        return;
      }
      if (signupForm.password !== signupForm.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
    }
    
    if (currentStep === 2) {
      if (!signupForm.documentType || !signupForm.documentNumber || !signupForm.dateOfBirth || !signupForm.address) {
        alert('Please complete identity verification');
        return;
      }
    }
    
    setCurrentStep(currentStep + 1);
  };

  const handleSignup = () => {
    if (!signupForm.emergencyContact1 || !signupForm.agreeTerms) {
      alert('Please complete all required fields and accept terms');
      return;
    }
    
    alert('Account created successfully! Welcome to Suraksha. Please verify your identity documents.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-10 w-10 text-purple-600" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Suraksha
            </h1>
          </div>
          <p className="text-gray-600">Join our secure women-only platform</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              {currentStep > 1 ? <CheckCircle className="h-4 w-4" /> : '1'}
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              {currentStep > 2 ? <CheckCircle className="h-4 w-4" /> : '2'}
            </div>
            <div className={`w-16 h-1 ${currentStep >= 3 ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${currentStep >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}>
              {currentStep > 3 ? <CheckCircle className="h-4 w-4" /> : '3'}
            </div>
          </div>
        </div>

        <Card>
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Create your secure account with basic details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Enter your full name"
                      value={signupForm.fullName}
                      onChange={(e) => setSignupForm({...signupForm, fullName: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="01XXXXXXXXX"
                      value={signupForm.phone}
                      onChange={(e) => setSignupForm({...signupForm, phone: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={signupForm.confirmPassword}
                      onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                      className="pl-10 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <Button onClick={handleNext} className="w-full bg-purple-600 hover:bg-purple-700">
                  Next: Identity Verification
                </Button>
              </CardContent>
            </>
          )}

          {/* Step 2: Identity Verification */}
          {currentStep === 2 && (
            <>
              <CardHeader>
                <CardTitle>Identity Verification</CardTitle>
                <CardDescription>
                  Verify your identity using official documents for security
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Document Type *</label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={signupForm.documentType}
                    onChange={(e) => setSignupForm({...signupForm, documentType: e.target.value})}
                  >
                    <option value="">Select document type</option>
                    {documentTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Document Number *</label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Enter document number"
                      value={signupForm.documentNumber}
                      onChange={(e) => setSignupForm({...signupForm, documentNumber: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth *</label>
                  <Input
                    type="date"
                    value={signupForm.dateOfBirth}
                    onChange={(e) => setSignupForm({...signupForm, dateOfBirth: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Enter your full address"
                      value={signupForm.address}
                      onChange={(e) => setSignupForm({...signupForm, address: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload Document Photo</p>
                  <p className="text-xs text-gray-500 mb-3">Clear photo of your selected document</p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button onClick={handleNext} className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Next: Emergency Contacts
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {/* Step 3: Emergency Contacts & Final */}
          {currentStep === 3 && (
            <>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
                <CardDescription>
                  Add trusted contacts for emergency situations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Emergency Contact *</label>
                  <Input
                    placeholder="Name - Phone Number"
                    value={signupForm.emergencyContact1}
                    onChange={(e) => setSignupForm({...signupForm, emergencyContact1: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Secondary Emergency Contact</label>
                  <Input
                    placeholder="Name - Phone Number (Optional)"
                    value={signupForm.emergencyContact2}
                    onChange={(e) => setSignupForm({...signupForm, emergencyContact2: e.target.value})}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={signupForm.agreeTerms}
                    onChange={(e) => setSignupForm({...signupForm, agreeTerms: e.target.checked})}
                  />
                  <label htmlFor="terms" className="text-sm">
                    I agree to the Terms of Service and Privacy Policy *
                  </label>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Account Verification</h4>
                  <p className="text-sm text-blue-700">
                    Your account will be reviewed within 24 hours. You'll receive an email confirmation once verified.
                  </p>
                </div>

                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentStep(2)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button onClick={handleSignup} className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Create Account
                  </Button>
                </div>
              </CardContent>
            </>
          )}
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600 mb-4">
            Already have an account?{' '}
            <Button variant="link" onClick={() => navigate('/login')} className="p-0">
              Sign In
            </Button>
          </p>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}