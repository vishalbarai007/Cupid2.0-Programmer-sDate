import { useState, useRef, useEffect } from 'react';
import { Share2, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

const ShareButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleShare = (platform) => {
    const shareUrls = {
      whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent('Check this out!')}`,
      instagram: 'https://instagram.com/share',
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`
    };

    window.open(shareUrls[platform], '_blank');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Share Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
      >
        <Share2 className="w-5 h-5" />
        <span>Share Result</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {/* WhatsApp */}
            <button
              onClick={() => handleShare('whatsapp')}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            {/* Instagram */}
            <button
              onClick={() => handleShare('instagram')}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </button>

            {/* Facebook */}
            <button
              onClick={() => handleShare('facebook')}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </button>

            {/* Twitter */}
            <button
              onClick={() => handleShare('twitter')}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;