import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center p-10 rounded-xl shadow-md"
        style={{
          backgroundImage: `url('/your-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-white bg-opacity-80 p-6 rounded-md text-center">
          <h2 className="text-3xl font-bold text-blue-700">
            Medi<span className="text-green-500">Mind AI</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Transforming Healthcare with Artificial Intelligence
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Experience the future of healthcare with our AI-powered platform. Get instant insights from patient reports, manage hospital operations efficiently, and access reliable medical information with ease.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => navigate('/diagnostics')}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Start Diagnosis
            </button>
            <button
              onClick={() => navigate('/ask')}
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
            >
              Search Medical Info
            </button>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="mt-10 bg-white p-6 rounded shadow">
        <div className="text-blue-600 font-bold text-lg">📞 Contact Us -</div>
        <p className="text-md text-gray-700 mt-1">
          You can contact us using the following number:
        </p>
        <p className="text-xl font-semibold text-gray-900 mt-2">
          +91-9876543210
        </p>
      </section>
    </MainLayout>
  );
};

export default HomePage;
