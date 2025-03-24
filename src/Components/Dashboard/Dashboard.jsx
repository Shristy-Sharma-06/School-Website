import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Dashboard({ props }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is a user with matching username and password
    let exist = props.user.some(user => user.username === props.username && user.password === props.password);
  
    if (!exist) {
      // Navigate to home if a matching user is found
      navigate("/");
    }
  }, [props.user, props.username, props.password]);
  

  return (
    <>
    
    
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Dashboard</h2>
        <nav className="space-y-4">
          {/* Homepage Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-purple-500 cursor-pointer">
              Homepage
            </button>
            <div className="absolute hidden group-hover:block bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg mt-1 w-48">
              <ul className="py-2">
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Welcome message
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Prominent announcements or news
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Quick links to key areas
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Carousel/Slideshow
                </li>
              </ul>
            </div>
          </div>

          {/* Academics Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-purple-500 cursor-pointer">
              Academics
            </button>
            <div className="absolute hidden group-hover:block bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg mt-1 w-48">
              <ul className="py-2">
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Programs/Courses
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Course Descriptions
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Calendar of Events
                </li>
              </ul>
            </div>
          </div>

          {/* Admissions Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-purple-500 cursor-pointer">
              Admissions
            </button>
            <div className="absolute hidden group-hover:block bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg mt-1 w-48">
              <ul className="py-2">
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Application Process
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Tuition & Financial Aid
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Contact Admissions
                </li>
              </ul>
            </div>
          </div>

          {/* News/Events Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-purple-500 cursor-pointer">
              News/Events
            </button>
            <div className="absolute hidden group-hover:block bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg mt-1 w-48">
              <ul className="py-2">
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  News Articles
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Event Listings
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-purple-500 cursor-pointer">
              Contact
            </button>
            <div className="absolute hidden group-hover:block bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-lg mt-1 w-48">
              <ul className="py-2">
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Department Contacts
                </li>
                <li className="px-4 py-2 text-white hover:bg-purple-600 cursor-pointer transition-colors">
                  Contact Form
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome to the Sidebar Dashboard!
        </h1>
      </main>

    </div>
      <Footer />
      </>
  );
}

export default Dashboard;
