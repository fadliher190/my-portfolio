'use client'
import { useState, useEffect } from "react";

const TypingEffect = ({ texts, speed = 100, delay = 1500, className } : any) => {
  const [displayedText, setDisplayedText] = useState(""); // Teks yang ditampilkan
  const [currentTextIndex, setCurrentTextIndex] = useState(0); // Indeks teks aktif
  const [isDeleting, setIsDeleting] = useState(false); // Status penghapusan

  useEffect(() => {
    const currentText = texts[currentTextIndex]; // Teks saat ini
    let typingSpeed = speed;

    if (isDeleting) {
      typingSpeed /= 2; // Lebih cepat saat menghapus
    }

    const handleTyping = () => {
      if (!isDeleting && displayedText.length < currentText.length) {
        // Tambah karakter
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      } else if (isDeleting && displayedText.length > 0) {
        // Hapus karakter
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else if (!isDeleting && displayedText.length === currentText.length) {
        // Tunggu sebelum menghapus
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayedText.length === 0) {
        // Pindah ke teks berikutnya
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <div className={className+"w-full flex justify-start items-start"}>
      <span className="w-full">{displayedText}</span>
    </div>
  );
};

export default TypingEffect;
