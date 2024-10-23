export const RulesBackground = ({ children, className, bgGradient = true }) => {
  return (
    <div className={"w-full relative" + (className ? " " + className : "")}>
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              bgGradient &&
              "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.8) 80%, transparent)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px z-10"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--primary) 45%, var(--primary) 45%, transparent)",
          }}
        />
        <div className="relative z-10">{children}</div>
        <div
          className="absolute bottom-0 left-0 z-10 right-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--primary) 45%, var(--primary) 45%, transparent)",
          }}
        />
      </div>
    </div>
  );
};
