const Footer = () => {
    return (
      <footer className="bg-white py-10 border-t border-gray-200 text-center">
        <h2 className="text-2xl font-semibold">Gadget Heaven</h2>
        <p className="text-gray-500 mt-2">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto text-gray-700 text-sm">
          <div>
            <h3 className="font-semibold">Services</h3>
            <ul className="mt-2 space-y-1">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-2 space-y-1">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  