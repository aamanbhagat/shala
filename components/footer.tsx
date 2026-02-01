import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github, Disc as Discord, Twitch, Slack, Edit as Reddit, Pointer as Pinterest, Dribbble, SunMedium as Medium, AlignJustify as Spotify, Send as Telegram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Discord, href: "#", label: "Discord" },
    { icon: Twitch, href: "#", label: "Twitch" },
    { icon: Slack, href: "#", label: "Slack" },
    { icon: Reddit, href: "#", label: "Reddit" },
    { icon: Pinterest, href: "#", label: "Pinterest" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Medium, href: "#", label: "Medium" },
    { icon: Spotify, href: "#", label: "Spotify" },
    { icon: Telegram, href: "#", label: "Telegram" }
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="grid grid-cols-5 gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="hover:text-primary transition-colors transform hover:scale-110"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="space-y-2">
              <Input type="email" placeholder="Enter your email" aria-label="Email address for newsletter" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;