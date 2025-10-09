import { useState, useEffect } from 'react';
import { Calendar, Clock, Sunrise, Sunset, Moon, Sun, FileText, AlertCircle } from 'lucide-react';
import { recordsAPI } from '../utils/api';

const Records = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await recordsAPI.getRecords();
      
      if (response.data) {
        setRecords(response.data.records);
      }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to fetch records. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const getShiftIcon = (shift) => {
    switch (shift) {
      case 'Morning':
        return <Sunrise className="text-yellow-500" size={20} />;
      case 'Mid':
        return <Sun className="text-orange-500" size={20} />;
      case 'Evening':
        return <Sunset className="text-pink-500" size={20} />;
      case 'Night':
        return <Moon className="text-indigo-500" size={20} />;
      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatTimeTo12Hour = (timeString) => {
    if (!timeString) return '';
    
    const times = timeString.split(/–|-/).map(t => t.trim());
    
    const convert = (time) => {
      const [hours, minutes] = time.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minutes} ${ampm}`;
    };
    
    if (times.length === 2) {
      return `${convert(times[0])} – ${convert(times[1])}`;
    }
    
    return timeString;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="card">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Records</h2>
          <p className="text-gray-600">View all your daily class and activity records</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="text-gray-600 mt-4">Loading records...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
            <AlertCircle className="text-red-500" size={24} />
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && records.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Records Yet</h3>
            <p className="text-gray-600">Start by adding your first daily record from the Dashboard</p>
          </div>
        )}

        {/* Records Table */}
        {!loading && !error && records.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">
                    <div className="flex items-center space-x-2">
                      <Calendar size={18} />
                      <span>Date</span>
                    </div>
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">
                    <div className="flex items-center space-x-2">
                      <Clock size={18} />
                      <span>Time</span>
                    </div>
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">
                    Shift
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">
                    <div className="flex items-center space-x-2">
                      <FileText size={18} />
                      <span>Description</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr
                    key={record.id}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="py-4 px-4">
                      <span className="font-medium text-gray-800">
                        {formatDate(record.date)}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-700">{formatTimeTo12Hour(record.time)}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        {getShiftIcon(record.shift)}
                        <span className="text-gray-700 font-medium">{record.shift}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-700">{record.description}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Records Count */}
        {!loading && !error && records.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              Total Records: <span className="font-semibold text-gray-800">{records.length}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Records;
