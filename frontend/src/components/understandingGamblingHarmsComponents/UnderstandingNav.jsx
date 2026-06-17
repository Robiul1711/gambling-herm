const sections = [
  {
    id: "gambling-harm",
    title: "1. What Gambling Harm Looks Like",
  },
  {
    id: "normal-product",
    title: "2. Gambling is not a normal product",
  },
  {
    id: "addiction-design",
    title: "3. Addiction by design",
  },
  {
    id: "safer-gambling",
    title: '4. The "safer gambling" myth',
  },
  {
    id: "all-around-us",
    title: "5. It's all around us",
  },
  {
    id: "affected",
    title: "6. Who is affected",
  },
  {
    id: "language",
    title: "7. A note on language & measurement",
  },
];

const UnderstandingNav = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-wrap gap-3 mb-20">
      {sections.map((item) => (
        <button
          key={item.id}
          onClick={() => handleScroll(item.id)}
          className="px-5 py-2 rounded-full border text-sm hover:bg-Primary hover:text-white transition"
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default UnderstandingNav;