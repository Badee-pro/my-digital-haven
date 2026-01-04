import {Button} from '@/components/ui/button';
import {Mail, MapPin, Linkedin, Github, Instagram} from 'lucide-react';

// X (Twitter) icon component since lucide doesn't have the new X logo
const XIcon = ({className}: {className?: string}) => (
  <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Badee-pro',
      label: 'GitHub',
      handle: '@Badee-pro',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/badee-khalbouss/',
      label: 'LinkedIn',
      handle: '/in/badee-khalbouss',
    },
    {
      icon: XIcon,
      href: 'https://x.com/yourname',
      label: 'X',
      handle: '@yourname',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/badee.tapatio',
      label: 'Instagram',
      handle: '@badee.tapatio',
    },
    {
      icon: Mail,
      href: 'mailto:bkhalbou@uwaterloo.ca',
      label: 'Email',
      handle: 'bkhalbou@uwaterloo.ca',
    },
  ];

  return (
    <section id='contact' className='py-20 bg-background'>
      <div className='container mx-auto px-6 max-w-4xl'>
        {/* Header */}
        <div className='mb-12'>
          <p className='font-retro text-xl text-muted-foreground mb-2'>
            <span className='text-primary'>&gt;</span> cd ~/contact
          </p>
          <h2 className='font-pixel text-2xl md:text-3xl mb-4'>Get In Touch</h2>
          <p className='font-retro text-xl text-muted-foreground'>
            Let's connect and build something cool{' '}
            <span className='animate-blink'>_</span>
          </p>
        </div>

        {/* Contact card */}
        <div className='border-2 border-foreground shadow-retro bg-card'>
          {/* Terminal header */}
          <div className='border-b-2 border-foreground px-4 py-2 flex items-center gap-2'>
            <div className='flex gap-2'>
              <div className='w-3 h-3 border-2 border-foreground' />
              <div className='w-3 h-3 border-2 border-foreground' />
              <div className='w-3 h-3 border-2 border-foreground bg-foreground' />
            </div>
            <span className='font-retro text-lg ml-4'>contact.exe</span>
          </div>

          <div className='p-6 md:p-8 space-y-8'>
            {/* Email section */}
            <div>
              <p className='font-retro text-xl text-muted-foreground mb-4'>
                <span className='text-primary'>&gt;</span> Best way to reach me:
              </p>
              <Button variant='retro' size='lg' asChild>
                <a href='mailto:bkhalbou@uwaterloo.ca' className='gap-3'>
                  <Mail className='w-5 h-5' />
                  bkhalbou@uwaterloo.ca
                </a>
              </Button>
            </div>

            {/* Location */}
            <div className='border-t-2 border-foreground/30 pt-6'>
              <p className='font-retro text-xl text-muted-foreground mb-2'>
                <span className='text-primary'>&gt;</span> Location:
              </p>
              <div className='flex items-center gap-2'>
                <MapPin className='w-5 h-5 text-primary' />
                <span className='font-retro text-xl'>Waterloo, ON, Canada</span>
              </div>
              <p className='font-retro text-lg text-muted-foreground mt-1 ml-7'>
                Open to remote opportunities worldwide
              </p>
            </div>

            {/* Social links */}
            <div className='border-t-2 border-foreground/30 pt-6'>
              <p className='font-retro text-xl text-muted-foreground mb-4'>
                <span className='text-primary'>&gt;</span> Find me online:
              </p>
              <div className='flex gap-4'>
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className='p-3 border-2 border-foreground bg-background hover:bg-secondary transition-colors group'
                  >
                    <social.icon className='w-6 h-6 group-hover:text-primary transition-colors' />
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className='border-t-2 border-foreground/30 pt-6'>
              <p className='font-retro text-xl text-muted-foreground'>
                <span className='text-primary'>&gt;</span> Status:{' '}
                <span className='text-primary'>
                  Open to internship opportunities for Summer 2026
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
