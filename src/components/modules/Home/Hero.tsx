import { Search, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HeroProps } from "@/types/heroProps";
import { LargeSparkleIcon, SparkleIcon } from "@/assets/icons/SparkleIcon";



export function Hero({
  badge = {
    text: "AI-Powered Healthcare",
  },
  heading = {
    line1: "Find Your Perfect",
    line2: "Doctor with AI",
  },
  description = [
    "Our advanced AI technology analyzes your symptoms, medical",
    "history, and preferences to match you with the best-fit doctors",
    "in seconds.",
  ],
  buttons = {
    primary: {
      text: "Find Your Doctor",
    },
    secondary: {
      text: "Book Appointment",
    },
  },
  stats = [
    { value: "50K+", label: "Patients Served" },
    { value: "1000+", label: "Expert Doctors" },
    {
      value: "4.9",
      label: "Patient Rating",
      icon: <Star className="size-6 fill-yellow-400 stroke-yellow-400" />,
    },
  ],
  formCard = {
    title: "AI Doctor Finder",
    symptomLabel: "What are your symptoms?",
    symptomPlaceholder: "e.g., headache, fever, cough",
    specialtyLabel: "Preferred specialty",
    specialtyOptions: [
      "General Physician",
      "Cardiologist",
      "Dermatologist",
      "Pediatrician",
      "Orthopedic",
    ],
    defaultSpecialty: "General Physician",
    submitText: "Get AI Recommendations",
    footerText:
      "✨ Powered by advanced AI algorithms for accurate doctor matching",
  },
}: HeroProps) {
  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     const data = {
  //       symptoms: formData.get('symptoms') as string,
  //       specialty: formData.get('specialty') as string,
  //     };
  //     formCard.onSubmit?.(data);
  //   };

  return (
    <div className="w-full relative">
      {/* Radial Gradient Background from Bottom */}
      {/* Subtle Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 100%, oklch(0.95 0.05 250) 0%, transparent 100%)",
        }}
      />
      {/* Content Container */}
      <div className="w-full px-4 py-16 md:px-8 lg:px-16 relative">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Hero Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20">
                <SparkleIcon />
                <span className="text-[13px] font-semibold text-primary">
                  {badge.text}
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                  {heading.line1} <br />
                  <span className="text-primary">{heading.line2}</span>
                </h1>
              </div>

              {/* Description */}
              <div className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                <p>{description.join(" ")}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                {buttons.primary && (
                  <Button
                    onClick={buttons.primary.onClick}
                    className="h-14 gap-2 rounded-xl bg-primary px-8 text-base font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                  >
                    <Search className="size-5" />
                    {buttons.primary.text}
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    onClick={buttons.secondary.onClick}
                    variant="outline"
                    className="h-14 gap-2 rounded-xl border-border px-8 text-base font-semibold hover:bg-secondary transition-all"
                  >
                    <Calendar className="size-5" />
                    {buttons.secondary.text}
                  </Button>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      {stat.icon}
                    </div>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[480px] rounded-3xl bg-card p-8 border border-border shadow-2xl shadow-primary/5">
                {/* Card Header */}
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground">{formCard.title}</h2>
                  <LargeSparkleIcon />
                </div>

                {/* Form */}
                <form className="space-y-6">
                  {/* Symptoms Input */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="symptoms"
                      className="text-sm font-semibold text-foreground"
                    >
                      {formCard.symptomLabel}
                    </Label>
                    <div className="relative">
                       <Input
                        id="symptoms"
                        name="symptoms"
                        placeholder={formCard.symptomPlaceholder}
                        className="h-14 rounded-2xl border-border bg-muted/30 focus:bg-background transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="h-14 w-full rounded-2xl bg-primary text-base font-bold shadow-xl shadow-primary/25 hover:bg-primary/90 transition-all"
                  >
                    {formCard.submitText}
                  </Button>
                </form>

                {/* Footer */}
                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-center text-xs font-medium text-muted-foreground leading-relaxed">
                    {formCard.footerText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
