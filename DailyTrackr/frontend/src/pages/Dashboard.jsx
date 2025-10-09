import { useState } from 'react';
import { Calendar, Clock, Sunrise, Sunset, Moon, Sun, FileText } from 'lucide-react';
import { recordsAPI } from '../utils/api';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    shift: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [apiError, setApiError] = useState('');

  const shiftOptions = [
    { value: 'Morning', icon: Sunrise, color: 'text-yellow-500' },
    { value: 'Mid', icon: Sun, color: 'text-orange-500' },
    { value: 'Evening', icon: Sunset, color: 'text-pink-500' },
    { value: 'Night', icon: Moon, color: 'text-indigo-500' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.startTime) {
      newErrors.startTime = 'Start time is required';
    }

    if (!formData.endTime) {
      newErrors.endTime = 'End time is required';
    }

    if (formData.startTime && formData.endTime && formData.startTime >= formData.endTime) {
      newErrors.endTime = 'End time must be after start time';
    }

    if (!formData.shift) {
      newErrors.shift = 'Shift is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    setSuccessMessage('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Combine start and end time for backend
      const dataToSend = {
        ...formData,
        time: `${formData.startTime} – ${formData.endTime}`
      };
      
      const response = await recordsAPI.addRecord(dataToSend);
      
      if (response.data) {
        setSuccessMessage('Record added successfully!');
        // Reset form
        setFormData({
          date: '',
          startTime: '',
          endTime: '',
          shift: '',
          description: '',
        });
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to add record. Please try again.';
      setApiError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Add Daily Record</h2>
          <p className="text-gray-600">Record your daily class or activity details</p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-600 text-sm font-medium">{successMessage}</p>
          </div>
        )}

        {/* Error Message */}
        {apiError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{apiError}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Picker */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>Date</span>
              </div>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`input-field ${errors.date ? 'border-red-500' : ''}`}
            />
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>

          {/* Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Start Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>Start Time</span>
                </div>
              </label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className={`input-field ${errors.startTime ? 'border-red-500' : ''}`}
              />
              {errors.startTime && <p className="text-red-500 text-xs mt-1">{errors.startTime}</p>}
            </div>

            {/* End Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <div className="flex items-center space-x-2">
                  <Clock size={18} />
                  <span>End Time</span>
                </div>
              </label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className={`input-field ${errors.endTime ? 'border-red-500' : ''}`}
              />
              {errors.endTime && <p className="text-red-500 text-xs mt-1">{errors.endTime}</p>}
            </div>
          </div>

          {/* Shift Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Shift
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {shiftOptions.map(({ value, icon: Icon, color }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, shift: value }));
                    if (errors.shift) {
                      setErrors((prev) => ({ ...prev, shift: '' }));
                    }
                  }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.shift === value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`mx-auto mb-2 ${color}`} size={24} />
                  <span className="block text-sm font-medium text-gray-700">{value}</span>
                </button>
              ))}
            </div>
            {errors.shift && <p className="text-red-500 text-xs mt-1">{errors.shift}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <div className="flex items-center space-x-2">
                <FileText size={18} />
                <span>Description</span>
              </div>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className={`input-field resize-none ${errors.description ? 'border-red-500' : ''}`}
              placeholder="Enter class or activity details..."
            />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full"
          >
            {loading ? 'Saving...' : 'Save Record'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
