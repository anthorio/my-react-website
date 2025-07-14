import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Footer from '../Footer';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Check if user data exists in localStorage (from signup or login)
    const storedUserData = localStorage.getItem('userData');
    
    let userData;
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      userData = {
        firstName: parsedData.firstName || 'John',
        lastName: parsedData.lastName || 'Doe',
        email: parsedData.email || 'john.doe@example.com',
        company: parsedData.company || 'Tech Solutions Inc.',
        role: parsedData.role || 'CTO/Technical Lead',
        joinDate: parsedData.joinDate || '2025-01-15',
        interests: parsedData.interests || [],
        avatar: '/images/img-1.jpg',
        isLoggedIn: parsedData.isLoggedIn || false,
        loginTime: parsedData.loginTime || null
      };
    } else {
      // Default mock user data if no signup/login data exists
      userData = {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@techcorp.com',
        company: 'TechCorp Solutions',
        role: 'Senior Developer',
        joinDate: '2024-12-01',
        interests: ['Web Development', 'Cloud Solutions', 'UI/UX Design'],
        avatar: '/images/img-2.jpg',
        isLoggedIn: false,
        loginTime: null
      };
    }

    const notificationsData = [
      {
        id: 1,
        type: 'info',
        title: userData.isLoggedIn ? 'Welcome back!' : 'Welcome to our platform!',
        message: userData.isLoggedIn 
          ? `You last logged in on ${userData.loginTime ? new Date(userData.loginTime).toLocaleDateString() : 'recently'}.`
          : 'Your account has been successfully created.',
        time: '2 minutes ago',
        read: false
      },
      {
        id: 2,
        type: 'success',
        title: 'Profile Updated',
        message: 'Your profile information has been saved.',
        time: '1 hour ago',
        read: false
      },
      {
        id: 3,
        type: 'warning',
        title: 'Complete Your Profile',
        message: 'Add your phone number to complete your profile.',
        time: '2 hours ago',
        read: true
      },
      {
        id: 4,
        type: 'info',
        title: 'New Feature Available',
        message: 'Check out our new project management tools!',
        time: '1 day ago',
        read: true
      }
    ];

    setUser(userData);
    setNotifications(notificationsData);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'E-commerce Website',
      status: 'In Progress',
      progress: 75,
      startDate: '2025-01-10',
      endDate: '2025-02-15'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'Planning',
      progress: 25,
      startDate: '2025-02-01',
      endDate: '2025-04-30'
    },
    {
      id: 3,
      name: 'Brand Redesign',
      status: 'Completed',
      progress: 100,
      startDate: '2024-12-01',
      endDate: '2025-01-05'
    }
  ];

  const stats = [
    { label: 'Active Projects', value: '2', icon: '📊' },
    { label: 'Completed Projects', value: '1', icon: '✅' },
    { label: 'Team Members', value: '5', icon: '👥' },
    { label: 'Total Hours', value: '245', icon: '⏰' }
  ];

  const markAsRead = (notificationId) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return '#28a745';
      case 'in progress': return '#007bff';
      case 'planning': return '#ffc107';
      default: return '#6c757d';
    }
  };

  if (!user) {
    return (
      <div className='dashboard-loading'>
        <div className='loading-spinner'></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <>
      <div className='dashboard-container'>
        <div className='dashboard-header'>
          <div className='user-info'>
            <img src={user.avatar} alt={user.firstName} className='user-avatar' />
            <div className='user-details'>
              <h1>Welcome back, {user.firstName}!</h1>
              <p>{user.role} at {user.company}</p>
              <span className='join-date'>Member since {new Date(user.joinDate).toLocaleDateString()}</span>
            </div>
          </div>
          <div className='dashboard-actions'>
            <button className='btn-primary'>New Project</button>
            <button className='btn-secondary'>Settings</button>
          </div>
        </div>

        <div className='dashboard-nav'>
          <button 
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`nav-tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
            {notifications.filter(n => !n.read).length > 0 && (
              <span className='notification-badge'>
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </button>
          <button 
            className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
        </div>

        <div className='dashboard-content'>
          {activeTab === 'overview' && (
            <div className='overview-tab'>
              <div className='stats-grid'>
                {stats.map((stat, index) => (
                  <div key={index} className='stat-card'>
                    <div className='stat-icon'>{stat.icon}</div>
                    <div className='stat-info'>
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className='quick-actions'>
                <h2>Quick Actions</h2>
                <div className='action-buttons'>
                  <button className='action-btn'>
                    <span>📝</span>
                    Start New Project
                  </button>
                  <button className='action-btn'>
                    <span>📊</span>
                    View Reports
                  </button>
                  <button className='action-btn'>
                    <span>👥</span>
                    Invite Team Member
                  </button>
                  <button className='action-btn'>
                    <span>💬</span>
                    Contact Support
                  </button>
                </div>
              </div>

              <div className='recent-activity'>
                <h2>Recent Activity</h2>
                <div className='activity-list'>
                  <div className='activity-item'>
                    <span className='activity-icon'>✅</span>
                    <div className='activity-info'>
                      <p><strong>Brand Redesign</strong> project completed</p>
                      <span className='activity-time'>2 days ago</span>
                    </div>
                  </div>
                  <div className='activity-item'>
                    <span className='activity-icon'>📊</span>
                    <div className='activity-info'>
                      <p>Progress update on <strong>E-commerce Website</strong></p>
                      <span className='activity-time'>5 days ago</span>
                    </div>
                  </div>
                  <div className='activity-item'>
                    <span className='activity-icon'>👥</span>
                    <div className='activity-info'>
                      <p>New team member added to project</p>
                      <span className='activity-time'>1 week ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className='projects-tab'>
              <div className='projects-header'>
                <h2>Your Projects</h2>
                <button className='btn-primary'>+ New Project</button>
              </div>
              <div className='projects-list'>
                {projects.map(project => (
                  <div key={project.id} className='project-card'>
                    <div className='project-info'>
                      <h3>{project.name}</h3>
                      <p>Start: {new Date(project.startDate).toLocaleDateString()}</p>
                      <p>End: {new Date(project.endDate).toLocaleDateString()}</p>
                    </div>
                    <div className='project-status'>
                      <span 
                        className='status-badge'
                        style={{ backgroundColor: getStatusColor(project.status) }}
                      >
                        {project.status}
                      </span>
                      <div className='progress-bar'>
                        <div 
                          className='progress-fill'
                          style={{ 
                            width: `${project.progress}%`,
                            backgroundColor: getStatusColor(project.status)
                          }}
                        ></div>
                      </div>
                      <span className='progress-text'>{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className='notifications-tab'>
              <div className='notifications-header'>
                <h2>Notifications</h2>
                <button 
                  className='btn-secondary'
                  onClick={() => setNotifications(prev => 
                    prev.map(notif => ({ ...notif, read: true }))
                  )}
                >
                  Mark All as Read
                </button>
              </div>
              <div className='notifications-list'>
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className={`notification-type ${notification.type}`}>
                      {notification.type === 'info' && 'ℹ️'}
                      {notification.type === 'success' && '✅'}
                      {notification.type === 'warning' && '⚠️'}
                    </div>
                    <div className='notification-content'>
                      <h4>{notification.title}</h4>
                      <p>{notification.message}</p>
                      <span className='notification-time'>{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className='profile-tab'>
              <div className='profile-header'>
                <h2>Profile Information</h2>
                <button className='btn-primary'>Edit Profile</button>
              </div>
              <div className='profile-content'>
                <div className='profile-section'>
                  <h3>Personal Information</h3>
                  <div className='profile-grid'>
                    <div className='profile-field'>
                      <label>First Name</label>
                      <span>{user.firstName}</span>
                    </div>
                    <div className='profile-field'>
                      <label>Last Name</label>
                      <span>{user.lastName}</span>
                    </div>
                    <div className='profile-field'>
                      <label>Email</label>
                      <span>{user.email}</span>
                    </div>
                    <div className='profile-field'>
                      <label>Company</label>
                      <span>{user.company}</span>
                    </div>
                    <div className='profile-field'>
                      <label>Role</label>
                      <span>{user.role}</span>
                    </div>
                    <div className='profile-field'>
                      <label>Member Since</label>
                      <span>{new Date(user.joinDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
