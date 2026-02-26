import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import cardioDoc from '../../../assets/images/doctor-cardiologist.jpg';
import neurolDoc from '../../../assets/images/doctor-neurologist.jpg';
import orthoDoc from '../../../assets/images/doctor-orthopedic.jpg';

const doctors = [
  {
    name: 'Dr. Cameron Williamson',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 23,
    image: cardioDoc,
  },
  {
    name: 'Dr. Leslie Alexander',
    specialty: 'Neurologist',
    rating: 4.8,
    reviews: 45,
    image: neurolDoc,       
  },
  {
    name: 'Dr. Robert Fox',
    specialty: 'Orthopedic',
    rating: 4.9,
    reviews: 32,
    image: orthoDoc,
  },
];

const DoctorCard = ({ doctor }: { doctor: typeof doctors[0] }) => {
    return (
        <Card className="group overflow-hidden border-border bg-card hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 p-0 gap-0">
            <CardHeader className="relative items-center p-0 h-64 overflow-hidden">
                <Image 
                    src={doctor.image} 
                    alt={doctor.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} />
                    <span className="text-xs font-bold text-foreground">{doctor.rating}</span>
                </div>
            </CardHeader>
            <CardContent className="p-8">
                <p className="text-primary text-sm font-bold tracking-wider uppercase mb-2">{doctor.specialty}</p>
                <CardTitle className="text-xl font-bold text-foreground mb-3">{doctor.name}</CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-2">
                    Expert medical professional dedicated to providing top-notch healthcare services in {doctor.specialty}.
                </p>
            </CardContent>
             <CardFooter className="grid grid-cols-2 gap-4 p-8 pt-0">
                <Button variant="outline" className="rounded-xl font-semibold border-border hover:bg-muted transition-all">Profile</Button>
                <Button className="rounded-xl font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">Book Now</Button>
            </CardFooter>
        </Card>
    )
}

const TopRatedDoctors = () => {
  return (
    <section className="py-32 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">Our Top Rated Doctors</h2>
            <p className="text-lg text-muted-foreground mt-4">
              World-class medical experts ready to provide personalized healthcare solutions.
            </p>
          </div>
          <Button size="lg" className="rounded-xl font-bold bg-primary mb-2">View All Doctors</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map(doctor => <DoctorCard key={doctor.name} doctor={doctor} />)}
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
