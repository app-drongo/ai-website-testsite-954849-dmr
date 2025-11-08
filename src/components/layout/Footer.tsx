'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

const DEFAULT_FOOTER = {
  logoText: 'TechFlow',
  companyDescription:
    'Building the future of web development with modern tools and beautiful designs. Join thousands of developers and businesses who trust our platform.',
  contactEmail: 'hello@techflow.com',
  contactPhone: '+1 (555) 123-4567',
  contactAddress: '123 Innovation Ave, Suite 100',
  newsletterTitle: 'Stay Updated',
  newsletterPlaceholder: 'Enter your email',
  newsletterDisclaimer: 'Get the latest updates and offers. No spam, unsubscribe anytime.',
  section1Title: 'Product',
  section2Title: 'Company',
  section3Title: 'Resources',
  section4Title: 'Legal',
  copyrightText: '© 2024 TechFlow. All rights reserved.',
  madeWithText: 'by our team',
  socialText: 'Follow us:',
  social1Href: 'https://twitter.com',
  social2Href: 'https://facebook.com',
  social3Href: 'https://instagram.com',
  social4Href: 'https://linkedin.com',
  social5Href: 'https://github.com',
  // Product Links
  linkFeatures: 'Features',
  linkFeaturesHref: '#features',
  linkPricing: 'Pricing',
  linkPricingHref: '#pricing',
  linkTemplates: 'Templates',
  linkTemplatesHref: '/templates',
  linkIntegrations: 'Integrations',
  linkIntegrationsHref: '/integrations',
  linkApi: 'API',
  linkApiHref: '/api',
  linkDocumentation: 'Documentation',
  linkDocumentationHref: '/docs',
  // Company Links
  linkAbout: 'About Us',
  linkAboutHref: '#about',
  linkBlog: 'Blog',
  linkBlogHref: '/blog',
  linkCareers: 'Careers',
  linkCareersHref: '/careers',
  linkPress: 'Press',
  linkPressHref: '/press',
  linkPartners: 'Partners',
  linkPartnersHref: '/partners',
  linkContact: 'Contact',
  linkContactHref: '#contact',
  // Resources Links
  linkHelp: 'Help Center',
  linkHelpHref: '/help',
  linkCommunity: 'Community',
  linkCommunityHref: '/community',
  linkTutorials: 'Tutorials',
  linkTutorialsHref: '/tutorials',
  linkWebinars: 'Webinars',
  linkWebinarsHref: '/webinars',
  linkCaseStudies: 'Case Studies',
  linkCaseStudiesHref: '/case-studies',
  linkStatus: 'Status',
  linkStatusHref: '/status',
  // Legal Links
  linkPrivacy: 'Privacy Policy',
  linkPrivacyHref: '/privacy',
  linkTerms: 'Terms of Service',
  linkTermsHref: '/terms',
  linkCookies: 'Cookie Policy',
  linkCookiesHref: '/cookies',
  linkGdpr: 'GDPR',
  linkGdprHref: '/gdpr',
  linkSecurity: 'Security',
  linkSecurityHref: '/security',
  linkCompliance: 'Compliance',
  linkComplianceHref: '/compliance',
  // Bottom Links
  linkSitemap: 'Sitemap',
  linkSitemapHref: '/sitemap',
  linkAccessibility: 'Accessibility',
  linkAccessibilityHref: '/accessibility',
  linkCookieSettings: 'Cookie Settings',
  linkCookieSettingsHref: '/cookies',
  linkSupport: 'Support',
  linkSupportHref: '/support',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };

  // Simplified footer sections structure
  const footerSections = [
    {
      title: config.section1Title,
      titleKey: 'section1Title',
      links: [
        {
          name: config.linkFeatures,
          href: config.linkFeaturesHref,
          nameKey: 'linkFeatures',
          hrefKey: 'linkFeaturesHref',
        },
        {
          name: config.linkPricing,
          href: config.linkPricingHref,
          nameKey: 'linkPricing',
          hrefKey: 'linkPricingHref',
        },
        {
          name: config.linkTemplates,
          href: config.linkTemplatesHref,
          nameKey: 'linkTemplates',
          hrefKey: 'linkTemplatesHref',
        },
        {
          name: config.linkIntegrations,
          href: config.linkIntegrationsHref,
          nameKey: 'linkIntegrations',
          hrefKey: 'linkIntegrationsHref',
        },
        {
          name: config.linkApi,
          href: config.linkApiHref,
          nameKey: 'linkApi',
          hrefKey: 'linkApiHref',
        },
        {
          name: config.linkDocumentation,
          href: config.linkDocumentationHref,
          nameKey: 'linkDocumentation',
          hrefKey: 'linkDocumentationHref',
        },
      ],
    },
    {
      title: config.section2Title,
      titleKey: 'section2Title',
      links: [
        {
          name: config.linkAbout,
          href: config.linkAboutHref,
          nameKey: 'linkAbout',
          hrefKey: 'linkAboutHref',
        },
        {
          name: config.linkBlog,
          href: config.linkBlogHref,
          nameKey: 'linkBlog',
          hrefKey: 'linkBlogHref',
        },
        {
          name: config.linkCareers,
          href: config.linkCareersHref,
          nameKey: 'linkCareers',
          hrefKey: 'linkCareersHref',
        },
        {
          name: config.linkPress,
          href: config.linkPressHref,
          nameKey: 'linkPress',
          hrefKey: 'linkPressHref',
        },
        {
          name: config.linkPartners,
          href: config.linkPartnersHref,
          nameKey: 'linkPartners',
          hrefKey: 'linkPartnersHref',
        },
        {
          name: config.linkContact,
          href: config.linkContactHref,
          nameKey: 'linkContact',
          hrefKey: 'linkContactHref',
        },
      ],
    },
    {
      title: config.section3Title,
      titleKey: 'section3Title',
      links: [
        {
          name: config.linkHelp,
          href: config.linkHelpHref,
          nameKey: 'linkHelp',
          hrefKey: 'linkHelpHref',
        },
        {
          name: config.linkCommunity,
          href: config.linkCommunityHref,
          nameKey: 'linkCommunity',
          hrefKey: 'linkCommunityHref',
        },
        {
          name: config.linkTutorials,
          href: config.linkTutorialsHref,
          nameKey: 'linkTutorials',
          hrefKey: 'linkTutorialsHref',
        },
        {
          name: config.linkWebinars,
          href: config.linkWebinarsHref,
          nameKey: 'linkWebinars',
          hrefKey: 'linkWebinarsHref',
        },
        {
          name: config.linkCaseStudies,
          href: config.linkCaseStudiesHref,
          nameKey: 'linkCaseStudies',
          hrefKey: 'linkCaseStudiesHref',
        },
        {
          name: config.linkStatus,
          href: config.linkStatusHref,
          nameKey: 'linkStatus',
          hrefKey: 'linkStatusHref',
        },
      ],
    },
    {
      title: config.section4Title,
      titleKey: 'section4Title',
      links: [
        {
          name: config.linkPrivacy,
          href: config.linkPrivacyHref,
          nameKey: 'linkPrivacy',
          hrefKey: 'linkPrivacyHref',
        },
        {
          name: config.linkTerms,
          href: config.linkTermsHref,
          nameKey: 'linkTerms',
          hrefKey: 'linkTermsHref',
        },
        {
          name: config.linkCookies,
          href: config.linkCookiesHref,
          nameKey: 'linkCookies',
          hrefKey: 'linkCookiesHref',
        },
        {
          name: config.linkGdpr,
          href: config.linkGdprHref,
          nameKey: 'linkGdpr',
          hrefKey: 'linkGdprHref',
        },
        {
          name: config.linkSecurity,
          href: config.linkSecurityHref,
          nameKey: 'linkSecurity',
          hrefKey: 'linkSecurityHref',
        },
        {
          name: config.linkCompliance,
          href: config.linkComplianceHref,
          nameKey: 'linkCompliance',
          hrefKey: 'linkComplianceHref',
        },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: config.social1Href, hrefKey: 'social1Href' },
    { name: 'Facebook', icon: Facebook, href: config.social2Href, hrefKey: 'social2Href' },
    { name: 'Instagram', icon: Instagram, href: config.social3Href, hrefKey: 'social3Href' },
    { name: 'LinkedIn', icon: Linkedin, href: config.social4Href, hrefKey: 'social4Href' },
    { name: 'GitHub', icon: Github, href: config.social5Href, hrefKey: 'social5Href' },
  ];

  const bottomLinks = [
    {
      name: config.linkSitemap,
      href: config.linkSitemapHref,
      nameKey: 'linkSitemap',
      hrefKey: 'linkSitemapHref',
    },
    {
      name: config.linkAccessibility,
      href: config.linkAccessibilityHref,
      nameKey: 'linkAccessibility',
      hrefKey: 'linkAccessibilityHref',
    },
    {
      name: config.linkCookieSettings,
      href: config.linkCookieSettingsHref,
      nameKey: 'linkCookieSettings',
      hrefKey: 'linkCookieSettingsHref',
    },
    {
      name: config.linkSupport,
      href: config.linkSupportHref,
      nameKey: 'linkSupport',
      hrefKey: 'linkSupportHref',
    },
  ];

  // Hide footer for hero-only design - return minimal footer
  return (
    <footer id="footer" className="hidden" data-editable="footer">
      {/* Minimal hidden footer to maintain template structure */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-center text-sm text-muted-foreground">
          <span data-editable="copyrightText">{config.copyrightText}</span>
        </div>
      </div>
    </footer>
  );
}
