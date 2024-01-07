import React from "react";

const Konseling = () => {
  const counselingData = [
    {
      title: "Supportive Counseling",
      description: "Get emotional support in a caring environment.",
      imageUrl: "akuu.svg",
      link: "/pages",
    },
    {
      title: "Online Therapy",
      description: "Connect with a therapist through secure online sessions.",
      imageUrl: "akuu.svg",
      link: "/chatpage",
    },
    {
      title: "Group Therapy",
      description: "Join a supportive community in group therapy sessions.",
      imageUrl: "akuu.svg",
      link: "/chatpage",
    },
    {
      title: "Crisis Helpline",
      description: "24/7 crisis helpline for immediate assistance.",
      imageUrl: "akuu.svg",
      link: "/chatpage",
    },
  ];

  return (
    <div className="flex flex-wrap justify-around">
      {counselingData.map((counseling) => (
        <div
          key={counseling.title} // Menggunakan title sebagai kunci unik
          className={`max-w-[300px] m-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded ${
            counselingData.indexOf(counseling) < 2 ? "order-1" : "order-2"
          }`}
        >
          <img
            src={counseling.imageUrl}
            alt={counseling.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-1">
            <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
              {counseling.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {counseling.description}
            </p>
            <a
              href={counseling.link}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
            >
              Chat Us
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Konseling;
