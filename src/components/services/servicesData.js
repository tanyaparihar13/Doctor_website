import physio1 from "../../assets/images/physio1.jpg";
import physio2 from "../../assets/images/physio2.jpg";
import physio3 from "../../assets/images/physio3.jpg";
import physio4 from "../../assets/images/physio4.jpg";
import physio5 from "../../assets/images/physio5.jpg";
import physio6 from "../../assets/images/physio6.jpg";

// service images
import sports from "../../assets/images/sports.jpg";
import surgery from "../../assets/images/surgery.jpg";
import posture from "../../assets/images/posture.jpg";
import paralysis from "../../assets/images/paralysis.jpg";
import homephysio from "../../assets/images/homephysio.jpg";
// import pediatric from "../../assets/images/pediatric.jpg";

// fallback image
import pain from "../../assets/images/homephysio.jpg";

const services = [
  {
    id: 1,
    slug: "back-pain-treatment",
    title: "Back Pain Treatment",
    subtitle: "Advanced physiotherapy for chronic back pain recovery.",
    hero: {
      heading: "Relief from Chronic Back Pain",
      description:
        "Personalized physiotherapy treatments for lower back pain, posture correction, slipped disc and muscle stiffness.",
      image: physio1,
    },
    benefitsImage: physio2,
    features: [
      "Posture Assessment & Correction Therapy",
      "Slip Disc & Sciatica Physiotherapy",
      "Manual Therapy",
      "Spinal Mobilization",
      "Pain Relief Electrotherapy",
      "Strength Training",
    ],
    process: [
      "Detailed Assessment",
      "Customized Therapy Plan",
      "Physiotherapy Sessions",
      "Recovery Monitoring",
    ],
    benefits: ["Reduce pain", "Improve posture", "Better mobility"],
  },

  {
    id: 2,
    slug: "sports-injury-rehab",
    title: "Sports Injury Rehab",
    subtitle: "Professional rehabilitation for athletes and sports injuries.",
    hero: {
      heading: "Sports Injury Rehabilitation",
      description:
        "Recover faster from ligament injuries and muscle strain.",
      image: sports,
    },
    benefitsImage: physio3,
    features: [
      "ACL Rehabilitation",
      "Muscle Recovery",
      "Sports Massage",
      "Strength Training",
      "Mobility Training",
    ],
    process: [
      "Injury Evaluation",
      "Rehab Planning",
      "Therapy Sessions",
      "Performance Training",
    ],
    benefits: [
      "Faster recovery",
      "Better performance",
      "Injury prevention",
    ],
  },

  {
    id: 3,
    slug: "neck-shoulder-pain",
    title: "Neck & Shoulder Pain",
    subtitle: "Cervical and shoulder pain physiotherapy treatment.",
    hero: {
      heading: "Neck & Shoulder Pain Relief",
      description:
        "Treatment for cervical pain and frozen shoulder.",
      image: posture,
    },
    benefitsImage: physio4,
    features: [
      "Cervical Therapy",
      "Frozen Shoulder Treatment",
      "Trigger Point Release",
      "Posture Correction",
      "Dry Needling",
    ],
    process: [
      "Pain Analysis",
      "Treatment Plan",
      "Therapy Sessions",
      "Recovery Care",
    ],
    benefits: ["Pain relief", "Better movement", "Flexibility"],
  },

  {
    id: 4,
    slug: "post-surgery-rehabilitation",
    title: "Post Surgery Rehabilitation",
    subtitle: "Safe and expert physiotherapy after surgery.",
    hero: {
      heading: "Post Surgery Recovery",
      description:
        "Safe recovery after orthopedic surgery.",
      image: surgery,
    },
    benefitsImage: physio5,
    features: [
      "Knee Replacement Rehab",
      "Fracture Recovery",
      "Joint Mobility",
      "Strength Training",
    ],
    process: [
      "Initial Evaluation",
      "Recovery Plan",
      "Therapy Sessions",
      "Mobility Restoration",
    ],
    benefits: ["Fast healing", "Safe recovery", "Strength regain"],
  },

  {
    id: 5,
    slug: "neurological-rehabilitation",
    title: "Neurological Rehabilitation",
    subtitle: "Advanced neuro physiotherapy and recovery care.",
    hero: {
      heading: "Neurological Physiotherapy",
      description:
        "Stroke, paralysis and nerve disorder rehab.",
      image: paralysis,
    },
    benefitsImage: physio6,
    features: [
      "Stroke Rehab",
      "Balance Training",
      "Paralysis Recovery",
      "Gait Training",
    ],
    process: [
      "Assessment",
      "Therapy Plan",
      "Sessions",
      "Monitoring",
    ],
    benefits: ["Balance", "Movement", "Independence"],
  },

  {
    id: 6,
    slug: "home-physiotherapy",
    title: "Home Physiotherapy",
    subtitle: "Professional physiotherapy services at your home.",
    hero: {
      heading: "Physiotherapy at Home",
      description:
        "Comfortable home physiotherapy service.",
      image: homephysio,
    },
    benefitsImage: physio1,
    features: [
      "Home Visit",
      "Elderly Care",
      "Pain Therapy",
      "Exercise Plan",
    ],
    process: [
      "Booking",
      "Home Visit",
      "Treatment",
      "Follow-up",
    ],
    benefits: ["Comfort", "Time saving", "Personal care"],
  },

  {
    id: 7,
    slug: "pediatric-physiotherapy",
    title: "Pediatric Physiotherapy",
    subtitle: "Specialized physiotherapy care for children.",
    hero: {
      heading: "Child Physiotherapy Care",
      description:
        "Therapy for child development issues.",
      image: "",
    },
    benefitsImage: physio2,
    features: [
      "Development Therapy",
      "Balance Exercises",
      "Posture Correction",
      "Strength Training",
    ],
    process: [
      "Assessment",
      "Plan",
      "Sessions",
      "Progress Tracking",
    ],
    benefits: [
      "Healthy growth",
      "Better movement",
      "Strength",
    ],
  },

  {
    id: 8,
    slug: "pain-management-therapy",
    title: "Pain Management Therapy",
    subtitle: "Advanced long-term pain relief treatments.",
    hero: {
      heading: "Advanced Pain Management",
      description:
        "Long-term pain relief therapy.",
      image: pain,
    },
    benefitsImage: physio3,
    features: [
      "Arthritis Care",
      "Joint Therapy",
      "Electrotherapy",
      "Muscle Relaxation",
    ],
    process: [
      "Analysis",
      "Treatment",
      "Therapy",
      "Prevention",
    ],
    benefits: [
      "Pain relief",
      "Flexibility",
      "Lifestyle improvement",
    ],
  },
];

export default services;