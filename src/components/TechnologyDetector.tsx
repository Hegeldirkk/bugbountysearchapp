import { useState } from 'react';

interface Vulnerability {
    id: string;
    description: string;
    severity: string;
    score?: number;
    published?: string;
  }
  
interface Technology {
    name: string;
    icon: string;
    versions: string[];
    vulnerabilities?: Vulnerability[];
}

interface DetectedTechnologies {
    [category: string]: Technology[];
}
interface Results {
    [category: string]: Technology[];
}
  // Corriger la signature de la fonction
export async function detectJSLibraries(html: string): Promise<Technology[]> {
    const libraries: Technology[] = [];
  
    // jQuery avec vulnérabilités
    /*const jQueryVersions: string[] = [];
    const jQueryMatches = [
      ...html.matchAll(/jquery[.-]?([\d.]+)/gi),
      ...html.matchAll(/jquery\/([0-9.]+)/gi),
      ...html.matchAll(/jquery v([0-9.]+)/gi)
    ];
    
    jQueryMatches.forEach(match => match[1] && jQueryVersions.push(match[1]));
    
    if (jQueryVersions.length > 0 || html.includes("jquery")) {
      const vulnerabilities: Vulnerability[] = [];
      
      // Récupérer les vulnérabilités pour chaque version
      for (const version of jQueryVersions) {
        const vulns = await fetchVulnerabilities('jquery', version);
        vulnerabilities.push(...vulns);
      }
  
      libraries.push({ 
        name: "jQuery", 
        icon: vulnerabilities.length > 0 ? "⚠️" : "💫",
        versions: jQueryVersions,
        vulnerabilities
      });
    }*/
    
    // jQuery
    const jQueryVersions: string[] = [];
    const jQueryMatches = [
      ...html.matchAll(/jquery[.-]?([\d.]+)/gi),
      ...html.matchAll(/jquery\/([0-9.]+)/gi),
      ...html.matchAll(/jquery v([0-9.]+)/gi)
    ];
    jQueryMatches.forEach(match => match[1] && jQueryVersions.push(match[1]));
    if (jQueryVersions.length > 0 || html.includes("jquery")) {
      libraries.push({ name: "jQuery", icon: "💫", versions: jQueryVersions });
    }
    
    // jQuery UI
    const jQueryUIVersions: string[] = [];
    const jQueryUIMatches = [
      ...html.matchAll(/jquery-ui[.-]?([\d.]+)/gi),
      ...html.matchAll(/jquery-ui\/([0-9.]+)/gi),
      ...html.matchAll(/jquery UI v?([0-9.]+)/gi)
    ];
    jQueryUIMatches.forEach(match => match[1] && jQueryUIVersions.push(match[1]));
    if (jQueryUIVersions.length > 0 || html.includes("jquery-ui")) {
      libraries.push({ name: "jQuery UI", icon: "🎨", versions: jQueryUIVersions });
    }
    
    // jQuery Migrate
    const jQueryMigrateVersions: string[] = [];
    const jQueryMigrateMatches = [
      ...html.matchAll(/jquery[.-]?migrate[.-]?([\d.]+)/gi),
      ...html.matchAll(/jquery migrate v?([0-9.]+)/gi)
    ];
    jQueryMigrateMatches.forEach(match => match[1] && jQueryMigrateVersions.push(match[1]));
    if (jQueryMigrateVersions.length > 0 || html.includes("jquery-migrate")) {
      libraries.push({ name: "jQuery Migrate", icon: "🔄", versions: jQueryMigrateVersions });
    }
    
    // OWL Carousel
    const owlVersions: string[] = [];
    const owlMatches = [
      ...html.matchAll(/owl[.-]?carousel[.-]?([\d.]+)/gi),
      ...html.matchAll(/owl\.carousel\.min\.js\?ver=([\d.]+)/gi)
    ];
    owlMatches.forEach(match => match[1] && owlVersions.push(match[1]));
    if (owlVersions.length > 0 || html.includes("owl-carousel") || html.includes("owlCarousel")) {
      libraries.push({ name: "OWL Carousel", icon: "🦉", versions: owlVersions });
    }
    
    // Slick Carousel
    const slickVersions: string[] = [];
    const slickMatches = [
      ...html.matchAll(/slick[.-]?([\d.]+)/gi),
      ...html.matchAll(/slick\.min\.js\?ver=([\d.]+)/gi)
    ];
    slickMatches.forEach(match => match[1] && slickVersions.push(match[1]));
    if (slickVersions.length > 0 || html.includes("slick-carousel") || html.includes("slick-slider")) {
      libraries.push({ name: "Slick Carousel", icon: "🎠", versions: slickVersions });
    }
    
    // core-js
    const coreJSVersions: string[] = [];
    const coreJSMatches = [
      ...html.matchAll(/core-js@([\d.]+)/gi),
      ...html.matchAll(/core-js\/([\d.]+)/gi),
      ...html.matchAll(/core-js\.min\.js\?ver=([\d.]+)/gi)
    ];
    coreJSMatches.forEach(match => match[1] && coreJSVersions.push(match[1]));
    if (coreJSVersions.length > 0 || html.includes("core-js")) {
      libraries.push({ name: "core-js", icon: "🎯", versions: coreJSVersions });
    }
    
    // Other libraries
    const lodashVersions: string[] = [];
    const lodashMatches = [...html.matchAll(/lodash@([\d.]+)/gi)];
    lodashMatches.forEach(match => match[1] && lodashVersions.push(match[1]));
    if (lodashVersions.length > 0 || html.includes("lodash")) {
      libraries.push({ name: "Lodash", icon: "🔧", versions: lodashVersions });
    }
    
    const momentVersions: string[] = [];
    const momentMatches = [...html.matchAll(/moment@([\d.]+)/gi)];
    momentMatches.forEach(match => match[1] && momentVersions.push(match[1]));
    if (momentVersions.length > 0 || html.includes("moment.js")) {
      libraries.push({ name: "Moment.js", icon: "⏰", versions: momentVersions });
    }
    
    const axiosVersions: string[] = [];
    const axiosMatches = [...html.matchAll(/axios@([\d.]+)/gi)];
    axiosMatches.forEach(match => match[1] && axiosVersions.push(match[1]));
    if (axiosVersions.length > 0 || html.includes("axios")) {
      libraries.push({ name: "Axios", icon: "🔄", versions: axiosVersions });
    }
    
    const socketVersions: string[] = [];
    const socketMatches = [...html.matchAll(/socket.io@([\d.]+)/gi)];
    socketMatches.forEach(match => match[1] && socketVersions.push(match[1]));
    if (socketVersions.length > 0 || html.includes("socket.io")) {
      libraries.push({ name: "Socket.IO", icon: "🔌", versions: socketVersions });
    }
    
    return libraries;
}
  
