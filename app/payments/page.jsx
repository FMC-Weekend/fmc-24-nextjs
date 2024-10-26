'use client'
import React, { useEffect, useState } from 'react';
import payments from './../../utils/payments/data';
import { ExternalLink, X, Download } from 'lucide-react';

const addDummyData = (payment) => {
  const dummyItems = ['Cine', 'Photog', 'Media', 'Outreach', 'Animation'];
  return {
    ...payment,
    // name: `Customer ${Math.floor(Math.random() * 1000)}`,
    // mobile: `+1 ${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`,
    ordered_items: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, () => dummyItems[Math.floor(Math.random() * dummyItems.length)]),
  };
};

const ImageModal = ({ imageUrl, onClose }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'payment_screenshot.jpg'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download the image. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-end p-2">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-grow overflow-auto p-4">
          <img
            src={imageUrl}
            alt="Payment Screenshot"
            className="max-w-full h-auto max-h-full object-contain mx-auto"
          />
        </div>
        <div className="p-4 flex justify-center">
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <Download className="mr-2 h-4 w-4" /> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default function PaymentPage() {
  const [data, setData] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const [searchEmail, setSearchEmail] = useState(''); 
  useEffect(() => {
    // (async () => {
    //   try {
    //     const res = await fetch(
    //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments`,
    //       {
    //         method: "GET",
    //       }
    //     );
    //     const payments = await res.json();
    //     const enhancedPayments = payments.map(addDummyData);
    //     // console.log(enhancedPayments);
    //     setData(enhancedPayments.reverse());
    //   } catch (error) {
    //     console.error("Error fetching payments:", error);
    //   }
    // })();
    console.log(payments);
    const enhancedPayments = payments.map(addDummyData);
        // console.log(enhancedPayments);
        setData(enhancedPayments.reverse());
  }, []);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  //filter data based on search email
  const filteredData = data.filter(payment => 
    payment.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Payment Records</h1>

      {/* Search bar for email search*/}
      <div className="mb-4">
        <input
          type="text"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          placeholder="Search by email"
          className="p-2 rounded bg-gray-800 text-white border border-gray-700 w-full"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 text-left">Timestamp</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Amount Paid</th>
              <th className="p-3 text-left">Ordered Items</th>
              <th className="p-3 text-left">Screenshot</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((payment, i) => (
              <tr key={i} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="p-3">{new Date(payment.timestamp).toLocaleString()}</td>
                <td className="p-3">{payment.name}</td>
                <td className="p-3">{payment.email}</td>
                <td className="p-3">{payment.phone}</td>
                <td className="p-3">₹{parseFloat(payment.amount_paid).toFixed(2)}</td>
                <td className="p-3">{payment.purchased_events.join(', ')}</td>
                <td className="p-3">
                  <button
                    onClick={() => openModal(payment.image_url)}
                    className="text-blue-400 hover:text-blue-300 flex items-center"
                  >
                    View <ExternalLink size={16} className="ml-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalImage && <ImageModal imageUrl={modalImage} onClose={closeModal} />}
    </div>
  );
}
