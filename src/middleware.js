import { NextResponse } from "next/server";

export function middleware(req) {
  const redirects = [
    {
      source: "/fullstack/pune/dsa-course-training-pune",
      destination: "/fullstack/dsa-course-training-pune",
      statusCode: 301,
    },
    {
      source: "/fullstack/bangalore/dsa-course-training-bangalore",
      destination: "/fullstack/dsa-course-training-bangalore",
      statusCode: 301,
    },
    {
      source: "/datascience/generative-ai-course-for-manager",
      destination:
        "/artificial-intelligence/generative-ai-course-for-data-science-professionals",
      statusCode: 301,
    },
    {
      source:
        "/cyber-security/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee",
      destination:
        "/executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee",
      statusCode: 301,
    },
    {
      source: "/fullstack/generative-ai-course-for-professional",
      destination:
        "/artificial-intelligence/generative-ai-course-for-fullstack-professionals",
      statusCode: 301,
    },
    {
      source: "/cloud&devops/pune/online-cloud-computing-course-pune",
      destination: "/cloud&devops/online-cloud-computing-course-pune",
      statusCode: 301, // Force 301 Redirect
    },
    {
      source: "/cloud&devops/bangalore/online-devops-training-in-bangalore",
      destination: "/cloud&devops/online-devops-training-in-bangalore",
      statusCode: 301, // Force 301 Redirect
    },
    {
      source: "/cloud&devops/bangalore/online-cloud-computing-course-bangalore",
      destination: "/cloud&devops/online-cloud-computing-course-bangalore",
      statusCode: 301, // Force 301 Redirect
    },
  ];

  const redirect = redirects.find((r) => r.source === req.nextUrl.pathname);
  if (redirect) {
    return NextResponse.redirect(new URL(redirect.destination, req.url), 301);
  }

  return NextResponse.next();
}