export function detectWebServer(headers: Record<string, string>) {
    console.log("Detecting web server from headers:", headers);
    const servers = [];
    const serverHeader = headers["server"] || "";
    
    // Nginx
    if (serverHeader.toLowerCase().includes("nginx")) {
      const version = serverHeader.match(/nginx\/([\d.]+)/i)?.[1];
      servers.push({ 
        name: "Nginx", 
        icon: "🟩", 
        versions: version ? [version] : [] 
      });
    }
  
    // Apache
    if (serverHeader.toLowerCase().includes("apache")) {
      const version = serverHeader.match(/apache\/([\d.]+)/i)?.[1];
      servers.push({ 
        name: "Apache", 
        icon: "🔴", 
        versions: version ? [version] : [] 
      });
    }
  
    // Cloudflare
    if (headers["cf-ray"]) {
      servers.push({ 
        name: "Cloudflare", 
        icon: "☁️", 
        versions: [headers["cf-ray"].split("-")[0]] 
      });
    }
  
    return servers;
}
  
export  function detectJSFrameworks(html: string) {
    console.log("Detecting JS frameworks from HTML");
    const frameworks = [];
  
    // React
    if (html.includes("react")) {
      const versions = [];
      const reactMatches = html.match(/react@([\d.]+)/i);
      if (reactMatches) versions.push(reactMatches[1]);
      frameworks.push({ name: "React", icon: "⚛️", versions });
    }
  
    // Vue
    if (html.includes("vue")) {
      const versions = [];
      const vueMatches = html.match(/vue@([\d.]+)/i);
      if (vueMatches) versions.push(vueMatches[1]);
      frameworks.push({ name: "Vue.js", icon: "💚", versions });
    }
  
    // Angular
    if (html.includes("angular")) {
      const versions = [];
      const angularMatches = html.match(/@angular\/core@([\d.]+)/i);
      if (angularMatches) versions.push(angularMatches[1]);
      frameworks.push({ name: "Angular", icon: "🅰️", versions });
    }
  
    return frameworks;
  }
  
