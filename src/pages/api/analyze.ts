// src/pages/api/analyze.ts
import type { APIRoute } from 'astro';
import { 
  detectJSLibraries,
  detectWebServer,
  detectJSFrameworks,
  detectAnalytics,
  detectCMS,
  detectLanguages,
  detectDatabases,
  detectSecurity,
  detectUILibraries,
  detectHosting,
  detectPerformance
} from '../../components/TechnologyDetector';

/*export default async function server(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const targetUrl = url.searchParams.get("url");
  
  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const response = await fetch(targetUrl);
    const text = await response.text();
    const headers = Object.fromEntries(response.headers);

    const technologies = {
      "JavaScript Libraries": await detectJSLibraries(text),
      "Web Servers": detectWebServer(headers),
      "JavaScript Frameworks": detectJSFrameworks(text),
      "Analytics": detectAnalytics(text),
      "CMS": detectCMS(text, headers),
      "Programming Languages": detectLanguages(text, headers),
      "Databases": detectDatabases(text),
      "Security": detectSecurity(headers),
      "UI Libraries": detectUILibraries(text),
      "Hosting & Infrastructure": detectHosting(headers),
      "Performance Tools": detectPerformance(headers, text),
    };

    return new Response(JSON.stringify(technologies), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to analyze website" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};*/

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get("url");
  
  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const response = await fetch(targetUrl);
    const text = await response.text();
    const headers = Object.fromEntries(response.headers);

    const technologies = {
      "JavaScript Libraries": detectJSLibraries(text),
      "Web Servers": detectWebServer(headers),
      "JavaScript Frameworks": detectJSFrameworks(text),
      "Analytics": detectAnalytics(text),
      "CMS": detectCMS(text, headers),
      "Programming Languages": detectLanguages(text, headers),
      "Databases": detectDatabases(text),
      "Security": detectSecurity(headers),
      "UI Libraries": detectUILibraries(text),
      "Hosting & Infrastructure": detectHosting(headers),
      "Performance Tools": detectPerformance(headers, text),
    };

    return new Response(JSON.stringify(technologies), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to analyze website" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

/*
export const GET: APIRoute = async ({ url }) => {
  const targetUrl = url.searchParams.get("url");
  
  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "URL is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const response = await fetch(targetUrl);
    const text = await response.text();
    const headers = Object.fromEntries(response.headers);

    // Importer toutes les fonctions de détection depuis votre composant
    const technologies = {
      "JavaScript Libraries": detectJSLibraries(text),
      "Web Servers": detectWebServer(headers),
      "JavaScript Frameworks": detectJSFrameworks(text),
      "Analytics": detectAnalytics(text),
      "CMS": detectCMS(text, headers),
      "Programming Languages": detectLanguages(text, headers),
      "Databases": detectDatabases(text),
      "Security": detectSecurity(headers),
      "UI Libraries": detectUILibraries(text),
      "Hosting & Infrastructure": detectHosting(headers),
      "Performance Tools": detectPerformance(headers, text),
    };

    return new Response(JSON.stringify(technologies), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error('Error analyzing website:', error);
    return new Response(JSON.stringify({ error: "Failed to analyze website" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};*/