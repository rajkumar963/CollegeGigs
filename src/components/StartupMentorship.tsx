
import { ChevronRight, GraduationCap, Users } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const StartupMentorship = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-primary">Startup Mentorship</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receive expert guidance from seasoned entrepreneurs and industry leaders who have successfully navigated the startup landscape. Our mentorship program offers personalized advice and insights to help you overcome challenges and make informed decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-accent" />
                <div>
                  <CardTitle className="text-xl mb-2">1-on-1 Mentorship</CardTitle>
                  <CardDescription>
                    Personalized guidance tailored to your startup's needs
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-accent" />
                  <span>Weekly mentoring sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-accent" />
                  <span>Strategic business planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-accent" />
                  <span>Industry-specific insights</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-accent" />
                <div>
                  <CardTitle className="text-xl mb-2">Group Sessions</CardTitle>
                  <CardDescription>
                    Learn and network with fellow entrepreneurs
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-accent" />
                  <span>Monthly group workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-accent" />
                  <span>Peer learning opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-accent" />
                  <span>Networking events</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-accent hover:bg-accent/90">
            Schedule a Mentorship Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartupMentorship;