export function detectAnalytics(html: string) {
    console.log("Detecting analytics from HTML");
    const analytics = [];
  
    // Google Analytics
    if (html.includes("google-analytics.com")) {
      const versions = [];
      if (html.includes("gtag")) versions.push("GA4");
      if (html.includes("analytics.js")) versions.push("Universal Analytics");
      analytics.push({ name: "Google Analytics", icon: "📊", versions });
    }
  
    // Meta Pixel
    if (html.includes("connect.facebook.net")) {
      analytics.push({ name: "Meta Pixel", icon: "📘", versions: [] });
    }
  
    return analytics;
  }
  
export function detectCMS(html: string, headers: Record<string, string>) {
    console.log("Detecting CMS from HTML and headers");
    const cms = [];
  
    // WordPress
    if (html.includes("wp-content")) {
      const versions = [];
      const wpMatch = html.match(/wp-includes\/js\/jquery\/jquery\.js\?ver=([\d.]+)/i);
      if (wpMatch) versions.push(wpMatch[1]);
      cms.push({ name: "WordPress", icon: "📝", versions });
    }
  
    // Drupal
    if (headers["x-drupal-cache"] || html.includes("drupal")) {
      const versions = [];
      const drupalMatch = headers["x-generator"]?.match(/Drupal ([\d.]+)/i);
      if (drupalMatch) versions.push(drupalMatch[1]);
      cms.push({ name: "Drupal", icon: "💧", versions });
    }
  
    // Shopify
    if (html.includes("shopify")) {
      cms.push({ name: "Shopify", icon: "🛍️", versions: [] });
    }
  
    return cms;
  }
  
export function detectLanguages(headers: Record<string, string>) {
    console.log("Detecting programming languages from headers:", headers);
    const languages = [];
    const poweredBy = headers["x-powered-by"] || "";
  
    // PHP
    if (poweredBy.includes("PHP")) {
      const version = poweredBy.match(/PHP\/([\d.]+)/)?.[1];
      languages.push({ 
        name: "PHP", 
        icon: "🐘", 
        versions: version ? [version] : [] 
      });
    }
  
    // Python
    if (headers["server"]?.includes("Python")) {
      const version = headers["server"].match(/Python\/([\d.]+)/)?.[1];
      languages.push({ 
        name: "Python", 
        icon: "🐍", 
        versions: version ? [version] : [] 
      });
    }
  
    return languages;
  }
  
export function detectDatabases(html: string) {
    console.log("Detecting databases from HTML");
    const databases = [];
  
    if (html.includes("mysql")) {
      databases.push({ name: "MySQL", icon: "🐬", versions: [] });
    }
  
    if (html.includes("postgresql")) {
      databases.push({ name: "PostgreSQL", icon: "🐘", versions: [] });
    }
  
    return databases;
  }
  
export function detectSecurity(headers: Record<string, string>) {
    console.log("Detecting security features from headers:", headers);
    const security = [];
  
    if (headers["strict-transport-security"]) {
      security.push({ name: "HSTS", icon: "🔒", versions: [] });
    }
  
    if (headers["content-security-policy"]) {
      security.push({ name: "CSP", icon: "🛡️", versions: [] });
    }
  
    return security;
  }
  
export function detectUILibraries(html: string) {
    console.log("Detecting UI libraries from HTML");
    const libraries = [];
  
    // Bootstrap
    if (html.includes("bootstrap")) {
      const version = html.match(/bootstrap@([\d.]+)/i)?.[1];
      libraries.push({ 
        name: "Bootstrap", 
        icon: "🅱️", 
        versions: version ? [version] : [] 
      });
    }
  
    // Tailwind
    if (html.includes("tailwind")) {
      const version = html.match(/tailwindcss@([\d.]+)/i)?.[1];
      libraries.push({ 
        name: "Tailwind CSS", 
        icon: "🌊", 
        versions: version ? [version] : [] 
      });
    }
  
    return libraries;
  }
  
export function detectHosting(headers: Record<string, string>) {
    console.log("Detecting hosting from headers:", headers);
    const hosting = [];
  
    if (headers["server"]?.includes("GitHub.com")) {
      hosting.push({ name: "GitHub Pages", icon: "🐱", versions: [] });
    }
  
    if (headers["x-vercel-id"]) {
      hosting.push({ name: "Vercel", icon: "▲", versions: [] });
    }
  
    return hosting;
  }
  
export function detectPerformance(headers: Record<string, string>) {
    console.log("Detecting performance features from headers:", headers);
    const performance = [];
  
    if (headers["content-encoding"]) {
      performance.push({ 
        name: "Compression", 
        icon: "🗜️", 
        versions: [headers["content-encoding"]] 
      });
    }
  
    if (headers["cache-control"]) {
      performance.push({ 
        name: "Cache Control", 
        icon: "📦", 
        versions: [headers["cache-control"]] 
      });
    }
  
    return performance;
  }

