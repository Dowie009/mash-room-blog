interface AnimatedTitleProps {
  text: string;
  className?: string;
}

export const AnimatedTitle = ({ text, className = '' }: AnimatedTitleProps) => {
  const chars = text.split('');

  return (
    <p className={className}>
      {chars.map((char, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${2.5 + index * 0.05}s`,
            display: char === ' ' ? 'inline' : 'inline-block',
            whiteSpace: char === ' ' ? 'normal' : 'nowrap'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </p>
  );
};
