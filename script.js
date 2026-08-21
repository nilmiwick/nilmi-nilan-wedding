/* =========================================================
   EASY CUSTOMIZATION
   Change these values before publishing.
   WhatsApp number format: country code + number, digits only.
   Example Sri Lanka: 94771234567 (not +94 77 123 4567)
   ========================================================= */
const WEDDING = {
  couple: "Nilmi & Nilan",
  date: "2026-12-10T08:00:00+05:30",
  calendarDate: "20261210",
  calendarTitle: "Nilmi & Nilan's Wedding",
  ceremonyLocation: "Holy Cross Church, Gampaha, Sri Lanka",
  receptionLocation: "Pabavee Regency, Balummahara, Sri Lanka",
  whatsappNumber: "94704110431"
};

// Slow scroll-reveal animation with no external animation library.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Bring hero text in after first paint.
requestAnimationFrame(() => {
  document.querySelectorAll(".hero .reveal").forEach((el) => el.classList.add("is-visible"));
});

// Countdown.
const target = new Date(WEDDING.date).getTime();
const $ = (id) => document.getElementById(id);

function updateCountdown() {
  const distance = Math.max(0, target - Date.now());
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  $("days").textContent = String(days).padStart(3, "0");
  $("hours").textContent = String(hours).padStart(2, "0");
  $("minutes").textContent = String(minutes).padStart(2, "0");
  $("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// WhatsApp RSVP: nothing is stored on the website.
$("rsvpForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = $("guestName").value.trim();
  const attendance = new FormData(event.currentTarget).get("attendance");
  const count = $("guestCount").value;
  const note = $("guestNote").value.trim();

  const message = [
    `Hello! This is ${name}.`,
    `RSVP for ${WEDDING.couple}: ${attendance}.`,
    `Number of guests: ${count}.`,
    note ? `Note: ${note}` : "",
    "Thank you! 🤍"
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${WEDDING.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});


// Hide the mobile RSVP shortcut once the RSVP section itself is on screen.
const rsvpSection = document.getElementById("rsvp");
if (rsvpSection) {
  const rsvpVisibilityObserver = new IntersectionObserver(([entry]) => {
    document.body.classList.toggle("rsvp-in-view", entry.isIntersecting);
  }, { threshold: 0.08 });
  rsvpVisibilityObserver.observe(rsvpSection);
}

// Generate an .ics file with both wedding events when the guest taps Add to calendar.
$("calendarButton").addEventListener("click", () => {
  const ceremonyStart = `${WEDDING.calendarDate}T080000`;
  const receptionStart = `${WEDDING.calendarDate}T100000`;
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invitation//EN",
    "BEGIN:VEVENT",
    `DTSTART:${ceremonyStart}`,
    `SUMMARY:${WEDDING.calendarTitle} — Holy Mass`,
    `LOCATION:${WEDDING.ceremonyLocation}`,
    "DESCRIPTION:Holy Mass at Holy Cross Church, Gampaha.",
    "END:VEVENT",
    "BEGIN:VEVENT",
    `DTSTART:${receptionStart}`,
    `SUMMARY:${WEDDING.calendarTitle} — Reception`,
    `LOCATION:${WEDDING.receptionLocation}`,
    "DESCRIPTION:Wedding reception at Pabavee Regency, Balummahara.",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "nilmi-nilan-wedding.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
});
