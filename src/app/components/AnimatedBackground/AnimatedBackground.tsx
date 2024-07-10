import styles from './AnimatedBackground.module.css';

type Lang = {
  language: string;
  translation: string;
}

type AnimatedBackgroundProps = {
  isDark: boolean;
}

const AnimatedBackground = ({isDark}: AnimatedBackgroundProps) => {

  const helloInDifferentLanguages = [
    { language: "English", translation: "Hello" },
    { language: "French", translation: "Bonjour" },
    { language: "German", translation: "Hallo" },
    { language: "Italian", translation: "Ciao" },
    { language: "Portuguese", translation: "Olá" },
    { language: "Dutch", translation: "Hallo" },
    { language: "Russian", translation: "Привет" },
    { language: "Chinese (Simplified)", translation: "你好" },
    { language: "Japanese", translation: "こんにちは" },
    { language: "Korean", translation: "안녕하세요" },
    { language: "Arabic", translation: "مرحبا" },
    { language: "Hindi", translation: "नमस्ते" },
    { language: "Swedish", translation: "Hej" },
    { language: "Greek", translation: "Γεια σας" },
    { language: "Turkish", translation: "Merhaba" },
    { language: "Polish", translation: "Cześć" },
    { language: "Vietnamese", translation: "Xin chào" },
    { language: "Thai", translation: "สวัสดี" },
    { language: "Finnish", translation: "Hei" },
    { language: "Czech", translation: "Ahoj" }
  ];
  
  return (
    <ul className={`${styles.background} ${isDark ? styles.darkMode : ""}`}>
      {helloInDifferentLanguages.map((element: Lang, index: number) => (
        <li key={index} className={isDark ? styles.darkModeL : ""}>{element.translation}</li>
      ))}
    </ul>
  );
};

export default AnimatedBackground;