/*async function fetchVulnerabilities(component: string, version: string): Promise<Vulnerability[]> {
    const vulnerabilities: Vulnerability[] = [];
    
    try {
      // Vérifier NVD
      const nvdResponse = await fetch(
        `https://services.nvd.nist.gov/rest/json/cves/1.0?keyword=${component}%20${version}`
      );
      const nvdData = await nvdResponse.json();
      
      if (nvdData.result?.CVE_Items) {
        for (const item of nvdData.result.CVE_Items) {
          vulnerabilities.push({
            id: item.cve.CVE_data_meta.ID,
            description: item.cve.description.description_data[0].value,
            severity: item.impact?.baseMetricV3?.cvssV3?.baseSeverity || 'UNKNOWN',
            score: item.impact?.baseMetricV3?.cvssV3?.baseScore,
            published: item.publishedDate
          });
        }
      }
  
      // Vérifier CVE Circl
      const circlResponse = await fetch(
        `https://cve.circl.lu/api/search/${component}/${version}`
      );
      const circlData = await circlResponse.json();
      
      if (Array.isArray(circlData)) {
        for (const item of circlData) {
          if (!vulnerabilities.some(v => v.id === item.id)) {
            vulnerabilities.push({
              id: item.id,
              description: item.summary,
              severity: getSeverityFromCVSS(item.cvss),
              score: item.cvss,
              published: item.Published
            });
          }
        }
      }
    } catch (error) {
      console.error('Error fetching vulnerabilities:', error);
    }
  
    return vulnerabilities;
  }
  
function getSeverityFromCVSS(score: number): string {
    if (score >= 9.0) return 'CRITICAL';
    if (score >= 7.0) return 'HIGH';
    if (score >= 4.0) return 'MEDIUM';
    return 'LOW';
  }*/

export default function TechnologyDetector() {
    const [url, setUrl] = useState<string>("");
    const [results, setResults] = useState<DetectedTechnologies | null>(null);
    //const [resultas, setResultas] = useState<Results | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
  
    const analyzeWebsite = async () => {
        setLoading(true);
        try {
          // Ajoutez /api/ au chemin
          const response = await fetch(`/api/analyze?url=${encodeURIComponent(url)}`);
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error("Error analyzing website:", error);
        }
        setLoading(false);
    };
  
    return (
        <div className="container">
        <h1>🔍 Website Technology Analyzer</h1>
        <div className="input-group">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., https://example.com)"
            className="url-input"
          />
          <button onClick={analyzeWebsite} disabled={loading || !url}>
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>
  
        {results && (
          <div className="results">
            <h2>Technologies Detected:</h2>
            <div className="tech-grid">
              {Object.entries(results).map(([category, items]: [string, Technology[]]) => (
                <div key={category} className="tech-category">
                  <h3>{category}</h3>
                  <ul>
                    {Array.isArray(items) && items.length > 0 ? (
                      items.map((item: Technology, index: number) => (
                        <li key={index}>
                          {item.icon} {item.name} 
                          {item.versions && item.versions.length > 0 && (
                            <div className="versions">
                              {item.versions.map((v: string, i: number) => (
                                <span key={i} className="version">
                                  {v}
                                  {item.vulnerabilities && item.vulnerabilities.length > 0 && (
                                    <span className="vulnerability-indicator">⚠️</span>
                                  )}
                                </span>
                              ))}
                            </div>
                          )}
                          {item.vulnerabilities && item.vulnerabilities.length > 0 && (
                            <div className="vulnerabilities">
                              <h4>Vulnerabilities Found:</h4>
                              {item.vulnerabilities.map((vuln: Vulnerability, i: number) => (
                                <div key={i} className={`vulnerability-item ${vuln.severity.toLowerCase()}`}>
                                  <div className="vuln-header">
                                    <span className="vuln-id">{vuln.id}</span>
                                    <span className={`severity ${vuln.severity.toLowerCase()}`}>
                                      {vuln.severity}
                                      {vuln.score && ` (${vuln.score})`}
                                    </span>
                                  </div>
                                  <p className="vuln-description">{vuln.description}</p>
                                  {vuln.published && (
                                    <span className="vuln-date">
                                      Published: {new Date(vuln.published).toLocaleDateString()}
                                    </span>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </li>
                      ))
                    ) : (
                      <li>No technologies detected</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
        <footer>
          <p>
            View source on <a href={import.meta.url.replace("esm.town", "val.town")}>Val Town</a>
          </p>
        </footer>
      </div>
    );
}