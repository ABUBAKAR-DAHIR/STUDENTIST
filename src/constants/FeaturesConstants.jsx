import { AlarmClock, AlarmClockCheck, ArrowBigDownDash, ArrowBigDownDashIcon, BookOpenCheck, BookOpenCheckIcon, Boxes, BoxesIcon, Scroll, ScrollIcon, SearchCheck, SearchCheckIcon } from "lucide-react"; // ✅ use lucide-react

const features = [
  {
    id: 1,
    icon: <ScrollIcon size={50}/>,
    title: "📖 Instant Access to Notes",
    slogan: "Get lecture notes the moment you need them, without delays."
  },
  {
    id: 2,
    icon: <AlarmClockCheck size={50}/>,
    title: "⏱ Save Time, Study Smarter",
    slogan: "Stop wasting hours searching or waiting — everything is organized by subject and course."
  },
  {
    id: 3,
    icon: <BoxesIcon size={50}/>,
    title: "🤝 Community Powered",
    slogan: "Share notes with classmates and collaborate to succeed together."
  },
  {
    id: 4,
    icon: <ArrowBigDownDashIcon size={50}/>,
    title: "💻 Download Anytime",
    slogan: "Read online or save notes offline for exam prep."
  },
  {
    id: 5,
    icon: <SearchCheckIcon size={50}/>,
    title: "🔎 Smart Search",
    slogan: "Find exactly what you need with powerful keyword and course-based filters."
  },
  {
    id: 6,
    icon: <BookOpenCheckIcon size={50}/>,
    title: "🚀 Exam Ready in Minutes",
    slogan: "Access concise, high-quality notes designed to help you revise quickly and effectively."
  }
];

export default features;
