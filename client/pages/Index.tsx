// Ornate Mughal Pattern Background
const MughalPattern = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(245, 196, 34, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(56, 134, 151, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 25% 75%, rgba(245, 196, 34, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75% 25%, rgba(56, 134, 151, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(56, 134, 151, 0.2) 49%, rgba(56, 134, 151, 0.2) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(245, 196, 34, 0.2) 49%, rgba(245, 196, 34, 0.2) 51%, transparent 52%)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      {children}
    </div>
  );
};