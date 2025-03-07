const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1
      style={{ fontWeight: 600 }}
      className="mb-6 text-center text-3xl font-black text-gray-700 uppercase"
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
