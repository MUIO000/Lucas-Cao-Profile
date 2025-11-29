import { useState, useEffect } from 'react';

const Typewriter = ({ 
  text, 
  staticPrefix = '', 
  className = '', 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000 
}) => {
  // staticPrefix 是 "I "，从 "can" 开始打印的部分
  const typingText = text.substring(staticPrefix.length);
  
  const [displayedText, setDisplayedText] = useState(staticPrefix);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // 正在打字：从 "can" 开始逐个添加字符
        if (currentIndex < typingText.length) {
          setDisplayedText(staticPrefix + typingText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // 打字完成，等待后开始删除
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      } else {
        // 正在删除：逐个删除字符直到只剩下 staticPrefix ("I ")
        if (currentIndex > 0) {
          setDisplayedText(staticPrefix + typingText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // 删除完成，重新开始打字
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, typingText, staticPrefix, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayedText}
      <span 
        className="inline-block w-0.5 h-[1.2em] bg-blue-500 ml-1 align-middle"
        style={{ animation: 'blink 1s infinite' }}
      ></span>
    </span>
  );
};

export default Typewriter;
