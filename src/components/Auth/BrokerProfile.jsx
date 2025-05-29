import React, { useState } from "react";
import { Upload, User, Mail, Phone, MapPin, FileText, Camera, X, Check } from "lucide-react";

const BrokerForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [licenseImage, setLicenseImage] = useState(null);
  const [profileFile, setProfileFile] = useState(null);
  const [licenseFile, setLicenseFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: ''
  });
  const [uploadStatus, setUploadStatus] = useState({});

  // Handle profile image selection
  const handleProfileImageSelection = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setProfileFile(selectedFile);
      setProfileImage(URL.createObjectURL(selectedFile));
    }
  };

  // Handle license image selection
  const handleLicenseImageSelection = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setLicenseFile(selectedFile);
      setLicenseImage(URL.createObjectURL(selectedFile));
    }
  };

  // Handle image upload
  const handleImageUpload = (type) => {
    const file = type === 'profile' ? profileFile : licenseFile;
    if (file) {
      setUploadStatus({ ...uploadStatus, [type]: 'uploading' });
      // Simulate upload delay
      setTimeout(() => {
        setUploadStatus({ ...uploadStatus, [type]: 'success' });
        setTimeout(() => {
          setUploadStatus({ ...uploadStatus, [type]: null });
        }, 2000);
      }, 1000);
    }
  };

  // Delete image
  const handleDeleteImage = (type) => {
    if (type === 'profile') {
      setProfileImage(null);
      setProfileFile(null);
    } else {
      setLicenseImage(null);
      setLicenseFile(null);
    }
    setUploadStatus({ ...uploadStatus, [type]: null });
  };

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    alert('Broker information saved successfully!');
  };

  const ImageUploadSection = ({ 
    image, 
    file, 
    type, 
    title, 
    onImageSelect, 
    inputId,
    icon: Icon 
  }) => (
    <div className="mb-8">
      <label className="flex items-center text-sm font-semibold mb-3 text-gray-800">
        <Icon className="w-4 h-4 mr-2 text-orange-600" />
        {title}
      </label>
      <div className="relative">
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-orange-300 rounded-xl p-6 ">
          {image ? (
            <>
              <div className="relative">
                <img
                  src={image}
                  alt="Uploaded Preview"
                  className="w-full max-w-xs h-48 object-cover mb-4 rounded-lg shadow-md border-2 border-orange-200"
                />
                {uploadStatus[type] === 'success' && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => handleDeleteImage(type)}
                  className="flex items-center bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <X className="w-4 h-4 mr-1" />
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => handleImageUpload(type)}
                  disabled={uploadStatus[type] === 'uploading'}
                  className="flex items-center bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {uploadStatus[type] === 'uploading' ? (
                    <div className="w-4 h-4 mr-1 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Upload className="w-4 h-4 mr-1" />
                  )}
                  {uploadStatus[type] === 'uploading' ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </>
          ) : (
            <div className="text-center">
              <Icon className="w-12 h-12 text-orange-300 mx-auto mb-3" />
              <p className="text-gray-500 mb-2">No image selected</p>
              <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={onImageSelect}
          className="hidden"
          id={inputId}
        />
        <label
          htmlFor={inputId}
          className="inline-flex items-center bg-orange-600 hover:bg-orange-500 text-white text-sm px-6 py-3 rounded-lg mt-4 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <Camera className="w-4 h-4 mr-2" />
          Choose File
        </label>
      </div>
    </div>
  );

  return (
    <div className="w-full  border-r-2 border-l-2 border-orange-300 text-black p-8 min-h-screen">
      {/* Enhanced Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tighter mb-2 text-gray-800"><span className="text-orange-500">Broker</span> Information</h2>
        <p className="text-gray-600">Please fill in your professional details and upload required documents</p>
        <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-3"></div>
      </div>

      {/* Profile Image Upload */}
      <ImageUploadSection
        image={profileImage}
        file={profileFile}
        type="profile"
        title="Broker Profile Picture"
        onImageSelect={handleProfileImageSelection}
        inputId="profileInput"
        icon={User}
      />

      {/* Form Fields */}
      <div>
        {/* Personal Information Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <User className="w-5 h-5 mr-2 text-orange-600" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-500" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-3 border border-orange-300 rounded-lg bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-500" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-orange-300 rounded-lg bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-500" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full pl-10 pr-4 py-3 border border-orange-300 rounded-lg bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-orange-600" />
            Address Information
          </h3>
          <div className="space-y-4">
            <div className="relative">
              <label className="block text-sm font-medium mb-2 text-gray-700">Street Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-orange-500" />
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="123 Main Street, Suite 100"
                  className="w-full pl-10 pr-4 py-3 border border-orange-300 rounded-lg bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">City</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="City"
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">State</label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  placeholder="State"
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">ZIP Code</label>
                <input
                  type="text"
                  value={formData.zipcode}
                  onChange={(e) => handleInputChange('zipcode', e.target.value)}
                  placeholder="12345"
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  placeholder="United States"
                  className="w-full px-4 py-3 border border-orange-300 rounded-lg bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none placeholder:text-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* License Image Upload */}
        <ImageUploadSection
          image={licenseImage}
          file={licenseFile}
          type="license"
          title="Broker License Document"
          onImageSelect={handleLicenseImageSelection}
          inputId="licenseInput"
          icon={FileText}
        />

        {/* Enhanced Submit Button */}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
          >
            <Check className="w-5 h-5 mr-2" />
            Save Broker Information
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrokerForm;