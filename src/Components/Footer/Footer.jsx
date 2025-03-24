import React from 'react'

function Footer() {
  return (
    <footer className=" text-white py-8 bg-gradient-to-r from-blue-500 to-purple-600 px-4 lg:px-6 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">ABC School</h2>
          <p>Empowering future leaders with knowledge and integrity.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Admissions</a></li>
            <li><a href="#" className="hover:text-gray-300">Programs</a></li>
            <li><a href="#" className="hover:text-gray-300">Faculty</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p>123 Main Street, City, Country</p>
          <p>Email: info@abcschool.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} ABC School. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
