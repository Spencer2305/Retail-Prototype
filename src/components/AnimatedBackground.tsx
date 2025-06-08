import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#c7a7ff', '#7bffdb'];
      
      for (let i = 0; i < 30; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      particlesRef.current = particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Create gradient for particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add connecting lines between nearby particles
        particlesRef.current.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120 && distance > 0) {
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.05 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Large colorful background shapes */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        {/* Large morphing shapes */}
        <div className="absolute top-20 right-20 w-96 h-96 colorful-shape morph-shape opacity-30" 
             style={{background: 'linear-gradient(45deg, #667eea, #764ba2)'}}></div>
        <div className="absolute bottom-32 left-16 w-80 h-80 colorful-shape morph-shape opacity-25" 
             style={{background: 'linear-gradient(45deg, #f093fb, #f5576c)', animationDelay: '-4s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 colorful-shape morph-shape opacity-20 transform -translate-x-1/2 -translate-y-1/2" 
             style={{background: 'linear-gradient(45deg, #4facfe, #00f2fe)', animationDelay: '-8s'}}></div>
        <div className="absolute top-10 left-20 w-72 h-72 colorful-shape morph-shape opacity-15" 
             style={{background: 'linear-gradient(45deg, #c7a7ff, #7bffdb)', animationDelay: '-12s'}}></div>
        <div className="absolute bottom-10 right-32 w-88 h-88 colorful-shape morph-shape opacity-18" 
             style={{background: 'linear-gradient(45deg, #ffd97d, #f093fb)', animationDelay: '-6s'}}></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-40 left-32 w-32 h-32 bg-gradient-to-br from-cosmic-purple/35 to-cosmic-indigo/35 rounded-3xl floating-element transform rotate-12"></div>
        <div className="absolute bottom-40 right-32 w-28 h-28 bg-gradient-to-br from-cosmic-pink/40 to-cosmic-coral/40 rounded-2xl floating-element animate-delay-200"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-cosmic-blue/35 to-cosmic-lavender/35 rounded-full floating-element animate-delay-400"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-cosmic-mint/30 to-cosmic-gold/30 transform rotate-45 floating-element animate-delay-300"></div>
        <div className="absolute top-2/3 right-1/5 w-20 h-20 bg-gradient-to-br from-cosmic-coral/30 to-cosmic-purple/30 rounded-2xl floating-element animate-delay-100"></div>
        <div className="absolute bottom-1/4 left-1/5 w-28 h-28 bg-gradient-to-br from-cosmic-lavender/25 to-cosmic-blue/25 rounded-full floating-element animate-delay-400"></div>
        
        {/* Small accent shapes */}
        <div className="absolute top-60 left-60 w-16 h-16 bg-gradient-to-br from-cosmic-purple/30 to-cosmic-pink/30 rounded-xl floating-element animate-delay-100"></div>
        <div className="absolute bottom-60 right-60 w-20 h-20 bg-gradient-to-br from-cosmic-coral/25 to-cosmic-blue/25 rounded-2xl floating-element animate-delay-500"></div>
        <div className="absolute top-80 right-80 w-12 h-12 bg-gradient-to-br from-cosmic-lavender/35 to-cosmic-mint/35 rounded-full floating-element"></div>
        <div className="absolute bottom-80 left-80 w-14 h-14 bg-gradient-to-br from-cosmic-gold/30 to-cosmic-purple/30 rounded-lg floating-element animate-delay-400"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/3 w-8 h-8 border-2 border-cosmic-purple/20 rounded-sm transform rotate-45 floating-element animate-delay-200"></div>
        <div className="absolute bottom-1/4 right-1/3 w-6 h-6 border-2 border-cosmic-pink/25 rounded-full floating-element animate-delay-300"></div>
        <div className="absolute top-3/4 left-2/3 w-10 h-10 border-2 border-cosmic-blue/20 transform rotate-12 floating-element animate-delay-100"></div>
      </div>
      
      {/* Sparkle effects - more subtle for white background */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              background: `radial-gradient(circle, ${['#667eea', '#f093fb', '#4facfe', '#c7a7ff'][Math.floor(Math.random() * 4)]}40 0%, transparent 70%)`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle gradient overlays */}
      <div className="fixed inset-0 pointer-events-none z-1">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-cosmic-purple/8 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-cosmic-pink/8 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cosmic-blue/8 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-cosmic-mint/8 to-transparent"></div>
      </div>
    </>
  );
};

export default AnimatedBackground; 