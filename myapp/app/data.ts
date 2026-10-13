export interface Destination {
  id: string;
  name: string;
  nameBn: string;
  category: 'inside_dhaka' | 'outside_dhaka';
  tagline: string;
  taglineBn: string;
  division: string;
  district: string;
  distanceFromDhaka: string;
  travelTime: string;
  bestTimeToVisit: string;
  estimatedBudget: {
    budget: string;
    standard: string;
    luxury: string;
  };
  highlightSpots: {
    name: string;
    nameBn: string;
    desc: string;
    ticketPrice?: string;
  }[];
  transportOptions: {
    type: 'Bus' | 'Train' | 'Launch' | 'Flight' | 'CNG / Metro' | 'Car / Microbus';
    from: string;
    to: string;
    fare: string;
    duration: string;
    tips: string;
  }[];
  famousFoods: string[];
  tipsAndAdvice: string[];
  image: string;
  images?: string[];
  badgeColor: string;
  color: string; // for wheel slice
}

export const DESTINATIONS_DATA: Destination[] = [
  // --- INSIDE DHAKA (10 Destinations) ---
  {
    id: 'lalbagh-fort',
    name: 'Lalbagh Fort & Old Dhaka',
    nameBn: 'লালবাগ কেল্লা ও পুরান ঢাকা',
    category: 'inside_dhaka',
    tagline: 'Mughal Majesty & Authentic Biryani Culinary Trail',
    taglineBn: 'মোঘল স্থাপত্যের গৌরব ও মুখরোচক বিরিয়ানির রাজ্য',
    division: 'Dhaka',
    district: 'Dhaka (Lalbagh)',
    distanceFromDhaka: 'Central / 6 km from Shahbagh',
    travelTime: '30-45 mins',
    bestTimeToVisit: 'October to March (Afternoons 2 PM - 5:30 PM)',
    estimatedBudget: {
      budget: '৳৩০০ - ৳৫০০',
      standard: '৳৭০০ - ৳১,২০০',
      luxury: '৳২,০০০+'
    },
    highlightSpots: [
      { name: 'Pari Bibi Tomb', nameBn: 'পরী বিবির মাজার', desc: 'Rare marble stone craftsmanship and historic mystery.', ticketPrice: '৳২০ (Local), ৳২০০ (Foreigner)' },
      { name: 'Mughal Hammamkhana', nameBn: 'মুঘল হাম্মামখানা', desc: 'Ancient royal bathing house and museum showcase.' },
      { name: 'Ahsan Manzil (Pink Palace)', nameBn: 'আহসান মঞ্জিল', desc: '15 mins away by rickshaw, majestic Nawabi palace on Buriganga.', ticketPrice: '৳২০' },
      { name: 'Tara Masjid (Star Mosque)', nameBn: 'তারা মসজিদ', desc: 'Spectacular floral chinitikri mosaic architecture.' }
    ],
    transportOptions: [
      { type: 'CNG / Metro', from: 'Anywhere in Dhaka', to: 'Lalbagh Fort Gate', fare: '৳১৫০ - ৳৩০০ (CNG) / Rickshaw ৳৮০-৳১৫০', duration: '30-50 mins', tips: 'Take Metro to Secretariat or Dhaka University, then 15 min rickshaw.' },
      { type: 'Bus', from: 'Mirpur / Uttara / Farmgate', to: 'Azimpur Bus Stand', fare: '৳২৫ - ৳৫০', duration: '45-60 mins', tips: 'From Azimpur, take a 5-minute rickshaw ride (৳৩০).' }
    ],
    famousFoods: ['Nanna Biryani (Morog Polao)', 'Royal Bakery Pesta Sharbat', 'Beauty Lassi & Faluda', 'Bakarkhani with Sweet Tea'],
    tipsAndAdvice: [
      'Fort is closed on Sundays and half-day on Monday morning.',
      'Wear modest clothes and comfortable walking sandals for cobbled paths.',
      'Old Dhaka alleys are best explored on foot or traditional cycle-rickshaws.'
    ],
    image: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9REonV5XOCr29kotm3N3ruB9ExAhPcnlqQlhmHPDbRj4Im1Bc6vNm90N1ZzC9iy4TomOZhRTRWF1--_DwCEHP4WyKiKZbQh78c4DUaK0gKNdKcD3ttdos939mia2WZw4U1lEHI_=s680-w680-h510-rw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9REonV5XOCr29kotm3N3ruB9ExAhPcnlqQlhmHPDbRj4Im1Bc6vNm90N1ZzC9iy4TomOZhRTRWF1--_DwCEHP4WyKiKZbQh78c4DUaK0gKNdKcD3ttdos939mia2WZw4U1lEHI_=s680-w680-h510-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RGja_Sslqv8Bigg84HiYFiffS5dEUx4G58v4M0rNffFYNRWnwXf2h2m5F0pkdtB7-qDwJsM8_ZjTm49v00nm0nVHy7lyTDeTbIldZrD4y82VjXx-BNDKSz82YO3Iv3f4kneXLLaw=s680-w680-h510-rw',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80'
    ],
    badgeColor: 'from-amber-600 to-red-600',
    color: '#D97706'
  },
  {
    id: 'panam-nagar',
    name: 'Panam Nagar & Sonargaon',
    nameBn: 'পানাম নগর ও সোনারগাঁও',
    category: 'inside_dhaka',
    tagline: 'The Mysterious Ghost City & Ancient Capital of Bengal',
    taglineBn: 'বাংলার প্রাচীন রাজধানী ও সমৃদ্ধ ঐতিহাসিক নগরী',
    division: 'Dhaka',
    district: 'Narayanganj (Greater Dhaka)',
    distanceFromDhaka: '29 km from Gulistan',
    travelTime: '1 hr - 1.5 hrs',
    bestTimeToVisit: 'Winter mornings (8:30 AM - 4:00 PM)',
    estimatedBudget: {
      budget: '৳৪০০ - ৳৭০০',
      standard: '৳১,০০০ - ৳১,৮০০',
      luxury: '৳৩,০০০+'
    },
    highlightSpots: [
      { name: 'Panam Historic Street', nameBn: 'পানাম নগর স্ট্রিট', desc: '52 preserved 19th-century colonial merchants mansions.', ticketPrice: '৳৩০' },
      { name: 'Sonargaon Folk Art Museum (Boro Sardar Bari)', nameBn: 'লোক ও কারুশিল্প জাদুঘর', desc: 'Intricately renovated mansion by Shilpacharya Zainul Abedin.', ticketPrice: '৳৫০' },
      { name: 'Goaldi Mosque', nameBn: 'গোয়ালদি মসজিদ', desc: '16th-century single-domed sultanate architectural marvel.' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Gulistan (Moghbazar/Sayedabad)', to: 'Mograpara Crossing', fare: '৳৫৫ - ৳৭০ (Bandhubar / Sonargaon Paribahan)', duration: '1 hr', tips: 'Get off at Mograpara bus stand, take auto-rickshaw to Panam for ৳৩০.' },
      { type: 'Car / Microbus', from: 'Dhaka', to: 'Sonargaon via Dhaka-Chittagong Highway', fare: '৳২,০০০ - ৳৩,৫০০ (Rental)', duration: '50 mins early morning', tips: 'Leave before 8 AM to avoid Kanchpur bridge rush.' }
    ],
    famousFoods: ['Local Mawa Ghat style sweets', 'Deshi Rui fish curry at Highway dhabas', 'Fresh sugarcane juice'],
    tipsAndAdvice: [
      'Museum is closed on Thursdays and Fridays half-day.',
      'Photography enthusiast haven; bring wide-angle lenses for neoclassical facades.',
      'Combine with Sonargaon craft village for hand-loomed Jamdani sarees.'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    badgeColor: 'from-emerald-700 to-teal-800',
    color: '#059669'
  },
  {
    id: 'national-botanical-garden',
    name: 'National Botanical Garden & Zoo',
    nameBn: 'জাতীয় উদ্ভিদ উদ্যান ও মিরপুর চিড়িয়াখানা',
    category: 'inside_dhaka',
    tagline: 'Lush Green Sanctuary & Wildlife in the Heart of the Capital',
    taglineBn: 'সবুজের সমারোহ ও প্রাণবন্ত প্রকৃতির এক অপূর্ব মেলবন্ধন',
    division: 'Dhaka',
    district: 'Dhaka (Mirpur-1)',
    distanceFromDhaka: '12 km from Farmgate',
    travelTime: '30-45 mins (Metro fast track)',
    bestTimeToVisit: 'Winter mornings or breezy autumn afternoons',
    estimatedBudget: {
      budget: '৳২৫০ - ৳৪০০',
      standard: '৳৬০০ - ৳১,০০০',
      luxury: '৳১,৮০০+'
    },
    highlightSpots: [
      { name: 'Botanical Garden Forest Canopy', nameBn: 'বোটানিক্যাল গার্ডেন', desc: 'Over 200 acres with 50,000 species of trees and lotus ponds.', ticketPrice: '৳৩০' },
      { name: 'Rose Garden & Orchidarium', nameBn: 'গোলাপ বাগান ও অর্কিড হাউস', desc: 'Exquisite blooming roses and exotic subtropical plants.' },
      { name: 'Bangladesh National Zoo', nameBn: 'বাংলাদেশ জাতীয় চিড়িয়াখানা', desc: 'Royal Bengal tigers, peacocks, deer, and natural lakes.', ticketPrice: '৳৫০' }
    ],
    transportOptions: [
      { type: 'CNG / Metro', from: 'Motijheel / Uttara', to: 'Mirpur-10 Metro Station', fare: '৳৫০ - ৳১০০', duration: '20 mins', tips: 'From Mirpur-10, take a 10-min rickshaw to Botanical Garden gate.' },
      { type: 'Bus', from: 'Shahbagh / Farmgate', to: 'Mirpur-1 Bus Stand', fare: '৳৩০ - ৳৪০', duration: '40 mins', tips: 'Bikolpo, Shikor, or Trans Silva buses drop directly nearby.' }
    ],
    famousFoods: ['Mirpur Kacchi Ghor', 'Bhorta-bhaat meals near zoo gate', 'Street spicy chotpoti & doi-fuchka'],
    tipsAndAdvice: [
      'Very large area; rent an internal electric buggy if travelling with seniors.',
      'Carry your own water bottle and sun umbrella.',
      'Keep your ticket safe until exit.'
    ],
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'
    ],
    badgeColor: 'from-green-600 to-lime-700',
    color: '#16A34A'
  },
  {
    id: 'mawa-ghat',
    name: 'Padma Bridge & Mawa Ghat',
    nameBn: 'পদ্মা সেতু ও মাওয়া ঘাট',
    category: 'inside_dhaka',
    tagline: 'Freshly Fried Hilsa & The Marvel of Modern Bangladesh',
    taglineBn: 'টাটকা ভাজা পদ্মার ইলিশ ও গৌরবের পদ্মা সেতু দর্শন',
    division: 'Dhaka',
    district: 'Munshiganj',
    distanceFromDhaka: '38 km via Dhaka-Mawa Expressway',
    travelTime: '45 mins via Expressway',
    bestTimeToVisit: 'Early morning sunrise or romantic late night dinners',
    estimatedBudget: {
      budget: '৳৬০০ - ৳১,০০০',
      standard: '৳১,৫০০ - ৳২,৫০০',
      luxury: '৳৪,০০০+'
    },
    highlightSpots: [
      { name: 'Padma Bridge Viewpoint', nameBn: 'পদ্মা সেতু ভিউপয়েন্ট', desc: 'Spectacular vista of the 6.15 km engineering wonder over the mighty river.' },
      { name: 'Old Mawa Fish Market', nameBn: 'মাওয়া ইলিশ বাজার', desc: 'Choose fresh live Padma Hilsa and have it fried right before your eyes.' },
      { name: 'Speedboat & Trawler River Cruise', nameBn: 'পদ্মা নদী ভ্রমণ', desc: 'Glide across the roaring river for sweeping views of bridge pillars.', ticketPrice: '৳১০০ - ৳২০০/person' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Gulistan (Babubazar bridge)', to: 'Shimulia / Mawa Ghat', fare: '৳১১০ - ৳১৫০ (Dhaleshwari, Ilish Paribahan)', duration: '45 mins', tips: 'Direct air-conditioned & non-AC buses depart every 10 mins.' },
      { type: 'Car / Microbus', from: 'Dhaka Central', to: 'Mawa via Expressway', fare: '৳২৫০০ - ৳৪০০০ (Uber/Rent-a-car)', duration: '40 mins', tips: 'Cruising on the 8-lane expressway is a premier road-trip experience.' }
    ],
    famousFoods: ['Sizzling hot Padma Ilish fry with roe', 'Ilish lez bhorta (Hilsa tail mash)', 'Hot steamed rice with red mustard oil', 'Sweet yogurt (Mawa mishti)'],
    tipsAndAdvice: [
      'Bargain politely for fish; price is weighed by grams and cooked on the spot.',
      'Evening illuminated bridge lights create spectacular photo opportunities.',
      'Check wind conditions before boarding speedboats.'
    ],
    image: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1545652985-5edd365b12eb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    badgeColor: 'from-blue-600 to-indigo-800',
    color: '#2563EB'
  },
  {
    id: 'rose-garden-palace',
    name: 'Rose Garden Palace & Tikatuli',
    nameBn: 'রোজ গার্ডেন প্যালেস ও টিকাটুলী',
    category: 'inside_dhaka',
    tagline: 'Neoclassical Heritage Mansion and Cultural Birthplace',
    taglineBn: 'ঐতিহাসিক রাজনৈতিক স্মৃতিবিজড়িত অনিন্দ্য সুন্দর রাজপ্রাসাদ',
    division: 'Dhaka',
    district: 'Dhaka (KM Das Lane)',
    distanceFromDhaka: 'Central / 4 km from Motijheel',
    travelTime: '20-30 mins',
    bestTimeToVisit: 'Autumn & Winter afternoons (3 PM - 5 PM)',
    estimatedBudget: {
      budget: '৳২০০ - ৳৪০০',
      standard: '৳৫০০ - ৳৮০০',
      luxury: '৳১,৫০০+'
    },
    highlightSpots: [
      { name: 'Corinthian Columned Mansion', nameBn: 'ইউরোপীয় ধাঁচের রাজপ্রাসাদ', desc: 'Built in 1931 by Hrishikesh Das with Roman statues.' },
      { name: 'Lily Pond & Classical Statues', nameBn: 'পুকুর ও রোমান ভাস্কর্য', desc: 'Serene Italian marble statues overlooking a central pond.' },
      { name: 'Baldha Garden', nameBn: 'বলধা গার্ডেন', desc: '10 mins away; historic botanical treasure that inspired Rabindranath Tagore.', ticketPrice: '৳৩০' }
    ],
    transportOptions: [
      { type: 'CNG / Metro', from: 'Motijheel / Paltan', to: 'Tikatuli / Swamibagh', fare: '৳৮০ - ৳১৫০', duration: '15-20 mins', tips: 'Quick rickshaw ride from Motijheel Shadharan Bima square.' },
      { type: 'Bus', from: 'Farmgate / Shahbagh', to: 'Sayedabad / Ittefaq Mor', fare: '৳২৫ - ৳৩৫', duration: '30 mins', tips: 'Walk 5 minutes down KM Das lane.' }
    ],
    famousFoods: ['Tikatuli Grand Nawab kebabs', 'Famous Shahi Jilapi', 'Traditional Old Dhaka Cha & Toast'],
    tipsAndAdvice: [
      'Check government entry permissions as restoration work is often underway.',
      'A serene spot away from busy city cacophony.',
      'Ideal for portrait and cinematic photography.'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-rose-600 to-pink-800',
    color: '#E11D48'
  },
  {
    id: 'jahangirnagar-university',
    name: 'Jahangirnagar University & Migratory Birds',
    nameBn: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয় ও পরিযায়ী পাখি',
    category: 'inside_dhaka',
    tagline: 'Lakes Filled with Siberian Guest Birds & Red Ceramic Campus',
    taglineBn: 'লাল মাটির সবুজ ক্যাম্পাস ও অতিথি পাখির কলকাকলি',
    division: 'Dhaka',
    district: 'Savar (Dhaka Outskirts)',
    distanceFromDhaka: '32 km from Zero Point',
    travelTime: '1 hr - 1.5 hrs',
    bestTimeToVisit: 'December to February (Early mornings for birdwatching)',
    estimatedBudget: {
      budget: '৳৩৫০ - ৳৬০০',
      standard: '৳৮০০ - ৳১,৫০০',
      luxury: '৳২,৫০০+'
    },
    highlightSpots: [
      { name: 'Administrative Building Bird Lake', nameBn: 'প্রশাসনিক ভবন লেক', desc: 'Thousands of whistling ducks and migratory waterfowl.' },
      { name: 'Muktir Gaan Amphitheater & Shaheed Minar', nameBn: 'উন্মুক্ত নাট্যমঞ্চ ও শহীদ মিনার', desc: 'Tallest Shaheed Minar in Bangladesh designed by Hamiduzzaman Khan.' },
      { name: 'Taragram & Butterfly Fair Garden', nameBn: 'প্রজাপতি পার্ক', desc: 'Dedicated butterfly conservation farm and breeding center.' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Gabtoli / Farmgate / Kalyanpur', to: 'JU Dairy Gate', fare: '৳৫৫ - ৳৭০ (Baishakhi, Thikana, Moumita)', duration: '1 hr', tips: 'Board direct Savar/Nabinagar bound express buses.' },
      { type: 'Car / Microbus', from: 'Dhaka', to: 'Mirpur Road -> Savar -> JU', fare: '৳২,২০০ - ৳৩,৫০০', duration: '50 mins early morning', tips: 'Park vehicle inside designated visitors lot near Dairy Gate.' }
    ],
    famousFoods: ['Bottola Variety Bhorta (30+ items) with deshi dal', 'Campus Dairy milk sweets', 'Taragram spicy duck meat curry'],
    tipsAndAdvice: [
      'Do not throw stones or disturb the migratory birds; keep silence near the lakes.',
      'Rent a bicycle from students at Bottola for ৳৪০/hour to tour the 700-acre green campus.',
      'Bring binoculars and telephoto lenses for wildlife photography.'
    ],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'
    ],
    badgeColor: 'from-cyan-700 to-blue-900',
    color: '#0891B2'
  },
  {
    id: 'bangabandhu-military-museum',
    name: 'Bangabandhu Military Museum & Bijoy Sarani',
    nameBn: 'বঙ্গবন্ধু সামরিক জাদুঘর ও বিজয় সরণি',
    category: 'inside_dhaka',
    tagline: 'World-Class Modern Architecture & Defense Heritage',
    taglineBn: 'আন্তর্জাতিক মানের অত্যাধুনিক স্থাপত্য ও সমর ইতিহাস',
    division: 'Dhaka',
    district: 'Dhaka (Bijoy Sarani)',
    distanceFromDhaka: 'Central / Near Farmgate',
    travelTime: '15-25 mins',
    bestTimeToVisit: 'Year-round (Air Conditioned indoor galleries & sunset fountain)',
    estimatedBudget: {
      budget: '৳২০০ - ৳৪০০',
      standard: '৳৫০০ - ৳৮০০',
      luxury: '৳১,৫০০+'
    },
    highlightSpots: [
      { name: 'Interactive Military Galleries', nameBn: 'আর্মি, নৌ ও বিমানবাহিনী গ্যালারি', desc: 'Fighter jets, tanks, naval submarines, and interactive VR simulations.', ticketPrice: '৳১০০ (Local)' },
      { name: 'Modern Kinetic Water Fountain & Lake', nameBn: 'বিজয় ফোয়ারা ও আলোকসজ্জা', desc: 'State of the art landscaped gardens and sunset boardwalk.' },
      { name: 'Novo Theatre (Planetarium)', nameBn: 'নভোথিয়েটার', desc: 'Right opposite; astronomical 3D movies and cosmic exhibits.', ticketPrice: '৳১০০' }
    ],
    transportOptions: [
      { type: 'CNG / Metro', from: 'Uttara / Motijheel', to: 'Bijoy Sarani Metro Station', fare: '৳৩০ - ৳৬০', duration: '10-15 mins', tips: 'Exit Bijoy Sarani station and walk just 2 minutes directly into museum gate.' },
      { type: 'Bus', from: 'Anywhere', to: 'Bijoy Sarani / Farmgate', fare: '৳২০ - ৳৩৫', duration: '20-30 mins', tips: 'Prime location easily accessible from all Dhaka transport nodes.' }
    ],
    famousFoods: ['Museum in-house Cafeteria snacks', 'Farmgate famous chicken rolls & beef chap', 'Tejgaon Indulge bistro coffee'],
    tipsAndAdvice: [
      'Closed on Wednesdays. Open 10 AM to 6 PM other days.',
      'Buy tickets online or from digital kiosk to skip weekend lines.',
      'One of the cleanest and most family-friendly spots in Dhaka.'
    ],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-indigo-600 to-purple-800',
    color: '#6366F1'
  },
  {
    id: 'hatirjheel-lake',
    name: 'Hatirjheel Waterfront & Water Taxi',
    nameBn: 'হাতিরঝিল ওয়াটারফ্রন্ট ও ওয়াটার ট্যাক্সি',
    category: 'inside_dhaka',
    tagline: 'Illuminated Bridges, Evening Breeze & Water Taxi Cruise',
    taglineBn: 'নৈসর্গিক জলপথ, আলোকোজ্জ্বল সেতু ও ওয়াটার ট্যাক্সি ভ্রমণ',
    division: 'Dhaka',
    district: 'Dhaka (Rampura - Gulshan - Karwan Bazar)',
    distanceFromDhaka: 'Central Dhaka',
    travelTime: '15-20 mins',
    bestTimeToVisit: 'Evenings (5:30 PM - 9:30 PM) when the bridges light up',
    estimatedBudget: {
      budget: '৳১৫০ - ৳৩০০',
      standard: '৳৪০০ - ৳৮০০',
      luxury: '৳১,৫০০+'
    },
    highlightSpots: [
      { name: 'Hatirjheel Water Taxi Ride', nameBn: 'ওয়াটার ট্যাক্সি ক্রুজ', desc: 'Scenic commute and leisure boat ride across the wide urban lake.', ticketPrice: '৳৩০ - ৳৪০/trip' },
      { name: 'Musical Dancing Fountain', nameBn: 'মিউজিক্যাল ড্যান্সিং ফাউন্টেন', desc: 'Color lasers and synchronized water shows on weekend nights.' },
      { name: 'Viewing Amphitheater & Overpass Bridges', nameBn: 'এম্ফিথিয়েটার ও ভিউ ব্রিজ', desc: 'Panoramic city skyline views and open-air food courts.' }
    ],
    transportOptions: [
      { type: 'CNG / Metro', from: 'Anywhere', to: 'FDC Mor / Rampura Bridge / Gulshan-1', fare: '৳৮০ - ৳২০০', duration: '15-30 mins', tips: 'Board water taxi from Rampura or FDC ghat for direct crossing.' },
      { type: 'Bus', from: 'Mohakhali / Moghbazar', to: 'Hatirjheel Circular Bus Stop', fare: '৳১৫ - ৳২৫', duration: '15 mins', tips: 'Green circular minibuses run continuously around the perimeter.' }
    ],
    famousFoods: ['Floating restaurant kebabs', 'Begun bhaja & roadside fuchka', 'Signature saffron milk cha near Rampura pier'],
    tipsAndAdvice: [
      'Take a water taxi ride during golden hour right before sunset.',
      'Pedestrian tracks are great for jogging and evening leisure walks.',
      'Security is active throughout the night along the ring road.'
    ],
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-sky-600 to-blue-700',
    color: '#0284C7'
  },

  // --- OUTSIDE DHAKA (12 Destinations) ---
  {
    id: 'sajek-valley',
    name: 'Sajek Valley & Ruilui Para',
    nameBn: 'সাজেক ভ্যালি ও রুইলুই পাড়া',
    category: 'outside_dhaka',
    tagline: 'The Kingdom of Clouds in the High Chittagong Hill Tracts',
    taglineBn: 'মেঘের রাজ্য ও পাহাড়ের কোল ঘেঁষা এক স্বর্গীয় অনুভূতি',
    division: 'Chattogram',
    district: 'Rangamati (via Khagrachhari)',
    distanceFromDhaka: '315 km',
    travelTime: '8-10 hrs (Bus + Chander Gari)',
    bestTimeToVisit: 'Monsoon (July-Oct for cloud ocean) & Winter (Nov-Feb for cool breezes)',
    estimatedBudget: {
      budget: '৳৪,৫০০ - ৳৬,৫০০',
      standard: '৳৮,০০০ - ৳১২,০০০',
      luxury: '৳১৮,০০০+'
    },
    highlightSpots: [
      { name: 'Konglak Para Peak', nameBn: 'কংলাক পাহাড় চূড়া', desc: 'Highest point of Sajek with 360-degree views into Mizoram border.' },
      { name: 'Ruilui Para Cloud Deck', nameBn: 'রুইলুই পাড়া ক্লাউড ডেক', desc: 'Wooden eco-resorts overlooking waves of morning sea of clouds.' },
      { name: 'Alutila Mystery Cave & Risang Waterfall', nameBn: 'আলুটিলা গুহা ও রিসাং ঝর্ণা', desc: 'Explored en route via Khagrachhari with blazing bamboo torches.', ticketPrice: '৳৪০' },
      { name: 'Helipad Sunset Point', nameBn: 'হেলিপ্যাড সূর্যাস্ত স্পট', desc: 'Vibrant sunset gatherings with indigenous street snacks.' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Sayedabad / Arambagh / Gabtoli', to: 'Khagrachhari Sadar', fare: '৳৭৫০ (Non-AC) / ৳১,২০০ - ৳১,৬০০ (AC Saintmartin, Hanif, Shyamoli)', duration: '7-8 hrs (Overnight)', tips: 'Take an overnight 10 PM bus to arrive Khagrachhari by 6 AM.' },
      { type: 'Car / Microbus', from: 'Khagrachhari', to: 'Sajek Valley (Chander Gari Open 4x4 Jeep)', fare: '৳৯,০০০ - ৳১১,০০০ (Full Jeep round trip 12 persons) or ৳৯০০/seat shared', duration: '2.5 hrs with Army Escort', tips: 'Must join mandatory military convoy leaving Dighinala at 10:30 AM or 2:30 PM.' }
    ],
    famousFoods: ['Bamboo Chicken (বাঁশ মুরগি) cooked over charcoal', 'Hill Zoom rice & indigenous spicy bhortas', 'Pahari Papaya, sweet pineapples', 'Fresh ginger herbal tea'],
    tipsAndAdvice: [
      'Only Teletalk and Robi/Airtel networks have reliable connectivity; GP can be spotty.',
      'Pre-book wooden cottage resorts at least 2-3 weeks in advance for weekends.',
      'Always keep original NID / Student ID copy handy for Army checkpoints.'
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'
    ],
    badgeColor: 'from-emerald-600 to-sky-700',
    color: '#059669'
  },
  {
    id: 'coxs-bazar',
    name: 'Cox’s Bazar & Marine Drive',
    nameBn: 'কক্সবাজার ও মেরিন ড্রাইভ',
    category: 'outside_dhaka',
    tagline: 'World’s Longest Natural Sea Beach & Sunset Surfing Waves',
    taglineBn: 'বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত ও নীল জলরাশি',
    division: 'Chattogram',
    district: 'Cox’s Bazar',
    distanceFromDhaka: '395 km',
    travelTime: '7-9 hrs (AC Bus / Direct Express Train) or 50 mins Flight',
    bestTimeToVisit: 'November to March (Pleasant breeze and calm crystal tide)',
    estimatedBudget: {
      budget: '৳৪,০০০ - ৳৬,০০০',
      standard: '৳৮,০০০ - ৳১৪,০০০',
      luxury: '৳২২,০০০+'
    },
    highlightSpots: [
      { name: 'Marine Drive Road (80 km Coastal Highway)', nameBn: 'মেরিন ড্রাইভ সড়ক', desc: 'World famous coastal drive nestled between emerald hills and the roaring Bay of Bengal.' },
      { name: 'Inani & Coral Stone Beach', nameBn: 'ইনানী সী বিচ', desc: 'Jagged prehistoric coral stones with crystal clear azure waves.' },
      { name: 'Himchari Hill & Waterfall', nameBn: 'হিমছড়ি ঝর্ণা ও পাহাড়', desc: 'Panoramic hill view deck overlooking the vast Bay of Bengal.', ticketPrice: '৳৫০' },
      { name: 'Laboni & Sugandha Beach', nameBn: 'লাবণী ও সুগন্ধা বিচ', desc: 'Vibrant hub for parasailing, beach quad bikes, and night seashell markets.' }
    ],
    transportOptions: [
      { type: 'Train', from: 'Dhaka Kamalapur Railway Station', to: 'Cox’s Bazar Iconic Railway Station', fare: '৳৬৯৫ (Shovon Chair) / ৳১,৩২৫ (Snigdha AC) / ৳২,৩৮০ (AC Berth)', duration: '8 hrs 15 mins (Cox’s Bazar Express / Parjotok Express)', tips: 'The newly launched direct high-speed railway is the smoothest, scenic ride in BD!' },
      { type: 'Bus', from: 'Dhaka (Arambagh / Panthapath)', to: 'Kolatoli Point', fare: '৳১,১০০ (Non-AC) / ৳২,০০০ - ৳২,৮০০ (Green Line / Desh Travels Sleepers)', duration: '8-9 hrs', tips: 'Sleeper class buses offer fully flat luxury beds for overnight travel.' },
      { type: 'Flight', from: 'Dhaka Hazrat Shahjalal Airport (DAC)', to: 'Cox’s Bazar Airport (CXB)', fare: '৳৪,৫০০ - ৳৮,০০০ one-way (Biman, US-Bangla, Air Astra)', duration: '55 mins', tips: 'Scenic bird’s-eye landing right over the shoreline waves.' }
    ],
    famousFoods: ['Rupchanda & Coral fish BBQ at beach shacks', 'Traditional shutki bhorta & crab masala', 'Jhau Bon restaurant local meals', 'Burmese market dried fruits & tamarind candy'],
    tipsAndAdvice: [
      'Avoid swimming during red flag warnings; listen to life guards.',
      'Rent an open-hood auto (Tomtom) to cruise Marine drive around 4 PM for sunset.',
      'Iconic oyster-shaped railway station is worth exploring for photography.'
    ],
    image: 'https://mybestfly.com/_next/image?url=https%3A%2F%2Fpub-5e439b5f38ca499ea1969bcc1d71b180.r2.dev%2Fmybestfly_assets%2Fassets%2Fblogs%2Fbest-places-to-visit-in-coxs-bazar%2Ffeatured-1783511674.webp&w=3840&q=75',
    images: [
      'https://mybestfly.com/_next/image?url=https%3A%2F%2Fpub-5e439b5f38ca499ea1969bcc1d71b180.r2.dev%2Fmybestfly_assets%2Fassets%2Fblogs%2Fbest-places-to-visit-in-coxs-bazar%2Ffeatured-1783511674.webp&w=3840&q=75',
      'https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogC271PhTlRXvHUt9WcvtXXVaRY_F33pEB.png',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e2/f8/43/longest-sea-beach-in.jpg?w=1100&h=-1&s=1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSCCG3jdtIkgBXFjjnf9zoE8n7GMPw3X5DLJurHVUkttEsPRrFySoHGXc&s=10',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNt5kwAgaQp3Ux8Rv_PMrLsB6usZ8HLdmFDa81tjFRxk5XQBrYbbHbhQ&s=10'
    ],
    badgeColor: 'from-blue-600 to-teal-500',
    color: '#0284C7'
  },
  {
    id: 'sreemangal',
    name: 'Sreemangal & Lawachara Forest',
    nameBn: 'শ্রীমঙ্গল ও লাউয়াছড়া জাতীয় উদ্যান',
    category: 'outside_dhaka',
    tagline: 'The Tea Capital of Bangladesh & Tropical Rainforest Sanctuary',
    taglineBn: 'চা কন্যা ও চিরসবুজ রেইনফরেস্টের স্নিগ্ধ রূপকথা',
    division: 'Sylhet',
    district: 'Moulvibazar',
    distanceFromDhaka: '175 km',
    travelTime: '4-5 hrs (Train or AC Bus)',
    bestTimeToVisit: 'June to February (Monsoon for lush vibrant green leaves, Winter for cool mist)',
    estimatedBudget: {
      budget: '৳৩,০০০ - ৳৫,০০০',
      standard: '৳৬,০০০ - ৳১০,০০০',
      luxury: '৳১৮,০০০+'
    },
    highlightSpots: [
      { name: 'Lawachara National Park', nameBn: 'লাউয়াছড়া জাতীয় উদ্যান', desc: 'Home to endangered Western Hoolock Gibbons, exotic birds, and scenic railway tracks.', ticketPrice: '৳৫০' },
      { name: 'Madhobpur Lake & Lotus Haven', nameBn: 'মাধবপুর লেক', desc: 'Surrounded by undulating tea hillocks draped in wild blue water lilies.' },
      { name: 'Baikka Beel Bird Sanctuary', nameBn: 'বাইক্কা বিল পাখির অভয়ারণ্য', desc: 'Massive wetland watchtower for migratory waterfowl.' },
      { name: 'Nurjahan & Finlay Tea Estates', nameBn: 'চা বাগান গ্যালারি', desc: 'Endless carpets of emerald green tea gardens with shaded rubber trees.' }
    ],
    transportOptions: [
      { type: 'Train', from: 'Kamalapur, Dhaka', to: 'Sreemangal Railway Station', fare: '৳৩২০ (Shovon) / ৳৬১০ (Snigdha AC)', duration: '4.5 hrs (Parabat / Jayantika / Upaban Express)', tips: 'Super comfortable day or night ride passing scenic countryside.' },
      { type: 'Bus', from: 'Sayedabad / Fakirapool', to: 'Sreemangal Chowmouhoni', fare: '৳৫০০ - ৳৮০০ (Ena / Shyamoli)', duration: '4-5 hrs', tips: 'Regular departures every 30 minutes.' }
    ],
    famousFoods: ['Nilkantha Tea Cabin Seven-Layered Colorful Tea (সাত রঙের চা)', 'Pansi & Kutum Bari authentic deshi duck curry and shatkora beef', 'Sweet pineapples of Sreemangal (Kalandor/Honey)', 'Fresh tea leaf pakoras'],
    tipsAndAdvice: [
      'Hire a CNG auto-rickshaw for ৳১,৫০০ - ৳২,০০০ for the full day sightseeing circuit.',
      'Carry mosquito repellent and leech socks when hiking deep into Lawachara trails.',
      'Buy original BTRI garden fresh Orange Pekoe loose tea to take home.'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-green-700 to-emerald-900',
    color: '#047857'
  },
  {
    id: 'sundarbans',
    name: 'The Sundarbans Mangrove Forest',
    nameBn: 'সুন্দরবন ম্যানগ্রোভ বন',
    category: 'outside_dhaka',
    tagline: 'UNESCO World Heritage & Home of the Royal Bengal Tiger',
    taglineBn: 'বিশ্বের বৃহত্তম ম্যানগ্রোভ বন ও রয়েল বেঙ্গল টাইগারের আবাসভূমি',
    division: 'Khulna',
    district: 'Bagerhat / Khulna / Satkhira',
    distanceFromDhaka: '290 km (to Mongla / Khulna)',
    travelTime: '5-6 hrs to Mongla, then Cruise Ship',
    bestTimeToVisit: 'November to February (Calm river waters and crisp forest weather)',
    estimatedBudget: {
      budget: '৳৭,০০০ - ৳১০,০০০ (3D2N Cruise)',
      standard: '৳১২,০০০ - ৳১৮,০০০ (Deluxe Ship)',
      luxury: '৳২৫,০০০+ (Luxury Cabin Vessel)'
    },
    highlightSpots: [
      { name: 'Katamka Tiger Point & Beach', nameBn: 'কটকা সমুদ্র সৈকত ও ওয়াচটাওয়ার', desc: 'Pristine deer grazing fields, mangrove trails, and tiger paw tracks.' },
      { name: 'Kachikhali Wildlife Haven', nameBn: 'কচিখালী বন্যপ্রাণী অভয়ারণ্য', desc: 'Dense sundari trees, estuarine crocodiles, and spotted deer.' },
      { name: 'Karamjal Eco Park & Crocodile Breeding', nameBn: 'করমজল ইকো ট্যুরিজম কেন্দ্র', desc: 'Wooden walkway through mangrove canopy, turtle & croc farm.', ticketPrice: '৳৪০' },
      { name: 'Hiron Point & Nilkamal River', nameBn: 'হিরণ পয়েন্ট', desc: 'Breathtaking birdwatching channels deep inside the southern delta.' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Sayedabad / Gabtoli, Dhaka', to: 'Mongla Port / Khulna', fare: '৳৭০০ - ৳১,৪০০ (Direct AC Buses via Padma Bridge)', duration: '4.5 - 5.5 hrs', tips: 'Padma bridge cut down journey time from 10 hrs to under 5 hours!' },
      { type: 'Train', from: 'Dhaka Kamalapur', to: 'Khulna Railway Station', fare: '৳৬৫০ - ৳১,৩০০ (Sundarban Express)', duration: '6.5 hrs', tips: 'Comfortable night or early morning journey.' }
    ],
    famousFoods: ['Sundarbans Pure Moual Honey (খাঁটি সুন্দরবনের মধু)', 'Fresh Parshe, Chingri (Giant Tiger Prawn) & Bhetki fish', 'Khulna Chuknagar special Abbas Hotel Chui Jhal Mutton (চুইঝাল খাসির মাংস)'],
    tipsAndAdvice: [
      'Travel inside Sundarbans must be booked via an authorized forest cruise operator with armed forest guards.',
      'Zero plastic pollution policy strictly enforced by the Forest Department.',
      'No mobile network in deep mangrove waters; prepare for a refreshing digital detox.'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-amber-800 to-emerald-900',
    color: '#15803D'
  },
  {
    id: 'saint-martins-island',
    name: 'Saint Martin’s Island & Chera Dwip',
    nameBn: 'সেন্টমার্টিন দ্বীপ ও ছেঁড়া দ্বীপ',
    category: 'outside_dhaka',
    tagline: 'Coral Paradise, Turqoise Waters & Shady Coconut Groves',
    taglineBn: 'বাংলাদেশের একমাত্র প্রবাল দ্বীপ ও নীল জলের হাতছানি',
    division: 'Chattogram',
    district: 'Cox’s Bazar (Teknaf)',
    distanceFromDhaka: '440 km',
    travelTime: '10-12 hrs (Bus + Sea Cruiser Ship)',
    bestTimeToVisit: 'November to February (Ship operations season)',
    estimatedBudget: {
      budget: '৳৫,০০০ - ৳৭,৫০০',
      standard: '৳৯,০০০ - ৳১৫,০০০',
      luxury: '৳২৩,০০০+'
    },
    highlightSpots: [
      { name: 'Chera Dwip Coral Reef', nameBn: 'ছেঁড়া দ্বীপ', desc: 'Detached volcanic coral islet accessible during low tide or motor boat.', ticketPrice: '৳২০০ boat' },
      { name: 'West Beach Sunset Point', nameBn: 'পশ্চিম সৈকত সূর্যাস্ত', desc: 'Famous for tranquil golden sand, bioluminescent waves, and starry skies.' },
      { name: 'Coconut Groves (Narikel Jinjira)', nameBn: 'নারিকেল জিঞ্জিরা বাগান', desc: 'Sip fresh sweet green coconut water directly under tall palms.' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Dhaka', to: 'Teknaf Damdamia Ghat / Cox’s Bazar', fare: '৳১,২০০ - ৳২,২০০', duration: '9-10 hrs', tips: 'Overnight buses reach ship departure terminals early in the morning.' },
      { type: 'Launch', from: 'Teknaf / Cox’s Bazar', to: 'Saint Martin Jetty', fare: '৳১,৫০০ - ৳৩,০০০ (Round-trip cruise tickets: Keari Sindbad, Bay One)', duration: '2.5 hrs on water', tips: 'Flocks of migratory sea gulls fly alongside the ships all the way!' }
    ],
    famousFoods: ['Fresh sweet green coconuts (ডাবের পানি)', 'Grilled Koral, Rupchanda, Lobster and King Fish', 'Traditional local sea fish dry curry'],
    tipsAndAdvice: [
      'Check current environmental tourism regulations regarding overnight stay quotas before booking.',
      'Do not touch or collect live coral rocks; keep the island clean.',
      'Electricity is powered by solar and generator in eco-resorts.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-teal-500 to-cyan-700',
    color: '#0D9488'
  },
  {
    id: 'bandarban-nilgiri',
    name: 'Bandarban & Nilgiri Peak',
    nameBn: 'বান্দরবান ও নীলগিরি হিল রিসোর্ট',
    category: 'outside_dhaka',
    tagline: 'Misty Cloud Summits, Golden Temples & Roaring Cascades',
    taglineBn: 'পাহাড়ের চূড়ায় মেঘের দেশে স্বর্ণ মন্দির ও বগা লেক',
    division: 'Chattogram',
    district: 'Bandarban',
    distanceFromDhaka: '340 km',
    travelTime: '8-9 hrs (AC Bus)',
    bestTimeToVisit: 'September to March (Crisp mountain air & cascading waterfalls)',
    estimatedBudget: {
      budget: '৳৪,০০০ - ৳৬,৫০০',
      standard: '৳৮,০০০ - ৳১৩,০০০',
      luxury: '৳২০,০০০+'
    },
    highlightSpots: [
      { name: 'Nilgiri Hill Resort (2,200 ft)', nameBn: 'নীলগিরি হিল পয়েন্ট', desc: 'Touch floating clouds from the military-maintained mountain viewpoint.', ticketPrice: '৳১০০' },
      { name: 'Nafakhum & Amiakhum Falls', nameBn: 'নাফাখুম ও অমিয়াখুম জলপ্রপাত', desc: 'Known as the Niagara of Bangladesh in remote Thanchi.' },
      { name: 'Buddha Dhatu Jadi (Golden Temple)', nameBn: 'স্বর্ণ মন্দির', desc: 'Largest Theravada Buddhist temple with glittering stupa in Balaghata.', ticketPrice: '৳৫০' },
      { name: 'Nilachal (Tiger Hill)', nameBn: 'নীলাচল', desc: 'Stunning viewpoint overlooking Bandarban city and mountain ranges.', ticketPrice: '৳৬০' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Dhaka (Arambagh / Sayedabad)', to: 'Bandarban Sadar', fare: '৳৮০০ (Non-AC) / ৳১,৫০০ - ৳১,৮০০ (Saintmartin Hyundai / Desh Travels AC)', duration: '8 hrs', tips: 'Overnight bus arrives early around 6:30 AM.' },
      { type: 'Car / Microbus', from: 'Bandarban Sadar', to: 'Nilgiri / Chimbuk (Chander Gari)', fare: '৳৫,৫০০ - ৳৮,০০০ (Full Jeep for 8-10 people)', duration: '2 hrs hill climb', tips: 'Winding scenic mountain road with dramatic cloud cliffs.' }
    ],
    famousFoods: ['Marma traditional tribal meals at Thanchi', 'Bamboo roasted mutton and wild herbs', 'Organic Hill bananas and dragon fruit', 'Pahari red sticky rice'],
    tipsAndAdvice: [
      'Keep your original National ID (NID) and 4-5 photocopies ready for registration at law enforcement checkpoints.',
      'Book Nilgiri cottages months in advance via Army HQ if planning to sleep at the summit.',
      'Wear sturdy trekking shoes with excellent grip.'
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-indigo-700 to-purple-900',
    color: '#4F46E5'
  },
  {
    id: 'sylhet-ratargul-jaflong',
    name: 'Ratargul Swamp Forest & Jaflong',
    nameBn: 'রাতারগুল সোয়াম্প ফরেস্ট ও জাফলং',
    category: 'outside_dhaka',
    tagline: 'Amazon of Bangladesh & Crystal Waters of Dawki River',
    taglineBn: 'বাংলার আমাজন ও পিয়াইন নদীর স্ফটিক স্বচ্ছ জলধারা',
    division: 'Sylhet',
    district: 'Sylhet (Gowainghat)',
    distanceFromDhaka: '240 km',
    travelTime: '5-6 hrs (Train / Bus)',
    bestTimeToVisit: 'Monsoon (July to October) for submerged forest canopies',
    estimatedBudget: {
      budget: '৳৩,৫০০ - ৳৫,৫০০',
      standard: '৳৭,০০০ - ৳১১,০০০',
      luxury: '৳১৮,০০০+'
    },
    highlightSpots: [
      { name: 'Ratargul Freshwater Swamp Forest', nameBn: 'রাতারগুল সোয়াম্প ফরেস্ট', desc: 'Submerged trees navigation on small wooden dinghy boats.', ticketPrice: '৳৮০০ - ৳১,০০০ per boat (4 people)' },
      { name: 'Jaflong Zero Point & Stone Beds', nameBn: 'জাফলং ও পিয়াইন নদী', desc: 'Pristine emerald water, tea hills, and Indian hanging bridge vista.' },
      { name: 'Bichanakandi River Beds', nameBn: 'বিছানাকান্দি', desc: 'Where the roaring waterfall mountains of Meghalaya meet tranquil riverbed stones.' },
      { name: 'Hazrat Shah Jalal Dargah', nameBn: 'হযরত শাহজালাল (রহঃ) মাজার', desc: 'Historic 700-year-old spiritual sanctuary in Sylhet Sadar.' }
    ],
    transportOptions: [
      { type: 'Train', from: 'Dhaka Kamalapur', to: 'Sylhet Railway Station', fare: '৳৩৭৫ (Shovon) / ৳৭২০ (Snigdha AC)', duration: '6 hrs (Upaban / Kalni / Parabat Express)', tips: 'The train route passes scenic Sreemangal tea estates and hills.' },
      { type: 'Bus', from: 'Sayedabad / Fakirapool', to: 'Sylhet Kadamtali', fare: '৳৬০০ - ৳১,২০০ (Green Line, Hanif, Shyamoli)', duration: '5.5 hrs', tips: 'Departs every 20 mins throughout day and night.' }
    ],
    famousFoods: ['Pansi & Pach Bhai Restaurant Shatkora Beef (সাতকড়া গরুর মাংস)', 'Famous Sylheti Akhni Polao', 'Fresh river Boal & Chitol fish curries', 'Panchbhai 30-item Bhorta sampler'],
    tipsAndAdvice: [
      'For Ratargul, hire life vests at the boat ghat before entering the lake.',
      'Visit Jaflong early morning to witness crystal clear water reflections.',
      'Raincoat and waterproof phone pouches are essential during monsoon.'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-emerald-700 to-green-900',
    color: '#059669'
  },
  {
    id: 'tanguar-haor',
    name: 'Tanguar Haor & Shimul Bagan',
    nameBn: 'টাঙ্গুয়ার হাওর ও শিমুল বাগান',
    category: 'outside_dhaka',
    tagline: 'Endless Inland Seas, Deluxe Houseboats & Red Shimul Blooms',
    taglineBn: 'নীল দিগন্তের জলরাশি, প্রিমিয়াম হাউসবোট ও রক্তিম শিমুল বাগান',
    division: 'Sylhet',
    district: 'Sunamganj (Tahirpur)',
    distanceFromDhaka: '290 km',
    travelTime: '7-8 hrs (Overnight Bus to Sunamganj + Bike/Trawler)',
    bestTimeToVisit: 'Monsoon (July-Oct for Houseboat cruises) & Spring (Feb for Shimul blossoms)',
    estimatedBudget: {
      budget: '৳৪,৫০০ - ৳৭,০০০',
      standard: '৳৯,০০০ - ৳১৫,০০০ (Deluxe Houseboat with meals)',
      luxury: '৳২২,০০০+ (Premium AC Houseboat Suite)'
    },
    highlightSpots: [
      { name: 'Tanguar Haor Watchtower & Blue Water', nameBn: 'টাঙ্গুয়ার হাওর ওয়াচটাওয়ার', desc: 'Crystal clear swimming lagoon surrounded by distant Meghalaya hills.' },
      { name: 'Jadukata River & Barek Tila', nameBn: 'জাদুকাটা নদী ও বারিক্কা টিলা', desc: 'Breathtaking blue water winding through white sandbanks and lush hills.' },
      { name: 'Shimul Bagan (Red Silk Cotton Forest)', nameBn: 'শিমুল বাগান', desc: 'Vast forest bursting into fiery red blooms across the horizon in February.', ticketPrice: '৳২০' },
      { name: 'Niladri Lake (Shahid Siraj Lake)', nameBn: 'নীলাদ্রি লেক (চুনাপাথর হ্রদ)', desc: 'Striking turquoise limestone quarry lake nicknamed the Blue Pearl.' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Sayedabad / Mohakhali', to: 'Sunamganj Sadar', fare: '৳৭০০ - ৳১,২০০ (Mamun, Shyamoli)', duration: '6.5 hrs', tips: 'Take overnight 10 PM bus, arrive in Sunamganj at 5 AM.' },
      { type: 'Launch', from: 'Sunamganj / Tahirpur Ghat', to: 'Haor Circuit (Deluxe Houseboat)', fare: '৳৬,৫০০ - ৳১২,০০০ per person (2D1N all-inclusive food & stay)', duration: '2 Days sailing', tips: 'Living on a wooden houseboat with 5 chef-prepared meals is an unforgettable luxury.' }
    ],
    famousFoods: ['Haor fresh sweet water fish (Baal, Rui, Foli)', 'Deshi Duck Curry with boiled rice', 'Sunamganj special homemade Rasmalai', 'Fresh river shrimp bhuna'],
    tipsAndAdvice: [
      'Wear life jackets when swimming in the haor water; it is deceptively deep.',
      'Carry power banks as electricity on non-luxury boats is limited to generators.',
      'Monsoon houseboat bookings sell out months in advance for weekends.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-blue-700 to-cyan-600',
    color: '#0284C7'
  },
  {
    id: 'kuakata-beach',
    name: 'Kuakata Daughter of the Ocean',
    nameBn: 'কুয়াকাটা সাগরকন্যা',
    category: 'outside_dhaka',
    tagline: 'The Rare Shore Where You Can Watch Both Sunrise and Sunset',
    taglineBn: 'একই সৈকতে দাঁড়িয়ে সূর্যোদয় ও সূর্যাস্ত দেখার অপূর্ব লীলাভূমি',
    division: 'Barishal',
    district: 'Patuakhali',
    distanceFromDhaka: '280 km',
    travelTime: '5-6 hrs (via Padma & Payra Bridges) or Overnight Luxury Launch',
    bestTimeToVisit: 'October to March (Gentle sea breeze and pristine beach)',
    estimatedBudget: {
      budget: '৳৩,৫০০ - ৳৫,৫০০',
      standard: '৳৭,০০০ - ৳১১,০০০',
      luxury: '৳১৮,০০০+'
    },
    highlightSpots: [
      { name: 'Gangamati Red Crab Island & Sunrise Point', nameBn: 'গঙ্গামতির চর ও লাল কাঁকড়ার দ্বীপ', desc: 'Millions of red crabs dancing on golden sands during morning dawn.' },
      { name: 'Jhau Bon & Sunset Point', nameBn: 'ঝাউবন ও সূর্যাস্ত পয়েন্ট', desc: 'Whispering pine-like Jhau trees framing the sinking evening sun.' },
      { name: 'Rakhine Buddhist Well & Seema Temple', nameBn: 'রাখাইন প্রাচীন কুয়া ও সীমা মন্দির', desc: 'Centuries-old historic wooden boat and colossal bronze Buddha statue.', ticketPrice: '৳২০' },
      { name: 'Fatrar Bon (Mangrove extension of Sundarbans)', nameBn: 'ফাতরার বন ম্যানগ্রোভ', desc: 'Take a motor trawler to explore untouched mangrove wilderness.', ticketPrice: '৳৩০০ boat' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Gabtoli / Sayedabad, Dhaka', to: 'Kuakata Zero Point', fare: '৳৮০০ - ৳১,৫০০ (Sakura, Hanif, Shohag AC)', duration: '5.5 hrs direct', tips: 'With the Padma and Payra bridges open, there are zero ferry crossings!' },
      { type: 'Launch', from: 'Sadarghat, Dhaka', to: 'Barishal / Patuakhali Launch Terminal', fare: '৳৫০০ (Deck) / ৳১,৫০০ (Single Cabin) / ৳২,৮০০ (Double AC Cabin)', duration: '8 hrs luxury river cruise', tips: 'Experience world-class multi-deck passenger launch cruise under starry skies.' }
    ],
    famousFoods: ['Live grilled crab and pomfret at night beach shacks', 'Local Hilsa curry with steamed rice', 'Rakhine hand-crafted coconut sweets & dried snacks'],
    tipsAndAdvice: [
      'Rent a local motorbike with guide for ৳৮০০ - ৳১,০০০ to tour all 8 points in 4 hours.',
      'Wake up at 5:00 AM to catch sunrise at Gangamati char.',
      'Beach is flatter and harder than Cox’s Bazar; excellent for cycling.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-amber-600 to-orange-700',
    color: '#D97706'
  },
  {
    id: 'rangamati-kaptai',
    name: 'Rangamati & Kaptai Lake Cruise',
    nameBn: 'রাঙ্গামাটি ও কাপ্তাই লেক ক্রুজ',
    category: 'outside_dhaka',
    tagline: 'Blue Hill Lakes, Hanging Bridges & Chakma Indigenous Culture',
    taglineBn: 'পাহাড় ঘেরা নীল হ্রদ, ঝুলন্ত সেতু ও আদিবাসী সংস্কৃতি',
    division: 'Chattogram',
    district: 'Rangamati',
    distanceFromDhaka: '310 km',
    travelTime: '7-8 hrs (AC Bus)',
    bestTimeToVisit: 'September to March (Crisp lake water and cool mountain mist)',
    estimatedBudget: {
      budget: '৳৩,৮০০ - ৳৬,০০০',
      standard: '৳৭,৫০০ - ৳১২,০০০',
      luxury: '৳১৯,০০০+'
    },
    highlightSpots: [
      { name: 'Kaptai Lake Motorboat Cruise', nameBn: 'কাপ্তাই লেক বোট ক্রুজ', desc: 'Largest artificial lake in South Asia flanked by jungle-clad hills.', ticketPrice: '৳১,৫০০ - ৳২,৫০০ / boat full day' },
      { name: 'Shuvolong Waterfall', nameBn: 'শুভলং ঝর্ণা', desc: 'Dramatic vertical cliff drop emptying directly into the lake basin.', ticketPrice: '৳৩০' },
      { name: 'Rangamati Hanging Bridge (Jhulonto Setu)', nameBn: 'ঝুলন্ত সেতু', desc: 'Iconic suspension bridge linking green hillocks over the azure water.', ticketPrice: '৳২০' },
      { name: 'Rajban Vihara', nameBn: 'রাজবন বিহার', desc: 'Renowned international Buddhist monastery complex of Sadhanananda Mahathero.' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Sayedabad / Fakirapool, Dhaka', to: 'Rangamati Old Bus Stand', fare: '৳৮০০ (Non-AC) / ৳১,৪০০ - ৳১,৮০০ (Hanif, Shyamoli, Saintmartin AC)', duration: '7.5 hrs', tips: 'Overnight buses reach in time for an early morning lake breakfast.' },
      { type: 'Car / Microbus', from: 'Chattogram City', to: 'Kaptai / Rangamati', fare: '৳৩,০০০ - ৳৪,৫০০ (Rental Car)', duration: '2 hrs', tips: 'Scenic winding hill highway through rainforest reserves.' }
    ],
    famousFoods: ['Tuk Tuk Kitchen bamboo sticky rice & lake fish', 'Pahari chapila and kechki fish curry', 'Wild bamboo shoot stir fry', 'Kajbadam (Cashew nut) treats'],
    tipsAndAdvice: [
      'Kayaking in Kaptai lake (around Berannya or Polwel park) is an absolute must-try.',
      'Check out indigenous handloom textile shops near the hanging bridge for tribal shawls.',
      'Foreign travelers must obtain prior clearance from DC office or local authority.'
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-sky-700 to-indigo-800',
    color: '#0369A1'
  },
  {
    id: 'bagerhat-sixty-dome',
    name: 'Bagerhat Sixty Dome Mosque',
    nameBn: 'বাগেরহাট ষাট গম্বুজ মসজিদ',
    category: 'outside_dhaka',
    tagline: 'UNESCO World Heritage City of Khan Jahan Ali',
    taglineBn: 'ইউনেস্কো বিশ্ব ঐতিহ্য ও খান জাহান আলী (রঃ)-এর ঐতিহাসিক স্থাপত্য',
    division: 'Khulna',
    district: 'Bagerhat',
    distanceFromDhaka: '185 km via Padma Bridge',
    travelTime: '3.5 - 4.5 hrs',
    bestTimeToVisit: 'November to February (Pleasant winter sunshine)',
    estimatedBudget: {
      budget: '৳২,০০০ - ৳৩,৫০০',
      standard: '৳৪,৫০০ - ৳৮,০০০',
      luxury: '৳১২,০০০+'
    },
    highlightSpots: [
      { name: 'Sixty Dome Mosque (Shat Gombuj Masjid)', nameBn: 'ষাট গম্বুজ মসজিদ', desc: '15th-century terracotta architectural masterpiece with 77 domes and 60 pillars.', ticketPrice: '৳৩০ (Local), ৳২০০ (Foreigner)' },
      { name: 'Shrine of Khan Jahan Ali & Dighi', nameBn: 'খান জাহান আলীর মাজার ও দিঘি', desc: 'Historic stone tomb beside massive freshwater lake with friendly sacred marsh crocodiles.' },
      { name: 'Nine Dome Mosque & Singar Mosque', nameBn: 'নয় গম্বুজ ও সিঙ্গাইর মসজিদ', desc: 'Ancient medieval sultanate brick prayer sanctuaries.' }
    ],
    transportOptions: [
      { type: 'Bus', from: 'Sayedabad, Dhaka', to: 'Bagerhat Sadar / Shat Gombuj Gate', fare: '৳৫৫০ - ৳৯৫০ (Direct AC/Non-AC buses via Padma Bridge)', duration: '3.5 - 4 hrs', tips: 'Quick expressway connection has made Bagerhat an easy day trip!' },
      { type: 'Train', from: 'Dhaka', to: 'Khulna, then 40 min local bus to Bagerhat', fare: '৳৬৫০ (Train) + ৳৫০ (Bus)', duration: '5.5 hrs', tips: 'Combine with Khulna city tour.' }
    ],
    famousFoods: ['Bagerhat sweet coconut water and narikel naru', 'Rupsha river fresh golda chingri (giant prawn)', 'Khulna signature chui jhal beef'],
    tipsAndAdvice: [
      'Archaeological museum on site exhibits artifacts from the Khalifatabad Sultanate.',
      'Respect sacred norms when visiting the shrine pond.',
      'Photography lovers should capture the interior arched colonnade in morning light.'
    ],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-amber-700 to-yellow-800',
    color: '#B45309'
  },
  {
    id: 'tetulia-panchagarh',
    name: 'Tetulia & Panchagarh (Kanchenjunga View)',
    nameBn: 'তেঁতুলিয়া ও পঞ্চগড় (কাঞ্চনজঙ্ঘা দর্শন)',
    category: 'outside_dhaka',
    tagline: 'Northern Frontier: Flatland Tea Gardens & Himalayan Snow Peak Vista',
    taglineBn: 'উত্তরের সীমান্ত: সমতলের চা বাগান ও বরফাবৃত কাঞ্চনজঙ্ঘা দর্শন',
    division: 'Rangpur',
    district: 'Panchagarh (Tetulia)',
    distanceFromDhaka: '450 km',
    travelTime: '9-11 hrs (Direct AC Sleeper / Express Train)',
    bestTimeToVisit: 'Mid-October to November (When the Himalayan skies are crystal clear)',
    estimatedBudget: {
      budget: '৳৪,০০০ - ৳৬,৫০০',
      standard: '৳৭,৫০০ - ৳১২,০০০',
      luxury: '৳১৮,০০০+'
    },
    highlightSpots: [
      { name: 'Tetulia Dak Bungalow Mahananda River View', nameBn: 'তেঁতুলিয়া ডাকবাংলো ও মহানন্দা নদী', desc: 'Where Mount Kanchenjunga shines in pink morning glow across the Indian border.' },
      { name: 'Flatland Organic Tea Estates', nameBn: 'সমতলের অর্গানিক চা বাগান', desc: 'Pioneering organic green tea gardens stretching across plain soils.' },
      { name: 'Banglabandha Zero Point & Land Port', nameBn: 'বাংলাবান্ধা জিরো পয়েন্ট', desc: 'Quadri-country international border crossing point between BD, India, Nepal, and Bhutan.' },
      { name: 'Rocks Museum (Panchagarh Govt College)', nameBn: 'রকস মিউজিয়াম', desc: 'Rare archaeological geological collection of ancient Himalayan stones and fossils.', ticketPrice: '৳২০' }
    ],
    transportOptions: [
      { type: 'Train', from: 'Dhaka Kamalapur', to: 'Panchagarh Bir Muktijoddha Sirajul Islam Station', fare: '৳৬৫০ (Shovon) / ৳১,২৫০ (Snigdha AC)', duration: '9 hrs (Panchagarh Express / Drutojan Express)', tips: 'Panchagarh Express is one of the fastest direct semi-high-speed intercity trains in BD.' },
      { type: 'Bus', from: 'Gabtoli / Kalyanpur', to: 'Tetulia Bazar', fare: '৳১,১০০ - ৳২,০০০ (Hanif, Nabil, Shyamoli AC)', duration: '10-11 hrs', tips: 'Direct sleeper buses drop directly at Tetulia without changing in Panchagarh Sadar.' }
    ],
    famousFoods: ['Tetulia pure organic green tea', 'Mahananda river fresh small fish (batashi, bele)', 'Banglabandha spicy highway paratha & beef curry', 'Local deshi curd & molasses (gur)'],
    tipsAndAdvice: [
      'Peak Kanchenjunga visibility requires completely cloudless, post-monsoon autumn skies (late Oct - Nov).',
      'Wake up before 5:45 AM and head to Tetulia Dakbangla view deck for morning golden hour.',
      'Carry warm clothing as northern winter nights get cold.'
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    badgeColor: 'from-blue-800 to-indigo-950',
    color: '#1E40AF'
  }
];

export const FAQS = [
  {
    q: '“কোথায় যাবো?” (Kothay Jabo) কীভাবে কাজ করে?',
    a: 'প্রথমে ঠিক করুন আপনি ঢাকার ভেতরে নাকি ঢাকার বাইরে ঘুরতে চান। এরপর "চাকা ঘোরান" (Spin the Wheel) বাটনে ক্লিক করলেই আধুনিক অ্যানিমেশনের মাধ্যমে একটি চমকপ্রদ পর্যটন স্পট নির্বাচিত হবে। আপনি স্পটটির বিস্তারিত দূরত্ব, ভাড়ার হিসাব, খরচ ও আকর্ষণীয় স্থান দেখতে পাবেন।'
  },
  {
    q: 'এখানে দেখানো যাতায়াত খরচ কি নির্ভরযোগ্য?',
    a: 'হ্যাঁ! ২০২৪-২০২৬ সালের বর্তমান বাস, ট্রেন, লঞ্চ ও সিএনজির বাস্তব ভাড়ার গড় তালিকা নিয়ে আমাদের ডেটা তৈরি করা হয়েছে। সিজন বা ছুটির দিনে রিসোর্ট বা টিকিটের দাম কিছুটা কম-বেশি হতে পারে।'
  },
  {
    q: 'আমি কি নিজের পছন্দের বাজেট বা সময় অনুযায়ী ফিল্টার করতে পারি?',
    a: 'অবশ্যই! আমাদের এক্সপ্লোর সেকশনে গিয়ে আপনি এলাকা (ঢাকা/ঢাকার বাইরে), বিভাগ এবং বাজেট অনুযায়ী সব পর্যটন স্পট ব্রাউজ ও সার্চ করতে পারবেন।'
  },
  {
    q: 'পদ্মা সেতু বা নতুন কক্সবাজার এক্সপ্রেস ট্রেনের আপডেট কি এতে আছে?',
    a: 'একদম! নতুন ঢাকা-কক্সবাজার আইকনিক এক্সপ্রেস ট্রেন, পদ্মা সেতু হয়ে মাওয়া ও সুন্দরবন রুটের এক্সপ্রেস বাস রুটসহ সকল আধুনিক ট্রাভেল আপডেট এই প্ল্যাটফর্মে যুক্ত রয়েছে।'
  }
];
