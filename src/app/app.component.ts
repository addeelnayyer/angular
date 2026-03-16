import { Component } from '@angular/core';
import { NavbarComponent, NavLink } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { LogoCloudComponent } from './components/logo-cloud/logo-cloud.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { Feature } from './components/feature-card/feature-card.component';
import {
  StatsSectionComponent,
  Stat,
} from './components/stats-section/stats-section.component';
import {
  HowItWorksSectionComponent,
  Step,
} from './components/how-it-works-section/how-it-works-section.component';
import {
  PricingSectionComponent,
  PricingPlan,
} from './components/pricing-section/pricing-section.component';
import {
  TestimonialsSectionComponent,
  Testimonial,
} from './components/testimonials-section/testimonials-section.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import {
  FooterComponent,
  FooterLinkGroup,
  SocialLink,
} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    LogoCloudComponent,
    FeaturesSectionComponent,
    StatsSectionComponent,
    HowItWorksSectionComponent,
    PricingSectionComponent,
    TestimonialsSectionComponent,
    CtaSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ── Navbar ──
  navLinks: NavLink[] = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '#' },
  ];

  // ── Logo Cloud ──
  trustedLogos: string[] = [
    'Twitch',
    'YouTube',
    'Discord',
    'Streamlabs',
    'OBS Studio',
    'Elgato',
  ];

  // ── Features ──
  features: Feature[] = [
    {
      icon: '🤖',
      title: 'AI Scene Switching',
      description:
        'Our AI detects context changes — gameplay, facecam, chat — and switches scenes automatically in real time.',
    },
    {
      icon: '🎨',
      title: 'Smart Overlays',
      description:
        'Dynamic overlays that react to your stream events. Alerts, goals, and chat widgets with zero-lag rendering.',
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description:
        'Live dashboards showing viewer engagement, peak moments, chat sentiment, and audience demographics.',
    },
    {
      icon: '🔴',
      title: 'Multi-Platform Streaming',
      description:
        'Go live on Twitch, YouTube, Facebook, and custom RTMP destinations simultaneously with one click.',
    },
    {
      icon: '🎙️',
      title: 'AI Noise Cancellation',
      description:
        'Crystal-clear audio with AI-powered noise removal. Eliminate keyboard clicks, background noise, and echo.',
    },
    {
      icon: '⚡',
      title: 'Ultra-Low Latency',
      description:
        'Sub-second glass-to-glass latency powered by our global edge network of 200+ points of presence.',
    },
  ];

  // ── Stats ──
  stats: Stat[] = [
    { value: '50K', suffix: '+', label: 'Active Streamers' },
    { value: '2.1M', suffix: '', label: 'Hours Streamed Monthly' },
    { value: '99.9', suffix: '%', label: 'Uptime Guarantee' },
    { value: '< 200', suffix: 'ms', label: 'Average Latency' },
  ];

  // ── How It Works ──
  steps: Step[] = [
    {
      stepNumber: '01',
      title: 'Connect Your Accounts',
      description:
        'Link your Twitch, YouTube, or any RTMP destination in under 60 seconds.',
    },
    {
      stepNumber: '02',
      title: 'Design Your Stream',
      description:
        'Choose from 100+ templates or build custom scenes with our drag-and-drop editor.',
    },
    {
      stepNumber: '03',
      title: 'Go Live',
      description:
        'Hit the go-live button and let our AI handle scene switching, overlays, and analytics.',
    },
  ];

  // ── Pricing ──
  pricingPlans: PricingPlan[] = [
    {
      planName: 'Starter',
      price: '$0',
      priceSuffix: '/month',
      description: 'Perfect for getting started with live streaming.',
      features: [
        '720p streaming quality',
        '1 simultaneous destination',
        'Basic overlays & alerts',
        '7-day analytics retention',
        'Community support',
      ],
      ctaLabel: 'Start Free',
    },
    {
      planName: 'Pro',
      price: '$29',
      priceSuffix: '/month',
      description: 'For serious streamers who want professional tools.',
      features: [
        '1080p 60fps streaming',
        '3 simultaneous destinations',
        'AI scene switching',
        'Smart overlays & widgets',
        '90-day analytics retention',
        'Priority support',
      ],
      ctaLabel: 'Start Pro Trial',
      highlighted: true,
      badgeText: 'Most Popular',
    },
    {
      planName: 'Enterprise',
      price: '$99',
      priceSuffix: '/month',
      description: 'For teams and organizations streaming at scale.',
      features: [
        '4K streaming quality',
        'Unlimited destinations',
        'Advanced AI production suite',
        'Custom branding & white-label',
        '1-year analytics retention',
        'Dedicated account manager',
      ],
      ctaLabel: 'Contact Sales',
    },
  ];

  // ── Testimonials ──
  testimonials: Testimonial[] = [
    {
      quote:
        'LiveStreamPro.ai completely transformed my production quality. The AI scene switching alone saved me from hiring a producer. My viewer count tripled in two months.',
      authorName: 'Sarah Chen',
      authorRole: 'Gaming Streamer · 125K Followers',
      rating: 5,
    },
    {
      quote:
        'I switched from OBS + 5 plugins to just LiveStreamPro. The analytics dashboard shows me exactly when viewers drop off so I can improve my content. Game changer.',
      authorName: 'Marcus Rodriguez',
      authorRole: 'Tech Educator · 89K Subscribers',
      rating: 5,
    },
    {
      quote:
        'The multi-platform streaming feature is flawless. I go live on Twitch, YouTube, and Facebook simultaneously with zero extra setup. Worth every penny of the Pro plan.',
      authorName: 'Aisha Patel',
      authorRole: 'Music Producer · 200K Followers',
      rating: 5,
    },
  ];

  // ── Footer ──
  footerLinkGroups: FooterLinkGroup[] = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Integrations', href: '#' },
        { label: 'Changelog', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Community', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ];

  socialLinks: SocialLink[] = [
    { label: 'Twitter', href: '#', icon: 'twitter' },
    { label: 'GitHub', href: '#', icon: 'github' },
    { label: 'YouTube', href: '#', icon: 'youtube' },
    { label: 'Discord', href: '#', icon: 'discord' },
  ];
}
