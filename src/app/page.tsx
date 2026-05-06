"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Leaf, MessageSquare, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "About",          id: "#about"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Casa Flores"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "radial-gradient"}}
      title="Authentic Mexican Flavors in Stockton"
      description="Casual eatery serving traditional Mexican dishes, all-day breakfast, and our famous house margaritas. Family-owned since our founding."
      testimonials={[
        {
          name: "Michelle P.",          handle: "@michelle",          testimonial: "The service is truly amazing, everyone is kind, welcoming, and attentive. The salsa is always so good!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mangal-salad-decorated-with-scallion-basil-leaves_140725-7972.jpg?_wi=1",          imageAlt: "authentic mexican restaurant interior"},
        {
          name: "Shellie G.",          handle: "@shellieg",          testimonial: "Food was delicious and tasty. Ordered the combo, it was warm and not salty or oily.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-tender-parisian-girl-stylish-outfit-sends-air-kiss-portrait-young-woman-with-expressive-look_197531-12004.jpg?_wi=1",          imageAlt: "authentic mexican restaurant interior"},
        {
          name: "Amelia R.",          handle: "@amelia",          testimonial: "Been coming here for years, always have a great experience with authentic flavors.",          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-women-eating-together_23-2149061571.jpg?_wi=1",          imageAlt: "authentic mexican restaurant interior"},
        {
          name: "David L.",          handle: "@davidl",          testimonial: "Excellent dinner place, great flavor and the owners are always on site.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg?_wi=1",          imageAlt: "authentic mexican restaurant interior"},
        {
          name: "Sarah K.",          handle: "@sarahk",          testimonial: "Love the atmosphere, perfect for a casual lunch after a busy day.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-side-view_23-2149872410.jpg?_wi=1",          imageAlt: "authentic mexican restaurant interior"},
      ]}
      buttons={[
        {
          text: "View Menu",          href: "#menu"},
        {
          text: "Order Online",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/mangal-salad-decorated-with-scallion-basil-leaves_140725-7972.jpg?_wi=2"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/delicious-pita-near-meal-vegetables_23-2148132004.jpg",          alt: "Delicious pita near meal"},
        {
          src: "http://img.b2bpic.net/free-photo/top-view-appetizing-pozole-bowl_23-2149248560.jpg",          alt: "Appetizing pozole bowl"},
        {
          src: "http://img.b2bpic.net/free-photo/mexican-meal_23-2148159765.jpg",          alt: "Traditional Mexican meal"},
        {
          src: "http://img.b2bpic.net/free-photo/hand-holding-cup-garnish-with-nacho-near-mexican-food_23-2148181569.jpg",          alt: "Hand holding garnish"},
        {
          src: "http://img.b2bpic.net/free-photo/people-enjoying-mexican-barbecue_23-2151000309.jpg",          alt: "People enjoying barbecue"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Authentic Recipes"},
        {
          type: "text",          text: "Family Owned"},
        {
          type: "text",          text: "Fresh Ingredients"},
        {
          type: "text",          text: "Stockton Favorite"},
        {
          type: "text",          text: "Daily Specials"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="A Legacy of Good Taste"
      description="At Casa Flores, we believe in fresh ingredients, family recipes, and welcoming our neighbors like our own family. Proudly serving the Stockton community."
      metrics={[
        {
          value: "15+",          title: "Years Serving"},
        {
          value: "870+",          title: "Happy Reviews"},
        {
          value: "4.3",          title: "Google Rating"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-tender-parisian-girl-stylish-outfit-sends-air-kiss-portrait-young-woman-with-expressive-look_197531-12004.jpg?_wi=2"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          title: "House Margaritas",          subtitle: "Hand-crafted cocktails",          category: "Drinks",          value: "Freshly made"},
        {
          id: "f2",          title: "Traditional Menudo",          subtitle: "Authentic comfort food",          category: "Soup",          value: "Slow cooked"},
        {
          id: "f3",          title: "Signature Combos",          subtitle: "Enchiladas & Rellenos",          category: "Entrees",          value: "Best seller"},
      ]}
      title="Why Neighbors Love Us"
      description="Experience the difference of family-owned, authentic cooking."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Beef Enchilada & Chile Relleno",          price: "$18",          variant: "Popular",          imageSrc: "http://img.b2bpic.net/free-photo/clipboard-tasty-mexican-dishes_23-2147740802.jpg"},
        {
          id: "p2",          name: "House Margarita",          price: "$12",          variant: "Classic",          imageSrc: "http://img.b2bpic.net/free-photo/adding-syrup-indi-lemon-grapefruit-cocktail_114579-3121.jpg"},
        {
          id: "p3",          name: "Traditional Menudo",          price: "$15",          variant: "Authentic",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-appetizing-pozole-bowl_23-2149248629.jpg"},
        {
          id: "p4",          name: "Taco de Alambres",          price: "$16",          variant: "Favorite",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-alcohol-cocktail-with-almond-lime-wooden-board_140725-12772.jpg"},
        {
          id: "p5",          name: "Chicken Fajitas",          price: "$17",          variant: "Sizzling",          imageSrc: "http://img.b2bpic.net/free-photo/beef-burrito-with-rice_1147-392.jpg"},
        {
          id: "p6",          name: "Shrimp Cocktail Soup",          price: "$19",          variant: "Fresh",          imageSrc: "http://img.b2bpic.net/free-photo/chicken-curry-black-cup_1150-23797.jpg"},
      ]}
      title="Popular Menu Items"
      description="Hand-selected dishes from our kitchen to your table."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "r1",          title: "Great Experience",          quote: "The service is truly amazing, everyone is kind, welcoming, and attentive.",          name: "Michelle P.",          role: "Regular Customer",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-women-eating-together_23-2149061571.jpg?_wi=2"},
        {
          id: "r2",          title: "Authentic & Tasty",          quote: "Food was delicious and tasty. It’s not salty nor oily like other places.",          name: "Shellie G.",          role: "Foodie",          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-enjoying-dining-table-while-communicating-with-her-husband_637285-3516.jpg?_wi=2"},
        {
          id: "r3",          title: "Consistent Quality",          quote: "We have been coming here for years and always had a great experience.",          name: "Amelia R.",          role: "Local",          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-pizza-side-view_23-2149872410.jpg?_wi=2"},
        {
          id: "r4",          title: "Highly Recommend",          quote: "Excellent dinner place, great flavor and still attended by the owners.",          name: "David K.",          role: "Reviewer",          imageSrc: "http://img.b2bpic.net/free-photo/people-enjoying-mexican-barbecue_23-2151000316.jpg"},
        {
          id: "r5",          title: "Perfect Lunch",          quote: "Found this place near my office, service was fast, atmosphere was neat and clean.",          name: "Sarah J.",          role: "Local Professional",          imageSrc: "http://img.b2bpic.net/free-photo/annoyed-young-female-gardener-uniform-wearing-gardening-hat-holds-broken-pepper_141793-115677.jpg"},
      ]}
      title="What Our Guests Say"
      description="Join the thousands who dine with us frequently."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "Do you offer vegetarian options?",          content: "Yes, we have a variety of delicious vegetarian dishes available."},
        {
          id: "q2",          title: "Do you offer delivery?",          content: "Yes, we offer delivery through our website and popular apps."},
        {
          id: "q3",          title: "Are you family-owned?",          content: "Yes, Casa Flores is proudly family-owned and operated."},
      ]}
      title="Frequently Asked"
      description="Have questions? We have answers."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "100%",          title: "Satisfaction",          description: "Customer first",          icon: Star,
        },
        {
          id: "m2",          value: "873",          title: "Reviews",          description: "Community trusted",          icon: MessageSquare,
        },
        {
          id: "m3",          value: "Daily",          title: "Freshness",          description: "Locally sourced",          icon: Leaf,
        },
      ]}
      title="By The Numbers"
      description="Our commitment to quality service in every bite."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Visit Us"
      title="Ready to dine with us?"
      description="Come visit us at 1032 E Hammer Ln, Stockton, CA. Call (209) 957-5960 for reservations or to place a takeout order."
      buttons={[
        {
          text: "Order Online",          href: "https://order.online"},
        {
          text: "Get Directions",          href: "https://maps.google.com/?q=1032+E+Hammer+Ln+B+Stockton+CA+95210"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Casa Flores"
      columns={[
        {
          title: "Links",          items: [
            {
              label: "Menu",              href: "#menu"},
            {
              label: "About",              href: "#about"},
            {
              label: "Reviews",              href: "#reviews"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Call Us",              href: "tel:2099575960"},
            {
              label: "Directions",              href: "https://maps.google.com/?q=1032+E+Hammer+Ln+B+Stockton+CA+95210"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}