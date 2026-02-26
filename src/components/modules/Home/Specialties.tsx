import { HeartPulse, Brain, Bone, Baby } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

const specialists = [
  {
    name: 'Cardiology',
    icon: HeartPulse,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  {
    name: 'Neurology',
    icon: Brain,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
  },
  {
    name: 'Orthopedic',
    icon: Bone,
    bgColor: 'bg-pink-100',
    iconColor: 'text-pink-500',
  },
  {
    name: 'Pediatric',
    icon: Baby,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-500',
  }
];

const Specialities = () => {
  return (
    <section className="py-24 mt-24 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Our Specialist</h2>
            <p className="text-muted-foreground max-w-md mt-2">
              Access to medical experts across all major specialities.
            </p>
          </div>
          <a href="#" className="text-primary font-semibold hover:underline mt-4 sm:mt-0">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist) => (
            <Card
              key={specialist.name}
              className={cn(
                'group relative overflow-hidden border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer p-0 gap-0',
              )}
            >
              <CardContent className="p-8 text-center">
                 <div
                  className={cn(
                    'w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-6 bg-muted/50 group-hover:bg-primary/10 transition-colors duration-500',
                  )}
                >
                  <specialist.icon
                    className="text-primary group-hover:scale-110 transition-transform duration-500"
                    size={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {specialist.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Explore Experts
                </p>
              </CardContent>
              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
