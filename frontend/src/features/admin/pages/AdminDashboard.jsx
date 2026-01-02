import React, { useEffect, useState } from 'react';
import { dashboardAPI } from '../../../lib/api/adminApi';
import AdminLayout from '../../../components/admin/AdminLayout';

const StatCard = ({ title, value, subtitle, icon, color }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4" style={{ borderColor: color }}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
        {subtitle && <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
      </div>
      <div className="text-4xl" style={{ color }}>{icon}</div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [recentActivity, setRecentActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [statsResponse, activityResponse] = await Promise.all([
        dashboardAPI.getStats(),
        dashboardAPI.getRecentActivity(5)
      ]);
      setStats(statsResponse.data);
      setRecentActivity(activityResponse.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-xl text-gray-600 dark:text-gray-400">Loading dashboard...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back! Here's what's happening.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard
            title="Contact Submissions"
            value={stats?.contacts?.total || 0}
            subtitle={`${stats?.contacts?.new || 0} new`}
            icon="📧"
            color="#3B82F6"
          />
          <StatCard
            title="Portfolio Items"
            value={stats?.portfolio?.total || 0}
            subtitle={`${stats?.portfolio?.published || 0} published`}
            icon="💼"
            color="#8B5CF6"
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Contacts</h2>
          <div className="space-y-3">
            {recentActivity?.recent_contacts?.length > 0 ? (
              recentActivity.recent_contacts.map((contact, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{contact.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.email}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    contact.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    contact.status === 'read' ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' :
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {contact.status}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No recent contacts</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
